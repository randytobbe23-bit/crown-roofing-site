import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.CROWN_GHL_API_KEY!;
const LOCATION_ID = process.env.CROWN_GHL_LOCATION_ID!;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, address, service, message, source } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 });
    }

    const [firstName, ...rest] = name.trim().split(' ');
    const lastName = rest.join(' ') || '';

    // Build contact payload
    const contactPayload: Record<string, unknown> = {
      locationId: LOCATION_ID,
      firstName,
      lastName: lastName || undefined,
      phone,
      source: source || 'website',
      tags: [service || 'general', 'website-lead'].filter(Boolean),
    };

    if (email) contactPayload.email = email;
    if (address) contactPayload.address1 = address;

    // Create contact in GHL
    const contactRes = await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
        Version: '2021-07-28',
      },
      body: JSON.stringify(contactPayload),
    });

    const contactData = await contactRes.json();

    if (!contactRes.ok) {
      console.error('GHL contact creation failed:', JSON.stringify(contactData));
      return NextResponse.json({ error: 'Failed to create contact', detail: contactData }, { status: 500 });
    }

    const contactId = contactData.contact?.id;

    // Send internal notification via GHL note (visible to all users on the contact)
    if (contactId) {
      const noteBody = [
        `🔔 NEW WEBSITE LEAD`,
        `Name: ${name}`,
        `Phone: ${phone}`,
        email ? `Email: ${email}` : null,
        address ? `Address: ${address}` : null,
        service ? `Service: ${service}` : null,
        message ? `Message: ${message}` : null,
        `Source: ${source || 'website'}`,
        `---`,
        `Submitted from crownroofing.pro — respond within 5 minutes!`,
      ].filter(Boolean).join('\n');

      // Create note on the contact
      await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}/notes`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
          Version: '2021-07-28',
        },
        body: JSON.stringify({ body: noteBody }),
      }).catch((err) => console.error('Note creation failed:', err));

      // Create a task assigned to all users to follow up
      await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}/tasks`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
          Version: '2021-07-28',
        },
        body: JSON.stringify({
          title: `Follow up with ${name} — Website Lead`,
          body: `New lead from website (${source || 'homepage'}). Service: ${service || 'general'}. Respond within 5 minutes.`,
          dueDate: new Date(Date.now() + 5 * 60 * 1000).toISOString(),
          completed: false,
        }),
      }).catch((err) => console.error('Task creation failed:', err));
    }

    return NextResponse.json({ success: true, contactId });
  } catch (err) {
    console.error('Lead API error:', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}

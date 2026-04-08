'use client';

import { useState } from 'react';

export function LeadForm({ source = 'homepage' }: { source?: string }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      address: (form.elements.namedItem('address') as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      source,
    };

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-3">✓</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700">We&apos;ll contact you within 5 minutes to schedule your free inspection.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="name"
          type="text"
          placeholder="Your Name *"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-crown-red focus:border-transparent"
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone Number *"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-crown-red focus:border-transparent"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-crown-red focus:border-transparent"
        />
        <input
          name="address"
          type="text"
          placeholder="Property Address"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-crown-red focus:border-transparent"
        />
      </div>
      <select
        name="service"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-crown-red focus:border-transparent"
      >
        <option value="">Select a Service</option>
        <option value="roofing">Roofing</option>
        <option value="roof-replacement">Roof Replacement</option>
        <option value="gutters">Gutters</option>
        <option value="siding">Siding</option>
        <option value="inspection">Free Roof Inspection</option>
        <option value="insurance">Insurance Claim Help</option>
      </select>
      <textarea
        name="message"
        placeholder="Tell us about your project (optional)"
        rows={3}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-crown-red focus:border-transparent resize-none"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-crown-red hover:bg-crown-red-dark text-white py-4 rounded-lg font-bold text-base transition-colors disabled:opacity-50"
      >
        {status === 'loading' ? 'Sending...' : 'Get My Free Estimate'}
      </button>
      {status === 'error' && (
        <p className="text-red-600 text-sm text-center">Something went wrong. Please call us at (734) 561-4098.</p>
      )}
      <p className="text-xs text-gray-500 text-center">
        No obligation. We respond within 5 minutes during business hours.
      </p>
    </form>
  );
}

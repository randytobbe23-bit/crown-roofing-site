import { SERVICES, CITIES } from './constants';

type City = (typeof CITIES)[number];
type Service = (typeof SERVICES)[number];

export function getCityServiceContent(city: City, service: Service) {
  const cityName = city.name;
  const stateFull = 'Michigan';
  const sName = service.name;
  const sTitle = service.title;

  const contents: Record<string, Record<string, { intro: string; body: string[] }>> = {
    roofing: {
      'brighton-mi': {
        intro: `Looking for a trusted roofing company in Brighton, MI? Crown Roofing LLC provides complete residential roofing services to Brighton homeowners, from inspections and repairs to full roof installations. Our licensed and insured team knows Livingston County homes inside and out.`,
        body: [
          `Brighton, Michigan is home to thousands of residential properties, many with roofs that are 15 to 25 years old. If your Brighton home was built before 2010, there's a good chance your roof is approaching the end of its lifespan. Michigan's harsh winters, ice dams, heavy snowfall, and summer storms all take a toll on roofing materials — even high-quality architectural shingles typically last only 20 to 30 years in our climate.`,
          `Crown Roofing serves all of Brighton including neighborhoods near Brighton Lake, the Woodland Lake area, downtown Brighton, and surrounding subdivisions. We're familiar with the common roofing styles in the area, local building codes, and the specific weather challenges that Brighton homes face throughout the year.`,
          `Our roofing process starts with a free drone inspection. We fly our professional drone over your roof to capture high-resolution photos of every angle — identifying damage, wear, missing shingles, and potential problem areas without ever setting foot on your roof. You'll receive a detailed report with photos the same day.`,
          `If your roof needs attention, we provide a transparent, no-pressure estimate. We work directly with your homeowner's insurance company to maximize your coverage. Many Brighton homeowners are surprised to learn that their insurance covers most or all of the cost of a new roof when storm or weather damage is documented.`,
          `We use only premium materials from manufacturers like GAF, Owens Corning, and CertainTeed. Every installation is backed by both manufacturer warranties and our own craftsmanship guarantee. Our crews are trained professionals — not subcontractors — who treat your property with respect.`,
        ],
      },
      'hamburg-mi': {
        intro: `Hamburg Township homeowners trust Crown Roofing LLC for professional roofing services. Whether you need a roof inspection, repair, or full replacement, our licensed team delivers quality work at fair prices. We serve all of Hamburg and the surrounding lake communities.`,
        body: [
          `Hamburg Township is known for its beautiful lakefront properties along the Huron River chain of lakes, including Strawberry Lake, Gallagher Lake, and Zukey Lake. These waterfront homes require special attention when it comes to roofing — higher humidity, wind exposure from open water, and the added challenge of protecting valuable lakefront investments.`,
          `Crown Roofing has extensive experience working on Hamburg area homes, from modest ranch-style houses to large lakefront estates. We understand the unique roofing challenges that come with living near water, including increased moisture exposure, wind-driven rain, and the algae growth that can affect shingle longevity in humid environments.`,
          `Our free drone inspection service is especially valuable for Hamburg homeowners with steep-pitch roofs or multi-story lakefront homes. We can safely assess your roof condition without ladders or walking on your shingles, providing you with detailed aerial photographs and a professional assessment at zero cost.`,
          `Many Hamburg homes were built during the building booms of the 1990s and early 2000s, putting thousands of roofs in the 20 to 30 year age range. If your Hamburg home's roof is showing signs of age — curling shingles, granule loss, dark streaks, or visible wear — it's time for a professional inspection.`,
          `We handle the entire process from inspection to installation, including insurance claim assistance. Our team works with all major insurance carriers and has a proven track record of helping Hamburg homeowners get their roof replacements covered through legitimate insurance claims.`,
        ],
      },
      'howell-mi': {
        intro: `Crown Roofing LLC is Howell's trusted choice for residential roofing. As the county seat of Livingston County, Howell has a diverse mix of historic and modern homes that all need reliable roofing protection. We offer free inspections, insurance claim help, and premium installations.`,
        body: [
          `Howell, Michigan sits at the heart of Livingston County and has experienced tremendous growth over the past two decades. From the historic homes near downtown Howell and the Grand River corridor to newer subdivisions like Burkhart Ridge, Marion Oaks, and Oceola Township developments, the variety of roofing needs across Howell is significant.`,
          `Michigan's climate is particularly demanding on roofs in the Howell area. With average annual snowfall exceeding 40 inches, frequent freeze-thaw cycles, and summer thunderstorms that can produce damaging hail, Howell homeowners need roofing solutions that can withstand everything Mother Nature throws at them.`,
          `Crown Roofing's free drone inspection technology allows us to quickly and safely assess your Howell home's roof condition. Our professional-grade drones capture high-resolution imagery that reveals damage invisible from the ground — cracked flashing, deteriorating ridge caps, compromised valleys, and hidden storm damage that could lead to leaks if left unaddressed.`,
          `For Howell homeowners dealing with storm damage, Crown Roofing has the expertise to navigate the insurance claim process. We document all damage thoroughly, work directly with your insurance adjuster, and ensure your claim includes every legitimate repair. Our goal is to make the process hassle-free while maximizing your coverage.`,
          `Every Crown Roofing installation in Howell meets or exceeds local building codes and manufacturer specifications. We install premium architectural shingles that provide superior wind resistance, algae protection, and a 25 to 50 year lifespan depending on the product line.`,
        ],
      },
      'pinckney-mi': {
        intro: `Crown Roofing LLC is proud to be based right here in Pinckney, MI. As your hometown roofing company, we know Pinckney's homes, weather patterns, and building codes better than anyone. We offer free roof inspections, insurance claim assistance, and premium roof installations to our neighbors.`,
        body: [
          `Pinckney is Crown Roofing's home base, and we take special pride in serving our community. Located in the heart of Livingston County with easy access to the Pinckney Recreation Area and the chain of lakes, Pinckney is a community of homeowners who care about their properties and value quality workmanship.`,
          `Many homes in Pinckney were built during the 1970s through 2000s expansion of Livingston County. If your Pinckney home is 15 years old or more, your roof may be approaching the end of its effective lifespan. Michigan weather — including heavy snow loads, ice damming, wind-driven rain, and summer hail — accelerates roof aging significantly compared to more temperate climates.`,
          `As a Pinckney-based company, Crown Roofing offers unmatched convenience and response time for local homeowners. When you call us, you're calling your neighbors. We can have a team on-site for emergency tarping within hours, and our standard inspection appointments are typically available within 24 to 48 hours.`,
          `Our free drone inspection provides Pinckney homeowners with a comprehensive view of their roof's condition without anyone needing to climb up. The detailed photo report we deliver shows every area of concern and helps you make an informed decision about repairs or replacement — with zero pressure from us.`,
          `We work with every major insurance carrier and have helped hundreds of Livingston County homeowners navigate the claims process successfully. Many Pinckney homeowners don't realize that weather-related roof damage is almost always covered by homeowner's insurance. Our team handles the paperwork, meets with adjusters, and advocates for your maximum benefit.`,
        ],
      },
    },
  };

  // Generate content for other services programmatically
  function generateContent(cityData: City, serviceData: Service): { intro: string; body: string[] } {
    if (serviceData.slug === 'roof-replacement') {
      return {
        intro: `Need a roof replacement in ${cityName}, ${stateFull}? Crown Roofing LLC specializes in complete tear-off and roof replacement for ${cityName} homes. We use premium architectural shingles, handle insurance claims, and guarantee our workmanship. Free estimates for all ${cityName} homeowners.`,
        body: [
          `A roof replacement is one of the most important investments you can make in your ${cityName} home. When your roof reaches the end of its lifespan — typically 20 to 30 years for asphalt shingles in Michigan — a full replacement protects your home's structure, improves energy efficiency, and can significantly increase your property value.`,
          `Crown Roofing's roof replacement process begins with a thorough free drone inspection of your existing roof. We document the current condition, identify all areas of damage or deterioration, and provide you with a detailed assessment. If replacement is recommended, we'll walk you through material options, timeline, and pricing with complete transparency.`,
          `For ${cityName} homeowners, we exclusively install premium architectural shingles from leading manufacturers including GAF Timberline, Owens Corning Duration, and CertainTeed Landmark. These high-performance shingles offer superior wind resistance rated to 130 MPH, enhanced algae protection critical for Michigan's humid summers, and Class A fire resistance.`,
          `The insurance claim process doesn't have to be stressful. Crown Roofing has helped hundreds of ${city.county} homeowners get their roof replacements covered by insurance. We thoroughly document storm and weather damage, prepare professional reports for your insurance adjuster, and advocate for your maximum benefit throughout the claims process.`,
          `Our ${cityName} roof replacement typically takes just 1 to 3 days depending on the size and complexity of your home. We handle everything — tear-off of old materials, inspection and repair of the underlying decking, installation of ice and water shield in critical areas, new drip edge and flashing, and meticulous cleanup. Your property will look better than when we arrived.`,
          `Every roof replacement by Crown Roofing in ${cityName} includes a comprehensive warranty package: manufacturer warranty on materials (25 to 50 years depending on product line) plus our own craftsmanship warranty. We stand behind every nail, every shingle, and every seal.`,
        ],
      };
    }

    if (serviceData.slug === 'gutters') {
      return {
        intro: `Professional gutter installation and repair in ${cityName}, MI. Crown Roofing LLC installs seamless gutters, gutter guards, and downspout systems that protect your ${cityName} home from water damage. Free estimates and fast installation.`,
        body: [
          `Properly functioning gutters are essential for protecting your ${cityName} home from water damage. Michigan's climate delivers significant rainfall, snowmelt, and ice — all of which need to be channeled safely away from your foundation, siding, and landscaping. Damaged, clogged, or improperly sized gutters can lead to thousands of dollars in water damage.`,
          `Crown Roofing installs custom-fabricated seamless aluminum gutters for ${cityName} homes. Unlike sectional gutters with joints every 10 feet, our seamless gutters are formed on-site from continuous coils of aluminum, resulting in a leak-free system custom-fitted to your home's exact measurements.`,
          `We offer gutter guard systems that virtually eliminate the need for gutter cleaning — a major benefit for ${cityName} homeowners dealing with heavy fall leaf drop from Michigan's hardwood trees. Our gutter guards keep debris out while allowing water to flow freely, protecting your home year-round with minimal maintenance.`,
          `Signs that your ${cityName} home needs gutter attention include: water overflowing during rain, visible sagging or pulling away from the fascia, rust spots or holes, peeling paint near the gutters, water staining on siding, and pooling water near your foundation. If you notice any of these issues, contact Crown Roofing for a free assessment.`,
          `Our gutter installation in ${cityName} includes proper sizing calculation based on your roof area and pitch, strategic downspout placement for optimal drainage, and secure mounting that withstands Michigan's ice and snow loads. We also offer gutter color matching to complement your home's exterior.`,
        ],
      };
    }

    // Siding
    return {
      intro: `Transform your ${cityName}, MI home with professional siding installation from Crown Roofing LLC. We install vinyl, fiber cement, and engineered wood siding that boosts curb appeal, improves insulation, and protects against Michigan weather. Free estimates for ${cityName} homeowners.`,
      body: [
        `New siding can completely transform your ${cityName} home's appearance while providing critical protection against Michigan's demanding weather. From harsh winters with ice and snow to hot, humid summers, your home's siding is the first line of defense. Crown Roofing offers professional siding installation using premium materials from top manufacturers.`,
        `We install three main types of siding for ${cityName} homeowners: premium vinyl siding for excellent value and low maintenance, fiber cement siding (like James Hardie) for superior durability and fire resistance, and engineered wood siding for a natural aesthetic with modern performance. Each option has distinct advantages, and our team will help you choose the best fit for your home and budget.`,
        `Old or damaged siding doesn't just hurt your ${cityName} home's curb appeal — it can lead to moisture intrusion, mold growth, pest entry, and energy loss. Signs you may need new siding include: warping or buckling, visible cracks or holes, fading color, loose or missing pieces, high energy bills, and mold or mildew on interior walls.`,
        `Crown Roofing's siding installation in ${cityName} includes complete removal of old materials, inspection and repair of underlying sheathing, installation of moisture barrier and proper flashing, precise fitting and finishing of new siding, and thorough cleanup. We pay attention to every detail including trim, corners, windows, and doors.`,
        `Our siding comes with manufacturer warranties ranging from 25 years to lifetime depending on the material, plus our own installation warranty. We use only materials rated for Michigan's climate zone, ensuring your investment performs for decades. Financing options are available for ${cityName} homeowners who want to upgrade now and pay over time.`,
      ],
    };
  }

  // Check for hand-written content first, otherwise generate
  const handWritten = contents[service.slug]?.[city.slug];
  if (handWritten) return handWritten;

  return generateContent(city, service);
}

export function generateAllCityServicePairs() {
  const pairs: { city: City; service: Service }[] = [];
  for (const city of CITIES) {
    for (const service of SERVICES) {
      pairs.push({ city, service });
    }
  }
  return pairs;
}

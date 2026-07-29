// Brickly Indian Market Comprehensive Mock Dataset

export const PROPERTIES = [
  {
    id: 'prop-in-101',
    title: 'Sea Face Duplex Penthouse, Worli',
    tagline: 'Unobstructed views of the Arabian Sea and Sea Link — South Mumbai living at its finest',
    price: 87500000, // ₹8.75 Cr
    displayPrice: '₹8.75 Cr',
    pricePerSqft: 19444,
    purpose: 'buy', // 'buy', 'rent', 'pg'
    rentPeriod: null,
    location: 'Worli Sea Face, Mumbai, Maharashtra',
    neighborhood: 'Worli',
    coordinates: { lat: 19.0176, lng: 72.8172 },
    type: 'Penthouse',
    bhk: '4BHK',
    bedrooms: 4,
    bathrooms: 5,
    sqft: 4500,
    yearBuilt: 2024,
    garage: 3,
    hoaMonthly: 22000, // ₹22k/mo
    isVerified: true,
    reraNo: 'P51900002891', // Official Maharashtra RERA ID
    isFeatured: true,
    isHotDeal: true,
    festiveOffer: '🪔 Diwali concession: Developer paying full Stamp Duty & Registration at closing',
    vastuCompliant: true,
    vastuFacing: 'East Facing Entrance (Vastu Verified)',
    furnishing: 'Fully Furnished', // 'Fully Furnished', 'Semi-Furnished', 'Unfurnished'
    roiScore: 9.7,
    estimatedRentalYield: 6.8, // %
    fiveYearAppreciation: '+46%',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    panoramic360: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80',
    amenities: [
      '100% Vastu Compliant (East Entrance)',
      '24/7 Silent DG Power Backup',
      'Municipal & Borewell Water Connection',
      'Covered Podia Parking (3 Slots)',
      '3-Tier Biometric & Gated Security',
      'Private Terrace Plunge Pool',
      'Private Elevator Landing'
    ],
    nearbyEssentials: {
      metro: 'Worli Metro Station (0.4 km)',
      itPark: 'BKC Business District (12 mins via Sea Link)',
      school: 'Dhirubhai Ambani International School (15 mins)',
      hospital: 'Lilavati & Hinduja Hospital (10 mins)',
      mall: 'Palladium & High Street Phoenix (5 mins)'
    },
    neighborhoodScores: {
      safety: 99,
      schools: 96,
      transit: 95,
      walkability: 92,
      dining: 99,
      overall: 96
    },
    agent: {
      name: 'Rajesh Sharma',
      role: 'Senior Advisor - Mumbai & South MH',
      phone: '+91 98200 44110',
      email: 'rajesh@brickly.in',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
      rating: 4.96,
      salesCount: 168
    },
    description: 'Living here means waking up to panoramic sea views every day. Spread across two upper floors, this penthouse features Italian Statuario marble flooring, a private plunge pool on the deck, and direct elevator access. It\'s just 10 minutes from BKC via the Sea Link and close to Lilavati Hospital. Ideal for families looking for a trophy address in Mumbai without compromise.'
  },
  {
    id: 'prop-in-102',
    title: '4BHK Independent Gated Villa, Jubilee Hills',
    tagline: 'Quiet leafy lane on Road No. 36, private garden, and just 10 mins to HITEC City',
    price: 54000000, // ₹5.40 Cr
    displayPrice: '₹5.40 Cr',
    pricePerSqft: 10384,
    purpose: 'buy',
    rentPeriod: null,
    location: 'Jubilee Hills Road No. 36, Hyderabad, Telangana',
    neighborhood: 'Jubilee Hills',
    coordinates: { lat: 17.4319, lng: 78.4073 },
    type: 'Villa',
    bhk: '4BHK',
    bedrooms: 4,
    bathrooms: 4.5,
    sqft: 5200,
    yearBuilt: 2023,
    garage: 2,
    hoaMonthly: 12000, // ₹12k/mo
    isVerified: true,
    reraNo: 'P02400003892', // TS-RERA ID
    isFeatured: true,
    isHotDeal: true,
    festiveOffer: '✨ Complimentary 10kW rooftop solar plant setup included',
    vastuCompliant: true,
    vastuFacing: 'North-East Facing Entrance (Vastu Approved)',
    furnishing: 'Semi-Furnished',
    roiScore: 9.5,
    estimatedRentalYield: 7.2,
    fiveYearAppreciation: '+52%',
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80'
    ],
    panoramic360: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80',
    amenities: [
      'North-East Vastu Entrance',
      '100% Manjeera Water Supply',
      'Solar Rooftop + 100% DG Power Backup',
      'Private Landscaped Lawn & Courtyard',
      'EV Car Charging Bay',
      'Gated Community Clubhouse & Gym'
    ],
    nearbyEssentials: {
      metro: 'Jubilee Hills Check Post Metro (0.8 km)',
      itPark: 'HITEC City & Financial District (10 mins)',
      school: 'Oakridge & Chirec International (8 mins)',
      hospital: 'Apollo Health City Jubilee Hills (3 mins)',
      mall: 'Inorbit Mall & Knowledge City (10 mins)'
    },
    neighborhoodScores: {
      safety: 98,
      schools: 95,
      transit: 92,
      walkability: 88,
      dining: 96,
      overall: 94
    },
    agent: {
      name: 'Ananya Reddy',
      role: 'Principal Advisor - Hyderabad & Bengaluru',
      phone: '+91 99890 12345',
      email: 'ananya@brickly.in',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      rating: 4.95,
      salesCount: 142
    },
    description: 'If you want space, privacy, and a real neighborhood feel close to the IT corridor, this Jubilee Hills villa delivers. Double-height ceilings in the living room, a private landscaped lawn, 24/7 Manjeera water connection, and rooftop solar panels. Oakridge School and Apollo Hospital are less than 10 minutes away.'
  },
  {
    id: 'prop-in-103',
    title: '3BHK Apartment, Indiranagar 100ft Road',
    tagline: 'Walk to cafes, metro, and 100ft road shopping — heart of East Bangalore',
    price: 24500000, // ₹2.45 Cr
    displayPrice: '₹2.45 Cr',
    pricePerSqft: 9423,
    purpose: 'buy',
    rentPeriod: null,
    location: 'Indiranagar 100ft Road, Bengaluru, Karnataka',
    neighborhood: 'Indiranagar',
    coordinates: { lat: 12.9784, lng: 77.6408 },
    type: 'Apartment',
    bhk: '3BHK',
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2600,
    yearBuilt: 2024,
    garage: 2,
    hoaMonthly: 8500,
    isVerified: true,
    reraNo: 'PRM/KA/RERA/1251/310', // Karnataka RERA
    isFeatured: true,
    isHotDeal: false,
    festiveOffer: '🎁 Custom teak interior woodwork package included',
    vastuCompliant: true,
    vastuFacing: 'East Facing Entrance',
    furnishing: 'Fully Furnished',
    roiScore: 9.3,
    estimatedRentalYield: 8.5,
    fiveYearAppreciation: '+48%',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80'
    ],
    panoramic360: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80',
    amenities: [
      'East Facing Vastu Entrance',
      'Cauvery Water Connection + Softener',
      '100% DG Power Backup',
      'Covered Basement Parking (2 Bays)',
      'Rooftop Lounge & Fitness Center'
    ],
    nearbyEssentials: {
      metro: 'Indiranagar Namma Metro Station (0.3 km)',
      itPark: 'Embassy GolfLinks EGL (10 mins)',
      school: 'National Public School NPS (5 mins)',
      hospital: 'Manipal Hospital HAL Road (7 mins)',
      mall: '100ft Road Shopping & Dining (Walkable)'
    },
    neighborhoodScores: {
      safety: 96,
      schools: 94,
      transit: 98,
      walkability: 99,
      dining: 100,
      overall: 97
    },
    agent: {
      name: 'Ananya Reddy',
      role: 'Principal Advisor - Hyderabad & Bengaluru',
      phone: '+91 99890 12345',
      email: 'ananya@brickly.in',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      rating: 4.95,
      salesCount: 142
    },
    description: 'Indiranagar remains Bangalore\'s most sought-after neighborhood for a reason. This 3BHK flat sits in a quiet residential bylane just off 100ft Road. Teak woodwork, spacious balconies overlooking green cover, Cauvery water connection, and full generator backup. Perfect for tech professionals working in EGL or Embassy GolfLinks.'
  },
  {
    id: 'prop-in-104',
    title: 'Golf Course Road Luxury 3BHK, Gurgaon',
    tagline: 'Overlooking DLF Golf Course greens with Rapid Metro right at your doorstep',
    price: 42000000, // ₹4.20 Cr
    displayPrice: '₹4.20 Cr',
    pricePerSqft: 13125,
    purpose: 'buy',
    rentPeriod: null,
    location: 'Golf Course Road, Sector 54, Gurgaon, Delhi NCR',
    neighborhood: 'Golf Course Road',
    coordinates: { lat: 28.4595, lng: 77.0968 },
    type: 'Apartment',
    bhk: '3BHK',
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 3200,
    yearBuilt: 2024,
    garage: 2,
    hoaMonthly: 15000,
    isVerified: true,
    reraNo: 'GGM/382/114/2020/01', // Haryana HRERA
    isFeatured: true,
    isHotDeal: true,
    festiveOffer: '🪔 SBI pre-approved home loan at 8.35% with zero processing fee',
    vastuCompliant: true,
    vastuFacing: 'North Facing Entrance',
    furnishing: 'Semi-Furnished',
    roiScore: 9.4,
    estimatedRentalYield: 7.0,
    fiveYearAppreciation: '+40%',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80'
    ],
    panoramic360: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80',
    amenities: [
      'Golf Course Greens View',
      'North Vastu Compliant',
      '100% Power Backup with VRV AC',
      '2 Covered Parking Bays',
      'Heated Indoor Pool & Spa'
    ],
    nearbyEssentials: {
      metro: 'Sector 53-54 Rapid Metro (0.2 km)',
      itPark: 'DLF Cyber City & One Horizon Center (5 mins)',
      school: 'The Shri Ram School Aravali (8 mins)',
      hospital: 'Fortis & Medanta The Medicity (10 mins)',
      mall: 'Horizon Plaza & Galleria Market (5 mins)'
    },
    neighborhoodScores: {
      safety: 97,
      schools: 96,
      transit: 95,
      walkability: 90,
      dining: 97,
      overall: 95
    },
    agent: {
      name: 'Vikram Malhotra',
      role: 'Head of North India - Delhi NCR',
      phone: '+91 98110 54321',
      email: 'vikram@brickly.in',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      rating: 4.92,
      salesCount: 118
    },
    description: 'Golf Course Road is NCR\'s premier residential strip. This 3BHK high-rise home comes with VRV central air conditioning, German modular kitchen fittings, and floor-to-ceiling windows looking directly out over the golf greens. Cyber City is 5 minutes down the road, and Fortis Hospital is nearby.'
  },
  {
    id: 'prop-in-105',
    title: 'Spacious 2BHK in Baner, Pune',
    tagline: 'Well-ventilated home in a prime Baner location, ideal for IT professionals',
    price: 9200000, // ₹92 Lakhs
    displayPrice: '₹92 Lakhs',
    pricePerSqft: 7360,
    purpose: 'buy',
    rentPeriod: null,
    location: 'Baner Main Road, Pune, Maharashtra',
    neighborhood: 'Baner',
    coordinates: { lat: 18.5590, lng: 73.7868 },
    type: 'Apartment',
    bhk: '2BHK',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1250,
    yearBuilt: 2023,
    garage: 1,
    hoaMonthly: 3800,
    isVerified: true,
    reraNo: 'P52100018902', // MahaRERA
    isFeatured: false,
    isHotDeal: true,
    festiveOffer: '✨ Festive offer: Modular kitchen and AC in master bedroom included',
    vastuCompliant: true,
    vastuFacing: 'East Facing Entrance',
    furnishing: 'Semi-Furnished',
    roiScore: 9.1,
    estimatedRentalYield: 7.4,
    fiveYearAppreciation: '+38%',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    panoramic360: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    amenities: [
      'East Vastu Verified',
      'PMC Municipal Water + Borewell Backup',
      '100% DG Power Backup',
      'Covered Podium Parking',
      'Solar Water Heating System'
    ],
    nearbyEssentials: {
      metro: 'Balewadi Phata Metro Station (0.6 km)',
      itPark: 'Hinjewadi IT Park & Balewadi High St (10 mins)',
      school: 'Orchid School Baner (5 mins)',
      hospital: 'Jupiter Hospital & Manipal Baner (6 mins)',
      mall: 'Westend Mall Aundh (8 mins)'
    },
    neighborhoodScores: {
      safety: 97,
      schools: 94,
      transit: 91,
      walkability: 93,
      dining: 95,
      overall: 94
    },
    agent: {
      name: 'Rajesh Sharma',
      role: 'Senior Advisor - Mumbai & South MH',
      phone: '+91 98200 44110',
      email: 'rajesh@brickly.in',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
      rating: 4.96,
      salesCount: 168
    },
    description: 'A sensibly laid out 2BHK flat in Baner, perfect for first-time home buyers or young couples working in Hinjewadi Phase 1 or Balewadi High Street. Features two wide balconies, covered car parking, 24/7 security, and solar water heating. Clean title, MahaRERA verified, ready to move in.'
  },
  {
    id: 'prop-in-106',
    title: 'Modern 2BHK Apartment, Gachibowli',
    tagline: '5 minutes from HITEC City & Financial District — quick commute, high rental demand',
    price: 11500000, // ₹1.15 Cr
    displayPrice: '₹1.15 Cr',
    pricePerSqft: 8214,
    purpose: 'buy',
    rentPeriod: null,
    location: 'Gachibowli ORR Junction, Hyderabad, Telangana',
    neighborhood: 'Gachibowli',
    coordinates: { lat: 17.4401, lng: 78.3489 },
    type: 'Apartment',
    bhk: '2BHK',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1400,
    yearBuilt: 2024,
    garage: 1,
    hoaMonthly: 4200,
    isVerified: true,
    reraNo: 'P02400004112', // TS-RERA
    isFeatured: false,
    isHotDeal: true,
    festiveOffer: '⚡ Zero builder maintenance fee for the first 12 months',
    vastuCompliant: true,
    vastuFacing: 'East Facing Entrance',
    furnishing: 'Semi-Furnished',
    roiScore: 9.4,
    estimatedRentalYield: 8.2,
    fiveYearAppreciation: '+49%',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80'
    ],
    panoramic360: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80',
    amenities: [
      'East Vastu Verified',
      '100% Manjeera Water',
      'Piped Natural Gas (PNG)',
      '100% Power Backup',
      'Gated Security & EV Charging'
    ],
    nearbyEssentials: {
      metro: 'Raidurg Metro Station (1.5 km)',
      itPark: 'Financial District & Amazon Campus (5 mins)',
      school: 'Meridian School Gachibowli (6 mins)',
      hospital: 'AIG Hospitals Gachibowli (4 mins)',
      mall: 'Sarath City Capital Mall (8 mins)'
    },
    neighborhoodScores: {
      safety: 96,
      schools: 93,
      transit: 94,
      walkability: 89,
      dining: 95,
      overall: 93
    },
    agent: {
      name: 'Ananya Reddy',
      role: 'Principal Advisor - Hyderabad & Bengaluru',
      phone: '+91 99890 12345',
      email: 'ananya@brickly.in',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      rating: 4.95,
      salesCount: 142
    },
    description: 'Situated right near the Outer Ring Road exit in Gachibowli, this 2BHK is a great fit for someone working at Microsoft, Amazon, or Wipro. Good natural light throughout the day, piped gas connection, gated community clubhouse, and zero traffic delay to the Financial District.'
  },
  {
    id: 'prop-in-107',
    title: '3BHK Family Apartment, Sector 19 Dwarka',
    tagline: 'Well-connected family residence near Dwarka Sector 10 Metro Station',
    price: 17500000, // ₹1.75 Cr
    displayPrice: '₹1.75 Cr',
    pricePerSqft: 9722,
    purpose: 'buy',
    rentPeriod: null,
    location: 'Sector 19, Dwarka, New Delhi',
    neighborhood: 'Dwarka',
    coordinates: { lat: 28.5775, lng: 77.0505 },
    type: 'Apartment',
    bhk: '3BHK',
    bedrooms: 3,
    bathrooms: 3,
    sqft: 1800,
    yearBuilt: 2023,
    garage: 1,
    hoaMonthly: 5000,
    isVerified: true,
    reraNo: 'DLRERA2021P0089', // Delhi RERA
    isFeatured: false,
    isHotDeal: false,
    festiveOffer: '🪔 Festive package: Free modular kitchen + covered stilt parking slot',
    vastuCompliant: true,
    vastuFacing: 'North-East Facing Entrance',
    furnishing: 'Semi-Furnished',
    roiScore: 9.0,
    estimatedRentalYield: 6.9,
    fiveYearAppreciation: '+35%',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    panoramic360: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    amenities: [
      'North-East Vastu Compliant',
      'DDA Water Supply + Underground Tank',
      '24/7 Gated Security & CCTV',
      'Covered Stilt Parking',
      'Adjoining Neighborhood Park'
    ],
    nearbyEssentials: {
      metro: 'Dwarka Sector 10 Metro (0.5 km)',
      itPark: 'Aerocity Business Hub (15 mins via UER-II)',
      school: 'DPS Dwarka & Mount Carmel (5 mins)',
      hospital: 'Manipal Hospital Dwarka (6 mins)',
      mall: 'Vegas Mall Sector 14 (7 mins)'
    },
    neighborhoodScores: {
      safety: 95,
      schools: 95,
      transit: 96,
      walkability: 91,
      dining: 92,
      overall: 94
    },
    agent: {
      name: 'Vikram Malhotra',
      role: 'Head of North India - Delhi NCR',
      phone: '+91 98110 54321',
      email: 'vikram@brickly.in',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      rating: 4.92,
      salesCount: 118
    },
    description: 'Dwarka is one of West Delhi\'s most peaceful planned sub-cities. This 3BHK flat offers spacious bedrooms, dedicated stilt parking, and sits right across from a green park. Metro station is a 5-minute walk, and Delhi Airport T3 is just a 15-minute drive via the Urban Extension Road.'
  },
  {
    id: 'prop-in-108',
    title: 'ECR Executive Co-Living PG Suite, Chennai',
    tagline: 'Fully furnished coastal room with wifi, housekeeping, and OMR commute access',
    price: 28000, // ₹28,000 / month
    displayPrice: '₹28,000/mo',
    pricePerSqft: 46,
    purpose: 'pg', // 'pg' / co-living
    rentPeriod: 'month',
    location: 'East Coast Road (ECR), Thiruvanmiyur, Chennai, Tamil Nadu',
    neighborhood: 'ECR Chennai',
    coordinates: { lat: 12.9226, lng: 80.2505 },
    type: 'PG & Co-Living',
    bhk: '1BHK',
    bedrooms: 1,
    bathrooms: 1,
    sqft: 600,
    yearBuilt: 2024,
    garage: 1,
    hoaMonthly: 0,
    isVerified: true,
    reraNo: 'TN/01/Building/0192/2022',
    isFeatured: false,
    isHotDeal: false,
    festiveOffer: '🌊 All utilities included: High-speed fiber, weekly cleaning & maintenance',
    vastuCompliant: true,
    vastuFacing: 'East Facing Sea Entrance',
    furnishing: 'Fully Furnished',
    roiScore: 8.9,
    estimatedRentalYield: 9.8,
    fiveYearAppreciation: '+28%',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80'
    ],
    panoramic360: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80',
    amenities: [
      'Air Conditioned Furnished Suite',
      'Housekeeping & Laundry Service',
      '300 Mbps Dedicated Fiber Wifi',
      'Biometric Door Locks',
      'Sea View Rooftop Cafe'
    ],
    nearbyEssentials: {
      metro: 'Thiruvanmiyur MRTS Station (1.8 km)',
      itPark: 'OMR IT Expressway & TIDEL Park (8 mins)',
      school: 'American International School AISC (10 mins)',
      hospital: 'Apollo Specialty Hospital OMR (6 mins)',
      mall: 'ECR Beach & Shopping Street (Walkable)'
    },
    neighborhoodScores: {
      safety: 96,
      schools: 92,
      transit: 88,
      walkability: 90,
      dining: 94,
      overall: 92
    },
    agent: {
      name: 'Ananya Reddy',
      role: 'Principal Advisor - Hyderabad & Bengaluru',
      phone: '+91 99890 12345',
      email: 'ananya@brickly.in',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      rating: 4.95,
      salesCount: 142
    },
    description: 'Ideal for young IT professionals moving to Chennai for roles on the OMR corridor. Comes fully furnished with high-speed fiber internet, air conditioning, weekly laundry, daily housekeeping, and biometric building security. Beach is a short walk away after work.'
  }
];

export const FLASH_CARDS = [
  {
    id: 'fc-in-1',
    category: 'deals',
    badge: 'FESTIVE STAMP DUTY WAIVER',
    title: 'Stamp Duty Waiver on Select Homes in Mumbai & Hyderabad',
    subtitle: 'Save up to ₹5.2 Lakhs on registration costs this month',
    bgGradient: 'var(--grad-flash-1)',
    glowColor: 'var(--accent-gold-glow)',
    accentColor: '#f59e0b',
    icon: 'Sparkles',
    frontDetails: {
      roi: '9.7 / 10 ROI Score',
      yield: '7.2% Net Rental Yield',
      location: 'Mumbai & Hyderabad'
    },
    backDetails: {
      summary: 'For buyers closing this festive season, developers are absorbing the full Stamp Duty and Registration charges. That\'s money left straight in your bank account at registration.',
      perks: [
        'Modular kitchen packages included at no extra charge',
        'SBI & HDFC home loan rates locked at 8.35% (repo-linked)',
        'All listings carry official RERA registration certificates'
      ],
      ctaText: 'Check eligible homes'
    }
  },
  {
    id: 'fc-in-2',
    category: 'deals',
    badge: 'RERA PRE-LAUNCH ALLOTMENT',
    title: 'Gachibowli IT Corridor Allotment — Early Phase Pricing',
    subtitle: 'Direct allotment at ₹7,800/sqft before public launch at ₹10,500/sqft',
    bgGradient: 'var(--grad-flash-2)',
    glowColor: 'var(--accent-emerald-glow)',
    accentColor: '#10b981',
    icon: 'Building',
    frontDetails: {
      roi: '9.8 / 10 ROI Score',
      yield: '8.2% Rental Yield',
      location: 'HITEC City, Hyderabad'
    },
    backDetails: {
      summary: 'Direct allotment is available at ₹7,800/sqft prior to the public marketing phase. Located 5 minutes from the Financial District — high demand area for tech professionals.',
      perks: [
        'East Vastu compliant layouts for all 2BHK and 3BHK units',
        'Zero broker brokerage fees on direct developer allotment',
        'TS-RERA approved — check registration documents anytime'
      ],
      ctaText: 'View allotment details'
    }
  },
  {
    id: 'fc-in-3',
    category: 'tips',
    badge: 'HOME LOAN TAX SAVING',
    title: 'Maximizing Income Tax Relief Under Section 24B & 80C',
    subtitle: 'How couples buying together can claim up to ₹7 Lakhs annually',
    bgGradient: 'var(--grad-flash-3)',
    glowColor: 'rgba(239, 68, 68, 0.3)',
    accentColor: '#ef4444',
    icon: 'TrendingDown',
    frontDetails: {
      roi: 'Save up to ₹2.4L - ₹7L in taxes',
      yield: 'Rates starting @ 8.35%',
      location: 'Applicable across India'
    },
    backDetails: {
      summary: 'Combining Section 24B (interest deduction up to ₹2L) with Section 80C (principal repayment up to ₹1.5L) lowers your net EMI cost. Co-borrowing with a spouse doubles these limits.',
      perks: [
        'Repo-linked home loans allow fast rate cuts when RBI lowers rates',
        'Joint home ownership lets both working partners claim full tax benefits',
        'Partial prepayment via annual bonuses reduces loan tenure by years'
      ],
      ctaText: 'Calculate tax savings'
    }
  },
  {
    id: 'fc-in-4',
    category: 'tips',
    badge: 'RERA BUYER PROTECTION',
    title: 'What Happens If Your Builder Delays Possession?',
    subtitle: 'RERA Section 18 mandates monthly interest payouts for delays',
    bgGradient: 'var(--grad-card-dark)',
    glowColor: 'var(--accent-blue-glow)',
    accentColor: '#3b82f6',
    icon: 'Flame',
    frontDetails: {
      roi: 'SBI MCLR + 2% interest penalty',
      yield: 'Protected by RERA Act',
      location: 'All registered projects'
    },
    backDetails: {
      summary: 'Under Section 18 of the RERA Act, if a developer passes the committed completion date, you are legally entitled to monthly interest payments or a complete refund with interest.',
      perks: [
        'We verify possession dates directly against state RERA filings',
        'Complimentary legal review of Sale Agreement clauses before signing',
        'Escrow account tracking ensures funds stay within project construction'
      ],
      ctaText: 'Check builder RERA records'
    }
  },
  {
    id: 'fc-in-5',
    category: 'insights',
    badge: 'MARKET TRENDS 2026',
    title: 'Why Hyderabad & Bengaluru Tech Corridors Lead Demand',
    subtitle: 'GCC expansions driving steady 7% to 8.5% rental yields',
    bgGradient: 'var(--grad-hero)',
    glowColor: 'var(--accent-gold-glow)',
    accentColor: '#e5a93c',
    icon: 'BarChart3',
    frontDetails: {
      roi: '+49% to +52% 5-yr growth',
      yield: '8.5% yield in Indiranagar',
      location: 'Hyderabad & Bengaluru'
    },
    backDetails: {
      summary: 'Global Capability Centers (GCCs) expanding along Outer Ring Road Bengaluru and HITEC City Hyderabad continue to drive strong tenant demand for well-located 2BHK and 3BHK homes.',
      perks: [
        'Gachibowli micro-market values up 52% over the last 5 years',
        'Indiranagar & Whitefield rentals yielding up to 8.5% net annually',
        'Golf Course Road Gurgaon benchmark hovering near ₹15,400/sqft'
      ],
      ctaText: 'Read market overview'
    }
  }
];

export const NEIGHBORHOOD_TRENDS = [
  { year: '2021', mumbai: 21500, hyderabad: 6200, bengaluru: 8100, gurgaon: 9800, pune: 6500 },
  { year: '2022', mumbai: 23800, hyderabad: 7100, bengaluru: 9200, gurgaon: 11200, pune: 7300 },
  { year: '2023', mumbai: 25200, hyderabad: 8200, bengaluru: 10400, gurgaon: 12600, pune: 8100 },
  { year: '2024', mumbai: 26900, hyderabad: 9100, bengaluru: 11600, gurgaon: 13800, pune: 9000 },
  { year: '2025', mumbai: 27800, hyderabad: 9800, bengaluru: 12200, gurgaon: 14600, pune: 9600 },
  { year: '2026', mumbai: 28500, hyderabad: 10500, bengaluru: 12800, gurgaon: 15400, pune: 10200 },
];

export const AGENTS = [
  {
    id: 'ag-in-1',
    name: 'Rajesh Sharma',
    title: 'Senior Advisor - Mumbai & South MH',
    experience: '18 Years Experience',
    volume: '₹1,200 Cr+ Transactions Closed',
    rating: 4.96,
    reviewsCount: 210,
    phone: '+91 98200 44110',
    email: 'rajesh@brickly.in',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    specialties: ['Worli & Bandra Sea Face', 'MahaRERA Regulatory Verification', 'NRI Portfolio Advisory']
  },
  {
    id: 'ag-in-2',
    name: 'Ananya Reddy',
    title: 'Principal Advisor - Hyderabad & Bengaluru',
    experience: '14 Years Experience',
    volume: '₹950 Cr+ Transactions Closed',
    rating: 4.95,
    reviewsCount: 176,
    phone: '+91 99890 12345',
    email: 'ananya@brickly.in',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    specialties: ['Jubilee Hills Gated Homes', 'Indiranagar & Whitefield Apartments', 'TS-RERA & RERA Karnataka']
  },
  {
    id: 'ag-in-3',
    name: 'Vikram Malhotra',
    title: 'Head of North India - Delhi NCR',
    experience: '15 Years Experience',
    volume: '₹880 Cr+ Transactions Closed',
    rating: 4.92,
    reviewsCount: 148,
    phone: '+91 98110 54321',
    email: 'vikram@brickly.in',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    specialties: ['Golf Course Road & Cyber City', 'Dwarka & Aerocity Sub-markets', 'HRERA & Delhi RERA Guidance']
  }
];

export const TESTIMONIALS = [
  {
    id: 't-in-1',
    name: 'Srikanth & Swathi Rao',
    role: 'Engineering Director, Tech Firm',
    location: 'Hyderabad, TS',
    comment: 'We visited around 10 villas in Jubilee Hills before finding Brickly. Ananya walked us through the TS-RERA documents, clear title deeds, and water connections. The 360° tour let us share the home with my parents in Vizag before finalizing. Super smooth process.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    purchasedProp: '4BHK Independent Gated Villa, Jubilee Hills'
  },
  {
    id: 't-in-2',
    name: 'Karan & Pooja Singhania',
    role: 'Business Owners',
    location: 'Mumbai, MH',
    comment: 'Finding a genuine sea-facing property in Worli without dealing with unreliable middle-men was our priority. Rajesh at Brickly handled everything professionally and saved us around ₹5 Lakhs through the developer stamp duty concession. Honest team.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    purchasedProp: 'Sea Face Duplex Penthouse, Worli'
  },
  {
    id: 't-in-3',
    name: 'Dr. Arvind Subramanian',
    role: 'Senior Consultant Physician',
    location: 'Bengaluru, KA',
    comment: 'Between hospital shifts, I had very limited time to search for a place near Indiranagar. Ananya gave me two solid options matching my budget, provided the RERA numbers, and we completed paperwork within 4 days. The loan EMI calculator was spot-on too.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    purchasedProp: '3BHK Apartment, Indiranagar 100ft Road'
  }
];

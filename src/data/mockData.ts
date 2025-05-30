import { Car } from '../types';

export const cars: Car[] = [
  {
    id: '1',
    make: 'Bentley',
    model: 'Continental GT',
    year: 2023,
    price: 245000,
    mileage: 1500,
    exteriorColor: 'Onyx Black',
    interiorColor: 'Linen',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    engineSize: '6.0L W12',
    description: 'The Bentley Continental GT represents the pinnacle of British luxury grand touring. This exquisite example, finished in Onyx Black with a handcrafted Linen interior, delivers effortless power from its 6.0-liter W12 engine. With just 1,500 miles on the odometer, it presents in pristine condition, indistinguishable from new. The Continental GT combines breathtaking performance with unparalleled comfort, making it the perfect vehicle for both spirited driving and luxurious long-distance journeys.',
    features: [
      'Mulliner Driving Specification',
      'Naim for Bentley Premium Audio',
      'Rotating Display',
      'Panoramic Roof',
      'Adaptive Cruise Control',
      'Night Vision',
      'Head-Up Display',
      'Massage Seats',
      'Diamond Knurling Package',
      'City Specification & Touring Specification'
    ],
    images: [
      'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg',
      'https://images.pexels.com/photos/3764982/pexels-photo-3764982.jpeg',
      'https://images.pexels.com/photos/3764979/pexels-photo-3764979.jpeg',
      'https://images.pexels.com/photos/3764977/pexels-photo-3764977.jpeg'
    ],
    status: 'Available'
  },
  {
    id: '2',
    make: 'Range Rover',
    model: 'SV Autobiography',
    year: 2022,
    price: 195000,
    mileage: 8500,
    exteriorColor: 'Santorini Black',
    interiorColor: 'Ebony/Ivory',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    engineSize: '5.0L V8',
    description: 'This Range Rover SV Autobiography represents the ultimate expression of luxury SUV motoring. Finished in striking Santorini Black with a dual-tone Ebony/Ivory interior, this vehicle exudes sophistication. The supercharged 5.0-liter V8 engine provides effortless power, while the long-wheelbase configuration ensures exceptional rear passenger comfort. With just 8,500 miles, this nearly-new example comes with all the refinement, capability, and prestige that defines the Range Rover brand.',
    features: [
      'Executive Class Rear Seats',
      'Hot Stone Massage Function',
      'Deployable Tables',
      'Refrigerated Compartment',
      'Meridian Signature Sound System',
      'Pixel-Laser LED Headlights',
      'All-Terrain Progress Control',
      'Digital Rearview Mirror',
      'Soft Door Close',
      'Activity Key'
    ],
    images: [
      'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg',
      'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg',
      'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg'
    ],
    status: 'Available'
  },
  {
    id: '3',
    make: 'Rolls-Royce',
    model: 'Ghost',
    year: 2022,
    price: 380000,
    mileage: 3200,
    exteriorColor: 'Arctic White',
    interiorColor: 'Navy Blue',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    engineSize: '6.75L V12',
    description: 'This Rolls-Royce Ghost embodies effortless luxury with its pristine Arctic White exterior and sumptuous Navy Blue leather interior. Powered by the iconic 6.75-liter V12 twin-turbocharged engine, it delivers a perfect balance of power and refinement. With only 3,200 miles, this nearly-new Ghost features Rolls-Royce\'s groundbreaking Planar Suspension System, providing the famed "magic carpet ride" that isolates passengers from the world outside. This is modern luxury at its finest.',
    features: [
      'Starlight Headliner',
      'Bespoke Audio System',
      'Rear Theatre Configuration',
      'Picnic Tables',
      'Illuminated Fascia',
      'Lambswool Floor Mats',
      'Spirit of Ecstasy Illuminated',
      'Rear Massage Seats',
      'Champagne Cooler',
      'Individual Rear Seats'
    ],
    images: [
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
      'https://images.pexels.com/photos/3802512/pexels-photo-3802512.jpeg',
      'https://images.pexels.com/photos/3802509/pexels-photo-3802509.jpeg',
      'https://images.pexels.com/photos/3802513/pexels-photo-3802513.jpeg'
    ],
    status: 'Available'
  },
  {
    id: '4',
    make: 'Aston Martin',
    model: 'DBS Superleggera',
    year: 2021,
    price: 275000,
    mileage: 5800,
    exteriorColor: 'Quantum Silver',
    interiorColor: 'Obsidian Black',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    engineSize: '5.2L V12',
    description: 'This Aston Martin DBS Superleggera represents the pinnacle of the brand\'s grand touring capabilities. Finished in iconic Quantum Silver with an Obsidian Black interior, this stunning example has covered just 5,800 miles. Powered by a twin-turbocharged 5.2-liter V12 engine producing 715 bhp, the DBS Superleggera combines breathtaking performance with exquisite craftsmanship and British luxury. This particular car features a range of desirable options, making it a collector\'s piece as well as an extraordinary driving machine.',
    features: [
      'Carbon Fiber Exterior Package',
      'Bang & Olufsen BeoSound Audio',
      'Ventilated Seats',
      'Carbon Ceramic Brakes',
      'Technology Package',
      'Comfort Package',
      '360-Degree Camera',
      'Triaxial Quilting',
      'Satin Chrome Jewelry Pack',
      'Bespoke Interior Detailing'
    ],
    images: [
      'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg',
      'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg',
      'https://images.pexels.com/photos/2127037/pexels-photo-2127037.jpeg',
      'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg'
    ],
    status: 'Available'
  },
  {
    id: '5',
    make: 'Mercedes-Benz',
    model: 'S-Class S680 Maybach',
    year: 2023,
    price: 230000,
    mileage: 2100,
    exteriorColor: 'Obsidian Black',
    interiorColor: 'Sienna Brown/Black',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    engineSize: '6.0L V12',
    description: 'This Mercedes-Maybach S680 represents the ultimate in luxury sedan transportation. Finished in elegant Obsidian Black with a dual-tone Sienna Brown/Black interior, this vehicle embodies sophistication and presence. Powered by a smooth 6.0-liter V12 engine, it delivers effortless performance with supreme refinement. With just 2,100 miles, this nearly-new example features the very latest technology and comfort features that Mercedes-Benz has to offer, creating a sanctuary of luxury for both driver and passengers.',
    features: [
      'Executive Rear Seats with Massage',
      'Burmester High-End 4D Surround Sound',
      'Rear Seat Entertainment',
      'MBUX Interior Assistant',
      'Active Road Noise Compensation',
      'Digital Light with Projection Function',
      'Rear Refrigerator Compartment',
      'Champagne Flute Holder',
      'Night Vision Assist',
      'ENERGIZING Comfort Package'
    ],
    images: [
      'https://images.pexels.com/photos/3457780/pexels-photo-3457780.jpeg',
      'https://images.pexels.com/photos/3560043/pexels-photo-3560043.jpeg',
      'https://images.pexels.com/photos/3802513/pexels-photo-3802513.jpeg',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg'
    ],
    status: 'Available'
  },
  {
    id: '6',
    make: 'Ferrari',
    model: 'SF90 Stradale',
    year: 2022,
    price: 550000,
    mileage: 1200,
    exteriorColor: 'Rosso Corsa',
    interiorColor: 'Nero',
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    engineSize: '4.0L V8 Hybrid',
    description: 'This Ferrari SF90 Stradale represents the pinnacle of Ferrari\'s engineering excellence. Finished in the iconic Rosso Corsa with a Nero interior, this hybrid hypercar combines a twin-turbocharged V8 engine with three electric motors to produce a staggering 986 horsepower. With just 1,200 miles from new, this example presents in immaculate condition and features Ferrari\'s most advanced technology to date. The SF90 Stradale sets new benchmarks for performance while also embracing hybrid technology, making it a significant model in Ferrari\'s illustrious history.',
    features: [
      'Assetto Fiorano Package',
      'Carbon Fiber Wheels',
      'Titanium Exhaust System',
      'Carbon Fiber Racing Seats',
      'Head-Up Display',
      'Carbon Fiber Engine Cover',
      'Suspension Lifter',
      'Premium JBL Sound System',
      'Carbon Fiber Rear Diffuser',
      'Track Telemetry System'
    ],
    images: [
      'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg',
      'https://images.pexels.com/photos/93652/pexels-photo-93652.jpeg',
      'https://images.pexels.com/photos/10183765/pexels-photo-10183765.jpeg',
      'https://images.pexels.com/photos/11321242/pexels-photo-11321242.jpeg'
    ],
    status: 'Available'
  }
];
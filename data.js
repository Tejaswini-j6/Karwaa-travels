window.KD = {
  home: 'Karwaa Website.dc.html',
  url(page, params) {
    const q = params ? Object.entries(params).filter(([, v]) => v !== undefined && v !== '' && v !== null).map(([k, v]) => k + '=' + encodeURIComponent(v)).join('&') : '';
    return page + '.dc.html' + (q ? '?' + q : '');
  },
  q(k) { return new URLSearchParams(location.search).get(k) || ''; },
  nav: [
    ['Home', 'Karwaa Website.dc.html'], ['About Us', 'About.dc.html'], ['Packages', 'Packages.dc.html'], ['Services', 'Services.dc.html'],
    ['Driver Assign', 'Service.dc.html?s=driver'], ['Gallery', 'Gallery.dc.html'], ['Contact', 'Contact.dc.html']
  ],
  packages: [
    { id: 'kerala', src: 'img/kerala.jpg', title: 'Kerala Getaway', price: 12999, dur: '4 Nights / 5 Days', days: 5, loc: 'Kerala', region: 'Domestic', tag: 'Backwaters',
      overview: 'Drift through palm-fringed backwaters on a private houseboat, wake up to misty tea estates in Munnar and end with golden evenings on Kovalam beach.',
      highlights: ['Overnight private houseboat in Alleppey', 'Munnar tea gardens & Eravikulam park', 'Kathakali performance in Kochi', 'Airport transfers with dedicated driver'],
      itinerary: [['Arrive Kochi', 'Pickup, Fort Kochi walk and evening Kathakali show.'], ['Kochi → Munnar', 'Scenic drive past waterfalls to the hills; spice plantation stop.'], ['Munnar', 'Tea museum, Mattupetty dam and Eravikulam National Park.'], ['Munnar → Alleppey', 'Board your private houseboat; lunch and dinner on board.'], ['Departure', 'Breakfast on the water and drop to Kochi airport.']] },
    { id: 'himachal', src: 'img/himachal.jpg', title: 'Himachal Escape', price: 15999, dur: '5 Nights / 6 Days', days: 6, loc: 'Himachal Pradesh', region: 'Domestic', tag: 'Mountains',
      overview: 'Snow-capped peaks, cedar forests and cosy mountain stays across Shimla and Manali — with a verified hill driver for every winding road.',
      highlights: ['Solang Valley & Atal Tunnel excursion', 'Mall Road walks in Shimla', 'Riverside stay in Manali', 'Hill-trained driver throughout'],
      itinerary: [['Delhi → Shimla', 'Morning pickup and drive to Shimla; evening on Mall Road.'], ['Shimla & Kufri', 'Kufri, Jakhu temple and Christ Church.'], ['Shimla → Manali', 'Drive along the Beas river via Kullu.'], ['Solang Valley', 'Snow activities and Atal Tunnel.'], ['Manali', 'Hadimba temple, Old Manali cafés and Vashisht.'], ['Departure', 'Drive back to Delhi.']] },
    { id: 'goa', src: 'img/goa.jpg', title: 'Goa Beach Holiday', price: 13999, dur: '4 Nights / 5 Days', days: 5, loc: 'Goa', region: 'Domestic', tag: 'Beaches',
      overview: 'Sun, sand and Portuguese charm — beach resort stay with North and South Goa sightseeing and a sunset river cruise.',
      highlights: ['Beach-facing resort with breakfast', 'Mandovi sunset cruise', 'Old Goa churches & Fontainhas', 'Private cab for sightseeing'],
      itinerary: [['Arrive Goa', 'Airport pickup and resort check-in.'], ['North Goa', 'Fort Aguada, Baga, Anjuna and Chapora.'], ['South Goa', 'Old Goa churches, Colva and Palolem.'], ['Leisure', 'Free day with optional water sports; evening cruise.'], ['Departure', 'Checkout and airport drop.']] },
    { id: 'rajasthan', src: 'img/rajasthan.jpg', title: 'Rajasthan Royal Tour', price: 18999, dur: '5 Nights / 6 Days', days: 6, loc: 'Rajasthan', region: 'Domestic', tag: 'Heritage',
      overview: 'Forts, palaces and desert dunes across Jaipur, Jodhpur and Jaisalmer, with heritage hotel stays and a desert camp night.',
      highlights: ['Amber Fort & City Palace', 'Mehrangarh Fort in Jodhpur', 'Desert camp with camel safari', 'Heritage haveli stays'],
      itinerary: [['Arrive Jaipur', 'Hawa Mahal and evening at Chokhi Dhani.'], ['Jaipur', 'Amber Fort, City Palace and Jantar Mantar.'], ['Jaipur → Jodhpur', 'Drive to the Blue City; Mehrangarh at sunset.'], ['Jodhpur → Jaisalmer', 'Golden Fort and Patwon ki Haveli.'], ['Sam Dunes', 'Camel safari, folk music and desert camp.'], ['Departure', 'Drop at Jaisalmer airport or station.']] },
    { id: 'maldives', src: 'img/maldives.jpg', title: 'Maldives Honeymoon', price: 45999, dur: '5 Nights / 6 Days', days: 6, loc: 'Maldives', region: 'International', tag: 'Honeymoon',
      overview: 'Overwater villas, turquoise lagoons and candlelit dinners on the sand — a honeymoon planned end to end.',
      highlights: ['Overwater villa with breakfast & dinner', 'Speedboat transfers', 'Snorkelling with reef guide', 'Private beach dinner'],
      itinerary: [['Arrive Malé', 'Speedboat to resort and welcome drinks.'], ['Island leisure', 'Spa, lagoon and sunset at the villa.'], ['Snorkelling', 'Guided reef trip to see turtles and rays.'], ['Sandbank picnic', 'Half-day private sandbank excursion.'], ['Romantic dinner', 'Candlelit dinner on the beach.'], ['Departure', 'Transfer back to Malé airport.']] }
  ],
  services: [
    { key: 'driver', icon: 'directions_car', title: 'Driver Assign', sub: 'Safe & Reliable Drivers', src: 'img/driver.jpg', service: 'Driver Assign',
      desc: 'Hire a professional, police-verified driver for your own car or ours — for a few hours, a full day or a multi-city outstation trip.',
      points: ['Police & background verified drivers', 'Local, outstation and airport duties', 'Uniformed, courteous and punctual', 'Live trip support on WhatsApp'],
      plans: [['Local 8 hrs / 80 km', '1,499', 'per day'], ['Outstation', '2,199', 'per day + fuel'], ['Airport Transfer', '899', 'one way']],
      faqs: [['Can I get a driver for my own car?', 'Yes. Our drivers are trained on manual and automatic cars of all segments.'], ['How early should I book?', 'We recommend 24 hours in advance, but same-day requests are usually confirmed within 2 hours.'], ['Are driver stay and food included on outstation trips?', 'A small night allowance applies for outstation trips; it is shown clearly before you confirm.']] },
    { key: 'tour', icon: 'flight', title: 'Tour Packages', sub: 'Domestic & International', src: 'img/tour.jpg', service: 'Tour Package',
      desc: 'Curated holidays with handpicked stays, sightseeing and transfers — domestic favourites and international escapes.',
      points: ['Handpicked hotels & resorts', 'All transfers and sightseeing', 'Flexible dates and upgrades', 'Dedicated trip manager'],
      plans: [['Domestic', '12,999', 'per person onwards'], ['International', '45,999', 'per person onwards'], ['Group Tours', 'On request', '10+ travellers']],
      faqs: [['Can I customize a package?', 'Every package can be changed — add days, upgrade hotels or change the route.'], ['Are flights included?', 'Flights are optional and can be added at the best available fare.']] },
    { key: 'hotel', icon: 'apartment', title: 'Hotel Bookings', sub: 'Luxury & Budget Stays', src: 'img/hotel.jpg', service: 'Hotel Booking',
      desc: 'From boutique heritage havelis to overwater villas and budget-friendly business hotels — booked at our partner rates.',
      points: ['Partner rates across 2,000+ hotels', 'Free cancellation on most stays', 'Early check-in requests handled', 'Pay at confirmation — no hidden fees'],
      plans: [['Budget', '1,999', 'per night onwards'], ['Premium', '5,499', 'per night onwards'], ['Luxury Resorts', '12,999', 'per night onwards']],
      faqs: [['Do you charge a booking fee?', 'No. The price you see is the price you pay.'], ['Can you book hotels outside India?', 'Yes, including the Maldives, Dubai, Thailand and Bali.']] },
    { key: 'transport', icon: 'directions_bus', title: 'Transport Services', sub: 'Cars, Vans & Buses', src: 'img/rajasthan.jpg', service: 'Transport',
      desc: 'Sedans, SUVs, Tempo Travellers and luxury coaches for families, weddings, corporate events and group tours.',
      points: ['Clean, sanitized, well-maintained fleet', 'Sedan, SUV, 12/17-seater and 35/45-seater', 'GPS-tracked vehicles', 'Transparent per-km pricing'],
      plans: [['Sedan', '12', 'per km'], ['SUV / Innova', '16', 'per km'], ['Tempo Traveller', '24', 'per km']],
      faqs: [['Is there a minimum distance?', 'Outstation trips have a minimum of 250 km per day.'], ['Are tolls and parking included?', 'Tolls, parking and state taxes are billed at actuals.']] },
    { key: 'custom', icon: 'map', title: 'Customized Trips', sub: 'Your Trip, Your Way', src: 'img/hero-mountains.png', service: 'Customized Trip',
      desc: 'Tell us your dates, budget and interests — our planners design a day-by-day itinerary around you.',
      points: ['Free itinerary within 24 hours', 'Unlimited revisions', 'Mix hotels, drivers and activities', 'Honeymoon, family and solo specialists'],
      plans: [['Planning', 'Free', 'with any booking'], ['Weekend Trip', '6,999', 'per person onwards'], ['Premium Planning', '1,999', 'refundable on booking']],
      faqs: [['How do I start?', 'Send a booking request with your idea — a planner will call you back.'], ['Can I pay in parts?', 'Yes, confirm with 30% and pay the rest before departure.']] },
    { key: 'support', icon: 'support_agent', title: '24/7 Support', sub: 'Always Here for You', src: 'img/hero-sunset.png', service: 'Customized Trip',
      desc: 'A real person on call, any time of day — for changes, emergencies or simply a restaurant recommendation.',
      points: ['Phone & WhatsApp support 24/7', 'Emergency driver/vehicle replacement', 'On-trip hotel and booking changes', 'Hindi, English and regional languages'],
      plans: [['Phone / WhatsApp', '+91 9311033931', 'any time'], ['Email', 'Within 2 hours', 'sonuupawaar@gmail.com'], ['On-trip changes', 'Free', 'for all bookings']],
      faqs: [['Is support free?', 'Yes, it is included with every booking.'], ['What if my driver is late?', 'Call us — we track every trip and dispatch a replacement if needed.']] }
  ],
  offers: [
    { code: 'KARWAA10', off: '10% OFF', title: 'First Trip Discount', desc: 'Flat 10% off on your first tour package with Karwaa.', valid: 'Valid till 31 Dec 2026', src: 'img/hero-mountains.png', pkg: '' },
    { code: 'HONEY5K', off: '₹5,000 OFF', title: 'Maldives Honeymoon', desc: 'Save ₹5,000 plus a complimentary private beach dinner.', valid: 'Travel Oct – Mar', src: 'img/hero-maldives.png', pkg: 'maldives' },
    { code: 'GOA2026', off: '15% OFF', title: 'Goa Monsoon Deal', desc: '15% off Goa Beach Holiday for bookings of 2+ travellers.', valid: 'Valid till 30 Nov 2026', src: 'img/goa.jpg', pkg: 'goa' },
    { code: 'DRIVE20', off: '20% OFF', title: 'Driver for a Week', desc: 'Book a driver for 7+ days and get 20% off the daily rate.', valid: 'All cities', src: 'img/driver.jpg', pkg: '' }
  ],
  inr(n) { return typeof n === 'number' ? n.toLocaleString('en-IN') : n; }
};

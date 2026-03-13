export const travelData = {
  summary: {
    weeks: 6,
    countries: 8,
    totalCost: "$875–$950",
    avgPerWeekend: "$145",
    rule: "Weekdays = University · Weekends = Europe"
  },
  weekends: [
    {
      id: 1,
      week: "Weekend 1",
      destination: "Stockholm",
      country: "Sweden",
      flag: "🇸🇪",
      emoji: "⛵",
      color: "#FFD700",
      route: "Oslo → Stockholm (FlixBus, overnight Fri) → Oslo (Sun 10pm)",
      transport: "FlixBus (overnight)",
      transportNote: "Sleep on the bus = save a night of accommodation",
      totalCost: 115,
      costRange: "~$110–115",
      highlights: ["Gamla Stan old town", "Vasa Museum (exterior)", "ABBA Museum area", "Djurgården island walk"],
      items: [
        { label: "FlixBus Oslo → Stockholm (Fri 11pm)", cost: "$25" },
        { label: "FlixBus Stockholm → Oslo (Sun 10pm)", cost: "$25" },
        { label: "Hostel dorm 1 night (Generator Stockholm)", cost: "$25" },
        { label: "Food (supermarket + 1 meal)", cost: "$25" },
        { label: "Metro day pass", cost: "$8" },
        { label: "Attractions (mostly free)", cost: "$5" }
      ],
      tip: "Book FlixBus 3–4 weeks ahead for the $25 price. The overnight bus means you arrive Saturday morning with a full day ahead.",
      freeThing: "Gamla Stan is entirely free to explore"
    },
    {
      id: 2,
      week: "Weekend 2",
      destination: "Copenhagen + Malmö",
      country: "Denmark + Sweden",
      flag: "🇩🇰🇸🇪",
      emoji: "🌉",
      color: "#FF6B6B",
      route: "Oslo → Copenhagen (fly Fri eve) → Malmö by train → Oslo (Sun eve)",
      transport: "Norwegian Air",
      transportNote: "Cross the Øresund Bridge for just $20 — 2 countries, 1 flight!",
      totalCost: 165,
      costRange: "~$165",
      highlights: ["Nyhavn canal district", "Tivoli Gardens (exterior free)", "Øresund Bridge crossing", "Malmö old town (Stortorget)"],
      items: [
        { label: "Norwegian RT flight OSL → CPH", cost: "$60" },
        { label: "Hostel dorm 2 nights (a&o Copenhagen)", cost: "$40" },
        { label: "Train CPH ↔ Malmö (Øresund Bridge)", cost: "$20" },
        { label: "Food (2 days, mix supermarket + café)", cost: "$35" },
        { label: "Airport metro transfer", cost: "$10" }
      ],
      tip: "The Øresund Bridge train runs every 20 min. Buy a Copenhagen City Pass for unlimited transport + metro to airport.",
      freeThing: "Nyhavn waterfront and Strøget walking street are completely free"
    },
    {
      id: 3,
      week: "Weekend 3",
      destination: "Berlin",
      country: "Germany",
      flag: "🇩🇪",
      emoji: "🏛️",
      color: "#4ECDC4",
      route: "Oslo → Berlin (fly Fri eve) → Oslo (Sun night)",
      transport: "easyJet / Norwegian",
      transportNote: "Cheapest major city from Oslo — loads of cheap eats",
      totalCost: 130,
      costRange: "~$130",
      highlights: ["Brandenburg Gate", "East Side Gallery", "Tiergarten park", "Checkpoint Charlie", "Museum Island (exterior)"],
      items: [
        { label: "easyJet/Norwegian RT OSL → BER", cost: "$60" },
        { label: "Hostel dorm 2 nights (a&o Berlin)", cost: "$30" },
        { label: "Food (döner kebabs + supermarket)", cost: "$30" },
        { label: "U-Bahn day pass", cost: "$10" }
      ],
      tip: "Berlin has the best budget food in Western Europe — a kebab costs €2.50. a&o Hostels are legendary for price and quality here.",
      freeThing: "East Side Gallery (1.3km of Berlin Wall art) and all major monuments are free"
    },
    {
      id: 4,
      week: "Weekend 4",
      destination: "Prague",
      country: "Czechia",
      flag: "🇨🇿",
      emoji: "🏰",
      color: "#C084FC",
      route: "Oslo → Prague (fly Fri eve) → Oslo (Sun night)",
      transport: "Norwegian / Ryanair",
      transportNote: "Cheapest city in Central Europe — $3 meals are real",
      totalCost: 130,
      costRange: "~$130",
      highlights: ["Prague Castle (exterior walk)", "Charles Bridge at sunrise", "Old Town Square Astronomical Clock", "Josefov Jewish Quarter walk"],
      items: [
        { label: "Norwegian/Ryanair RT OSL → PRG", cost: "$75" },
        { label: "Hostel dorm 2 nights (Sir Toby's / Mosaic House)", cost: "$24" },
        { label: "Food (Czech goulash + supermarket)", cost: "$25" },
        { label: "Tram/metro transport", cost: "$5" }
      ],
      tip: "Prague is the cheapest destination on this list. A full meal with beer costs ~$6. Buy 24hr tram pass for $3.",
      freeThing: "The entire Old Town is walkable and free — Charles Bridge has no entry fee"
    },
    {
      id: 5,
      week: "Weekend 5",
      destination: "Amsterdam",
      country: "Netherlands",
      flag: "🇳🇱",
      emoji: "🚲",
      color: "#F97316",
      route: "Oslo → Amsterdam (fly Fri eve) → Oslo (Sun night)",
      transport: "easyJet",
      transportNote: "Bike rentals are ~$12/day — the most fun way to explore",
      totalCost: 170,
      costRange: "~$170",
      highlights: ["Vondelpark", "Canal ring walk (Prinsengracht)", "Jordaan neighborhood", "Rijksmuseum garden (free)", "NEMO roof terrace (free)"],
      items: [
        { label: "easyJet RT OSL → AMS", cost: "$70" },
        { label: "Hostel dorm 2 nights (Stayokay Vondelpark)", cost: "$50" },
        { label: "Food (stroopwafels, frites, supermarket)", cost: "$40" },
        { label: "Tram transport", cost: "$10" }
      ],
      tip: "Amsterdam is pricier for accommodation — book Stayokay or ClinkNOORD early. Avoid museum entry fees by focusing on free outdoor attractions.",
      freeThing: "The entire canal ring and Vondelpark are free; NEMO's roof terrace has city views at no charge"
    },
    {
      id: 6,
      week: "Weekend 6",
      destination: "Paris",
      country: "France",
      flag: "🇫🇷",
      emoji: "🗼",
      color: "#FB923C",
      route: "Oslo → Paris Orly (fly Fri eve) → Oslo (Sun night)",
      transport: "easyJet",
      transportNote: "Fly to Orly (cheaper than CDG). Metro t+ tickets for transport.",
      totalCost: 166,
      costRange: "~$166",
      highlights: ["Eiffel Tower (exterior + Champ de Mars)", "Louvre courtyard (free)", "Montmartre & Sacré-Cœur", "Seine riverside walk", "Père Lachaise cemetery"],
      items: [
        { label: "easyJet RT OSL → ORY", cost: "$60" },
        { label: "Hostel dorm 2 nights (Generator Paris)", cost: "$50" },
        { label: "Food (boulangerie + 1 bistro + supermarket)", cost: "$40" },
        { label: "Metro carnets ×2 days", cost: "$16" }
      ],
      tip: "Buy a carnet of 10 metro tickets — cheaper per trip. Fresh baguette from a boulangerie is €1.10 and will change your life.",
      freeThing: "The Louvre's glass pyramid courtyard, all parks, Montmartre steps, and Eiffel Tower exterior are completely free"
    }
  ],
  savingTips: [
    {
      icon: "✈️",
      title: "Book flights 4–6 weeks ahead",
      desc: "Prices shown are lowest fares. easyJet and Norwegian dominate Oslo routes. Set price alerts on Google Flights."
    },
    {
      icon: "🛏️",
      title: "Use a&o or Generator hostels",
      desc: "These chains have locations in Berlin, Copenhagen, Amsterdam, and Paris. Dorm beds from €12–€25. Clean, central, social."
    },
    {
      icon: "🌉",
      title: "Two countries, one flight (W2)",
      desc: "Copenhagen → Malmö by train over the Øresund Bridge costs ~$10 one way. Tick Sweden off your list for almost nothing extra."
    },
    {
      icon: "🚌",
      title: "Take the overnight bus to Stockholm",
      desc: "FlixBus from $25 one way. Departing Friday night and arriving Saturday morning saves a night of accommodation cost."
    },
    {
      icon: "🥖",
      title: "Eat like a local, not a tourist",
      desc: "Prague goulash $5, Berlin kebab $3, Paris baguette $1. Supermarkets and local spots slash food costs vs. tourist areas."
    },
    {
      icon: "🗺️",
      title: "Free attractions everywhere",
      desc: "Every city has world-class free attractions: East Side Gallery, Charles Bridge, Nyhavn, Vondelpark, Eiffel Tower exterior."
    }
  ]
};

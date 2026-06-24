export type ApplianceData = {
  id: string;
  name: string;
  image: string;
  video?: string;
  seoTitle: string;
  seoDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  urgencyMessage: string;
  urgencyDetail: string;
  repairCostRange: string;
  replaceCostRange: string;
  savingsPercent: string;
  statFixed: string;
  statFirstVisit: string;
  symptoms: { text: string; icon: string }[];
  brands: string[];
  faqs: { q: string; a: string }[];
  inlineReview: { name: string; text: string; stars: number };
  expert: {
    name: string;
    role: string;
    experience: string;
    bio: string;
    image: string;
  };
};

export const appliances: Record<string, ApplianceData> = {
  refrigerator: {
    id: "refrigerator",
    name: "Refrigerator",
    image: "/fridge.jpg",
    video: "https://assets.mixkit.co/videos/preview/mixkit-man-fixing-a-refrigerator-in-a-kitchen-41717-large.mp4",
    seoTitle: "Expert Refrigerator Repair Joplin MO | Same-Day Service",
    seoDescription: "Is your refrigerator not cooling or leaking? Get fast, reliable refrigerator repair in Joplin, Carthage, and Webb City. No service fee with repair.",
    heroHeadline: "Expert Refrigerator Repair",
    heroSubheadline: "Don't let your food spoil. Our master technicians fix cooling issues, leaks, and ice makers — often on the very first visit.",
    urgencyMessage: "A broken refrigerator can cost you $500+ in spoiled food.",
    urgencyDetail: "Every hour without cooling puts your groceries at risk. We respond fast to protect what matters.",
    repairCostRange: "$150 – $350",
    replaceCostRange: "$800 – $2,500",
    savingsPercent: "80",
    statFixed: "2,847",
    statFirstVisit: "95",
    symptoms: [
      { text: "Not cooling properly or running constantly", icon: "thermometer" },
      { text: "Leaking water on the floor", icon: "droplets" },
      { text: "Excessive frost buildup in the freezer", icon: "snowflake" },
      { text: "Ice maker stopped working or jamming", icon: "cube" },
      { text: "Making loud, clicking, or strange noises", icon: "volume" },
      { text: "Water dispenser not functioning", icon: "glass" }
    ],
    brands: ["Samsung", "LG", "Whirlpool", "GE", "Sub-Zero", "Frigidaire", "KitchenAid", "Maytag", "Bosch"],
    faqs: [
      { q: "How quickly can you fix my refrigerator?", a: "We prioritize refrigerator emergencies. In most cases, we offer same-day service in the Joplin area and carry the most common parts on our trucks to fix it in one visit." },
      { q: "Is it worth repairing my fridge or should I buy a new one?", a: "If the repair costs less than 50% of the price of a new refrigerator and the unit is less than 10-12 years old, repairing is almost always the smarter financial choice." },
      { q: "Why is my refrigerator leaking water?", a: "A leaking refrigerator is usually caused by a clogged defrost drain or a damaged water supply line. Our technicians can quickly diagnose and clear the blockage." },
      { q: "How much does refrigerator repair typically cost?", a: "Most refrigerator repairs in the Joplin area range from $150 to $350, depending on the issue. We provide an upfront quote before any work begins — no surprises." }
    ],
    inlineReview: { name: "Sarah M.", text: "John came out the same day and fixed my Samsung fridge in under an hour. Saved all my food!", stars: 5 },
    expert: {
      name: "John Mitchell",
      role: "Lead Refrigerator Specialist",
      experience: "15+ Years Experience",
      bio: "John is our sealed system and cooling expert. With over a decade of factory training from brands like Sub-Zero and LG, he diagnoses complex compressor and freon issues faster than anyone in Joplin.",
      image: "/john.png"
    }
  },
  washer: {
    id: "washer",
    name: "Washing Machine",
    image: "/washer.jpg",
    video: "https://assets.mixkit.co/videos/preview/mixkit-repairman-working-on-a-washing-machine-41718-large.mp4",
    seoTitle: "Washing Machine Repair Joplin MO | Fast & Reliable",
    seoDescription: "Washer not draining or spinning? Four States Appliance Repair offers expert washing machine repair in Joplin, MO. Call for same-day service.",
    heroHeadline: "Fast & Reliable Washer Repair",
    heroSubheadline: "Laundry piling up? Whether it's not draining, spinning, or turning on, we get your washer back in action today.",
    urgencyMessage: "A broken washer means laundry piling up fast.",
    urgencyDetail: "Don't spend hundreds at the laundromat. Most washer issues can be fixed in a single visit.",
    repairCostRange: "$125 – $300",
    replaceCostRange: "$600 – $1,800",
    savingsPercent: "75",
    statFixed: "1,923",
    statFirstVisit: "92",
    symptoms: [
      { text: "Not draining water or draining slowly", icon: "droplets" },
      { text: "Drum won't spin or agitate", icon: "rotate" },
      { text: "Shaking violently during spin cycle", icon: "volume" },
      { text: "Leaking water from the door or bottom", icon: "droplets" },
      { text: "Error codes on the digital display", icon: "alert" },
      { text: "Door won't open or latch properly", icon: "lock" }
    ],
    brands: ["Samsung", "LG", "Whirlpool", "Maytag", "GE", "Kenmore", "Speed Queen", "Bosch", "Amana"],
    faqs: [
      { q: "Why won't my washing machine drain?", a: "The most common causes are a clogged drain pump filter, a kinked drain hose, or a failed water pump. We can quickly clear the obstruction or replace the pump." },
      { q: "Do you fix front-load and top-load washers?", a: "Yes, our technicians are highly trained to repair all types of washing machines, including modern high-efficiency front-loaders and traditional top-loaders." },
      { q: "How much does washer repair cost?", a: "Most washing machine repairs range from $125 to $300. We always provide an upfront diagnosis and quote before beginning any work." }
    ],
    inlineReview: { name: "Michael T.", text: "The technician diagnosed our front-load washer in 5 minutes and had the spare pump in his truck. Amazing service.", stars: 5 },
    expert: {
      name: "Mike Reynolds",
      role: "Senior Washer Technician",
      experience: "12+ Years Experience",
      bio: "Mike specializes in complex washing machine diagnostics, particularly modern high-efficiency front loaders. If it's shaking, leaking, or throwing an error code, Mike has seen it and fixed it.",
      image: "/mike.png"
    }
  },
  dryer: {
    id: "dryer",
    name: "Dryer",
    image: "/dryer.jpg",
    video: "https://assets.mixkit.co/videos/preview/mixkit-man-repairing-an-electrical-device-at-home-41715-large.mp4",
    seoTitle: "Expert Dryer Repair Joplin MO | Same-Day Service",
    seoDescription: "Dryer not heating or taking too long to dry? Get professional dryer repair services in Joplin, MO. Fully stocked trucks for fast fixes.",
    heroHeadline: "Professional Dryer Repair",
    heroSubheadline: "Clothes coming out damp? We diagnose and fix heating issues, drum malfunctions, and strange noises quickly and safely.",
    urgencyMessage: "A malfunctioning dryer is a fire hazard.",
    urgencyDetail: "Lint buildup and failing heating elements can be dangerous. Get a safety inspection today.",
    repairCostRange: "$100 – $275",
    replaceCostRange: "$500 – $1,600",
    savingsPercent: "78",
    statFixed: "1,654",
    statFirstVisit: "94",
    symptoms: [
      { text: "Not heating or clothes remain damp", icon: "thermometer" },
      { text: "Taking multiple cycles to dry clothes", icon: "rotate" },
      { text: "Drum is not turning", icon: "rotate" },
      { text: "Making squeaking, grinding, or thumping noises", icon: "volume" },
      { text: "Shuts off too quickly after starting", icon: "alert" },
      { text: "Smell of burning or excessive heat", icon: "flame" }
    ],
    brands: ["Samsung", "LG", "Whirlpool", "Maytag", "GE", "Kenmore", "Electrolux", "Speed Queen", "Amana"],
    faqs: [
      { q: "Why is my dryer running but not heating?", a: "This is often caused by a burned-out heating element, a faulty thermal fuse, or a broken gas valve solenoid. It requires professional testing to pinpoint the exact failure." },
      { q: "Is it dangerous if my dryer smells like it's burning?", a: "Yes, immediately stop using the dryer. This could be due to heavy lint buildup near the heating element or a failing motor. Call us for a safety inspection." },
      { q: "How much does dryer repair typically cost?", a: "Most dryer repairs range from $100 to $275. Heating element replacements are among the most common and affordable fixes." }
    ],
    inlineReview: { name: "Lisa R.", text: "Our dryer smelled like burning. They came within 2 hours, found a lint clog near the heater, and made it safe again.", stars: 5 },
    expert: {
      name: "John Mitchell",
      role: "Heating & Airflow Specialist",
      experience: "15+ Years Experience",
      bio: "John focuses on dryer safety and thermal efficiency. He excels at identifying restricted vents and faulty heating circuits that cause fires.",
      image: "/john.png"
    }
  },
  oven: {
    id: "oven",
    name: "Oven & Stove",
    image: "/oven.jpg",
    video: "https://assets.mixkit.co/videos/preview/mixkit-man-repairing-an-electrical-device-at-home-41715-large.mp4",
    seoTitle: "Oven & Stove Repair Joplin MO | Master Certified",
    seoDescription: "Oven not heating or burner won't ignite? Call the experts at Four States Appliance Repair in Joplin, MO for fast, guaranteed oven and stove repairs.",
    heroHeadline: "Expert Oven & Stove Repair",
    heroSubheadline: "From holiday dinners to daily meals, a broken oven disrupts everything. We provide fast, master-certified repair for gas and electric ranges.",
    urgencyMessage: "A gas oven issue can be a safety risk.",
    urgencyDetail: "Gas leaks and ignition failures require immediate professional attention. Don't wait.",
    repairCostRange: "$125 – $350",
    replaceCostRange: "$700 – $3,000",
    savingsPercent: "82",
    statFixed: "1,128",
    statFirstVisit: "90",
    symptoms: [
      { text: "Oven not heating to the correct temperature", icon: "thermometer" },
      { text: "Electric burner won't turn on", icon: "alert" },
      { text: "Gas burner won't ignite or clicks constantly", icon: "flame" },
      { text: "Oven door won't close tightly or unlock", icon: "lock" },
      { text: "Self-cleaning cycle is broken", icon: "rotate" },
      { text: "Control panel unresponsive or showing errors", icon: "alert" }
    ],
    brands: ["GE", "Whirlpool", "Samsung", "LG", "Frigidaire", "KitchenAid", "Wolf", "Viking", "Thermador"],
    faqs: [
      { q: "Do you repair both gas and electric ovens?", a: "Yes, our Master Technicians are fully certified to safely repair both gas and electric ovens, ranges, and cooktops." },
      { q: "Why isn't my oven heating evenly?", a: "Uneven baking is usually caused by a failing bake or broil element, or a malfunctioning temperature sensor. We carry these common parts to fix it on the spot." },
      { q: "How much does oven repair cost?", a: "Most oven and range repairs cost between $125 and $350, depending on the component. We provide an upfront quote before starting." }
    ],
    inlineReview: { name: "David L.", text: "Fixed our oven the day before Thanksgiving! Absolute lifesaver and very professional.", stars: 5 },
    expert: {
      name: "John Mitchell",
      role: "Master Range & Oven Technician",
      experience: "15+ Years Experience",
      bio: "Whether it's a gas ignition failure or a busted bake element, John has the certifications to safely handle high-voltage and gas lines, ensuring your family's safety.",
      image: "/john.png"
    }
  },
  dishwasher: {
    id: "dishwasher",
    name: "Dishwasher",
    image: "/dishwasher.jpg",
    video: "https://assets.mixkit.co/videos/preview/mixkit-repairman-working-on-a-washing-machine-41718-large.mp4",
    seoTitle: "Dishwasher Repair Joplin MO | Four States Appliance",
    seoDescription: "Dishes coming out dirty? Dishwasher leaking? We offer fast and reliable dishwasher repair in Joplin, Carthage, and Webb City. Call today.",
    heroHeadline: "Reliable Dishwasher Repair",
    heroSubheadline: "Stop washing by hand. We fix leaks, draining issues, and cleaning problems so your dishwasher runs like new again.",
    urgencyMessage: "A leaking dishwasher can cause serious water damage.",
    urgencyDetail: "Water pooling under your dishwasher can warp flooring and cause mold. Act fast to prevent costly damage.",
    repairCostRange: "$100 – $250",
    replaceCostRange: "$500 – $1,500",
    savingsPercent: "76",
    statFixed: "987",
    statFirstVisit: "93",
    symptoms: [
      { text: "Dishes coming out dirty or covered in spots", icon: "glass" },
      { text: "Not draining water at end of cycle", icon: "droplets" },
      { text: "Leaking water onto the kitchen floor", icon: "droplets" },
      { text: "Not starting or buttons unresponsive", icon: "alert" },
      { text: "Making loud grinding or humming noises", icon: "volume" },
      { text: "Not dispensing detergent", icon: "cube" }
    ],
    brands: ["Bosch", "Whirlpool", "KitchenAid", "GE", "Samsung", "LG", "Frigidaire", "Maytag", "Miele"],
    faqs: [
      { q: "Why is there standing water in my dishwasher?", a: "Standing water indicates a draining issue, often caused by a clogged filter, a blocked drain hose, or a failed drain pump. We can clear the blockage quickly." },
      { q: "Is it cheaper to fix a dishwasher or replace it?", a: "Most dishwasher problems (like pumps and valves) are relatively inexpensive to fix compared to the cost of a new unit and installation. We'll give you an honest assessment." },
      { q: "How much does dishwasher repair cost?", a: "Typical dishwasher repairs range from $100 to $250. Common fixes include pump replacements, door latch repairs, and spray arm cleaning." }
    ],
    inlineReview: { name: "Karen W.", text: "Dishwasher was leaving dishes filthy. Turned out to be a clogged spray arm. Fixed in 20 minutes!", stars: 5 },
    expert: {
      name: "Mike Reynolds",
      role: "Dishwasher Systems Specialist",
      experience: "12+ Years Experience",
      bio: "Mike excels at resolving complex drainage and circulation problems. He specializes in Bosch and Miele units, ensuring your dishes come out spotless every time.",
      image: "/mike.png"
    }
  },
  freezer: {
    id: "freezer",
    name: "Freezer",
    image: "/freezer.jpg",
    video: "https://assets.mixkit.co/videos/preview/mixkit-man-fixing-a-refrigerator-in-a-kitchen-41717-large.mp4",
    seoTitle: "Stand-alone Freezer Repair Joplin MO | Emergency Service",
    seoDescription: "Freezer not freezing? Don't lose your food! We provide emergency freezer repair services in the Four States area. Fast and guaranteed.",
    heroHeadline: "Emergency Freezer Repair",
    heroSubheadline: "When your chest or upright freezer fails, every minute counts. We respond quickly to save your frozen goods and fix the issue.",
    urgencyMessage: "A failing freezer means hundreds of dollars in food at risk.",
    urgencyDetail: "Frozen food begins to thaw within hours. Quick action saves your stockpile and your wallet.",
    repairCostRange: "$125 – $300",
    replaceCostRange: "$500 – $1,800",
    savingsPercent: "78",
    statFixed: "743",
    statFirstVisit: "91",
    symptoms: [
      { text: "Not freezing or temperature too warm", icon: "thermometer" },
      { text: "Excessive frost or ice buildup inside", icon: "snowflake" },
      { text: "Compressor running non-stop", icon: "rotate" },
      { text: "Making loud clicking or buzzing sounds", icon: "volume" },
      { text: "Leaking water underneath", icon: "droplets" },
      { text: "Door seal is torn or not sealing", icon: "lock" }
    ],
    brands: ["Frigidaire", "GE", "Whirlpool", "Kenmore", "Sub-Zero", "Amana", "Magic Chef"],
    faqs: [
      { q: "My freezer is frosting up rapidly, what's wrong?", a: "This is typically caused by a failing defrost heater, a bad defrost timer, or a damaged door gasket letting humid air in. It requires a proper diagnostic to isolate the cause." },
      { q: "How much does freezer repair cost?", a: "Most stand-alone freezer repairs range from $125 to $300. Thermostat and seal replacements are among the most common fixes." }
    ],
    inlineReview: { name: "Tom B.", text: "Our chest freezer stopped cooling overnight. They came first thing in the morning and saved all our meat. Lifesavers!", stars: 5 },
    expert: {
      name: "John Mitchell",
      role: "Cold Storage Specialist",
      experience: "15+ Years Experience",
      bio: "John is an expert in sub-zero cooling. He is highly efficient at diagnosing refrigerant leaks and thermostat failures in chest and upright freezers.",
      image: "/john.png"
    }
  },
  microwave: {
    id: "microwave",
    name: "Microwave",
    image: "/microwave.jpg",
    video: "https://assets.mixkit.co/videos/preview/mixkit-man-repairing-an-electrical-device-at-home-41715-large.mp4",
    seoTitle: "Built-In Microwave Repair Joplin MO | Fast Fixes",
    seoDescription: "Microwave not heating or sparking? Four States Appliance Repair provides fast, affordable microwave repair in Joplin, MO.",
    heroHeadline: "Fast Microwave Repair",
    heroSubheadline: "From touchpad errors to magnetron failures, we diagnose and fix all microwave issues quickly and affordably.",
    urgencyMessage: "A sparking microwave is a safety hazard.",
    urgencyDetail: "Electrical arcing inside your microwave can damage the unit or cause a fire. Stop using it and call for repair.",
    repairCostRange: "$75 – $200",
    replaceCostRange: "$200 – $800",
    savingsPercent: "65",
    statFixed: "612",
    statFirstVisit: "96",
    symptoms: [
      { text: "Not heating food at all", icon: "thermometer" },
      { text: "Sparking or arcing inside the cavity", icon: "flame" },
      { text: "Turntable not rotating", icon: "rotate" },
      { text: "Touchpad buttons unresponsive", icon: "alert" },
      { text: "Running but making loud buzzing sounds", icon: "volume" },
      { text: "Door won't close or latch securely", icon: "lock" }
    ],
    brands: ["Samsung", "LG", "Whirlpool", "GE", "Panasonic", "Sharp", "Frigidaire", "KitchenAid"],
    faqs: [
      { q: "Is it worth repairing a microwave?", a: "For built-in or over-the-range microwaves, repair is usually much cheaper than replacement plus installation. For countertop models, we'll give you an honest recommendation." },
      { q: "Why is my microwave sparking?", a: "Sparking is usually caused by a damaged waveguide cover, metal left inside, or a failing magnetron. Stop using it immediately and call for a safety inspection." },
      { q: "How much does microwave repair cost?", a: "Most microwave repairs range from $75 to $200. Magnetron replacements are on the higher end, while simpler fixes like turntable motors are very affordable." }
    ],
    inlineReview: { name: "Jessica W.", text: "Replaced the control board on our built-in microwave perfectly. Very clean and polite.", stars: 5 },
    expert: {
      name: "John Mitchell",
      role: "Built-in Microwave Expert",
      experience: "15+ Years Experience",
      bio: "Microwaves carry dangerous voltages even when unplugged. John is specifically trained to safely discharge and repair complex microwave electronics and magnetrons.",
      image: "/john.png"
    }
  }
};

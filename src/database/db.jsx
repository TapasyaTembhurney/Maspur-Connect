// ============ Navbar / Footer links ============
export const navLinks = [
  { label: 'What we do ?', href: '/what-we-do' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
  { label: 'Suchnaye', href: '/notifications' },
];

// ============ Hero stats ============
export const stats = [
  { value: '2,400+', label: 'Villagers Connected' },
  { value: '120', label: 'Active Volunteers' },
  { value: '35', label: 'Ongoing Projects' },
  { value: '18', label: 'Village Families Helped' },
];

// ============ What We Do services ============
export const services = [
  {
    title: 'Digital Literacy',
    desc: 'Training villagers to use smartphones, internet, and government e-services.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
  },
  {
    title: 'Education Support',
    desc: 'Scholarships, coaching, and learning resources for children and youth.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    ),
  },
  {
    title: 'Healthcare Camps',
    desc: 'Free medical checkups, awareness programs, and health assistance.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    ),
  },
  {
    title: 'Agriculture Aid',
    desc: 'Modern farming techniques, seeds, and market linkage for farmers.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.737 11l-.262-2.813a2 2 0 012.228-2.052l.233.046a2 2 0 011.732 2.414l-.606 6.062a2 2 0 01-1.994 1.824H8.028a2 2 0 01-1.994-1.824l-.606-6.062a2 2 0 011.732-2.414l.233-.046a2 2 0 012.228 2.052L16.263 11" />
    ),
  },
  {
    title: 'Women Empowerment',
    desc: 'Skill development, SHGs, and livelihood programs for women.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    ),
  },
  {
    title: 'Clean Water & Sanitation',
    desc: 'Safe drinking water, toilet construction, and hygiene awareness.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    ),
  },
];

// ============ Gallery ============
export const gallery = [
  { src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop', title: 'Green Fields' },
  { src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1974&auto=format&fit=crop', title: 'Harvest Season' },
  { src: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=2070&auto=format&fit=crop', title: 'Village Sunset' },
  { src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop', title: 'Farming Life' },
];

// ============ About section highlight list ============
export const aboutHighlights = [
  '100% Digital Records',
  'Regular Health Camps',
  'Women SHG Groups',
  'Clean Water Initiative',
];

// ============ Seed notifications (used only if localStorage is empty) ============
export const seedNotifications = [
  {
    id: 'seed-1',
    title: 'Gram Sabha Meeting',
    description: 'Monthly Gram Sabha meeting will be held at the Panchayat Bhavan. All residents are encouraged to attend.',
    datetime: '2026-09-20T10:00',
  },
  {
    id: 'seed-2',
    title: 'Free Health Camp',
    description: 'A free health checkup camp will be organized in collaboration with the district hospital.',
    datetime: '2026-09-25T09:00',
  },
];



// ------------------ DASHBOARD DATA ----------------------


export const mandiData = [
  {
    id: "m-1",
    crop: "Kodo Millet",
    cropHindi: "कोदो",
    category: "millet",
    currentPrice: 3850,
    msp: 3500,
    change: "+₹350 (Above MSP)",
    isPositive: true,
    arrivalQty: "140 Qtl",
    market: "Mashpur Haat Kendra",
  },
  {
    id: "m-2",
    crop: "Kutki Millet",
    cropHindi: "कुटकी",
    category: "millet",
    currentPrice: 4150,
    msp: 3750,
    change: "+₹400 (High Demand)",
    isPositive: true,
    arrivalQty: "95 Qtl",
    market: "Kanker APMC Yard",
  },
  {
    id: "m-3",
    crop: "Swarna Paddy (धान)",
    cropHindi: "धान (स्वर्णा)",
    category: "paddy",
    currentPrice: 2203,
    msp: 2183,
    change: "+ Rajiv Gandhi Nyay Bonus",
    isPositive: true,
    arrivalQty: "620 Qtl",
    market: "Mashpur Primary Co-op Society",
  },
  {
    id: "m-4",
    crop: "Ragi / Finger Millet",
    cropHindi: "मड़ुआ (रागी)",
    category: "millet",
    currentPrice: 3990,
    msp: 3846,
    change: "+₹144 (Steady)",
    isPositive: true,
    arrivalQty: "80 Qtl",
    market: "Mashpur Haat Kendra",
  },
  {
    id: "m-5",
    crop: "Dry Mahua Flower",
    cropHindi: "सूखा महुआ फूल",
    category: "forest",
    currentPrice: 4800,
    msp: 4200,
    change: "+₹600 (Seasonal High)",
    isPositive: true,
    arrivalQty: "185 Qtl",
    market: "TRIFED / Vana Upaj Kendra",
  },
  {
    id: "m-6",
    crop: "Harra & Baheda (Herbal)",
    cropHindi: "हर्रा एवं बहेड़ा",
    category: "forest",
    currentPrice: 2600,
    msp: 2400,
    change: "+₹200",
    isPositive: true,
    arrivalQty: "65 Qtl",
    market: "Bastar Herbal Mandi",
  },
];
 
/** @type {SchemeItem[]} */
export const schemesData = [
  {
    id: "sch-1",
    name: "Rajiv Gandhi Kisan Nyay Yojana",
    nameHindi: "राजीव गांधी किसान न्याय योजना",
    department: "Department of Agriculture, CG",
    beneficiariesInVillage: 418,
    status: "Active",
    disbursedAmount: "₹37.62 Lakhs",
    description: "Input subsidy assistance of ₹9,000 per acre provided directly to paddy and millet farmers in Mashpur.",
    eligibility: "All registered farmers holding land records in Gram Panchayat Mashpur.",
    badgeColor: "emerald",
  },
  {
    id: "sch-2",
    name: "Chhattisgarh Millet Mission",
    nameHindi: "छत्तीसगढ़ मिलेट मिशन",
    department: "State Agriculture & Farmer Welfare",
    beneficiariesInVillage: 240,
    status: "Enrolling",
    disbursedAmount: "₹14.20 Lakhs",
    description: "Free certified Kodo-Kutki seeds, soil health testing, and subsidized solar drying platforms.",
    eligibility: "Farmers with dryland / upland agricultural plots in Kanker district.",
    badgeColor: "amber",
  },
  {
    id: "sch-3",
    name: "Jal Jeevan Mission - Har Ghar Jal",
    nameHindi: "जल जीवन मिशन - हर घर जल",
    department: "Public Health Engineering Department",
    beneficiariesInVillage: 412,
    status: "Active",
    disbursedAmount: "100% Certified",
    description: "Piped drinking water tap connection supplied to every household from the Dudh River filtration unit.",
    eligibility: "All 5 Wards of Mashpur village.",
    badgeColor: "cyan",
  },
  {
    id: "sch-4",
    name: "PM Awas Yojana Gramin",
    nameHindi: "प्रधानमंत्री आवास योजना (ग्रामीण)",
    department: "Rural Development & Panchayat",
    beneficiariesInVillage: 48,
    status: "Active",
    disbursedAmount: "36 Homes Built",
    description: "Financial grant of ₹1.30 Lakhs with DBT release for pucca disaster-resilient housing.",
    eligibility: "Identified SECC deprivation criteria households.",
    badgeColor: "emerald",
  },
  {
    id: "sch-5",
    name: "Bastar Dhokra Shilpi Protsahan",
    nameHindi: "बस्तर ढोकरा शिल्पी प्रोत्साहन",
    department: "Handloom & Handicrafts Board",
    beneficiariesInVillage: 95,
    status: "Enrolling",
    disbursedAmount: "₹8.50 Lakhs",
    description: "Raw brass & beeswax subsidy, safety equipment, and state emporium buyer-seller linkage.",
    eligibility: "Practicing lost-wax bell metal artisans in Ward 3.",
    badgeColor: "amber",
  },
  {
    id: "sch-6",
    name: "Mahtari Vandan Yojana",
    nameHindi: "महतारी वंदन योजना",
    department: "Women & Child Development, CG",
    beneficiariesInVillage: 810,
    status: "Active",
    disbursedAmount: "₹8.10 Lakhs/mo",
    description: "Direct monthly DBT of ₹1,000 transferred to every eligible married woman in the village.",
    eligibility: "Married women residents of Mashpur aged 21 and above.",
    badgeColor: "emerald",
  },
];
 
/** @type {VolunteerTask[]} */
export const volunteerTasksData = [
  {
    id: "vt-1",
    title: "Weekend Science & Gondi Reading Hour",
    ward: "Ward 2 (Primary School)",
    date: "This Saturday, 21 March",
    time: "10:00 AM – 1:00 PM",
    volunteersNeeded: 4,
    volunteersEnrolled: 2,
    category: "Education",
    organizer: "Headmistress Smt. P. Tirkey",
  },
  {
    id: "vt-2",
    title: "Dudh River Bank Sapling Plantation",
    ward: "Ward 1 (Check Dam Perimeter)",
    date: "Sunday, 22 March",
    time: "07:00 AM – 10:30 AM",
    volunteersNeeded: 12,
    volunteersEnrolled: 7,
    category: "Ecology",
    organizer: "Gram Van Samiti Mashpur",
  },
  {
    id: "vt-3",
    title: "Mobile Health Camp Assistance & Vitals",
    ward: "Ward 4 (Milan Tola Shed)",
    date: "Tuesday, 24 March",
    time: "09:00 AM – 02:00 PM",
    volunteersNeeded: 5,
    volunteersEnrolled: 3,
    category: "Health",
    organizer: "Dr. Anita Sahu (PHC Mashpur)",
  },
  {
    id: "vt-4",
    title: "Dhokra Art Digital Photography Catalog",
    ward: "Ward 3 (Crafts Hub)",
    date: "Thursday, 26 March",
    time: "02:00 PM – 05:30 PM",
    volunteersNeeded: 3,
    volunteersEnrolled: 1,
    category: "Craft",
    organizer: "Master Craftsman Somaru Baghel",
  },
  {
    id: "vt-5",
    title: "Millet Seed Distribution & Record Entry",
    ward: "Ward 5 (Krishi Seva Kendra)",
    date: "Saturday, 28 March",
    time: "11:00 AM – 03:00 PM",
    volunteersNeeded: 4,
    volunteersEnrolled: 4,
    category: "Community",
    organizer: "Gram Sevak Rameshwar Netam",
    claimed: true,
  },
];
 
/** @type {GrievanceItem[]} */
export const grievancesData = [
  {
    id: "gr-1",
    ticketNo: "MSH-2026-084",
    title: "Solar Streetlight flicker near Ward 3 Banyan Chauk",
    ward: "Ward 3",
    submittedBy: "Manglu Ram Netam",
    date: "Yesterday",
    category: "Electricity",
    status: "In Progress",
    resolutionNote: "CREDA technician dispatched. Battery inverter check scheduled for 2 PM today.",
  },
  {
    id: "gr-2",
    ticketNo: "MSH-2026-079",
    title: "Check valve replacement at Handpump #4",
    ward: "Ward 1",
    submittedBy: "Phoolmati Bai",
    date: "3 days ago",
    category: "Water",
    status: "Resolved",
    resolutionNote: "Replaced with stainless steel check-valve. Water flow verified at 18 LPM.",
  },
  {
    id: "gr-3",
    ticketNo: "MSH-2026-075",
    title: "Desilting of feeder canal before monsoon",
    ward: "Ward 5",
    submittedBy: "Bhurwa Ram Mandavi",
    date: "5 days ago",
    category: "Agriculture",
    status: "Under Inspection",
    resolutionNote: "Included under MGNREGA muster roll for next Monday start.",
  },
  {
    id: "gr-4",
    ticketNo: "MSH-2026-068",
    title: "School boundary wall lime whitewash & painting",
    ward: "Ward 2",
    submittedBy: "School Management Committee",
    date: "1 week ago",
    category: "Roads",
    status: "Resolved",
    resolutionNote: "Completed by youth volunteer group on 14 March.",
  },
];
 
/** @type {WardData[]} */
export const wardsData = [
  {
    wardNo: 1,
    name: "Dudh Kinar Para",
    nameHindi: "दूध किनार पारा",
    households: 84,
    population: 680,
    representative: "Shri Lachhan Ram Netam",
    waterStatus: "100% Normal",
    solarPower: "18.4 kWp",
    activeProjects: ["Check Dam Revetment", "Bamboo Tree Nursery", "Jal Sanchay Pit"],
  },
  {
    wardNo: 2,
    name: "Panchayat Chauk",
    nameHindi: "पंचायत चौक",
    households: 112,
    population: 940,
    representative: "Smt. Sunita Markam (Sarpanch)",
    waterStatus: "100% Normal",
    solarPower: "28.0 kWp",
    activeProjects: ["Primary School Smart Room", "Health Sub-Centre OPD", "Village Wi-Fi"],
  },
  {
    wardNo: 3,
    name: "Dhokra Shilp Para",
    nameHindi: "ढोकरा शिल्प पारा",
    households: 76,
    population: 580,
    representative: "Shri Somaru Ram Mandavi",
    waterStatus: "100% Normal",
    solarPower: "16.5 kWp",
    activeProjects: ["Artisan Common Facility Shed", "Brass Foundry Ventilation", "Solar Drying Yard"],
  },
  {
    wardNo: 4,
    name: "Milan Tola",
    nameHindi: "मिलन टोला",
    households: 92,
    population: 740,
    representative: "Smt. Sukhmati Bai",
    waterStatus: "100% Normal",
    solarPower: "19.0 kWp",
    activeProjects: ["Weekly Haat Shed Extension", "SHG Spice Packaging", "Cold Room Storage"],
  },
  {
    wardNo: 5,
    name: "Krishi Seva Para",
    nameHindi: "कृषि सेवा पारा",
    households: 48,
    population: 480,
    representative: "Shri Sukhdev Salam",
    waterStatus: "100% Normal",
    solarPower: "12.5 kWp",
    activeProjects: ["Heirloom Millet Seed Bank", "Organic Fertilizer Vermicompost", "Custom Hiring Tractor Unit"],
  },
];
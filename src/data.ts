/**
 * Realistic dummy data for NestVerify platform
 */

import { Project, Lead, Chat, Notification, AnalyticsData } from './types';

export const CITIES = ["Bangalore", "Pune", "Hyderabad", "Mumbai", "Chennai"];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    name: "Northbank Elysian",
    builder: {
      name: "Northbank Group",
      rating: 4.8,
      verified: true,
      founded: 1986,
      hq: "Bangalore",
      delivered: 285,
      reliability: {
        overall: 4.7,
        onTime: 82,
        quality: 4.6,
        communication: 4.8,
        support: 4.5
      },
      pastProjects: [
        { name: "Northbank City", city: "Hyderabad", units: 480, delivery: "On Time", status: "Delivered" },
        { name: "Northbank Lakeside", city: "Bangalore", units: 320, delivery: "3mo late", status: "Delivered" },
        { name: "Northbank Falcon City", city: "Bangalore", units: 2500, delivery: "On Time", status: "Delivered" },
        { name: "Northbank Tranquility", city: "Bangalore", units: 2368, delivery: "On Time", status: "Delivered" },
        { name: "Northbank Shantiniketan", city: "Bangalore", units: 3000, delivery: "6mo late", status: "Delivered" },
      ]
    },
    locality: "Whitefield",
    city: "Bangalore",
    priceRange: "₹78L – ₹1.45Cr",
    minPrice: 7800000,
    maxPrice: 14500000,
    bhkTypes: ["2BHK", "3BHK"],
    areaRange: "950 – 1,850 sq ft",
    possessionDate: "Dec 2025",
    completionPercentage: 68,
    reraId: "KA/REA/1251/2022",
    status: "Under Construction",
    description: "Northbank Elysian is a premium residential project located in the heart of Whitefield. Spread across 6 acres, it offers a blend of luxury and nature with 70% open spaces and world-class amenities.",
    amenities: ["Swimming Pool", "Gym", "Clubhouse", "Children's Play Area", "24hr Security", "EV Charging", "Jogging Track", "Amphitheatre"],
    highlights: ["Zero Brokerage", "RERA Registered", "Vastu Compliant", "Green Building"],
    configurations: [
      { type: "2BHK", area: "1,050 sq ft", price: "₹78L–₹95L", available: 24 },
      { type: "3BHK", area: "1,450 sq ft", price: "₹1.1Cr–₹1.3Cr", available: 18 }
    ],
    timeline: [
      { stage: "Foundation", status: "Completed", date: "Jan 2023", actualDate: "Jan 2023" },
      { stage: "Structure", status: "Completed", date: "Aug 2023", actualDate: "Aug 2023" },
      { stage: "Brickwork", status: "Completed", date: "Jan 2024", actualDate: "Jan 2024" },
      { stage: "Finishing", status: "In Progress", date: "Jun 2025", actualDate: "Expected Jun 2025" },
      { stage: "Handover", status: "Pending", date: "Dec 2025", actualDate: "Expected Dec 2025" }
    ],
    updates: [
      { id: "u1", date: "March 28, 2025", title: "Tower B reaches Floor 12", description: "Structural work for Tower B is progressing ahead of schedule. Internal plastering has started for lower floors.", completion: 68, verified: true },
      { id: "u2", date: "February 15, 2025", title: "Clubhouse Foundation Complete", description: "The foundation work for the 20,000 sq ft clubhouse is now complete. Superstructure work begins next week.", completion: 62, verified: true },
      { id: "u3", date: "January 10, 2025", title: "Tower A External Painting", description: "First coat of external weather-proof paint is being applied to Tower A.", completion: 58, verified: false }
    ],
    reviews: [
      { id: "r1", user: "Rahul S.", city: "Bangalore", rating: 5, verified: true, title: "Great transparency", body: "I've been tracking this project for 6 months. The weekly updates are very helpful and accurate.", date: "2 weeks ago", helpful: 12 },
      { id: "r2", user: "Priya M.", city: "Pune", rating: 4, verified: true, title: "Good location", body: "The location is perfect for IT professionals. Builder seems reliable based on past data.", date: "1 month ago", helpful: 8 }
    ],
    location: {
      centerDistance: "12 km",
      nearby: {
        schools: ["Whitefield Global School (1.2km)", "The Deens Academy (2.5km)", "Vydehi School of Excellence (3.1km)"],
        hospitals: ["Columbia Asia Hospital (1.8km)", "Manipal Hospital (4.2km)", "Vydehi Hospital (3.5km)"],
        metro: ["Whitefield Metro Station (0.8km)", "Kadugodi Metro Station (1.5km)"],
        itParks: ["ITPL (2.1km)", "Sigma Tech Park (3.5km)", "GR Tech Park (1.2km)"]
      }
    }
  },
  {
    id: "p2",
    name: "Kestrel Cornerstone",
    builder: { name: "Kestrel Group", rating: 4.6, verified: true },
    locality: "Sarjapur Road",
    city: "Bangalore",
    priceRange: "₹65L – ₹1.2Cr",
    minPrice: 6500000,
    maxPrice: 12000000,
    bhkTypes: ["2BHK", "3BHK", "4BHK"],
    areaRange: "1,100 – 2,200 sq ft",
    possessionDate: "June 2026",
    completionPercentage: 45,
    status: "Under Construction",
    reraId: "KA/REA/0982/2023",
    delayWarning: "3 months behind schedule"
  },
  {
    id: "p3",
    name: "Alderline Woodsville",
    builder: { name: "Alderline Properties", rating: 4.7, verified: true },
    locality: "Hinjewadi",
    city: "Pune",
    priceRange: "₹55L – ₹98L",
    minPrice: 5500000,
    maxPrice: 9800000,
    bhkTypes: ["1BHK", "2BHK", "3BHK"],
    areaRange: "650 – 1,400 sq ft",
    possessionDate: "Ready to Move",
    completionPercentage: 100,
    status: "Ready to Move",
    reraId: "P52100028592"
  },
  {
    id: "p4",
    name: "Sorrel Dream Gardens",
    builder: { name: "Sorrel Limited", rating: 4.9, verified: true },
    locality: "Thanisandra",
    city: "Bangalore",
    priceRange: "₹85L – ₹1.6Cr",
    minPrice: 8500000,
    maxPrice: 16000000,
    bhkTypes: ["2BHK", "3BHK"],
    areaRange: "1,200 – 1,900 sq ft",
    possessionDate: "March 2027",
    completionPercentage: 25,
    status: "Under Construction",
    reraId: "KA/REA/1102/2024"
  }
];

export const LEADS = [
  { id: "l1", name: "Rahul Sharma", city: "Bangalore", project: "Northbank Elysian", bhk: "2BHK", budget: "₹80L - ₹1Cr", timeline: "Immediate", source: "Chat", status: "New", date: "2024-03-25" },
  { id: "l2", name: "Priya Mehta", city: "Mumbai", project: "Northbank Elysian", bhk: "3BHK", budget: "₹1.2Cr - ₹1.5Cr", timeline: "3-6m", source: "Form", status: "Qualified", date: "2024-03-22" },
  { id: "l3", name: "Amit Patel", city: "Pune", project: "Alderline Woodsville", bhk: "2BHK", budget: "₹60L - ₹80L", timeline: "6-12m", source: "Video Call", status: "Contacted", date: "2024-03-20" },
  { id: "l4", name: "Sneha Reddy", city: "Hyderabad", project: "Northbank Elysian", bhk: "2BHK", budget: "₹75L - ₹90L", timeline: "Immediate", source: "Chat", status: "Converted", date: "2024-03-15" },
];

export const CHATS = [
  { id: "c1", buyer: "Rahul S.", project: "Northbank Elysian", lastMessage: "Can I see the floor plan for Tower B?", time: "10:30 AM", unread: 2, messages: [
    { sender: "buyer", text: "Hi, I'm interested in the 2BHK units.", time: "10:00 AM" },
    { sender: "builder", text: "Hello Rahul! We have several 2BHK options available in Tower B and C. Would you like a brochure?", time: "10:15 AM" },
    { sender: "buyer", text: "Can I see the floor plan for Tower B?", time: "10:30 AM" }
  ]},
  { id: "c2", buyer: "Ananya K.", project: "Kestrel Cornerstone", lastMessage: "Thank you for the update.", time: "Yesterday", unread: 0, messages: [] }
];

export const ANALYTICS_DATA = [
  { month: "Oct", leads: 45, views: 1200 },
  { month: "Nov", leads: 52, views: 1450 },
  { month: "Dec", leads: 48, views: 1300 },
  { month: "Jan", leads: 65, views: 1800 },
  { month: "Feb", leads: 82, views: 2100 },
  { month: "Mar", leads: 127, views: 3200 },
];

export const NOTIFICATIONS = [
  { id: "n1", type: "update", text: "Northbank Elysian posted new photos — Floor 14 complete", date: "2 hours ago", read: false },
  { id: "n2", type: "price", text: "Alderline Woodsville — Price increased by ₹2L", date: "1 day ago", read: true },
  { id: "n3", type: "delay", text: "Kestrel Cornerstone — Possession delayed by 3 months", date: "3 days ago", read: false },
];

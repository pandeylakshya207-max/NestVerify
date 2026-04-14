export interface Builder {
  name: string;
  rating: number;
  verified: boolean;
  founded?: number;
  hq?: string;
  delivered?: number;
  reliability?: {
    overall: number;
    onTime: number;
    quality: number;
    communication: number;
    support: number;
  };
  pastProjects?: Array<{
    name: string;
    city: string;
    units: number;
    delivery: string;
    status: string;
  }>;
}

export interface Project {
  id: string;
  name: string;
  builder: Builder;
  locality: string;
  city: string;
  priceRange: string;
  minPrice: number;
  maxPrice: number;
  bhkTypes: string[];
  areaRange: string;
  possessionDate: string;
  completionPercentage: number;
  status: "Under Construction" | "Ready to Move" | "Delivered";
  reraId: string;
  description?: string;
  amenities?: string[];
  highlights?: string[];
  configurations?: Array<{
    type: string;
    area: string;
    price: string;
    available: number;
  }>;
  timeline?: Array<{
    stage: string;
    status: "Completed" | "In Progress" | "Pending";
    date: string;
    actualDate: string;
  }>;
  updates?: Array<{
    id: string;
    date: string;
    title: string;
    description: string;
    completion: number;
    verified: boolean;
  }>;
  reviews?: Array<{
    id: string;
    user: string;
    city: string;
    rating: number;
    verified: boolean;
    title: string;
    body: string;
    date: string;
    helpful: number;
  }>;
  location?: {
    centerDistance: string;
    nearby: {
      schools: string[];
      hospitals: string[];
      metro: string[];
      itParks: string[];
    };
  };
  delayWarning?: string;
}

export interface Lead {
  id: string;
  name: string;
  city: string;
  project: string;
  bhk: string;
  budget: string;
  timeline: string;
  source: string;
  status: "New" | "Contacted" | "Qualified" | "Converted" | "Lost";
  date: string;
}

export interface ChatMessage {
  sender: "buyer" | "builder";
  text: string;
  time: string;
}

export interface Chat {
  id: string;
  buyer: string;
  project: string;
  lastMessage: string;
  time: string;
  unread: number;
  messages: ChatMessage[];
}

export interface Notification {
  id: string;
  type: "update" | "price" | "delay";
  text: string;
  date: string;
  read: boolean;
}

export interface AnalyticsData {
  month: string;
  leads: number;
  views: number;
}

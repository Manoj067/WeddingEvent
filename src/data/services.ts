import { Heart, Building2, Users, Gift, Camera, Music } from 'lucide-react';
import { Service } from '../types';

export const services: Service[] = [
  {
    icon: Heart,
    title: "Wedding Planning",
    description: "Complete wedding planning from engagement to reception, creating your perfect day with attention to every detail.",
    features: ["Venue Selection", "Vendor Coordination", "Timeline Management", "Day-of Coordination"]
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description: "Professional corporate event management including conferences, product launches, and team building activities.",
    features: ["Conference Planning", "Product Launches", "Team Building", "Award Ceremonies"]
  },
  {
    icon: Users,
    title: "Social Celebrations",
    description: "Birthday parties, anniversaries, graduations, and other milestone celebrations made memorable.",
    features: ["Birthday Parties", "Anniversaries", "Graduations", "Family Reunions"]
  },
  {
    icon: Gift,
    title: "Special Occasions",
    description: "Custom event planning for unique celebrations, festivals, and cultural events with personalized touches.",
    features: ["Cultural Events", "Festivals", "Religious Ceremonies", "Custom Celebrations"]
  },
  {
    icon: Camera,
    title: "Photography & Videography",
    description: "Professional photography and videography services to capture every precious moment of your event.",
    features: ["Event Photography", "Videography", "Live Streaming", "Photo Booths"]
  },
  {
    icon: Music,
    title: "Entertainment Services",
    description: "Complete entertainment solutions including DJs, live bands, performers, and audio-visual equipment.",
    features: ["DJ Services", "Live Bands", "Performers", "AV Equipment"]
  }
];
// Type definitions for the application

export interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
}

export interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Stat {
  icon: React.ComponentType<{ className?: string }>;
  number: string;
  label: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  date: string;
  message: string;
}

export interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  details: string[];
}
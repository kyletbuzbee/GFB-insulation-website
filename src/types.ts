export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  gridArea?: string; // For Bento grid layout control
}

export interface Review {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
  date: string;
}

export enum FormStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

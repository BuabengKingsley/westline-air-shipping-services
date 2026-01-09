
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio?: string;
}

export interface Partner {
  name: string;
  location: string;
}

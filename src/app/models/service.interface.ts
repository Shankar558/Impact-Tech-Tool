export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  capabilities: string[];
  industries: string[];
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  client?: string;
  year?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image?: string;
  description?: string;
}

export interface ContactPerson {
  id: string;
  name: string;
  role: string;
  email: string;
  phone?: string;
  department: string;
}

export interface EnquiryForm {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  industry: string;
  serviceRequired: string;
  projectRequirement: string;
  message: string;
}

export interface Machine {
  id: string;
  name: string;
  type: string;
  specifications: {
    [key: string]: string;
  };
  image?: string;
}

export interface StatisticItem {
  value: number;
  suffix: string;
  label: string;
  icon?: string;
}

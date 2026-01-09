
import React from 'react';
import { Plane, Ship, Droplet, Warehouse, Users, Globe } from 'lucide-react';
import { Service, TeamMember, Partner } from './types';

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Aircraft Chartering",
    description: "Specialized airline services including aircraft chartering for both private and commercial needs across the West Coast.",
    icon: "plane"
  },
  {
    id: 2,
    title: "Transport of Persons & Goods",
    description: "Efficient and secure transport solutions by air and land, connecting major hubs in Ghana, Benin, and Cote d'Ivoire.",
    icon: "globe"
  },
  {
    id: 3,
    title: "Marine & Offshore Services",
    description: "Robust upstream services provided to partners like Tullow Ghana, backed by over a decade of operational excellence.",
    icon: "ship"
  },
  {
    id: 4,
    title: "Oil & Gas Services",
    description: "Downstream importation and distribution of petroleum products (AGO & PMS) with extensive storage infrastructure.",
    icon: "droplet"
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 1,
    name: "Dr. E.J. Owusu-Bonsu",
    role: "Chairman",
    bio: "Professional Petro-Chemical Engineer with over 35 years of industry experience."
  },
  {
    id: 2,
    name: "Mr. George Nti Brobbey",
    role: "Chief Executive Officer",
    bio: "Leading Westline's multi-national expansion and strategic partnerships."
  },
  {
    id: 3,
    name: "Captain Benedict Nonterah",
    role: "Board Member (Pilot)",
    bio: "Professional pilot bringing aviation expertise to the airline services division."
  },
  {
    id: 4,
    name: "Felix Safo",
    role: "Board Member (Aircraft Engineer)",
    bio: "Ensuring technical excellence and safety in all aviation operations."
  },
  {
    id: 5,
    name: "Emmanuel Seka",
    role: "Board Member (Chartered Accountant)",
    bio: "Driving financial health and transparency across regional branches."
  }
];

export const PARTNERS: Partner[] = [
  { name: "Richrise Atlanta LLC", location: "USA" },
  { name: "Finatec", location: "Ghana" },
  { name: "Sonacop", location: "Benin" }
];

export const CONTACT_INFO = {
  address: "36 Manet, Senchi Street, Airport, Accra",
  postal: "P.M.B 55, Kotoka International Airport, Accra – Ghana",
  phones: ["+233 (0) 505 173 884", "+233 (0) 242 990 222"],
  emails: ["info@westlinesshipping.com", "wofabrobbey@gmail.com"],
  website: "www.westlinesshipping.com"
};

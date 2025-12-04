export interface ContactType {
  id: string;
  name: string;
  image: string;
  role: string;
  connected: string;
  email: string;
  phone: string;
  website: string;
}
export const contacts = [
  {
    id: "1",
    name: "Evan Nicolini",
    image: "/images/img.jpg",
    role: "Founder - Custom Esignature",
    connected: "Nov 20, 2025",
    email: "evan@customesignature.com",
    phone: "+1 (123) 000-1111",
    website: "customesignature.com",
  },
  {
    id: "2",
    name: "Sarah Wayne",
    image: "/images/img.jpg",
    role: "Marketing Expert",
    connected: "Dec 02, 2025",
    email: "sarah@example.com",
    phone: "+1 (123) 222-3333",
    website: "marketinggirl.com",
  },
  {
    id: "3",
    name: "Daniel Roy",
    image: "/images/img.jpg",
    role: "Product Manager",
    connected: "Jan 10, 2025",
    email: "daniel@example.com",
    phone: "+1 (123) 444-5555",
    website: "productroy.com",
  },
];
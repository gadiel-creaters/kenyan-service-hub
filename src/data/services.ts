// Mock data for services
export interface Service {
  id: string;
  title: string;
  vendor: string;
  vendorVerified: boolean;
  category: string;
  location: string;
  priceRange: string;
  rating: number;
  reviews: number;
  image: string;
  featured: boolean;
  description: string;
}

export const categories = [
  { name: "Catering", icon: "🍽️", count: 245, slug: "catering" },
  { name: "Photography", icon: "📸", count: 189, slug: "photography" },
  { name: "Event Planning", icon: "🎪", count: 156, slug: "event-planning" },
  { name: "Beauty & Salon", icon: "💅", count: 312, slug: "beauty-salon" },
  { name: "Cleaning", icon: "🧹", count: 278, slug: "cleaning" },
  { name: "Car Hire", icon: "🚗", count: 134, slug: "car-hire" },
  { name: "Tour & Travel", icon: "✈️", count: 198, slug: "tour-travel" },
  { name: "Weddings", icon: "💒", count: 167, slug: "weddings" },
  { name: "Interior Design", icon: "🛋️", count: 89, slug: "interior-design" },
  { name: "Fitness", icon: "💪", count: 145, slug: "fitness" },
  { name: "Tutoring", icon: "📚", count: 234, slug: "tutoring" },
  { name: "Repairs", icon: "🔧", count: 267, slug: "repairs" },
  { name: "Moving", icon: "📦", count: 123, slug: "moving" },
  { name: "Web Design", icon: "💻", count: 178, slug: "web-design" },
  { name: "Security", icon: "🛡️", count: 92, slug: "security" },
  { name: "DJs & MCs", icon: "🎵", count: 156, slug: "djs-mcs" },
];

export const services: Service[] = [
  {
    id: "1",
    title: "Premium Wedding Photography",
    vendor: "Lens & Light Studios",
    vendorVerified: true,
    category: "Photography",
    location: "Nairobi, Westlands",
    priceRange: "KSh 25,000 - 80,000",
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
    featured: true,
    description: "Award-winning wedding photography with cinematic storytelling. We capture every precious moment of your special day with artistry and passion.",
  },
  {
    id: "2",
    title: "Executive Catering Services",
    vendor: "Savanna Kitchen",
    vendorVerified: true,
    category: "Catering",
    location: "Nairobi, Karen",
    priceRange: "KSh 15,000 - 150,000",
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop",
    featured: true,
    description: "From intimate dinners to grand corporate events, we deliver exceptional culinary experiences with authentic African and international cuisines.",
  },
  {
    id: "3",
    title: "Luxury Interior Design",
    vendor: "Amani Spaces",
    vendorVerified: true,
    category: "Interior Design",
    location: "Nairobi, Kilimani",
    priceRange: "KSh 50,000 - 500,000",
    rating: 4.7,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop",
    featured: true,
    description: "Transform your space with our award-winning interior design services. Modern African aesthetics meets functional elegance.",
  },
  {
    id: "4",
    title: "Professional Deep Cleaning",
    vendor: "SparkleClean KE",
    vendorVerified: false,
    category: "Cleaning",
    location: "Nairobi, CBD",
    priceRange: "KSh 3,000 - 15,000",
    rating: 4.6,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop",
    featured: false,
    description: "Comprehensive deep cleaning services for homes and offices. We use eco-friendly products and professional-grade equipment.",
  },
  {
    id: "5",
    title: "Safari & Adventure Tours",
    vendor: "Maasai Trails",
    vendorVerified: true,
    category: "Tour & Travel",
    location: "Nairobi",
    priceRange: "KSh 8,000 - 120,000",
    rating: 4.9,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop",
    featured: true,
    description: "Experience the magic of Kenya with our expertly guided safari and adventure tours. From Maasai Mara to Diani Beach.",
  },
  {
    id: "6",
    title: "Event Planning & Coordination",
    vendor: "Celebration Co.",
    vendorVerified: true,
    category: "Event Planning",
    location: "Mombasa",
    priceRange: "KSh 20,000 - 200,000",
    rating: 4.8,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
    featured: false,
    description: "Full-service event planning for weddings, corporate events, and private celebrations. We bring your vision to life.",
  },
  {
    id: "7",
    title: "Mobile Car Detailing",
    vendor: "AutoShine Pro",
    vendorVerified: false,
    category: "Car Hire",
    location: "Nairobi, Lavington",
    priceRange: "KSh 2,000 - 8,000",
    rating: 4.5,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&h=400&fit=crop",
    featured: false,
    description: "Premium mobile car detailing that comes to you. Interior and exterior detailing with premium products.",
  },
  {
    id: "8",
    title: "Personal Fitness Training",
    vendor: "FitLife Kenya",
    vendorVerified: true,
    category: "Fitness",
    location: "Nairobi, Riverside",
    priceRange: "KSh 5,000 - 25,000/mo",
    rating: 4.7,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
    featured: false,
    description: "Personalized fitness programs designed for your goals. In-home or gym-based training with certified instructors.",
  },
];

export const locations = [
  "Nairobi",
  "Mombasa",
  "Kisumu",
  "Nakuru",
  "Eldoret",
  "Thika",
  "Malindi",
  "Nanyuki",
  "Nyeri",
  "Machakos",
];

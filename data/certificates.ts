// data/certificates.ts
export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  credential: string;
  description: string;
  image: string;
  tags: string[];
}

export const certificates: Certificate[] = [
  {
    id: "apple-mac-ipad-trainer",
    title: "Move to Mac & iPad Foundations Trainer",
    issuer: "Apple Professional Learning Specialist",
    credential: "Certified Trainer",
    description: "Certified to train and support users to personalize, navigate, and create within Apple macOS and iPadOS ecosystems.",
    image: "/apple-cert.jpg",
    tags: ["Apple Certified", "macOS", "iPadOS", "IT Training"]
  }
];
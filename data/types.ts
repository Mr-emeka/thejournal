import { StaticImageData } from "next/image";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  featuredImage: string | StaticImageData;
  content: string;
}

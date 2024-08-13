import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.uniproject-tech.net/",
      priority: 1,
    }
  ];
}

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.uniproject.jp/",
      priority: 1,
    },
    {
      url: "https://www.uniproject.jp/contact",
      priority: 1,
    }
  ];
}

import type { MetadataRoute } from "next";
import { getLastModifiedDate } from "@/lib/git";
import { getAllPosts } from "@/lib/posts";
import { create } from "domain";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    {
      path: "/",
      priority: 1
    },
    {
      path: "/contact",
      priority: 0.5
    },
    {
      path: "/about",
      priority: 0.8
    },
    {
      path: "/announce",
      priority: 0.7
    },
    {
      path: "/cookie",
      priority: 0.3
    },
    {
      path: "/join",
      priority: 0.9
    }
  ];

  // 通常ページのサイトマップエントリーを生成
  const staticPages = pages.map(page => ({
    url: `https://www.uniproject.jp${page.path}`,
    lastModified: getLastModifiedDate(`src/app${page.path}/page.tsx`),
    priority: page.priority
  }));

  // 投稿記事のサイトマップエントリーを生成
  const posts = getAllPosts();
  const postPages = posts.map(post => ({
    url: `https://www.uniproject.jp/announce/${post.slug}`,
    lastModified: getLastModifiedDate(`posts/${post.slug}.md`),
    create: post.date,
    priority: 0.6 // 記事ページの優先度
  }));

  // 静的ページと投稿ページを結合して返す
  return [...staticPages, ...postPages];
}

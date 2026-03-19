import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import PostList from "@/components/RecentPostList";
import { getLastModifiedDate } from "@/lib/git";
import { getAllPosts, getPostBySlug, getRecentPosts } from "@/lib/posts";

export const dynamic = "force-static";
export const dynamicParams = false;

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/button";

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "記事が見つかりません  | デジタル創作サークルUniProject",
      description: "指定された記事は見つかりませんでした。",
    };
  }

  return {
    title: `${post.title} | デジタル創作サークルUniProject`,
    description: post.description || "詳細はこの記事をご覧ください。",
    openGraph: {
      title: `${post.title}`,
      siteName: "デジタル創作サークルUniProject",
      description: post.description || "詳細はこの記事をご覧ください。",
      type: "article",
      url: `https://uniproject.jp/announce/${slug}`,
      ...(post.ogImage
        ? {
            images: [
              {
                url: `https://uniproject.jp${post.ogImage}`,
                alt: post.title,
              },
            ],
          }
        : {}),
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

type PostPageProps = { params: Promise<{ slug: string }> };

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  // 最終更新日を取得
  const lastModified = getLastModifiedDate(`posts/${slug}.md`);
  // 最近の投稿を取得
  const posts = await getRecentPosts(8);

  return (
    <main className="min-h-screen w-full bg-linear-to-br from-slate-50 via-white to-slate-50">
      {/* ヘッダーセクション */}
      <section className="w-full pt-28 pb-16 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-4">
            <h1 className="text-3xl lg:text-4xl font-bold font-sansen tracking-wide text-white animate-slideUp">
              {post.title}
            </h1>
            <div className="flex flex-col items-center gap-2 text-white/80 font-sansjp tracking-wider animate-fadeInUp animation-delay-300">
              <p className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>投稿日</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                投稿日: {new Date(post.date).toLocaleDateString("ja-JP")}
              </p>
              <p className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>最終更新日</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                最終更新: {lastModified.toLocaleDateString("ja-JP")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 記事本文 */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white/80 backdrop-blur-xs rounded-2xl shadow-lg p-8 animate-fadeIn">
          <div className="prose-lg prose-slate w-full">
            <div className="markdown">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </article>

      {/* 最近のアナウンス */}
      <section className="w-full py-16 bg-linear-to-br from-slate-50/50 via-white to-slate-50/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold font-sansen mb-8 text-center animate-fadeInUp">
            最近のアナウンス
          </h2>
          <PostList
            posts={posts}
            dirname="announce"
            className="bg-white/80 backdrop-blur-xs rounded-2xl shadow-lg overflow-hidden animate-fadeInUp animation-delay-300"
          />
          <div className="text-center mt-8 animate-fadeInUp animation-delay-500">
            <Button
              href="/announce"
              className="border border-slate-200 bg-white hover:bg-slate-50 hover:scale-105 transition-all"
            >
              一覧を見る
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

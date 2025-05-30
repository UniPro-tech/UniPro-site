import { getPostBySlug, getRecentPosts } from "@/lib/posts";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import PostList from "@/components/RecentPostList";

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/button";

export async function generateMetadata({
  params
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "記事が見つかりません  | デジタル創作サークルUniProject",
      description: "指定された記事は見つかりませんでした。"
    };
  }

  return {
    title: `${post.title} | デジタル創作サークルUniProject`,
    description: post.description || "詳細はこの記事をご覧ください。",
    openGraph: {
      title: post.title,
      description: post.description || "詳細はこの記事をご覧ください。",
      type: "article",
      url: `https://uniproject.jp/announce/${slug}`
    }
  };
}

type PostPageProps = { params: Promise<{ slug: string }> };

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    notFound();
  }
  const posts = await getRecentPosts(8);

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* ヘッダーセクション */}
      <section className="w-full pt-28 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-4">
            <h1 className="text-3xl lg:text-4xl font-bold font-sansen tracking-wide text-white animate-slideUp">
              {post.title}
            </h1>
            <p className="text-white/80 font-sansjp tracking-wider animate-fadeInUp animation-delay-300">
              {new Date(post.date).toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* 記事本文 */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 animate-fadeIn">
          <div className="prose-lg prose-slate w-full">
            <ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown">
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>

      {/* 最近のアナウンス */}
      <section className="w-full py-16 bg-gradient-to-br from-slate-50/50 via-white to-slate-50/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold font-sansen mb-8 text-center animate-fadeInUp">
            最近のアナウンス
          </h2>
          <PostList
            posts={posts}
            dirname="announce"
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden animate-fadeInUp animation-delay-300"
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

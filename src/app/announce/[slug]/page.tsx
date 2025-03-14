import { getPostBySlug, getRecentPosts } from "@/lib/posts";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import PostList from "@/components/PostList";

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/button";

export async function generateMetadata({
  params
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug("announce", slug);

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

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug("announce", slug);
  if (!post) {
    notFound();
  }
  const markdownContent = `
# ${post.title}

投稿日: ${new Date(post.date).toLocaleDateString()}
  
${post.content}
  `;
  const posts = await getRecentPosts("announce", 8);

  return (
    <div className="bg-white min-h-screen w-full text-black pt-20 lg:pt-40 space-y-10 pb-20">
      <article className="min-h-96 p-4 w-full">
        <ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown mx-auto">
          {markdownContent}
        </ReactMarkdown>
      </article>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl mx-auto lg:w-2/5 w-4/5 text-left mb-5">
          最近のアナウンス
        </h1>
        <PostList
          posts={posts}
          dirname="announce"
          className={"min-h-[200px] bg-white lg:w-2/5 w-4/5 mx-auto"}
        />
        <Button href="/announce" className="mx-auto mt-5">
          一覧を見る
        </Button>
      </div>
    </div>
  );
}

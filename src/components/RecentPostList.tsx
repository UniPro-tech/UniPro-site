import Link from "next/link";
import escape from "escape-html";

import { Post } from "@/lib/posts";

export const dynamic = "force-static";

type PostCardProps = {
  dirname: string;
  slug: string;
  title: string;
  date: string;
  description: string;
};

const PostCard = ({
  dirname,
  slug,
  title,
  date,
  description
}: PostCardProps) => {
  return (
    <div
      className="post-card w-full p-4 sm:p-6 bg-white rounded-xl transition-all duration-300 hover:bg-slate-50 border border-slate-100"
      key={slug}
    >
      <div className="flex flex-col mb-4">
        <div className="inline-flex items-center mb-2">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
            {date}
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
          {title}
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm mb-4 line-clamp-2">
          {description}
        </p>
      </div>
      <Link
        href={`/${escape(dirname)}/${escape(slug)}`}
        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm"
      >
        続きを読む
        <svg
          className="w-3 h-3 sm:w-4 sm:h-4 ml-1"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  );
};

type PostListProps = {
  dirname: string;
  posts: Post[];
  className?: string;
  listClassName?: string;
};

const PostList = ({
  dirname,
  posts,
  className,
  listClassName
}: PostListProps) => {
  return (
    <div className={`${className} flex flex-col items-center p-4 sm:p-6`}>
      <div
        className={`grid gap-4 sm:gap-6 w-full ${listClassName || "grid-cols-1 md:grid-cols-2"}`}
      >
        {posts.map(post => (
          <PostCard
            dirname={dirname}
            key={post.slug}
            slug={post.slug}
            title={post.title}
            date={post.date.toLocaleDateString("ja-JP")}
            description={post.description}
          />
        ))}
      </div>
    </div>
  );
};

export default PostList;

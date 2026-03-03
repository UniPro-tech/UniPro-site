import escapeHTML from "escape-html";
import Link from "next/link";

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
  description,
}: PostCardProps) => {
  return (
    <div
      className="post-card w-full p-6 bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:bg-slate-50 border border-slate-100"
      key={slug}
    >
      <div className="flex flex-col mb-4">
        <div className="inline-flex items-center mb-2">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
            {date}
          </span>
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
          {title}
        </h2>
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>
      </div>
      <Link
        href={`/${escapeHTML(dirname)}/${escapeHTML(slug)}`}
        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
      >
        続きを読む
        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
          <title>続きを読む</title>
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

export default PostCard;

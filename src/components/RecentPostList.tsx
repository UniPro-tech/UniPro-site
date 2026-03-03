import { Post } from "@/lib/posts";
import PostCard from "./PostCard";

export const dynamic = "force-static";

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

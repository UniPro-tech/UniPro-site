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
    <div className={`${className} flex flex-col items-center p-6`}>
      <div
        className={`grid gap-6 w-full ${listClassName}`}
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
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

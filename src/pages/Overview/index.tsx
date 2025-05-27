import { useEffect, type FC } from "react";
import { usePostStore } from "../../store/post-store";
import { PostCard } from "../../components";

export const Overview: FC = () => {
  const { posts, fetchPosts } = usePostStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);
  return (
    <section className="items-baseline justify-center h-full flex gap-2 md:gap-4 flex-wrap">
      {posts.map((post) => (
        <PostCard key={post.id} data={post} />
      ))}
    </section>
  );
};

import React from "react";
import { usePosts } from "../hooks/usePosts";
import PostCard from "../components/common/PostCard";
import Spinner from "../components/ui/Spinner";

function Home() {
  const { data: posts, isLoading, error } = usePosts();

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="grid grid-cols-1 gap-5 p-6 bg-[#A03334] md:grid-cols-2 lg:grid-cols-4">
      {posts?.map((post) => (
        <PostCard key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}

export default Home;

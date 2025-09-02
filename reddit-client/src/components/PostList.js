import React from "react";
import { useSelector } from "react-redux";
import PostCard from "./PostCard";

const PostList = () => {
  const { posts, searchTerm, filterCategory } = useSelector(state => state.posts);

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "All" || post.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="post-list">
      {filteredPosts.length ? filteredPosts.map(post => <PostCard key={post.id} post={post} />)
      : <p>No posts found.</p>}
    </div>
  );
};

export default PostList;

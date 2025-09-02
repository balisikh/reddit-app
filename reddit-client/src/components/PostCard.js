import React from "react";
import { useDispatch } from "react-redux";
import { selectPost } from "../redux/postSlice";

const PostCard = ({ post }) => {
  const dispatch = useDispatch();

  return (
    <div className="post-card" onClick={() => dispatch(selectPost(post))}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <small>{post.author} | Votes: {post.votes} | Category: {post.category}</small>
    </div>
  );
};

export default PostCard;

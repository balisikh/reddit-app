import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSelectedPost } from "../redux/postSlice";

const PostModal = () => {
  const dispatch = useDispatch();
  const { selectedPost } = useSelector(state => state.posts);

  if (!selectedPost) return null;

  return (
    <div className="modal" onClick={() => dispatch(clearSelectedPost())}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{selectedPost.title}</h2>
        <p>{selectedPost.content}</p>
        <small>{selectedPost.author} | Votes: {selectedPost.votes}</small>
        <button onClick={() => dispatch(clearSelectedPost())}>Close</button>
      </div>
    </div>
  );
};

export default PostModal;

// src/redux/postSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { posts as initialPosts } from "../mockData";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: initialPosts,
    searchTerm: "",
    filterCategory: "All",
    selectedPost: null
  },
  reducers: {
    setSearchTerm: (state, action) => { state.searchTerm = action.payload; },
    setFilterCategory: (state, action) => { state.filterCategory = action.payload; },
    selectPost: (state, action) => { state.selectedPost = action.payload; },
    clearSelectedPost: (state) => { state.selectedPost = null; },
  }
});

export const { setSearchTerm, setFilterCategory, selectPost, clearSelectedPost } = postSlice.actions;
export default postSlice.reducer;

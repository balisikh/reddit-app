import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  searchTerm: "",
  filterCategory: "all",
  selectedPost: null
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => { state.posts = action.payload; },
    setSearchTerm: (state, action) => { state.searchTerm = action.payload; },
    setFilterCategory: (state, action) => { state.filterCategory = action.payload; },
    selectPost: (state, action) => { state.selectedPost = action.payload; },
  }
});

export const { setPosts, setSearchTerm, setFilterCategory, selectPost } = postSlice.actions;
export default postSlice.reducer;

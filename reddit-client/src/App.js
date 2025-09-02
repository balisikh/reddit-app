import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import PostList from "./components/PostList";
import PostModal from "./components/PostModal";
import "./App.css";

const App = () => (
  <div className="app">
    <Header />
    <SearchBar />
    <PostList />
    <PostModal />
  </div>
);

export default App;

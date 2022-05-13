import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center">Create Post</h1>
      <br></br>
      <PostCreate />
      <br />
      <PostList />
    </div>
  );
};
export default App;

import { useEffect, useState } from "react";
import './App.css';
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => setPosts(data));
  });


  
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Blog posts</h1>
      </div>
      {posts.map((post) => (
        <div className="card" key={post.id}>
          <div className="card-header">
            #{post.id} {post.title}
          </div>
          <div className="card-body">
            <p className="card-text">{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;

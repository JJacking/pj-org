/* BoardList.jsx */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BoardList() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("http://localhost:5000/posts");
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

const handlePostSubmit = async () => {
  await axios.post("http://localhost:5000/posts", { content: newPost });
  setNewPost("");
  // 데이터를 다시 불러오는 로직 추가 가능
};

const BoardList = () => {
  return (
    <div>
      <h2>게시판</h2>
      <input
        type="text"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
      />
      <button onClick={handlePostSubmit}>글 작성</button>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.content}</li>
        ))}
      </ul>
    </div>
  );
};
}

export default BoardList;
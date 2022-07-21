import React, { useEffect, useState } from "react";
import "./Feed.css";
import MessageSender from "./MessageSender/MessageSender";
import Post from "./Post/Post";
import StoryReel from "./StoryReel/StoryReel";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../config/firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const userPostsRef = query(
      collection(db, "posts"),
      orderBy("timestamp", "desc")
    );

    const unsubscribe = onSnapshot(userPostsRef, (snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    return unsubscribe;
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          profilePic={post.profilePic}
          message={post.message}
          timestamp={post.timestamp}
          image={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default Feed;

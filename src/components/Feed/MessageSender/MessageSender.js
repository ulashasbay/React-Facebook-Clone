import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./MessageSender.css";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useAuth } from "../../../context/authContext";
import { db } from "../../../config/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function MessageSender() {
  const { currentUser } = useAuth();
  const [post, setPost] = useState({
    message: "",
    timestamp: serverTimestamp(),
    profilePic: currentUser.photoURL,
    username: currentUser.displayName,
    imageUrl: "",
  });

  const userPostRef = collection(db, "posts");
  const createPost = async (data) => {
    const docRef = await addDoc(userPostRef, data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(post);
    setPost({ ...post, message: "", imageUrl: "" });
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={currentUser.photoURL} />
        <form>
          <input
            value={post.message}
            onChange={(e) => {
              setPost({ ...post, message: e.target.value });
            }}
            className="messageSender__input"
            placeholder={`What's on your mind, ${currentUser.displayName}?`}
          />
          <input
            value={post.imageUrl}
            onChange={(e) => {
              setPost({ ...post, imageUrl: e.target.value });
            }}
            placeholder="image URL (Optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;

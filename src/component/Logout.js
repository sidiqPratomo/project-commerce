import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Observer from "./Observer";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <Observer />
      <p>Welcome Home</p>

      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export default Home;

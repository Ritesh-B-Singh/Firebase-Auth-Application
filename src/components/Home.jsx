import { onAuthStateChanged, signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useState, useEffect } from "react";

export default function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        navigate("/login");
      }
      return () => listen();
    });
  }, []);
  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <>
      {user ? (
        <div
          style={{
            marginTop: "2rem",
            textAlign: "center",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <h1
            style={{
              marginBottom: "2rem",
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#333",
              textShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            Hello World
          </h1>
          <button
            style={{
              fontSize: "1.5rem",
              padding: "1rem 2rem",
              background: "#007bff",
              color: "#fff",
              cursor: "pointer",
              borderRadius: "0.3rem",
              border: "none",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "background 0.3s ease-in-out",
            }}
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      ) : null}
    </>
  );
}

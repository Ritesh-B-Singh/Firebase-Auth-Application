import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Paper } from "@mui/material";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f8f9fa",
      fontFamily: "Arial, sans-serif",
      padding: "1rem",
    }}>
      <Paper sx={{
        width: '30%',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: '20px 0px'
      }}>
        <h1 style={{
          marginBottom: "1rem",
          color: "#333",
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: "center",
        }}>Sign Up</h1>
        <form style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "300px",
        }} onSubmit={handleSubmit}>
        <label
            htmlFor="email"
            style={{
              marginBottom: "0.5rem",
              color: "#333",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
        >
          Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
            style={{
              padding: "0.5rem",
              marginBottom: "1rem",
              width: "100%",
              fontSize: "1rem",
              borderRadius: "4px",
              border: "1px solid #333",
              outline: "none",
              paddingLeft: "0.5rem",
            }}
        />
        <label
          htmlFor="password"
            style={{
              marginBottom: "0.5rem",
              color: "#333",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
        >
          Password
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
            style={{
              padding: "0.5rem",
              marginBottom: "1rem",
              width: "100%",
              fontSize: "1rem",
              borderRadius: "4px",
              border: "1px solid #333",
              outline: "none",
              paddingLeft: "0.5rem",
            }}
        />
        <button
            type="submit"
            style={{
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              padding: "0.5rem 1rem",
              cursor: "pointer",
              fontSize: "1rem",
              borderRadius: "4px",
              fontWeight: "bold",
            }}
        >
          Sign Up
        </button>
      </form>
      </Paper>
      <div style={{ marginTop: "1rem", textAlign: "center" }}>
        <h2 style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>
          Already have an account?{" "}
          <a
            style={{
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
              fontWeight: "bold",
              marginLeft: "0.5rem",
            }}
            onClick={() => navigate("/login")}
          >
            Login
          </a>
        </h2>
      </div>
    </div>
  );
}

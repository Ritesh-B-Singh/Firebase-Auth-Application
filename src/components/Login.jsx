import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f9fa",
        fontFamily: "Arial, sans-serif",
        padding: "1rem",
      }}
    >
      <Paper sx={{
        width: '30%',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: '20px 0px'
      }}>
        <h1
          style={{
            marginBottom: "1rem",
            color: "#333",
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Login
        </h1>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            maxWidth: "300px",
          }}
          onSubmit={handleSubmit}
        >
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
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            name="email"
            id="email"
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
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            name="password"
            id="password"
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
            Login
          </button>
        </form>
      </Paper>
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <hr
          style={{
            flexGrow: "1",
            backgroundColor: "#ccc",
            height: "1px",
            margin: "0 0.5rem",
          }}
        />
        <span
          style={{
            color: "#333",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          OR
        </span>
        <hr
          style={{
            flexGrow: "1",
            backgroundColor: "#ccc",
            height: "1px",
            margin: "0 0.5rem",
          }}
        />
      </div>
      <button
        style={{
          backgroundColor: "#4285F4",
          color: "#fff",
          border: "none",
          padding: "0.5rem 1rem",
          cursor: "pointer",
          fontSize: "1rem",
          borderRadius: "4px",
          marginTop: "1rem",
        }}
        onClick={handleGoogleLogin}
      >
        Sign in with Google
      </button>
      <div style={{ marginTop: "1rem", textAlign: "center" }}>
        <h2 style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>
          Don't have an account?{" "}
          <a
            style={{
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
              fontWeight: "bold",
              marginLeft: "0.5rem",
            }}
            onClick={() => navigate("/signup")}
          >
            Signup
          </a>
        </h2>
      </div>

    </div>
  );
};

export default Login;


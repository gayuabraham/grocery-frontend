import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../../service/authService";
import "./Auth.css";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    try {
      await registerUser(form);
      alert("Registration successful");
      navigate("/login");
    } catch (err) {
      console.log(err);
      alert("Registration failed");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Sign Up</h2>
        <p>Create your account to start shopping.</p>

        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            required
          />

          <button type="submit">Create Account</button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
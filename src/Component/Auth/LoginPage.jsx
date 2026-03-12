import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../service/authService";
import "./Auth.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(form);

      localStorage.setItem("token", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("is_staff", String(res.data.is_staff));
      localStorage.setItem("is_superuser", String(res.data.is_superuser));

      if (res.data.is_staff) {
        navigate("/admin");
      } else {
        navigate("/");
      }

      window.location.reload();
    } catch (err) {
      console.log(err);
      alert("Invalid username or password");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Login</h2>
        <p>Welcome back! Please login to continue.</p>

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
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            required
          />

          <button type="submit">Login</button>
        </form>

        <p className="auth-switch">
          Don’t have an account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
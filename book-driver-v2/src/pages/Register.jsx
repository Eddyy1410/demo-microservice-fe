import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/auth/authThunk";

function Register() {
  const dispatch = useDispatch();
  const { isFetching, error, success } = useSelector(
    (state) => state.auth.register
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      //...formData : đối chiếu toàn bộ dữ liệu formData hiện tại
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Create your account</h1>
        <input
          name="name"
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
        /><br/>
        <input
          name="email"
          type="text"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
        /><br/>
        <input
          name="password"
          type="text"
          placeholder="Your password"
          value={formData.password}
          onChange={handleChange}
        /><br/>

        <button type="submit" disabled={isFetching}>
          {isFetching ? "Registering..." : "Register"}
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>Register success!</p>}
      </form>
    </div>
  );
}

export default Register;

import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { URL_DATA } from "../CONSTANT";
import { Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  function handleInput(event) {
    setForm((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  }
  async function handleLogin(event) {
    try {
      event.preventDefault();
      const { data } = await axios({
        method: "post",
        url: URL_DATA + "/login",
        data: { email: form.email, password: form.password },
      });
      localStorage.access_token = data.access_token;
      navigate("/");
    } catch (error) {
      swal("Login Failed", error.response.data.message, "error");
    }
  }
  return (
    <>
      <div
        className="d-flex text-center justify-content-center align-items-center"
        style={{ height: "100vh", width: "100vw" }}
      >
        <div>
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">E-Mail</label>
              <input
                onChange={handleInput}
                value={form.email}
                id="email"
                type="email"
                className="form-control"
                name="email"
                required=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                value={form.password}
                id="password"
                onChange={handleInput}
                type="password"
                className="form-control"
                name="password"
                required=""
              />
            </div>
            <div className="form-group mt-3 w-100">
              <button type="submit" className="btn btn-primary btn-block w-100">
                Login
              </button>
            </div>
          </form>
          <div>
            <div>Don't have account?</div>
            <Link to="/register">Register Here</Link>
          </div>
        </div>
        <img
          className="ms-3"
          src="https://cdn.dribbble.com/users/1138853/screenshots/7211883/media/0238e2e4e38da65ac448b86f49560eb3.jpg?compress=1&resize=800x600"
          alt=""
          style={{ height: "300px", width: "400px" }}
        />
      </div>
    </>
  );
}

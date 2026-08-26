import logo from '../assets/translogo.png';
import { useState } from "react";

export default function Auth() {
  const [Islogin, setIslogin] = useState(true);
  const [formData, setformData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!Islogin) {
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
    }

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (Islogin) {
      const existingUser = storedUsers.find(
        (user) => user.email === formData.email && user.password === formData.password
      );

      if (existingUser) {
        localStorage.setItem("currentUser", JSON.stringify(existingUser));
        window.dispatchEvent(new Event("authChange"));
        setSuccess("Log in successful. Welcome back!");
        setformData({ username: "", email: "", password: "", confirmPassword: "" });
      } else {
        setError("Invalid email address or password.");
      }
    } else {
      const userExists = storedUsers.some((user) => user.email === formData.email);

      if (userExists) {
        setError("An account with this email already exists.");
        return;
      }

      const newUser = {
        username: formData.username,
        email: formData.email,
        password: formData.password
      };

      storedUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(storedUsers));
      localStorage.setItem("currentUser", JSON.stringify(newUser));
      window.dispatchEvent(new Event("authChange"));

      setSuccess("Account created successfully!");
      setformData({ username: "", email: "", password: "", confirmPassword: "" });
    }
  };

  const toggleAuthMode = () => {
    setIslogin(!Islogin);
    setError("");
    setSuccess("");
    setformData({ username: "", email: "", password: "", confirmPassword: "" });
  };

  return (
    <div className="">
      <div className=" py-4 row w-100">
        
       
        <div className="col-md-6 h-100 d-none d-md-block">
          <img 
            src="https://www.vintage-folk.com/cdn/shop/articles/blogs_western_3_6c1cfb3c-e434-4906-a465-3d9aa896e518.webp?v=1758800488" 
            alt="Vintage Fashion background"  className='mt-5'
            
          />
        </div>

      
        <div className="col-md-6 h-100 bg-white d-flex align-items-center p-4 p-md-5">
          <form 
            onSubmit={handleSubmit} 
            className="d-flex flex-column justify-content-center h-100 w-100 p-4 p-md-5 "
            style={{ maxWidth: "100%", }}
          >
            <div className="text-center">
              <img src={logo} alt="Logo" style={{ width: "160px" }} />
            </div>
            <hr className="my-4" />
            <div className="form-header text-center mb-4">
              <h2 className="fw-bold">{Islogin ? "Log in" : "Create an account"}</h2>
            </div>

            {error && <div className="alert alert-danger py-2 small text-center">{error}</div>}
            {success && <div className="alert alert-success py-2 small text-center">{success}</div>}

            {!Islogin && (
              <div className="mb-3 text-start">
                <label htmlFor="username" className="form-label fw-semibold text-secondary small mb-1">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control form-control-lg fs-6"
                  placeholder="First and Last name"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div className="mb-3 text-start">
              <label htmlFor="email" className="form-label fw-semibold text-secondary small mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control form-control-lg fs-6"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3 text-start">
              <label htmlFor="password" className="form-label fw-semibold text-secondary small mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control form-control-lg fs-6"
                placeholder="Password must be at least 6 characters"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {!Islogin && (
              <div className="mb-3 text-start">
                <label htmlFor="confirmPassword" className="form-label fw-semibold text-secondary small mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="form-control form-control-lg fs-6"
                  placeholder="Password must be at least 6 characters"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div className="py-3">
              <button type="submit" className="btn btn-primary btn-lg w-100 fs-6 py-3">
                {Islogin ? "Sign In" : "Create an account"}
              </button>
            </div>

            <div className="text-center mt-auto">
              <p className="mb-0 small text-secondary">
                {Islogin ? "Don't have an account? " : "Already have an account? "}
                <button
                  onClick={toggleAuthMode}
                  type="button"
                  className="btn btn-link p-0 text-decoration-none fw-semibold"
                >
                  {Islogin ? "Sign up" : "Login"}
                </button>
              </p>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
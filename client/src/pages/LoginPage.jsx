import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { LoaderIcon } from "lucide-react";


function LoginPage() {
  const { login, isLoggingIn } = useAuthStore();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <div className="w-full flex flex-col items-center bg-[#0C334A] relative overflow-hidden p-4 rounded-2xl border border-white/20">

          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 p-4 mirror-line">

            {/* LEFT SECTION */}
            <div className="hidden md:flex flex-col items-center justify-center text-center p-6 md:p-10 transition-transform duration-500 hover:scale-80">
              <div className="shine-effect">
                <img src="/favicon.svg" alt="Logo" className="w-36 md:w-48 mb-4" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold mt-2 text-white">Welcome Back!</h2>
              <p className="text-base-content/70 mt-2 text-sm md:text-base">
                Login to continue your journey with our platform.
              </p>
            </div>

            {/* LOGIN FORM */}
            <div className="relative rounded-2xl">
              <div className="relative card shadow-xl w-full rounded-2xl p-6 md:p-8 bg-[#0C334A]">
                <h2 className="text-center text-3xl font-bold mb-4 rounded-lg border border-white/10 py-2 text-white animate-pulse-scale">
                  Login
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Email */}
                  <div>
                    <label className="label text-white/80">Email</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="Enter email"
                      className="input input-bordered w-full bg-white/10 text-white"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label className="label text-white/80">Password</label>
                    <input
                      name="password"
                      type="password"
                      placeholder="Enter password"
                      className="input input-bordered w-full bg-white/10 text-white"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Login Button */}
                  <button
                    disabled={isLoggingIn}
                    type= "submit"
                    className="btn w-full mt-2 relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:brightness-110 bg-[#0F172B]"
                  >
                    {isLoggingIn ? (<LoaderIcon className="w-full h-5 animate-spin text-center"/>) : ("Login")}
                  </button>

                  {/* Signup Link */}
                  <div className="mt-4">
                    <p className="hidden md:block text-center text-sm text-white/70">
                      Don't have an account?{" "}
                      <Link
                        to="/signup"
                        className="text-purple-400 font-medium hover:underline hover:text-purple-300 transition"
                      >
                        Sign Up
                      </Link>
                    </p>

                    {/* Mobile View */}
                    <Link
                      to="/signup"
                      className="md:hidden btn w-full mt-2 bg-transparent border border-white/40 text-white hover:bg-white/10 transition-all"
                    >
                      Create Account
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <footer className="w-full text-center py-4 text-sm text-base-content/60">
            © 2025 Pingify — <span className="link link-hover ml-1">Privacy</span> ·
            <span className="link link-hover ml-1">Terms</span> ·
            <span className="link link-hover ml-1">Contact</span>
          </footer>

          {/* Animated Border Glow Keyframes */}
          <style>
            {`
              @keyframes borderGlow {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }
              .animate-borderGlow {
                animation: borderGlow 4s ease infinite;
              }
            `}
          </style>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

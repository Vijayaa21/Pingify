import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore"
import { Link } from "react-router";


function SignUpPage() {
  const defaultPic =
    "https://cdn-icons-png.flaticon.com/512/3177/3177440.png";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { signup, isSigningUp } = useAuthStore();
  const [profilePic, setProfilePic] = useState(defaultPic);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProfilePic = (e) => {
    const file = e.target.files[0];
    if (file) setProfilePic(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    signup(formData);
  };

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        
      <div className="w-full flex flex-col items-center bg-[#0C334A] relative overflow-hidden p-4 rounded-2xl border border-white/20">

      {/* Main Container */}
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 p-4 mirror-line">


        {/* LEFT SECTION */}
        <div className="hidden md:flex flex flex-col items-center justify-center text-center p-6 md:p-10 transition-transform duration-500 hover:scale-105">
          <div className="shine-effect">
            <img src="./favicon.svg" alt="Logo" className="w-36 md:w-48 mb-4" />
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold mt-2">Welcome to Our Platform</h2>
          <p className="text-base-content/70 mt-2 text-sm md:text-base">
            Create an account and join our community today.
          </p>
        </div>

        {/* Animated Border Signup Form */}
        <div className="relative rounded-2xl">
          <div className="relative card shadow-xl w-full rounded-2xl  p-6 md:p-8">
            <h2 className="text-center text-3xl font-bold mb-4 rounded-lg border border-white/10 py-2">
              Create Account
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Profile Picture Upload */}
              <div className="flex flex-col items-center gap-3">
                <input
                  id="profilePicInput"
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePic}
                  className="hidden"
                />

                <div
                  className="relative cursor-pointer group"
                  onClick={() =>
                    document.getElementById("profilePicInput").click()
                  }
                >
                  <div className="avatar">
                    <div className="w-20 md:w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={profilePic} alt="Profile" />
                    </div>
                  </div>

                  <div className="absolute bottom-1 right-1 bg-primary text-white p-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition">
                    ✏️
                  </div>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="label text-white/80">Full Name</label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Enter full name"
                  className="input input-bordered w-full bg-white/10 text-white"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

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

              {/* Password + Confirm */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
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

                <div className="w-full md:w-1/2">
                  <label className="label text-white/80">Confirm Password</label>
                  <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Re-enter password"
                    className="input input-bordered w-full bg-white/10 text-white"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                disabled={isSigningUp}
                className="btn w-full mt-2 relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:brightness-110 bg-[#0F172B]"
              >
                <span className="relative z-10">
                  {isSigningUp ? (<LoaderIcon className="w-full h-5 anumate-spin text-center"/>): ("Sign Up")}
                </span>
              </button>

              {/* Transparent Login Button */}
              <div className="mt-4">

              {/* Desktop / Tablet View */}
              <p className="hidden md:block text-center text-sm text-white/70">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-purple-400 font-medium hover:underline hover:text-purple-300 transition"
                >
                  Login
                </a>
              </p>

              {/* Mobile View — Full Width Login Button */}
              <a
                href="/login"
                className="md:hidden btn w-full mt-2 bg-transparent border border-white/40 
                          text-white hover:bg-white/10 transition-all"
              >
                Login
              </a>
            </div>

            </form>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="w-full text-center py-4 text-sm text-base-content/60">
        © 2025 Pingify —
        <span className="link link-hover ml-1">Privacy</span> ·
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

  )
}

export default SignUpPage

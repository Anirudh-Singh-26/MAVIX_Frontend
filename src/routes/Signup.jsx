import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, User, Eye, EyeOff, Zap } from "lucide-react";
import Card from "../components/Card";
import Button from "../components/Button";
import { pageVariants, pageTransition } from "../lib/animations";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("📨 Submitting signup form:", formData);

    // Basic validation (kept as your version)
    const validationErrors = {};
    if (!formData.name) validationErrors.name = "Name is required";
    if (!formData.email) validationErrors.email = "Email is required";
    if (!formData.password) validationErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      console.log(
        "🌍 Sending request to backend:",
        import.meta.env.VITE_BACKEND_URL
      );

      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/signup`,
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        },
        { withCredentials: true }
      );

      console.log("✅ Backend response:", res.data);

      // Success toast — matches global container style/position from App.jsx
      toast.success(
        res.data?.msg ||
          res.data?.message ||
          "Signup successful! Redirecting...",
        { containerId: "app-toaster" }
      );

      console.log("⏳ Redirecting to /login in 1.5s...");
      setTimeout(() => navigate("/login"), 3500);
    } catch (err) {
      console.error("🚨 Signup error:", err);

      const message =
        err.response?.data?.error ||
        err.response?.data?.msg ||
        err.response?.data?.message ||
        "Something went wrong. Please try again.";

      // Error toast — same style/position via global container
      toast.error(message, { containerId: "app-toaster" });
      setErrors({ general: message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-b from-bg to-primary/5 relative"
    >
      <div className="max-w-lg w-full mx-4">
        {/* Header */}
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-xl">
              <Zap className="h-7 w-7 text-white" />
            </div>
            <span className="text-3xl font-heading font-bold text-gradient">
              MAVIX
            </span>
          </Link>

          <h1 className="text-4xl font-heading font-bold text-text mb-3">
            Create an account
          </h1>
          <p className="text-muted">Join us and get started today</p>
        </div>

        {/* Card */}
        <Card className="p-8">
          {errors.general && (
            <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-sm text-red-400">
              {errors.general}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm text-muted mb-2">Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-muted" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full pl-10 pr-3 py-3 rounded-md bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-muted mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-muted" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-3 py-3 rounded-md bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-muted mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-muted" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-10 py-3 rounded-md bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-muted hover:text-primary"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-400 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm text-muted mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-muted" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full pl-10 pr-3 py-3 rounded-md bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 text-lg"
            >
              {isSubmitting ? "Signing up..." : "Sign Up"}
            </Button>
          </form>

          <div className="mt-8 text-center text-sm">
            <p className="text-muted">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-primary hover:text-accent font-medium"
              >
                Sign in
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </motion.div>
  );
};

export default Signup;

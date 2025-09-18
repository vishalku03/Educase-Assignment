
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateMobileNumber = (mobile) => {
    // Remove any non-digit characters and check if exactly 10 digits
    const cleanMobile = mobile.replace(/\D/g, '');
    return cleanMobile.length === 10 && /^\d{10}$/.test(cleanMobile);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  // Check if input is email or mobile number
  const isEmailFormat = (input) => {
    return input.includes('@');
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Email/Mobile validation
    if (!email.trim()) {
      newErrors.email = "Email or mobile number is required";
    } else if (isEmailFormat(email)) {
      if (!validateEmail(email)) {
        newErrors.email = "Please enter a valid email address";
      }
    } else {
      // Clean the input to count only digits
      const cleanMobile = email.replace(/\D/g, '');
      if (cleanMobile.length !== 10) {
        newErrors.email = `Mobile number must be exactly 10 digits (you entered ${cleanMobile.length})`;
      } else if (!validateMobileNumber(email)) {
        newErrors.email = "Please enter a valid mobile number with exactly 10 digits";
      }
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
    } else if (!validatePassword(password)) {
      newErrors.password = `Password must be at least 8 characters long (you entered ${password.length})`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Always validate on submit and stop if there are errors
    if (!validateForm()) {
      console.log("Validation failed:", errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate login validation
    setTimeout(() => {
      localStorage.setItem("user", JSON.stringify({ email }));
      setIsSubmitting(false);
      navigate("/account");
    }, 500);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Clear error when user starts typing
    if (errors.email) {
      setErrors(prev => ({ ...prev, email: "" }));
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // Clear error when user starts typing
    if (errors.password) {
      setErrors(prev => ({ ...prev, password: "" }));
    }
  };

  const isButtonDisabled = isSubmitting || !email || !password;

  return (
    <div className="aspect-[9/16] h-full flex flex-col items-start justify-between bg-[#f7f8f9] p-6">
      <div className="top w-full">
        <p className="text-3xl font-bold max-w-3/5 mb-4">
          Signin to your PopX account
        </p>
        <p className="text-xl text-gray-600 max-w-2/3 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <form onSubmit={handleSubmit}>
          {/* email/mobile input */}
          <div className="mb-6 relative">
            <div className={`border rounded-md px-3 pt-3 pb-2 focus-within:border-[#4285F4] ${
              errors.email ? 'border-red-500' : 'border-gray-400'
            }`}>
              <label
                className="absolute -top-2.5 left-3 px-1  bg-[#f7f8f9] text-purple-700 text-sm font-medium transition-all duration-150"
                htmlFor="email"
                style={{ pointerEvents: "none" }}
              >
                Email or Mobile
              </label>
              <input
                id="email"
                type="text"
                placeholder="Enter email address or mobile number"
                className="w-full border-none outline-none text-gray-900 px-0 bg-transparent"
                value={email}
                onChange={handleEmailChange}
                disabled={isSubmitting}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          
          {/* password input */}
          <div className="mb-6 relative">
            <div className={`border rounded-md px-3 pt-3 pb-2 focus-within:border-[#4285F4] ${
              errors.password ? 'border-red-500' : 'border-gray-400'
            }`}>
              <label
                className="absolute -top-2.5 left-3  bg-[#f7f8f9] px-1 text-purple-700 text-sm font-medium transition-all duration-150"
                htmlFor="password"
                style={{ pointerEvents: "none" }}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                className="w-full border-none outline-none text-gray-900 px-0 bg-transparent"
                value={password}
                onChange={handlePasswordChange}
                disabled={isSubmitting}
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          
          <button
            type="submit"
            className={`text-white font-semibold w-full text-center bg-[#302644] hover:bg-[#5d0ec0] p-2 rounded-md mb-2 ${
              isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isButtonDisabled}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
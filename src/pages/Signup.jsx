
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [isAgency, setIsAgency] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const isButtonDisabled =
    isSubmitting ||
    !fullName ||
    !phone ||
    !email ||
    !password ||
    !company ||
    !isAgency;

  return (
    <div className="aspect-[9/16] h-full flex flex-col items-start justify-between pt-10 bg-[#f7f8f9] p-6">
      <div className="top w-full">
        <p className="text-3xl font-bold max-w-3/5 mb-6">
          Create your PopX account
        </p>
        <form className="w-full">
          {/* Full Name */}
          <div className="mb-6 relative">
            <div className="border border-gray-400 rounded-md px-3 pt-3 pb-2 focus-within:border-[#4285F4]   ">
              <label
                className="absolute -top-2.5 left-3 px-1   bg-[#f7f8f9] text-purple-700 text-sm font-medium"
                htmlFor="fullName"
                style={{ pointerEvents: "none" }}
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter full name"
                className="w-full border-none outline-none text-gray-900 px-0 bg-transparent"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={isSubmitting}
              />
            </div>
          </div>
          {/* Phone Number */}
          <div className="mb-6 relative">
            <div className="border border-gray-400 rounded-md px-3 pt-3 pb-2 focus-within:border-[#4285F4]   ">
              <label
                className="absolute -top-2.5 left-3 px-1   bg-[#f7f8f9] text-purple-700 text-sm font-medium"
                htmlFor="phone"
                style={{ pointerEvents: "none" }}
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Enter phone number"
                className="w-full border-none outline-none text-gray-900 px-0 bg-transparent"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={isSubmitting}
              />
            </div>
          </div>
          {/* Email Address */}
          <div className="mb-6 relative">
            <div className="border border-gray-400 rounded-md px-3 pt-3 pb-2 focus-within:border-[#4285F4]   ">
              <label
                className="absolute -top-2.5 left-3 px-1   bg-[#f7f8f9] text-purple-700 text-sm font-medium"
                htmlFor="email"
                style={{ pointerEvents: "none" }}
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter email address"
                className="w-full border-none outline-none text-gray-900 px-0 bg-transparent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
            </div>
          </div>
          {/* Password */}
          <div className="mb-6 relative">
            <div className="border border-gray-400 rounded-md px-3 pt-3 pb-2 focus-within:border-[#4285F4]   ">
              <label
                className="absolute -top-2.5 left-3 px-1   bg-[#f7f8f9] text-purple-700 text-sm font-medium"
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
                onChange={(e) => setPassword(e.target.value)}
                disabled={isSubmitting}
              />
            </div>
          </div>
          {/* Company Name */}
          <div className="mb-6 relative">
            <div className="border border-gray-400 rounded-md px-3 pt-3 pb-2 focus-within:border-[#4285F4]   ">
              <label
                className="absolute -top-2.5 left-3 px-1   bg-[#f7f8f9] text-purple-700 text-sm font-medium"
                htmlFor="company"
                style={{ pointerEvents: "none" }}
              >
                Company Name
              </label>
              <input
                id="company"
                type="text"
                placeholder="Enter company name"
                className="w-full border-none outline-none text-gray-900 px-0 bg-transparent"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                disabled={isSubmitting}
              />
            </div>
          </div>
          {/* Are you an agency? */}
          <label>Are your an Agency?</label>
          <div className="flex items-center gap-6 mt-1">
            <label className="flex items-center gap-2 text-gray-700 text-sm">
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={isAgency === "yes"}
                onChange={() => setIsAgency("yes")}
                disabled={isSubmitting}
              />{" "}
              Yes
            </label>
            <label className="flex items-center gap-2 text-gray-700 text-sm">
              <input
                type="radio"
                name="agency"
                value="no"
                checked={isAgency === "no"}
                onChange={() => setIsAgency("no")}
                disabled={isSubmitting}
              />{" "}
              No
            </label>
          </div>
        </form>
      </div>
      <button
        onClick={() => navigate("/account")}
        className={`text-white font-semibold w-full text-center bg-[#6c25ff] hover:bg-[#5d0ec0] p-2 rounded-md mb-2 ${
          isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isButtonDisabled}
      >
        {isSubmitting ? "Creating Account..." : "Create Account"}
      </button>
    </div>
  );
};

export default Signup;



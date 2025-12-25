import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser, FaImage } from "react-icons/fa";
import { BsPersonPlusFill } from "react-icons/bs";

const SignUp = () => {

  return (
    <div className="mt-24 mb-12 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 border border-gray-200 rounded-xl shadow-md">
        <div className="flex flex-col items-center mb-6">
          <BsPersonPlusFill className="text-4xl text-blue-600 mb-2" />
          <h2 className="text-2xl font-bold text-center">Create Account</h2>
        </div>

        {/* Form */}
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-white shadow-sm">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-white shadow-sm">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-white shadow-sm">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Create a password"
                className="w-full focus:outline-none"
                required
              />
            </div>
            <p className="text-xs text-gray-500 mt-1 ml-1">Must be at least 6 characters</p>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Photo URL (optional)</label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-white shadow-sm">
              <FaImage className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Enter profile photo URL"
                className="w-full focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 rounded-md hover:opacity-90 transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-gray-700">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600 font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

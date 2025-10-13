import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

export default function RegisterPage() {
  return (
     <div className="flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h1></h1>
              <h2 className="text-2xl font-bold text-gray-800 text-center">Log In</h2>
              <button
                // onClick={onClose}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                {/* <IoClose size={24} /> */}
                
              </button>
            </div>
    
            <form  className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  // id="email"
                  name="email"
                  // value={formData.email}
                  // onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6A1A]"
                />
              </div>
    
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                  type="password"
                    // type={showPassword ? "text" : "password"}
                    // id="password"
                    name="password"
                    // value={formData.password}
                    // onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6A1A]"
                  />
                  <span
                    // onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 cursor-pointer text-gray-500"
                  >
                    {/* {showPassword ? <FiEyeOff /> : <FiEye />} */}
                  </span>
                </div>
              </div>
    
              {/* {error && (
                <div className="text-red-500 text-sm">{error}</div>
              )} */}
    
              {/* Remember Me + Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    // checked={rememberMe}
                    // onChange={(e) => setRememberMe(e.target.checked)}
                    className="accent-orange-500"
                  />
                  Remember me
                </label>
                <a href="#" className="text-gray-600 font-semibold hover:underline">
                  Forgot Password
                </a>
              </div>
    
              <button
                type="submit"
                // disabled={loading}
                className="w-full bg-[#FF6A1A] text-white py-2 px-4 rounded-md hover:bg-[#e55a15] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {/* {loading ? "Logging in..." : "Log In"} */}
                Log In
              </button>
            </form>
    
            {/* Divider */}
            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-2 text-gray-500 text-sm">Or Sign in with</span>
              <hr className="flex-grow border-gray-300" />
            </div>
    
            {/* Social Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50">
                <FcGoogle className="text-red-500" /> Google
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50">
                <FaFacebook className="text-blue-600" /> Facebook
              </button>
            </div>
    
            {/* {onSwitchToRegistration && (
              <div className="mt-4 text-center">
                <span className="text-gray-600">
                  Don&apos;t have an account?{" "}
                </span>
                <button
                  onClick={onSwitchToRegistration}
                  className="text-[#FF6A1A] hover:text-[#e55a15] font-medium cursor-pointer"
                >
                  Sign Up
                </button>
              </div>
            )} */}
          </div>
        </div>
  )
}


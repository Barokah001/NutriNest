import type React from "react"
import { useState } from "react"


const SignUpForm = () => {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [agreed, setAgreed] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Sign up:", formData)
  }
  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-blue-950">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className="mt-2 border-gray-300 bg-blue-50 text-blue-950 placeholder-gray-400"
          required
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-blue-950">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="mt-2 border-gray-300 bg-blue-50 text-blue-950 placeholder-gray-400"
          required
        />
      </div>

      {/* Password Field */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-blue-950">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Name"
          value={formData.password}
          onChange={handleChange}
          className="mt-2 border-gray-300 bg-blue-50 text-blue-950 placeholder-gray-400"
          required
        />
      </div>

      {/* Terms Checkbox */}
      <div className="flex items-center">
        <input
          id="terms"
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="h-4 w-4 rounded border-gray-300 text-blue-950 focus:ring-blue-950"
        />
        <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
          I agree to the{" "}
          <a href="#" className="text-blue-950 hover:underline">
            terms & policy
          </a>
        </label>
      </div>

      {/* Signup Button */}
      <button type="submit" className="w-full bg-blue-950 py-2 text-white hover:bg-blue-900">
        Signup
      </button>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-gray-500">Or</span>
        </div>
      </div>

      {/* Social Login Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          
          className="border-gray-300 text-blue-950 hover:bg-blue-50 bg-transparent"
        >
          <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="text-xs">
              G
            </text>
          </svg>
          Google
        </button>
        <button
          type="button"
          
          className="border-gray-300 text-blue-950 hover:bg-blue-50 bg-transparent"
        >
          <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="text-xs">
              A
            </text>
          </svg>
          Apple
        </button>
      </div>

      {/* Sign In Link */}
      <div className="text-center text-sm">
        <span className="text-gray-600">Have an account? </span>
        <a href="/login" className="text-blue-950 hover:underline">
          Sign In
        </a>
      </div>
    </form>
  )
}

export default SignUpForm


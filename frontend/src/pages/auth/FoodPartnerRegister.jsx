import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const API = import.meta.env.VITE_API_URL;

const FoodPartnerRegister = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const handleSubmit =async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${API}api/auth/food-partner/register`, formData, {
        withCredentials: true,
      })
      console.log(response.data)
      navigate("/create-food")
    } catch (error) {
      console.log(err.response?.data || err.message)
    }
  }
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
        <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">Food partner</p>
            <h1 className="mt-2 text-3xl font-semibold">Register your outlet</h1>
            <p className="mt-2 text-sm text-slate-400">Create an account to showcase your food offerings.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm text-slate-300">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    name: e.target.value
                  })
                }}
                placeholder="Enter your name"
                className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm outline-none transition focus:border-emerald-400"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-slate-300">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    email: e.target.value
                  })
                }}
                placeholder="Enter your email"
                className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm outline-none transition focus:border-emerald-400"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-slate-300">Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    password: e.target.value
                  })
                }}
                placeholder="Create a password"
                className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm outline-none transition focus:border-emerald-400"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-emerald-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
            >
              Register
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-400">
            Already partnered with us? <span className="text-emerald-400">Sign in</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default FoodPartnerRegister
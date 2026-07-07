import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const API = import.meta.env.VITE_API_URL;

const UserRegister = () => {
    const navigate=useNavigate()
    const handleSubmit=async (e)=>{
        e.preventDefault()
        const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(fullName, email, password);
    try {
        const response=await axios.post(`${API}api/auth/user/register`,{
            fullName,
            email,
            password,
        },{
          withCredentials: true
        })
        navigate("/")
    } catch (err) {
        console.log(err.response?.data || err.message)
    }
    }
    
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
        <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">Join Reel</p>
            <h1 className="mt-2 text-3xl font-semibold">Create your account</h1>
            <p className="mt-2 text-sm text-slate-400">Sign up as a user to discover food offers near you.</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="mb-1 block text-sm text-slate-300">Full Name</label>
              <input
                type="text"
                name='fullName'
                placeholder="Enter your full name"
                className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm outline-none transition focus:border-orange-400"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-slate-300">Email</label>
              <input
                type="email"
                name='email'
                placeholder="Enter your email"
                className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm outline-none transition focus:border-orange-400"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-slate-300">Password</label>
              <input
                type="password"
                name='password'
                placeholder="Create a password"
                className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm outline-none transition focus:border-orange-400"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
            >
              Register
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-400">
            Already have an account? <span className="text-orange-400">Sign in</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserRegister
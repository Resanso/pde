'use client'

import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const router = useRouter()

    const supabase = createClient()

    const handleEmailLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setMessage('')
        
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            setMessage(error.message)
        } else {
            router.refresh()
            router.push('/dashboard')
        }
        setLoading(false)
    }

    return (
        <div className="flex h-screen w-full overflow-hidden">
            {/* Left Side - Login Form */}
            <div className="w-full md:w-1/2 bg-gray-50 flex flex-col justify-center items-center p-8 relative">
                {/* Back Button */}
                <Link 
                    href="/" 
                    className="absolute top-8 left-8 flex items-center gap-2 text-gray-500 hover:text-black transition-colors text-sm font-medium group"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={2} 
                        stroke="currentColor" 
                        className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    Back to Home
                </Link>

                <div className="w-full max-w-md space-y-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-black text-black tracking-wide uppercase">Login</h1>
                    </div>
                
                    {message && (
                        <div className="p-3 text-sm text-red-600 bg-red-100 rounded-lg text-center font-medium">
                            {message}
                        </div>
                    )}

                    <form onSubmit={handleEmailLogin} className="space-y-6">
                        <div className="relative">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full h-12 pl-6 pr-12 rounded-full border border-gray-400 bg-white text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#567E6C] transition-all shadow-sm"
                                placeholder="Username"
                                required
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>

                        <div className="relative">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full h-12 pl-6 pr-12 rounded-full border border-gray-400 bg-white text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#567E6C] transition-all shadow-sm"
                                placeholder="Password"
                                required
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>

                        <div className="flex justify-center pt-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-48 h-12 bg-[#567E6C] hover:bg-[#456656] text-white font-bold rounded-full shadow-lg transform active:scale-95 transition-all text-sm tracking-wider uppercase"
                            >
                                {loading ? 'Logging in...' : 'LOGIN'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Right Side - Decorative */}
            <div className="hidden md:flex w-1/2 bg-[#F2F2F2] relative justify-center items-center overflow-hidden">
                {/* Abstract Circles Background */}
                <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-[#1A3672] rounded-full opacity-90 blur-xl"></div>
                <div className="absolute bottom-[10%] left-[-5%] w-64 h-64 bg-[#F2C069] rounded-full opacity-80 blur-lg"></div>
                <div className="absolute bottom-[20%] right-[10%] w-48 h-48 bg-[#EF6D73] rounded-full opacity-80 blur-lg"></div>
                <div className="absolute top-[30%] left-[10%] w-32 h-32 bg-[#5DAB67] rounded-full opacity-80 blur-md"></div>
                
                {/* Main Content - Logo */}
                <div className="relative z-10 flex flex-col items-center">
                    <div className="relative w-80 h-80 drop-shadow-2xl">
                        <Image 
                           src="/logo.png" 
                           alt="Logo" 
                           fill
                           style={{ objectFit: 'contain' }}
                           priority
                        />
                    </div>
                </div>

                {/* Glassmorphism effects bubbles */}
                <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-white/30 backdrop-blur-md rounded-full"></div>
                <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full"></div>
            </div>
        </div>
    )
}

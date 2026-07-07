import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const [foods, setFoods] = useState([])
    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/food/", {
                    withCredentials: true
                })
                setFoods(response.data.foodItems)
            } catch (err) {
                console.log(err.response?.data || err.message)
            }
        }
        fetchFoods()

    }, [foods])


    return (
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-black">
            {foods.map((food) => (
                <section
                    key={food._id}
                    className="relative h-screen w-full snap-start"
                >
                    {/* Video Placeholder */}
                    <div className="absolute inset-0">
                        <video
                            src={food.video}
                            className="h-full w-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

                    {/* Top Bar */}
                    <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-5 pt-6 text-white">
                        <h1 className="text-2xl font-bold tracking-wide">
                            Local<span className="text-orange-500">Bites</span>
                        </h1>

                        <button className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                            Nearby
                        </button>
                    </div>

                    {/* Bottom Details */}
                    <div className="absolute bottom-0 left-0 right-0 z-20 p-5 text-white">
                        <div className="max-w-xs">
                            <h2 className="text-2xl font-bold">{food.name}</h2>

                            <p className="mt-2 text-sm text-slate-300">
                                {food.description}
                            </p>

                            <p className="mt-3 text-sm font-medium text-orange-400">
                                @{food.partner}
                            </p>

                            <button className="mt-5 rounded-full bg-orange-500 px-6 py-3 font-semibold transition hover:bg-orange-400">
                                Order Now
                            </button>
                        </div>
                    </div>

                    {/* Right Action Bar */}
                    <div className="absolute bottom-28 right-4 z-20 flex flex-col items-center gap-6 text-white">
                        <button className="flex flex-col items-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                                ❤️
                            </div>
                            <span className="mt-1 text-xs">1.2k</span>
                        </button>

                        <button className="flex flex-col items-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                                💬
                            </div>
                            <span className="mt-1 text-xs">145</span>
                        </button>

                        <button className="flex flex-col items-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                                📍
                            </div>
                            <span className="mt-1 text-xs">Map</span>
                        </button>

                        <button className="flex flex-col items-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                                🔗
                            </div>
                            <span className="mt-1 text-xs">Share</span>
                        </button>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Home;
'use client'
import { useState } from 'react'
//import Image from 'next/image'
import AboutSection from '@/app/components/About'

export default function Home() {
  const [videoError, setVideoError] = useState(false)
  return (
    <main id="home" className="relative h-full min-h-screen overflow-hidden">
      {!videoError && (
        <video
          playsInline
          autoPlay
          loop
          muted
          className="w-full h-screen object-cover"
          poster="/fallback-hero.jpeg"
          onError={() => setVideoError(true)}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      )}

      {videoError && (
        <div className="w-full h-screen bg-[url('/fallback-hero.jpeg')] bg-left object-cover"></div>
      )}

      <div className="absolute top-[120px] left-8 flex flex-col items-start justify-center">
        <h1 className="sm:text-4xl md:text-6xl font-bold text-white animate-slide-in-left">
          Zeef Oria
        </h1>
        <p className="sm:text-lg md:text-xl text-white animate-slide-in-left mt-5">
          Discover Zeef Oria’s journey from silence to a vibrant artistic
          revival, celebrating memory, resilience, and rediscovery.
        </p>
      </div>
      <AboutSection />
    </main>
  )
}

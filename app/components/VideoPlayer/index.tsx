'use client'
import React, { useState } from 'react'

function VideoPlayer() {
  const [videoError, setVideoError] = useState(false)
  if (videoError)
    return (
      <div className="w-full h-screen bg-[url('/fallback-hero.jpeg')] bg-left object-cover"></div>
    )

  return (
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
  )
}

export default VideoPlayer

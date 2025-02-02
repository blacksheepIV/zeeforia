//import Image from 'next/image'
import AboutSection from '@/app/components/About'
import LatestWorks from '@/app/components/LatestWorks'
import Contact from '@/app/components/Contact'
import VideoPlayer from '@/app/components/VideoPlayer/index'

export default function Home() {
  return (
    <main id="home" className="relative h-full min-h-screen overflow-hidden">
      <VideoPlayer />

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
      <LatestWorks />
      <Contact />
    </main>
  )
}

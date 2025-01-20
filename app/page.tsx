//import Image from 'next/image'
import AboutSection from './components/about'

export default function Home() {
  return (
    <main id="home" className="relative h-full min-h-screen overflow-hidden">
      <video
        src="/hero.mp4"
        autoPlay
        loop
        muted
        className="w-[auto] h-full object-cover"
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-[120px] left-8 flex flex-col items-start justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white animate-slide-in-left">
          Zeef Oria
        </h1>
        <p className="text-lg md:text-xl text-white animate-slide-in-left delay-[2s] mt-3">
          Discover Zeef Oria’s journey from silence to a vibrant artistic
          revival, celebrating memory, resilience, and rediscovery.
        </p>
      </div>
      <AboutSection />
      {/* <div className="relative container mx-auto px-4 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <h1 className="font-montserrat text-6xl lg:text-7xl font-bold text-delft_blue">
              Zeef <span className="text-amaranth_purple">Oria</span>
            </h1>
            <p className="font-quicksand text-xl text-gray-700 max-w-lg">
              Discover the inspiring journey of Zeef Oria, a contemporary artist
              who transforms three decades of silence into a vibrant artistic
              renaissance. Explore his evocative works that delve into memory,
              resilience, and the profound beauty of rediscovery.
            </p>
            <button className="bg-delft_blue text-white px-8 py-3 rounded-lg font-quicksand font-medium hover:bg-opacity-90 transition-colors">
              View Gallery
            </button>
          </div>

          <div className="relative">
            <div className="absolute md:top-[22px] md:left-[10px] w-full md:min-h-[500px] top-2 left-2 min-h-full  hero-image rounded-lg shadow-2xl overflow-hidden bg-french_gray"></div>
            <div className="hero-image rounded-lg shadow-2xl overflow-hidden">
              <img
                src="/cover.png"
                alt="Geometric Art Piece"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div> */}
    </main>
  )
}

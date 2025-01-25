import React from 'react'

function Spotlight() {
  return (
    <section id="spotlight" className="relative container mx-auto pt-6">
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-12">Latest Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map(i => (
            <div key={i} className="group relative overflow-hidden rounded-lg">
              <img
                src={`https://images.unsplash.com/photo-156${i}891654-e66ed7ebb968?auto=format&fit=crop&q=80&w=400`}
                alt={`Artwork ${i}`}
                className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold">Artwork Title {i}</h3>
                  <p className="text-sm text-gray-300">
                    Mixed Media on Canvas, 2024
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Spotlight

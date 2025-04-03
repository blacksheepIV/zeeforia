import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SpotlightArtworks } from '@/app/types'

function LatestWorks() {
  const latestWorks: SpotlightArtworks[] = [
    {
      title: 'Journey to the Unknown',
      imageUrl: 'journey_to_the unknown.jpg',
      info: 'Oil on Canvas 80X1000',
    },

    {
      title: 'Born from Chaos',
      imageUrl: 'born_from_chaos.jpg',
      info: 'Oil on Canvas 80X1000',
    },
    {
      title: 'Helen’s Curse',
      imageUrl: 'helen_curse.jpg',
      info: 'Oil on Canvas 80X1000',
    },
  ]
  return (
    <section
      id="latestWorks"
      className="relative container mx-auto pt-6 lg:px-0 px-4"
    >
      <div className="w-full">
        <h2 className="font-montserrat font-semibold text-xl text-delft_blue mb-6 tracking-widest">
          Latest
          <span className="text-orange-500 tracking-widest"> Works</span>
        </h2>
        <p className="text-base font-normal mb-6 font-quicksand">
          Explore Zeeforia&apos;s latest creations, showcasing recent
          inspirations and techniques.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestWorks.map(latestWork => (
            <div
              key={latestWork.title}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-500 rounded-lg">
                <Image
                  src={`/collections/collection1/${latestWork.imageUrl}`}
                  alt={latestWork.title}
                  width={800}
                  height={1200}
                ></Image>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 rounded-lg">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {latestWork.title}
                  </h3>
                  <p className="text-sm text-gray-300">{latestWork.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link
          className="mt-12 flex justify-center align-middle"
          href="/portfolio"
        >
          <button className="rounded-md bg-orange-500 text-white text-center font-quicksand p-3 hover:transition-colors hover:bg-opacity-90">
            See All Works
          </button>
        </Link>
      </div>
    </section>
  )
}

export default LatestWorks

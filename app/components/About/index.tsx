'use client'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import clsx from 'clsx'

function AboutSection() {
  const aboutRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }, // Trigger when 20% of the section is visible
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={aboutRef}
      className="relative container mx-auto pt-6"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between items-center font-montserrat py-8 px-4">
        <div
          className={clsx(
            'flex flex-col items-start gap-2 lg:order-1 order-2',
            { 'animate-fade-up': isVisible },
          )}
        >
          <h2 className="font-semibold text-xl text-delft_blue tracking-widest">
            About ZEEF{' '}
            <span className="text-orange-500 tracking-widest">ORIA</span>
          </h2>
          <p className="text-base sm:text-md lg:text-base text-raisin_black-400 text-left">
            Born in 1972, Zeef Oria is a contemporary artist whose journey in
            art began in his twenties. A remarkable talent emerged during these
            early years, earning him 3rd place in the prestigious (Visual Arts
            Exhibition). This recognition was a glimpse into the boundless
            potential of an artist deeply connected to his craft. However, life
            took him on a path away from the canvas, and for 30 years, silence
            enveloped his artistic expression. Yet this silence was not a
            void—it was a space of transformation, observation, and growth.
            Through decades of experiences, both personal and universal, Zeef
            Oria amassed a reservoir of stories, emotions, and insights waiting
            to take form.
          </p>
          <p className="text-base sm:text-lg lg:text-base text-raisin_black-400 text-left">
            Now, after three decades, Zeef returns to his passion with a renewed
            vision. This period of absence has become a wellspring of
            inspiration, allowing him to channel a lifetime of experiences into
            his work. His art speaks of time, resilience, and the beauty found
            in rediscovery. Each piece is an exploration of memory, silence, and
            the rich tapestry of human experience, imbued with a profound
            understanding of life’s complexities.
          </p>
          <p className="text-base sm:text-lg lg:text-base text-raisin_black-400 text-left">
            Zeef Oria’s return to the art world is not just a continuation of
            his journey; it is a renaissance. With every brushstroke and every
            piece, he transforms the echoes of his 30-year silence into a
            powerful dialogue, offering viewers a glimpse into a soul that has
            lived, endured, and now creates anew.
          </p>
        </div>

        <div
          className={clsx('lg:order-2 order-1 lg:px-8 lg:row-span-2', {
            'animate-appear': isVisible,
          })}
        >
          <div className="relative">
            <div className="absolute md:top-[22px] md:left-[10px] w-full  top-2 left-2 min-h-full hero-image rounded-lg shadow-2xl overflow-hidden bg-delft_blue-300"></div>
            <div className="hero-image rounded-lg shadow-2xl overflow-hidden w-full h-full">
              <Image
                src="/about-img.jpg"
                alt="Zeef oria's photo"
                width={1000}
                height={750}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
export const getStaticProps = async () => {
  return {
    props: {
      title: 'About Zeef Oria',
    },
  }
}

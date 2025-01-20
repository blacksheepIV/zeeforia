'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { navbarItems } from './constants'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

function Navbar() {
  const pathName = usePathname()
  const [selectedIndex, setSelectedindex] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const currentIndex = navbarItems.findIndex(
      navItem => navItem.path === pathName,
    )
    if (currentIndex !== -1) setSelectedindex(currentIndex)
  }, [pathName])

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string,
    index: number,
  ) => {
    event.preventDefault()
    const target = document.getElementById(sectionId)
    if (target) {
      setSelectedindex(index)
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  return (
    <nav>
      <div
        className={clsx(
          'fixed top-0 left-0 h-16 z-10 flex w-full items-center mx-auto pr-4 pl-2 pb-2 transition-colors duration-300',
          {
            'bg-white bg-opacity-100 justify-between': isScrolled,
            'bg-white bg-opacity-0 justify-end': !isScrolled,
          },
        )}
      >
        {isScrolled && (
          <Link href={'/'} className="pt-2">
            <Image src="/logo.png" alt="Logo" width={80} height={80} />
          </Link>
        )}
        <div className="menu">
          <ul className="flex flex-row gap-6">
            {navbarItems.map((navItem, index) => (
              <Link
                href="#"
                onClick={e => handleScroll(e, navItem.path, index)}
                key={`${index}-${navItem.title}`}
                className={clsx(
                  'font-montserrat text-sm font-medium pb-2 cursor-pointer',
                  {
                    'text-delft_blue-800 border-b-2 border-b-delft_blue-400':
                      selectedIndex === index,
                    'text-white hover:text-delft_blue-400':
                      selectedIndex !== index && !isScrolled,
                    'text-black hover:text-delft_blue-400':
                      selectedIndex !== index && isScrolled,
                  },
                )}
              >
                {navItem.title}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

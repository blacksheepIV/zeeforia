'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { MenuIcon } from '@/app/components/Icons'
import { navbarItems } from './constants'
import clsx from 'clsx'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScrollTo = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScrollTo)

    return () => {
      window.removeEventListener('scroll', handleScrollTo)
    }
  }, [])

  const handleScrollTo = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string,
  ) => {
    event.preventDefault()
    const target = document.getElementById(sectionId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
  }, [isMenuOpen])

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
          <div className="relative flex gap-[2px] justify-start items-center min-w-[200px]">
            <Link href={'/'} className="pt-2">
              <Image src="/logo.png" alt="Logo" width={60} height={55} />
            </Link>
            <span className="lg:text-base sm:text-sm  font-montserrat font-normal tracking-widest absolute left-[50px] top-[38px]">
              ZEEF ORIA
            </span>
          </div>
        )}
        <div className="menu hidden lg:flex">
          <ul className="flex flex-row gap-6">
            {navbarItems.map((navItem, index) => (
              <Link
                href="#"
                onClick={e => handleScrollTo(e, navItem.path)}
                key={`${index}-${navItem.title}`}
                className={clsx(
                  'font-montserrat text-base font-medium pb-2 cursor-pointer relative transition-all duration-300 hover:translate-y-[-2px] hover:opacity-80',
                  { 'text-white': !isScrolled },
                  {
                    'text-black hover:text-raisin_black-800': isScrolled,
                  },
                )}
              >
                {navItem.title}
              </Link>
            ))}
          </ul>
        </div>
        <div
          className="burger lg:hidden sm:block "
          onClick={() => setIsMenuOpen(true)}
        >
          <MenuIcon fill={isScrolled ? '#000' : '#fff'} className="size-8" />
        </div>
        <div
          className={clsx(
            'fixed top-0 right-0 h-full w-full overflow-hidden bg-raisin_black-500 bg-opacity-95 shadow-lg transform transition-transform duration-500',
            { 'translate-x-0': isMenuOpen, 'translate-x-full': !isMenuOpen },
          )}
        >
          <div className="p-4">
            <button
              className="close-btn text-white text-3xl"
              onClick={() => setIsMenuOpen(false)}
            >
              &times;
            </button>
            <ul className="mt-12 space-y-4 flex flex-col gap-5 height-[500px] items-center ">
              {navbarItems.map((navItem, index) => (
                <li key={`${index}-${navItem.title}`}>
                  <Link
                    href="#"
                    onClick={e => {
                      setIsMenuOpen(false)
                      handleScrollTo(e, navItem.path)
                    }}
                    className="block text-3xl font-medium text-white"
                  >
                    {navItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

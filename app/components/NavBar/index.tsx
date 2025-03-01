'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import {
  MenuIcon,
  CloseIcon,
  ExternalLinkIcon,
  EmailIcon,
  InstagramIcon,
  YoutubeIcon,
  BehanceIcon,
} from '@/app/components/Icons'
import { navbarItems } from '@/app/constants/menuItems'
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
                  { 'text-delft_blue-400': !isScrolled },
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
        <button
          className="burger lg:hidden sm:block "
          onClick={() => setIsMenuOpen(true)}
        >
          <MenuIcon fill={'#f97316'} className="size-8" />
        </button>
        <div
          className={clsx(
            'fixed top-0 right-0 h-full w-full overflow-hidden bg-raisin_black-500 b shadow-lg transform transition-transform duration-500',
            { 'translate-x-0': isMenuOpen, 'translate-x-full': !isMenuOpen },
          )}
        >
          <div className="flex flex-col items-center ">
            <div className="flex w-full justify-end items-center p-4">
              <button
                className="close-btn"
                onClick={() => setIsMenuOpen(false)}
              >
                <CloseIcon fill="#fff" width={30} height={30} />
              </button>
            </div>
            <ul className="mt-12 space-y-4 flex flex-col gap-4 height-[500px] items-center ">
              {navbarItems.map((navItem, index) => (
                <li key={`${index}-${navItem.title}`}>
                  <Link
                    href="#"
                    onClick={e => {
                      setIsMenuOpen(false)
                      handleScrollTo(e, navItem.path)
                    }}
                    className="block text-3xl font-semibold text-white"
                  >
                    {navItem.title}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/portfolio"
              className="mt-12 flex items-center gap-2 text-steel_blue-500 text-3xl font-medium transition"
            >
              Portfolio
              <ExternalLinkIcon width={16} height={16} fill="#1e62a2" />
            </Link>

            <div className=" absolute bottom-0 left-0 w-full font-quicksand flex flex-col justify-center items-center">
              <div className=" w-full flex gap-x-2 justify-center items-center">
                <a
                  href="https://www.instagram.com/zeef_oria/"
                  target="_blank"
                  className="hover:scale-125"
                >
                  <InstagramIcon width={30} height={30} fill="#fff" />
                </a>
                <a
                  href="https://www.behance.net/zeeforia"
                  target="_blank"
                  className="hover:scale-125"
                >
                  <BehanceIcon width={30} height={28} fill="#fff" />
                </a>

                <a
                  href="https://youtube.com/@zeeforia?si=g-C1rerJMBhhyuWg"
                  target="_blank"
                  className="hover:scale-125"
                >
                  <YoutubeIcon width={30} height={30} fill="#fff" />
                </a>

                <a
                  href="mailto:art@zeeforia.com"
                  target="_blank"
                  className="hover:scale-125"
                >
                  <EmailIcon width={30} height={30} fill="#fff" />
                </a>
              </div>
              <p className="font-semibold mt-3 mb-2 text-white">
                © {new Date()?.getFullYear()} Zeef oria. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

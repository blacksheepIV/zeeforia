'use client'
import React, { useState, useEffect } from 'react'

function Footer() {
  const [today, setToday] = useState<Date>()
  useEffect(() => {
    const currentDate = new Date()
    setToday(currentDate)
  }, [])
  return (
    <div className="absolute bottom-0 left-0 w-full h-32 py-4 px-6 flex flex-col justify-center items-center bg-white shadow-custom">
      {/* <div className="h-[0.5px] w-[50%] bg-fade-gradiant mb-3"></div> */}
      <p className="font-semibold">
        © {today?.getFullYear()} Zeeforia. All rights reserved.
      </p>
      <p className="text-sm">Made with love and pixels by Foroogh.</p>
    </div>
  )
}

export default Footer

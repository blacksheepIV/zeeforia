'use client'
import React, { useState, useEffect } from 'react'

function Footer() {
  const [today, setToday] = useState<Date>()
  useEffect(() => {
    const currentDate = new Date()
    setToday(currentDate)
  }, [])
  return (
    <div className="w-full h-32 font-quicksand py-4 pb-1 px-6 flex flex-col gap-2 justify-center items-center bg-white shadow-custom">
      {/* <div className="h-[0.5px] w-[50%] bg-fade-gradiant mb-3"></div> */}
      <p className="font-semibold">
        © {today?.getFullYear()} Zeef oria. All rights reserved.
      </p>
    </div>
  )
}

export default Footer

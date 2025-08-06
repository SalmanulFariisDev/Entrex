import Image from 'next/image'
import React from 'react'

const Companies = () => {
  return (
      <div className=" rounded-xl py-10 px-4 sm:px-10 max-w-6xl mx-auto">
        <h2 className="text-6xl sm:text-3xl font-inter font-bold text-center mb-2">
          Trusted by 1500+ popular companies
        </h2>
        <p className="text-sm text-black font-light text-center mb-8">
          Every ENTREX ride comes with thoughtful in-car provisions to ensure your comfort, safety, and satisfaction.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6 place-items-center">
          {[
            "/google.png",
            "/creative.png",
            "/airhub.png",
            "/shopy.png",
            "/amazone.png",
            "/drop.png",
            "/spotify.png",
            "/asana.png",
            "/delevero.png",
            "/nissan.png",
          ].map((src, index) => (
            <Image
              key={index}
              src={src}
              alt="company logo"
              width={100}
              height={40}
              className="h-6 sm:h-8 object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div> 
  )
}

export default Companies

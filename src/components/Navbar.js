import React from 'react'

export default function Navbar(){
  return (
    <div className="inline-flex items-center justify-center bg-red-500  h-28 w-full">
      <img
        className=" mx-4 max-w-full h-auto"
        src={"../images/logo.png"}
        alt="logo"
      />
      <p className="text-4xl md:text-5xl lg:text-7xl font-light leading-8 md:leading-10 text-white">
        my travel journal.
      </p>
    </div>
  );
}

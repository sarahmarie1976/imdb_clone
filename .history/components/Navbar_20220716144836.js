import React from 'react'
import requests from '../utils/requests'

export default function Navbar() {
  return (
    <div className="flex justify-center bg-gray-600 text-gray-200 select-none text-xl lg:text-2xl ">
      {Object.entries(requests).map(([key, { title, url }]) => (
        <h2  className="" key={key}>{title}</h2>
      ))}
    </div>
  );
}


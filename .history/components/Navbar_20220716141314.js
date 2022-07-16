import React from 'react'
import requests from '../utils/requests'

export default function Navbar() {
  return (
    <div className="">
      {Object.entries(requests).map(([key, { title, url }]) => (
        <h2  className="" key={key}>{title}</h2>
      ))}
    </div>
  );
}


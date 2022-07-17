import React from 'react'
import Image from 'next/dist/client/image'
import Results from './Results'

export default function Card({result}) {
  const BASE_URL = "https://image.tmdb.org/t/p/original"
  return (
    <div>
      <Image 
        src={BASE_URL + result.backdrop_path}
        
         />
    </div>
  )
}
 
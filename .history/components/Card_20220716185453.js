import React from 'react'
import Image from 'next/dist/client/image'
i

export default function Card({result}) {
  const BASE_URL = "https://image.tmdb.org/t/p/original"
  return (
    <div>
      <Image 
        src={BASE_URL + result.backdrop_path}
        width={200}
        height={100}
         />
         
    </div>
        
  )
}
 
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

export default function Card({result}) {
 
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="p-3 " >
      <Image 
        layout="responsive"
        src={BASE_URL + result.backdrop_path}
        width={200}
        height={100}
         />

     <div className="p-3" >
      <p className="truncate">
      {result.overview}
      </p>
      <h2 className="">
        {result.title || result.name}
      </h2>
      <p className="">
        {result.release_date || result.first_air_date}
        <ThumbUpIcon className="h-5" />
        {result.vote_count}
      </p>

      
      </div>    
         
    </div>
        
  )
}


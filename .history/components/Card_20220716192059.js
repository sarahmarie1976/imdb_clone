import Image from "next/image";

export default function Card({result}) {
 
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <Image 
        layout="responsive"
        src={BASE_URL + result.backdrop_path}
        width={200}
        height={100}
         />

     <div className="" >
      <p className="truncate">
      {result.overview}
      </p>
      <h2 className="">
        {result.title || result.name}
      </h2>
      
      </div>    
         
    </div>
        
  )
}


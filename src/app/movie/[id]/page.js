import Image from 'next/image';
import React from 'react'

const page = async({params}) => {
  const id=params.id;
  const url =  `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7a6face85bmshb7ad3103a7370ddp16679djsn98aee9de526a",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  console.log(data);
  const main_data = data[0].details;
  console.log(main_data.jawSummary);
  return (
    <>
    <div className='bg-white py-10'>
      <div className='max-w-[1300px] mx-auto px-3 md:text-start text-center'>
        <div className='my-5  '>
        <h1 className='text-3xl font-semibold'>Netflix / <span className='text-[#E50914]'>{main_data.type}</span></h1> 
        </div>
        
        <Image src={main_data.backgroundImage.url} alt='my videos' width={400} height={380} className='my-5 md:mx-0 mx-auto'/>
        <h1 className='text-4xl font-bold my-5'>{main_data.title}</h1>
        <p className='text-sm my-5'>{main_data.synopsis}</p>
      </div>
    </div>
      
    </>
  )
}

export default page

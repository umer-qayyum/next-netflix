import React from "react";
import MovieCard from "../components/MovieCard";

const movie = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  const url = process.env.RAPID_KEY;

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
  const main_data = data.titles;
  console.log(main_data.jawSummary);
  // const videos = main_data.jawSummary;
  return (
    <>
      <div className="bg-white max-w-[1320px] mx-auto py-10">
        <h1 className="text-center text-4xl font-semibold my-5">
          Series & Movies
        </h1>
        <div className="px-4 grid grid-cols-2 md:grid-cols-4 gap-4 ">
          {main_data.map((val) => {
            return(
              <>
              <MovieCard key={val.id} {...val}/>
               
              </>
            )
           })}
        </div>
      </div>
    </>
  );
};

export default movie;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const MovieCard = (val) => {
  const { id, type, title, synopsis, backgroundImage } = val.jawSummary;
  return (
    <>
      {backgroundImage.url !== "" ? (
        <div className="col-span-1 md:col-span-1 p-4 mx-auto">
          <div className="card border pb-4 rounded-lg">
            <Image
              src={backgroundImage.url}
              alt="my video"
              width={280}
              height={200}
            />
            <div className="card-body p-2">
                <h2 className="text-xl font-medium my-2">{title.slice(0,20)}</h2>
                <p className="text-sm my-6">{synopsis.slice(0,80)}</p>
                <Link href={`/movie/${id}`} className="my-2 bg-black text-white py-2 px-4 rounded-lg ">
                See movie
                </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MovieCard;

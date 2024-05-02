import Link from "next/link";
import React from "react";

const HerSection = ({ title, url }) => {
  return (
    <>
      <div className="bg-gradient-to-r from-[rgba(238,174,202,1)] to-[rgba(148,187,233,1)] ">
        <div className="max-w-[1320px] mx-auto md:grid grid-cols-2  py-10 px-5">
          <div className="col-span-1 flex flex-col  justify-center py-10 ps-5">
            <h1 className="text-4xl font-bold  my-5">{title}</h1>
            <p className="my-5">
              From award-winning dramas to blockbuster action movies, we've got
              you covered. Browse our selection of the latest and greatest
              movies, and find your new favorite today
            </p>
            <Link
              href="/movie"
              className="bg-black my-5  text-center text-white py-2 px-4 w-24 rounded-3xl"
            >
              Explore
            </Link>
          </div>
          <div className="col-span-1 flex justify-center py-10 ps-5">
            <img src={url} className="md:w-full w-64" />
          </div>
        </div>

      </div>
    </>
  );
};

export default HerSection;

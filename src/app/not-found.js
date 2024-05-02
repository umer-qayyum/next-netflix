import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <>
      <div>
        <div className="h-screen flex justify-center items-center">
          <h1 className="text-3xl font-bold my-4">Page not found!</h1>
          <h1 className="text-3xl font-bold my-4">404</h1>
          <Link
            href="/"
            className="py-2 px-4 bg-black text-white text-center my-4"
          >
            back to home
          </Link>
        </div>
      </div>
    </>
  );
};

export default notFound;

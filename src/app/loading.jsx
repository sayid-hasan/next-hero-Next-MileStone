"use client";
import { Spinner } from "@material-tailwind/react";
import React from "react";

const CommonLoader = () => {
  return (
    <div>
      <div className="flex flex-col gap-5  justify-center items-center min-h-screen">
        <Spinner className="h-16 w-16 text-gray-900/50" />
        <h2 className="2xl">Please wait ...</h2>
      </div>
    </div>
  );
};

export default CommonLoader;

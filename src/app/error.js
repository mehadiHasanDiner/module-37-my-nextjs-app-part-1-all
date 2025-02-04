"use client";
import React from "react";

const ErrorPage = ({ error, reset }) => {
  console.log(error);
  return (
    <div>
      <h1 className="text-center text-4xl text-red-600">
        Something went wrong
      </h1>
      <h1 className="text-center text-2xl text-red-600">{error.message}</h1>
      <button onClick={() => reset()} className="btn btn-outline btn-primary">
        Try again
      </button>
    </div>
  );
};

export default ErrorPage;

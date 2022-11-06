import React from "react";

const Airlines = (props) => {
  return (
    <div className="w-screen text-center ">
      <p className="text-3xl font-bold my-5 text-white">Top Airlines</p>
      <div className="flex flex-wrap justify-evenly items-stretch">
        <Cards title="Koii Airways" logo="" />
        <Cards title="CodeChef Jet" logo="" />
        <Cards title="Polygon Flies" logo="" />
        <Cards title="Matic Motion" logo="" />
      </div>
    </div>
  );
};

export default Airlines;

const Cards = ({ title, logo }) => {
  return (
    <div className="bg-white p-10 rounded-lg">
      <div>{title}</div>
    </div>
  );
};

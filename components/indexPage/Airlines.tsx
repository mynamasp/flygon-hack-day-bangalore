import React from "react";

type Props = {};

const Airlines = (props: Props) => {
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

interface CardProps {
  title: string;
  logo: string;
}

const Cards = ({ title, logo }: CardProps) => {
  return (
    <div className="bg-white p-10 rounded-lg">
      <div>{title}</div>
    </div>
  );
};

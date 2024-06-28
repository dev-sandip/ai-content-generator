import { TEMPLATE } from "@/types";
import Image from "next/image";
import React from "react";

const TemplateCard = (item: TEMPLATE) => {
  return (
    <div className="p-5 shadow-md rounded-md bg-white flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all ">
      <Image src={item.icon} alt={item.name} width={50} height={50} />
      <h2 className="font-medium text-lg">{item.name}</h2>
      <p className="text-gray-500 line-clamp-3">{item.desc}</p>
    </div>
  );
};

export default TemplateCard;
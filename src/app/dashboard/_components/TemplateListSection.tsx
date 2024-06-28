import templates from "@/app/(data)/Templates";
import { TEMPLATE } from "@/types";
import React, { useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";
const TemplateListSection = ({ userSearchInput }: any) => {
  const [templateList, settemplateList] = useState<TEMPLATE[]>([]);

  useEffect(() => {
    if (userSearchInput) {
      const filterData = templates.filter((item) =>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      console.log(filterData);
      settemplateList(filterData);
    } else {
      settemplateList(templates);
    }
  }, [userSearchInput]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
      {templateList.map((item: TEMPLATE, index: number) => {
        return <TemplateCard key={index} {...item} />;
      })}
    </div>
  );
};

export default TemplateListSection;

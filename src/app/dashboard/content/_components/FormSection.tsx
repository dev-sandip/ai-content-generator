"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TEMPLATE } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: any;
}
const FormSection = ({ selectedTemplate, userFormInput }: PROPS) => {
  const [formData, setformData] = useState<any>();

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setformData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    userFormInput(formData);
  };
  return (
    <div className="p-5 bg-white shadow-md border rounded-lg">
      <Image
        src={selectedTemplate?.icon ?? ""}
        alt={selectedTemplate?.name ?? ""}
        width={70}
        height={70}
      />
      <h2 className="font-bold text-2xl mb-2 text-primary">
        {selectedTemplate?.name ?? "Select a template"}
      </h2>
      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>
      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className="my-2 flex flex-col gap-2 mb-7">
            <label className="font-bold">{item.label}</label>
            {item.field == "input" ? (
              <Input
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : item.field == "textarea" ? (
              <Textarea
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : null}
          </div>
        ))}
        <Button className="w-full py-6">Generate Content</Button>
      </form>
    </div>
  );
};

export default FormSection;

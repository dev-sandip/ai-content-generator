"use client";
import React from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "@/types";
import templates from "@/app/(data)/Templates";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
interface PROPS {
  params: {
    "template-slug": string;
  };
  slug: string;
}
const CreateNewContent = (props: PROPS) => {
  const selectedTemplate: TEMPLATE | undefined = templates.find(
    (item) => item.slug === props.params["template-slug"]
  );

  const GenerateAIContent = (formData: any) => {
    console.log(formData);
  };
  return (
    <div className="p-10">
      <Link href="/dashboard">
        <Button>
          <ArrowLeft />
          Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <FormSection
          userFormInput={(v: any) => console.log(v)}
          selectedTemplate={selectedTemplate}
        />
        <div className="col-span-2">
          <OutputSection />
        </div>
      </div>
    </div>
  );
};

export default CreateNewContent;

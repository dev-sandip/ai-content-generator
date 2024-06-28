"use client";
import React from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "@/types";
import templates from "@/app/(data)/Templates";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import chatSession from "@/utils/AIModel";
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
  const [loading, setloading] = React.useState(false);
  const [aiOutput, setaiOutput] = React.useState<string>("");
  const GenerateAIContent = async (formData: any) => {
    setloading(true);
    const selectedPrompt = selectedTemplate?.aiPrompt;
    const finalAiPrompt = JSON.stringify(formData) + "," + selectedPrompt;
    const result = await chatSession.sendMessage(finalAiPrompt);
    setaiOutput(result.response.text());
    setloading(false);
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
          userFormInput={(v: any) => GenerateAIContent(v)}
          selectedTemplate={selectedTemplate}
          loading={loading}
        />
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
};

export default CreateNewContent;

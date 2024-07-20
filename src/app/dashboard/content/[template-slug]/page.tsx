"use client";
import React from "react";
import { NextPage } from "next";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "@/types";
import templates from "@/app/(data)/Templates";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import chatSession from "@/utils/AIModel";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
interface PROPS {
  params: {
    "template-slug": string;
  };
}
const CreateNewContent: NextPage<PROPS> = (props) => {
  const selectedTemplate: TEMPLATE | undefined = templates.find(
    (item) => item.slug === props.params["template-slug"]
  );
  const [loading, setloading] = React.useState(false);
  const [aiOutput, setaiOutput] = React.useState<string>("");
  const { user } = useUser();
  const GenerateAIContent = async (formData: any) => {
    setloading(true);
    const selectedPrompt = selectedTemplate?.aiPrompt;
    const finalAiPrompt = JSON.stringify(formData) + "," + selectedPrompt;
    const result = await chatSession.sendMessage(finalAiPrompt);
    setaiOutput(result.response.text());
    await SaveInDB(formData, selectedTemplate?.slug, result.response.text())
    setloading(false);
  };
  const SaveInDB = async (formData: any, slug: any, aiOutput: string) => {
    const result = await db.insert(AIOutput).values({
      formData: formData,
      templateSlug: slug,
      aiResponse: aiOutput,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("DD/MM/YYYY")
    })
  }
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

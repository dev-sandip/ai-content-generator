import React from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
const OutputSection = () => {
  const editorRef = React.useRef<any>(null);
  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex items-center justify-between p-5">
        <h2 className="font-medium text-lg">Your Result:</h2>
        <Button className="flex gap-2">
          <Copy />
          Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here....."
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
      />
    </div>
  );
};

export default OutputSection;

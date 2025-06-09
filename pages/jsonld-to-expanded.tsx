import ConversionPanel from "@components/ConversionPanel";
import { useCallback } from "react";
import * as React from "react";
import { expand } from "../utils/jsonld-wrapper";

export default function JsonldToExpanded() {
  const transformer = useCallback(async ({ value }) => {
    try {
      const jsonLd = await expand(JSON.parse(value));
      return JSON.stringify(jsonLd, null, 2);
    } catch (error) {
      throw new Error(`JSON-LD expansion failed: ${error.message}`);
    }
  }, []);

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="JSON-LD"
      editorDefaultValue="jsonLd"
      editorLanguage="json"
      resultTitle="Expanded"
      resultLanguage={"json"}
    />
  );
}

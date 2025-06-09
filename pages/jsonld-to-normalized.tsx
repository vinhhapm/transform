import ConversionPanel from "@components/ConversionPanel";
import { useCallback } from "react";
import * as React from "react";
import { normalize } from "../utils/jsonld-wrapper";

export default function JsonldToNormalized() {
  const transformer = useCallback(async ({ value }) => {
    try {
      return await normalize(JSON.parse(value));
    } catch (error) {
      throw new Error(`JSON-LD normalization failed: ${error.message}`);
    }
  }, []);

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="JSON-LD"
      editorDefaultValue="jsonLd"
      editorLanguage="json"
      resultTitle="Normalized"
      resultLanguage={"plaintext"}
    />
  );
}

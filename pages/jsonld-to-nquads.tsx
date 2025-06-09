import ConversionPanel from "@components/ConversionPanel";
import { useCallback } from "react";
import * as React from "react";
import { toRDF } from "../utils/jsonld-wrapper";

export default function JsonldToNquads() {
  const transformer = useCallback(async ({ value }) => {
    try {
      return (await toRDF(JSON.parse(value), {
        format: "application/n-quads"
      })) as string;
    } catch (error) {
      throw new Error(`JSON-LD to N-Quads conversion failed: ${error.message}`);
    }
  }, []);

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="JSON-LD"
      editorDefaultValue="jsonLd"
      editorLanguage="json"
      resultTitle="N-Quads"
      resultLanguage={"plaintext"}
    />
  );
}

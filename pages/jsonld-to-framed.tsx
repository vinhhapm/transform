import ConversionPanel, { Transformer } from "@components/ConversionPanel";
import { useCallback } from "react";
import * as React from "react";
import { frame } from "../utils/jsonld-wrapper";

export default function JsonldToFramed() {
  const transformer = useCallback<Transformer>(
    async ({ value, splitEditorValue }) => {
      try {
        const jsonLd = await frame(
          JSON.parse(value),
          JSON.parse(splitEditorValue)
        );
        return JSON.stringify(jsonLd, null, 2);
      } catch (error) {
        throw new Error(`JSON-LD framing failed: ${error.message}`);
      }
    },
    []
  );

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="JSON-LD"
      editorDefaultValue="jsonLd"
      splitTitle={"Frame"}
      splitLanguage="json"
      splitEditorDefaultValue="jsonLdContext"
      editorLanguage="json"
      resultTitle="Framed"
      resultLanguage={"json"}
    />
  );
}

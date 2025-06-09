// Wrapper for jsonld operations that works in serverless environment
let jsonld: any = null;

// Dynamically import jsonld only when needed and handle errors gracefully
const getJsonld = async () => {
  if (jsonld) return jsonld;

  try {
    jsonld = await import("jsonld");
    return jsonld;
  } catch (error) {
    console.error("Failed to load jsonld:", error);
    throw new Error("JSON-LD operations are not available in this environment");
  }
};

export const expand = async (input: any) => {
  const lib = await getJsonld();
  return lib.expand(input);
};

export const compact = async (input: any, context: any) => {
  const lib = await getJsonld();
  return lib.compact(input, context);
};

export const flatten = async (input: any, context?: any) => {
  const lib = await getJsonld();
  return lib.flatten(input, context);
};

export const frame = async (input: any, frame: any) => {
  const lib = await getJsonld();
  return lib.frame(input, frame);
};

export const normalize = async (input: any, options?: any) => {
  const lib = await getJsonld();
  return lib.normalize(input, options);
};

export const toRDF = async (input: any, options?: any) => {
  const lib = await getJsonld();
  return lib.toRDF(input, options);
};

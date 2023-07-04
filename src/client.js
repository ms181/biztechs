import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "yptfaukf",
  dataset: "production",
  useCdn: true 
});
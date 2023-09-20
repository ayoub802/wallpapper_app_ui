import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "gvq5lkes",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export const getCategory = async () => {
  const items = await client.fetch('*[_type == "banner"]').then((data) => {
    return data;
  });

  return items;
};

export const getMainIamgeById = async (id) => {
  const items = await client
    .fetch(`*[_type == "banner" && _id == $id]`, { id })
    .then((data) => {
      return data;
    });
    

    return items;
};

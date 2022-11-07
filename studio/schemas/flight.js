export default {
  name: "airlines",
  title: "Airlines",
  type: "document",
  fields: [
    {
      name: "airline",
      title: "Name of the Airline",
      type: "string",
    },
    {
      name: "airline_image",
      title: "Airline Image",
      type: "image",
    },
    {
      name: "include_airline",
      title: "Include this Airline",
      type: "boolean",
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: "airline",
      media: "airline_image",
    },
  },
};

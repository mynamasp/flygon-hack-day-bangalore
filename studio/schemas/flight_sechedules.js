export default {
  name: "flight",
  title: "Flights",
  type: "document",
  fields: [
    {
      name: "flight_name",
      title: "Name of the Flight",
      type: "string",
    },
    {
      name: "airline",
      title: "Airline",
      type: "reference",
      to: [{ type: "airlines" }],
    },
    {
      name: "source",
      title: "Source",
      type: "string",
    },
    {
      name: "destination",
      title: "Destination",
      type: "string",
    },
    {
      name: "departure_time",
      title: "Departure Time",
      type: "datetime",
    },
    {
      name: "arrival_time",
      title: "Arrival Time",
      type: "datetime",
    },
    {
      name: "price",
      title: "Price for single Seat",
      type: "number",
      description: "Enter the Price of the Flight in MATIC for single seat",
    },
    {
      name: "include_airline",
      title: "Include this Flight",
      type: "boolean",
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: "flight_name",
    },
  },
};

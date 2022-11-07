export default {
  name: "users",
  title: "Users",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "profile_pic",
      title: "Profile Picture",
      type: "image",
    },
    {
      name: "wallet_address",
      title: "Wallet Address",
      type: "string",
    },
    {
      name: "mobile",
      title: "Mobile Number",
      type: "string",
    },
    {
      name: "email",
      title: "Email Address",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "profile_pic",
    },
  },
};

export default {
  name: "memberSpotlight",
  type: "document",
  title: "Member Spotlight",
  fields: [
    {
      name: "memberName",
      type: "string",
      title: "Member Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "memberBio",
      type: "text",
      title: "Member Bio",
      validation: (Rule) => Rule.required().max(687),
    },
    {
      name: "memberImage",
      type: "image",
      title: "Member Image",
      validation: (Rule) => Rule.required(),
    },
  ],
};

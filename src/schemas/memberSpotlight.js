export default  {
  name: "memberSpotlight",
  type: "document",
  title: "Member Spotlight",
  fields: [
    {
      name: 'memberName',
      type: 'string',
      title: 'Member Name'
    },
    {
      name: 'memberBio',
      type: 'text',
      title: 'Member Bio'
    },
    {
      name: 'memberImage',
      type: 'image',
      title: 'Member Image'
    },
  ]
}
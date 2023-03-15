export default {
  name: 'Image',
  type: 'document',
  title: 'Image',
  fields: [
    {
      name: 'image',
      type: 'image',
      validation: Rule => Rule.required()
    }
  ]
}
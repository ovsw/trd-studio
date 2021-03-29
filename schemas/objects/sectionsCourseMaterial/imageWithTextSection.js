import {BsLayoutSplit} from 'react-icons/bs'

export default {
  name: 'imageWithTextSection',
  title: 'Image w/ Text',
  type: 'object',
  icon: BsLayoutSplit,
  liveEdit: false,
  __experimental_actions: [ 'create', 'update', 'publish', 'delete' ], /* 'create', 'delete' */
  fields: [
    {
      name: 'title',
      title: 'Section title',
      type: 'string',
      validation: Rule => Rule.required().error('missing section title')
    },
    {
      name: 'image',
      title: 'Image',
      type: 'mainImage',
      validation: Rule => Rule.required().error('missing main image')
    },
    {
      name: 'text',
      title: 'Content',
      type: 'bodyPortableText',
      validation: Rule => Rule.required().error('missing text')
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    },
    prepare ({title, media}) {
      const subtitle = 'Image w/ Text Section'
media
      return {
        title,
        subtitle: subtitle,
        media
      }
    }
  }
}

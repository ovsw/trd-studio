import {FaMapMarked} from 'react-icons/fa'

export default {
  name: 'locationMapSection',
  title: 'Location Map Section',
  type: 'object',
  icon: FaMapMarked,
  liveEdit: false,
  __experimental_actions: [ 'create', 'update', 'publish', 'delete' ], /* 'create', 'delete' */
  fields: [
    {
      name: 'title1',
      title: 'Section title 1',
      type: 'string',
      validation: Rule => Rule.required().error('missing section title')
    },
    {
      name: 'title2',
      title: 'Section title 2',
      type: 'string',
      validation: Rule => Rule.required().error('missing section title')
    },
    {
      name: 'text',
      title: 'Content',
      type: 'barePortableText',
    },
    {
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [
        {type: 'button'}
      ]
    },
  ],
  preview: {
    select: {
      title1: 'title1',
      title2: 'title2',
    },
    prepare ({title1, title2}) {
      const subtitle = 'Location Map Section'

      return {
        title: `${title1} ${title2}`,
        subtitle: subtitle,
      }
    }
  }
}

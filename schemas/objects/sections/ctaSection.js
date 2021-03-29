import {BsExclamationCircle} from 'react-icons/bs'

export default {
  name: 'ctaSection',
  title: 'Call To Action',
  type: 'object',
  icon: BsExclamationCircle,
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
      title: 'title'
    },
    prepare ({title}) {
      const subtitle = 'CTA Section'

      return {
        title: title,
        subtitle: subtitle,
      }
    }
  }
}

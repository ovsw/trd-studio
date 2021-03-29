import {FaParagraph} from 'react-icons/fa'

export default {
  name: 'textOnlySection',
  title: 'Text Only Section',
  type: 'object',
  icon: FaParagraph,
  liveEdit: false,
  __experimental_actions: [ 'create', 'update', 'publish', 'delete' ], /* 'create', 'delete' */
  fields: [
    {
      name: 'title',
      title: 'Section title',
      type: 'string',
      validation: Rule => Rule.required().error('missing title')
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
      title: 'title'
    },
    prepare ({title}) {
      const subtitle = 'Text Only Section'

      return {
        title: title,
        subtitle: subtitle,
      }
    }
  }
}

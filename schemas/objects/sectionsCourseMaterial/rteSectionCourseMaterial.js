import {FaParagraph} from 'react-icons/fa'

export default {
  name: 'rteSectionCourseMaterial',
  title: 'Rich Text Section',
  type: 'object',
  icon: FaParagraph,
  liveEdit: false,
  __experimental_actions: [ 'create', 'update', 'publish', 'delete' ], /* 'create', 'delete' */
  fields: [
    {
      name: 'title',
      title: 'Section title',
      description: 'for internal use, the title will not be visible in the front-end',
      type: 'string',
      validation: Rule => Rule.required().error('missing section title')
    },
    {
      name: 'text',
      title: 'Content',
      type: 'bodyPortableText',
      validation: Rule => Rule.required().error('missing section body text')
    },
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({title}) {
      const subtitle = 'Rich Text Section'

      return {
        title: title,
        subtitle: subtitle,
      }
    }
  }
}

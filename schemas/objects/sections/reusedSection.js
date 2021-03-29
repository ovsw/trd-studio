import {ImSection} from 'react-icons/im'

export default {
  name: 'reusedSection',
  title: 'Reused Section',
  type: 'object',
  icon: ImSection,
  liveEdit: false,
  __experimental_actions: [ 'create', 'update', 'publish', 'delete' ], /* 'create', 'delete' */
  fields: [
    {
      name: 'reusableSection',
      title: 'Reusable Section',
      type: 'reference',
      to: [
        {type: 'reusableSection'}
      ],
      validation: Rule => Rule.required().error('missing testimonials')
    },
  ],
  preview: {
    select: {
      title: 'reusableSection.title'
    },
    prepare ({title}) {
      const subtitle = 'Reused Section'

      return {
        title: title,
        subtitle: subtitle,
      }
    }
  }
}

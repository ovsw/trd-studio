import {ImListNumbered} from 'react-icons/im'

export default {
  name: 'stepsSection',
  title: 'Steps Section',
  type: 'object',
  icon: ImListNumbered,
  liveEdit: false,
  __experimental_actions: [ 'create', 'update', 'publish', 'delete' ], /* 'create', 'delete' */
  fields: [
    {
      name: 'title1',
      title: 'Section title 1',
      type: 'string',
      description: 'appears in Accented Color (orange)',
      validation: Rule => Rule.required().error('missing section title')
    },
    {
      name: 'title2',
      title: 'Section title 2',
      description: 'appears in normal Color (black/white)',
      type: 'string'
    },
    {
      name: 'text',
      title: 'Paragraph of text under title (optional)',
      type: 'barePortableText'
    },
    {
      name: 'stepsList',
      title: 'Steps',
      type: 'array',
      of: [
          {type: 'step'}
      ],
      validation: Rule => Rule.required().error('missing steps')
    },
    {
      name: 'buttons',
      title: 'Buttons (botom of section, optional)',
      type: 'array',
      of:[
        {type: 'button'}
      ]
    },
  ],
  preview: {
    select: {
      title1: 'title1',
      title2: 'title2'
    },
    prepare ({title1, title2}) {
      const subtitle = 'Steps Section'

      return {
        title: `${title1} ${title2}`,
        subtitle: subtitle,
      }
    }
  }
}

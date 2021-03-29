import {FaUniversity} from 'react-icons/fa'

export default {
  name: 'featCoursesSection',
  title: 'Featured Courses',
  type: 'object',
  icon: FaUniversity,
  liveEdit: false,
  __experimental_actions: [ 'create', 'update', 'publish', 'delete' ], /* 'create', 'delete' */
  fields: [
    {
      name: 'title1',
      title: 'Title (Accent)',
      description: 'orange part of the title',
      type: 'string',
      validation: Rule => Rule.required().error('missing part of the title')
    },
    {
      name: 'title2',
      title: 'Title (Black)',
      description: 'black part of the title',
      type: 'string',
      validation: Rule => Rule.required().error('missing part of the title')
    },
    {
      name: 'subtitle',
      title: 'Section subtitle',
      type: 'string',
      validation: Rule => Rule.required().error('missing section subtitle')
    },
    {
      name: 'text',
      title: 'Section text',
      type: 'simplePortableText',
      validation: Rule => Rule.required().error('missing section text')
    },
    {
      name: 'courses',
      title: 'Courses',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'course'}
          ]
        }
      ],
      validation: Rule => [
         Rule.required().error('missing section title'),
        Rule.max(2).error('can\'t fit more than 2 courses'),
        Rule.unique().error('duplicate course')
      ]
    }
  ],
  preview: {
    select: {
      title1: 'title1',
      title2: 'title2'
    },
    prepare ({title1, title2}) {
      const subtitle = 'Featured Courses Section'

      return {
        title: `${title1} ${title2}`,
        subtitle: subtitle,
      }
    }
  }
}

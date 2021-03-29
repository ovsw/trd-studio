import {FaRegStar} from 'react-icons/fa'

export default {
  name: 'testimonialsSection',
  title: 'Testimoanials',
  type: 'object',
  icon: FaRegStar,
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
      type: 'string'
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'testimonial'}
          ]
        }
      ],
      validation: Rule => Rule.required().error('missing testimonials')
    },
  ],
  preview: {
    select: {
      title1: 'title1',
      title2: 'title2'
    },
    prepare ({title1, title2}) {
      const subtitle = 'Testimonials Section'

      return {
        title: `${title1} ${title2}`,
        subtitle: subtitle,
      }
    }
  }
}

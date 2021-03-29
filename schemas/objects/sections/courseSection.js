import {FaUniversity} from 'react-icons/fa'

export default {
  name: 'courseSection',
  title: 'Single Course',
  type: 'object',
  icon: FaUniversity,
  liveEdit: false,
  __experimental_actions: [ 'create', 'update', 'publish', 'delete' ], /* 'create', 'delete' */
  fields: [
    {
      name: 'course',
      title: 'Course',
      type: 'reference',
      to: [
        {type: "course"}
      ],
      validation: Rule => Rule.required().error('missing course')
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
      courseTitle: 'course.content.title'
    },
    prepare ({courseTitle}) {
      const subtitle = 'Single Course Section'

      return {
        title: courseTitle,
        subtitle: subtitle,
      }
    }
  }
}

import Tabs from 'sanity-plugin-tabs'
import {FaGraduationCap} from 'react-icons/fa'
import { format } from 'date-fns'
import { ro } from 'date-fns/locale'

export default {
  name: 'courseSession',
  title: 'Course Session',
  type: 'document',
  icon: FaGraduationCap,
  liveEdit: false,
  __experimental_actions: [ 'create', 'update', 'publish', 'delete' ], /* 'create', 'delete' */
  fields: [
    {
      name: 'content',
      type: 'object',
      title: 'Content',
      inputComponent: Tabs,
      fieldsets: [
        {name: 'main', title: 'Main'}
      ],
      fields: [
        {
          fieldset: 'main',
          name: 'course',
          title: 'Course',
          type: 'reference',
          to: [
            {type: 'course'}
          ],
          validation: Rule => Rule.required().error('missing course')
        },
        {
          fieldset: 'main',
          name: 'courseModule',
          title: 'Course Module',
          type: 'reference',
          to: [
            {type: 'courseModule'}
          ],
          validation: Rule => Rule.required().error('missing course module')
        },
        {
          fieldset: 'main',
          name: 'level',
          title: 'Course Level',
          type: 'string',
          options: {
            list: [
              'Începători',
              'Intermediari',
              'Avansați'
            ]
          }
        },
        {
          fieldset: 'main',
          name: 'duration',
          title: 'Duration',
          description: 'number of weeks, days per week, etc.',
          type: 'string',
          validation: Rule => Rule.required().error('missing duration')
        },
        {
          fieldset: 'main',
          name: 'schedule',
          title: 'Schedule',
          description: 'days of the week and times of day, any pauses for holidays, etc',
          type: 'simplePortableText',
          validation: Rule => Rule.required().error('missing duration')
        },
        {
          fieldset: 'main',
          name: 'startDate',
          title: 'Start Date',
          type: 'date',
          validation: Rule => Rule.required().error('missing start date')
        },
        {
          fieldset: 'main',
          name: 'endDate',
          title: 'End Date',
          type: 'date',
          validation:  Rule => Rule.required().error('missing end date')
        },
        {
          fieldset: 'main',
          name: 'teacher',
          title: 'Teacher',
          type: 'reference',
          to: [
            {type: 'staffMember'}
          ],
          validation: Rule => Rule.required().error('missing teacher')
        }
      ]
    }

  ],
  preview: {
    select: {
      courseTitle: 'content.course.content.title',
      level: 'content.level',
      startDate: 'content.startDate',
      endDate: 'content.endDate'
    },
    prepare ({courseTitle, level, startDate, endDate}) {

      const startDateObj = new Date(startDate)
      const endDateObj = new Date(endDate)

      let subtitle = ''

      if (format(startDateObj, 'MMMM') === format(endDateObj, 'MMMM')) {
        subtitle = `${level} (${format(startDateObj, 'MMMM', { locale: ro })})`
      }
      else{
        subtitle = `${level} (${format(startDateObj, 'MMMM', { locale: ro })} - ${format(endDateObj, 'MMMM', { locale: ro })})`
      }

      const description = `${format(startDateObj, 'MMMM dd, yyyy', { locale: ro })} - ${format(endDateObj, 'MMMM dd, yyyy', { locale: ro })}`

      return {
        title: courseTitle,
        subtitle: subtitle,
        description: description
      }
    }
  }
}

import {FaRegStar} from 'react-icons/fa'
import { format } from 'date-fns'
import { ro } from 'date-fns/locale'

export default {
  name: 'testimonial',
  title: 'Testimoanial',
  type: 'document',
  icon: FaRegStar,
  liveEdit: false,
  __experimental_actions: [ 'create', 'update', 'publish', 'delete' ], /* 'create', 'delete' */
  fields: [
    {
      name: 'course',
      title: 'Course',
      type: 'reference',
      to: [
        {type: 'course'}
      ],
      validation: Rule => Rule.required().error('missing course')
    },
    {
      name: 'text',
      title: 'Testimonial Text',
      type: 'text',
      validation: Rule => Rule.required().error('missing text')
    },
    {
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
      validation: Rule => Rule.required().error('missing author name')
    },
    {
      name: 'authorTitle',
      title: 'Author title(s) / position(s), job',
      type: 'string',
      validation: Rule => Rule.required().error('missing author title(s)')
    },
    {
      name: 'image',
      type: 'image',
      title: 'Avatar Image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required().error('missing avatar image')
    },
  ],
  preview: {
    select: {
      name: 'authorName',
      title: 'authorTitle',
      media: 'image'
    },
    prepare ({name, title, media}) {
      return {
        title: name,
        subtitle: title,
        media: media
      }
    }
  }
}

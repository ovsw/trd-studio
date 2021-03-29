import {MdTitle} from 'react-icons/md'

export default {
  name: 'courseChapterTitleSection',
  title: 'Course Chapter Title',
  type: 'object',
  icon: MdTitle,
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
      name: 'subtitle',
      title: 'Subtitle (optional)',
      type: 'string'
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare ({title, media}) {
      const subtitle = 'Chapter Title Section'
media
      return {
        title,
        subtitle: subtitle,
      }
    }
  }
}

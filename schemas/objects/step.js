import Tabs from "sanity-plugin-tabs"
import {ImListNumbered} from 'react-icons/im'

export default {
  name: 'step',
  title: 'Step',
  type: 'object',
  icon: ImListNumbered,
  liveEdit: false,
  __experimental_actions: [ 'create', 'update', 'publish', 'delete' ], /* 'create', 'delete' */
  fields: [
    {
      name: 'title0',
      title: 'Title Beginning (non-bold)',
      type: 'string',
    },
    {
      name: 'title1',
      title: 'Title Bold',
      type: 'string',
      validation: Rule => Rule.required().error('missing step title')
    },
    {
      name: 'title2',
      title: 'Title Continued (non-bold)',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'simplePortableText',
      validation: Rule => Rule.required().error('missing step body')
    },
    {
      name: 'image',
      type: 'altImage',
      title: 'Image',
      validation: Rule => Rule.required().error('missing step image')
    },
  ],
  preview: {
    select: {
      title0: 'title0',
      title1: 'title1',
      title2: 'title2',
      media: 'image',
    },
    prepare ({title0, title1 = 'Missing Title', title2, media}) {

      const title0text = title0 ? title0 : ''
      const title2text = title2 ? title2 : ''

      return {
        title: `${title0text} ${title1} ${title2text}`,
        media: media
      }
    }
  }
}

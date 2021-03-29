import Tabs from "sanity-plugin-tabs"
import {FiFile} from 'react-icons/fi'

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: FiFile,
  liveEdit: false,
  __experimental_actions: [ 'create', 'update', 'publish', 'delete' ], /* 'create', 'delete' */
  fields: [
    {
      name: 'content',
      type: 'object',
      title: 'Content',
      inputComponent: Tabs,
      fieldsets: [
        {name: 'main', title: 'Main'},
        {name: 'settings', title: 'Settings'},
        {name: 'seo', title: 'SEO'}
      ],
      fields: [
        {
          fieldset: 'main',
          name: 'title0',
          title: 'Page title start (not bold)',
          type: 'string',
        },
        {
          fieldset: 'main',
          name: 'title',
          title: 'Page Title (bold)',
          type: 'string',
          validation: Rule => Rule.required().error('missing section title')
        },
        {
          fieldset: 'main',
          name: 'title1',
          title: 'Page title end (not bold)',
          type: 'string',
        },
        {
          fieldset: 'main',
          name: 'hero',
          title: 'Hero (optional)',
          type: 'innerHero',
        },
        {
          fieldset: 'settings',
          name: 'slug',
          type: 'slug',
          title: 'Slug',
          validation: Rule => Rule.error('You have to fill out the slug of the page.').required(),
          description: `This page will have the URL: https://tridia.ro/[whatever you type below]/`,
          options: {
            source: 'content.title',
            maxLength: 96
          }
        },
        // {
        //   fieldset: 'settings',
        //   name: 'mainImage',
        //   type: 'image',
        //   title: 'Cover Image',
        //   description: 'shown as a header background for the page',
        //   options: {
        //     hotspot: true
        //   },
        //   validation: Rule => Rule.required().error('missing image')
        // },
        {
          fieldset: 'main',
          name: 'sections',
          title: 'Content Sections',
          type: 'sections'
        },
        {
          fieldset: 'seo',
          name: 'seo',
          title: 'SEO Title',
          type: 'seo',
        },
      ]
    }

  ],
  orderings: [
    {
      name: 'createdAt',
      title: 'Created older->newer',
      by: [
        {
          field: '_createdAt',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title0: 'content.title0',
      title: 'content.title',
      title1: 'content.title1',
      slug: 'content.slug',
      media: 'content.mainImage',
    },
    prepare ({title0, title = 'No title', title1, slug = {}, media, statusContent, statusImages}) {
      const path = `/${slug.current}/`
      
      const  title0Text = title0 ? title0 : ''
      const  title1Text = title1 ? title1 : ''

      return {
        title: `${title0Text} ${title} ${title1Text}`,
        description: path,
        media: media
      }
    }
  }
}

import Tabs from "sanity-plugin-tabs"
import {FiFile} from 'react-icons/fi'

export default {
  name: 'courseListingPage',
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
        // {
        //   fieldset: 'main',
        //   name: 'title',
        //   title: 'Title',
        //   type: 'string'
        // },
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
          name: 'courses',
          title: 'Available Courses',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{type: 'course'}]
            }
          ],
          validation: Rule => Rule.error('add at least one course.').required()
        },
        {
          fieldset: 'seo',
          name: 'seo',
          title: 'SEO Title',
          type: 'seo',
        }
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
      title: 'content.title',
      slug: 'content.slug',
      media: 'content.mainImage',
    },
    prepare ({title = 'No title', slug = {}, media, statusContent, statusImages}) {
      const path = `/${slug.current}/`
      
      return {
        title,
        description: path,
        media: media
      }
    }
  }
}

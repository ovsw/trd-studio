import Tabs from "sanity-plugin-tabs"
import {FaUniversity} from 'react-icons/fa'

export default {
  name: 'course',
  title: 'Course',
  type: 'document',
  icon: FaUniversity,
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
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: Rule => Rule.required().error('missing course title')
        },
        {
          fieldset: 'main',
          description: 'used when featuring the course',
          name: 'tagline',
          title: 'Tagline',
          type: 'string',
          validation: Rule => Rule.required().error('missing tagline')
        },
        {
          fieldset: 'main',
          name: 'price',
          description: 'used when featuring the course',
          title: 'Starting Price (RON)',
          type: 'string',
          validation: Rule => Rule.required().error('missing starting price')
        },
        {
          fieldset: 'main',
          name: 'description',
          description: 'used when featuring the course',
          title: 'Short Description',
          type: 'simplePortableText',
          validation: Rule => Rule.required().error('missing tagline')
        },
        {
          fieldset: 'main',
          name: 'body',
          title: 'Full Description',
          description: 'used on the course page',
          type: 'bodyPortableText',
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
        {
          fieldset: 'settings',
          name: 'mainImage',
          type: 'image',
          title: 'Cover Image',
          description: 'shown as a header background for the page',
          options: {
            hotspot: true
          },
          validation: Rule => Rule.required().error('missing image')
        },
        // {
        //   fieldset: 'main',
        //   name: 'sections',
        //   title: 'Content Sections',
        //   type: 'array',
        //   of: [
        //     {type: 'magSection'},
        //     {type: 'ctaSection'},
        //     {type: 'bigHeading'},
        //     {type: 'tableSection'},
        //     {type: 'faqSection'},
        //     {type: 'cardSection'},
        //     {type: 'menuSection'},
        //     {type: 'reusedSection'},
        //     {type: 'sponsorsSection'}
        //   ]
        // },
        {
          fieldset: 'main',
          name: 'modules',
          title: 'Course Modules',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [
                {type: 'courseModule'}
              ]
            }
          ]
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

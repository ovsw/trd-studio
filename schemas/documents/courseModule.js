import Tabs from "sanity-plugin-tabs"
import {MdViewModule} from 'react-icons/md'

export default {
  name: 'courseModule',
  title: 'Course Module',
  type: 'document',
  icon: MdViewModule,
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
        {name: 'materials', title: 'Course Materials'},
        {name: 'settings', title: 'Settings'},
        {name: 'seo', title: 'SEO'}
      ],
      fields: [
        {
          fieldset: 'main',
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: Rule => Rule.required().error('missing title')
        },
        {
          fieldset: 'main',
          name: 'course',
          title: 'Course',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [
                {type: 'course'}
              ]
            }
          ]
          ,
          validation: Rule => Rule.required().error('missing course(s)')
        },
        {
          fieldset: 'materials',
          name: 'lessons',
          title: 'Lessons',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [
                {type: 'courseMaterial'}
              ]
            }
          ]
          ,
          validation: Rule => Rule.required().error('missing course(s)')
        },
        {
          fieldset: 'main',
          name: 'duration',
          title: 'Duration',
          type: 'string',
          validation: Rule => Rule.required().error('missing duration')
        },
        {
          fieldset: 'main',
          name: 'price',
          title: 'Price (RON)',
          type: 'string',
          validation: Rule => Rule.required().error('missing price')
        },
        {
          fieldset: 'main',
          name: 'classSize',
          title: 'Class Size',
          type: 'string',
          validation: Rule => Rule.required().error('missing class size')
        },
        {
          fieldset: 'main',
          name: 'audience',
          title: 'Audience',
          type: 'text',
          validation: Rule => Rule.required().error('missing audience')
        },
        {
          fieldset: 'main',
          name: 'equipment',
          title: 'Equipment',
          type: 'simplePortableText',
          validation: Rule => Rule.required().error('missing equipment')
        },
        {
          fieldset: 'main',
          name: 'experienceReq',
          title: 'Previous Knowledge required',
          type: 'simplePortableText',
          validation: Rule => Rule.required().error('missing requirements')
        },
        {
          fieldset: 'main',
          name: 'results',
          title: 'Results after taking course',
          type: 'simplePortableText',
          validation: Rule => Rule.required().error('missing results')
        },
        {
          fieldset: 'main',
          name: 'Curriculum',
          title: 'Curriculum',
          type: 'simplePortableText',
          validation: Rule => Rule.required().error('missing curriculum')
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
        // {
        //   fieldset: 'main',
        //   name: 'body',
        //   title: 'Body',
        //   type: 'bodyPortableText',
        // },
        // {
        //   fieldset: 'seo',
        //   name: 'seo',
        //   title: 'SEO Title',
        //   type: 'seo',
        // },
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

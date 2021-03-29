import Tabs from "sanity-plugin-tabs"
import {FaBook} from 'react-icons/fa'
import { format } from 'date-fns'
import { ro } from 'date-fns/locale'

export default {
  name: 'courseMaterial',
  title: 'Course Material',
  type: 'document',
  icon: FaBook,
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
          name: 'courseModule',
          title: 'Course Module',
          description: 'the corse module this lesson material is for',
          type: 'reference',
          to: [
            {type: 'courseModule'}
          ],
          validation: Rule => Rule.required().error('missing course module')
        },
        {
          fieldset: 'main',
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: Rule => Rule.required().error('missing title')
        },
        {
          fieldset: 'main',
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string'
        },
        {
          fieldset: 'settings',
          name: 'slug',
          type: 'slug',
          title: 'Slug',
          validation: Rule => Rule.error('You have to fill out the slug of the page.').required(),
          description: `This page will have the URL: https://tridia.ro/materiale-curs/[whatever you type below]/`,
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
        //   description: 'shown in the course materials listing and as a header background for the page',
        //   options: {
        //     hotspot: true
        //   },
        //   validation: Rule => Rule.required().error('missing image')
        // },
        {
          fieldset: 'main',
          name: 'excerpt',
          title: 'Excerpt',
          description: 'a short description of the content',
          type: 'text',
          validation: Rule => Rule.required().error('missing excerpt')
        },
        {
          fieldset: 'main',
          name: 'sections',
          title: 'Content Sections',
          type: 'sectionsCourseMaterial'
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
  preview: {
    select: {
      title: 'content.title',
      courseModule: 'content.courseModule.content.title',
      course0: 'content.courseModule.content.course.0.content.title',
      course1: 'content.courseModule.content.course.1.content.title',
      course2: 'content.courseModule.content.course.2.content.title',
      course3: 'content.courseModule.content.course.3.content.title',
      course4: 'content.courseModule.content.course.4.content.title',
      slug: 'content.slug',
      // media: 'content.mainImage'
    },
    prepare ({title = 'No title', course0, course1, course2, course3, course4, courseModule, slug = {}, media}) {

      const courses = [course0, course1, course2, course3, course4].filter(Boolean)
      console.log('xxxx', courses)

      const path = `/${slug.current}/`
      const coursesText = courses.length > 0 ? `${courses.join(', ')}` : ''
      const subtitle = `${coursesText} - ${courseModule}`

      return {
        title: title,
        subtitle,
        media: media
      }
    }
  }
}

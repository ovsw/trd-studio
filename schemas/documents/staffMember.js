import Tabs from "sanity-plugin-tabs"
import {FaUserAstronaut} from 'react-icons/fa'

export default {
  name: 'staffMember',
  title: 'Staff Member',
  type: 'document',
  icon: FaUserAstronaut,
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
        {name: 'seo', title: 'SEO'}
      ],
      fields: [
        {
          fieldset: 'main',
          name: 'image',
          type: 'image',
          title: 'Avatar Image',
          options: {
            hotspot: true
          },
          validation: Rule => Rule.required().error('missing avatar image')
        },
        {
          fieldset: 'main',
          name: 'name',
          title: 'Staff Member Name',
          type: 'string',
          validation: Rule => Rule.required().error('missing name')
        },
        {
          fieldset: 'main',
          name: 'title',
          title: 'Staff Member Title(s)',
          type: 'string',
          validation: Rule => Rule.required().error('missing title')
        },
        {
          fieldset: 'main',
          name: 'role',
          title: 'Staff Member Role(s)',
          type: 'string',
          validation: Rule => Rule.required().error('missing role')
        },
        {
          fieldset: 'main',
          name: 'shortBio',
          title: 'Short Bio',
          type: 'text',
          validation: Rule => Rule.required().error('missing short bio')
        },
        {
          fieldset: 'main',
          name: 'bio',
          title: 'Full Bio',
          type: 'bodyPortableText',
          validation: Rule => Rule.required().error('missing full bio')
        }
      ]
    }

  ],
  preview: {
    select: {
      name: 'content.name',
      title: 'content.title',
      role: 'content.role',
      media: 'content.image',
    },
    prepare ({name = 'Missing Name', title = 'Missing Title(s)', role = 'Missing Role(s)', media}) {
      
      return {
        title: name,
        subtitle: role,
        description: title,
        media: media
      }
    }
  }
}

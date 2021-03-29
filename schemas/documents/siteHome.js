import Tabs from "sanity-plugin-tabs"

export default {
  name: 'siteHome',
  type: 'document',
  liveEdit: false,
  title: 'Home Page',
  __experimental_actions: ['update', 'create', /* 'delete', */ 'publish'],
  fields: [
    {
      name: 'content',
      type: 'object',
      title: 'Content',
      inputComponent: Tabs,
      fieldsets: [
        {name: 'hero', title: 'Hero'},
        {name: 'main', title: 'Main'},
        {name: 'seo', title: 'SEO'}
      ],
      fields: [
        {
          fieldset: 'hero',
          name: 'hero',
          title: 'Hero',
          type: 'hero'
        },
        {
          fieldset: 'main',
          name: 'sections',
          title: 'Homepage Content Sections',
          type: 'sections'
        },
        {
          fieldset: 'seo',
          name: 'seo',
          title: 'SEO Info',
          type: 'seo',
        },
      ]
    }
  ],
  preview: {
    select: {
    },
    prepare () {
      return {
        title: 'Site Home'
      }
    }
  }
}

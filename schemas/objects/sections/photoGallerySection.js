import {GrGallery} from 'react-icons/gr'

export default {
  name: 'photoGallerySection',
  title: 'Photo Gallery',
  type: 'object',
  icon: GrGallery,
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
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      options: {
        layout: 'grid'
      },
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              validation: Rule => Rule.required().error('missing image caption')
            },
            {
              name: 'alt',
              type: 'string',
              title: 'ALT text',
              description: 'pretend you are describing the image to a blind person',
              validation: Rule => Rule.required().error('missing image alt text')
            }
          ]
        }
      ],
      validation: Rule => Rule.required().error('missing testimonials')
    },
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({title}) {
      const subtitle = 'Photo Gallery Section'

      return {
        title: title,
        subtitle: subtitle,
      }
    }
  }
}

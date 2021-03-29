
export default {
  name: 'sections',
  title: 'Sections',
  type: 'object',
  liveEdit: false,
  __experimental_actions: [ 'create', 'update', 'publish', 'delete' ], /* 'create', 'delete' */
  fields: [
    {
      name: 'sections',
      title: ' ',
      type: 'array',
      of: [
        {type: 'rteSection'},
        {type: 'ctaSection'},
        {type: 'stepsSection'},
        {type: 'courseSection'},
        {type: 'photoGallerySection'},
        {type: 'testimonialsSection'},
        {type: 'featCoursesSection'},
        {type: 'locationMapSection'},
        {type: 'staffSection'},
        {type: 'reusedSection'}
      ]
    },
  ]
}

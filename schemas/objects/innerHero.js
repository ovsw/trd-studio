import {FaUniversity} from 'react-icons/fa'

export default {
  name: 'innerHero',
  title: 'Page Hero',
  type: 'object',
  icon: FaUniversity,
  liveEdit: false,
  __experimental_actions: [ 'create', 'update', 'publish', 'delete' ], /* 'create', 'delete' */
  fields: [
    {
      name: 'body',
      title: 'Body',
      type: 'simplePortableText',
    },
    {
      name: 'animation',
      title: 'Lottie Animation',
      type: 'string',
    },
    
  ],
}

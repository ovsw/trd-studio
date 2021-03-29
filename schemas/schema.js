// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import course from './documents/course'
import courseListingPage from './documents/courseListingPage'
import courseMaterial from './documents/courseMaterial'
import courseModule from './documents/courseModule'
import courseSession from './documents/courseSession'
import page from './documents/page'
import post from './documents/post'
import reusableSection from './documents/reusableSection'
import siteHome from './documents/siteHome'
import siteSettings from './documents/siteSettings'
import staffMember from './documents/staffMember'
import staffPage from './documents/staffPage'
import testimonial from './documents/testimonial'
import workshop from './documents/workshop'

// objects
import altImage from './objects/altImage'
import barePortableText from './objects/barePortableText'
import bodyPortableText from './objects/bodyPortableText'
import button from './objects/button'
import hero from './objects/hero'
import iframeEmbed from './objects/iframeEmbed'
import innerHero from './objects/innerHero'
import mainImage from './objects/mainImage'
import sections from './objects/sections'
import sectionsCourseMaterial from './objects/sectionsCourseMaterial'
import simplePortableText from './objects/simplePortableText'
import step from './objects/step'
import youtube from './objects/youtube'

// sections
import ctaSection from './objects/sections/ctaSection'
import courseSection from './objects/sections/courseSection'
import featCoursesSection from './objects/sections/featCoursesSection'
import photoGallerySection from './objects/sections/photoGallerySection'
import locationMapSection from './objects/sections/locationMapSection'
import reusedSection from './objects/sections/reusedSection'
import rteSection from './objects/sections/rteSection'
import staffSection from './objects/sections/staffSection'
import stepsSection from './objects/sections/stepsSection'
import testimonialsSection from './objects/sections/testimonialsSection'

// course materials sections
import courseChapterTitleSection from './objects/sectionsCourseMaterial/courseChapterTitleSection'
import imageWithTextSection from './objects/sectionsCourseMaterial/imageWithTextSection'
import rteSectionCourseMaterial from './objects/sectionsCourseMaterial/rteSectionCourseMaterial'
import textOnlySection from './objects/sectionsCourseMaterial/textOnlySection'


// tabs
import seo from './tabs/seo'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* documents*/
    course,
    courseListingPage,
    courseMaterial,
    courseModule,
    courseSession,
    page,
    post,
    reusableSection,
    siteHome,
    siteSettings,
    staffMember,
    staffPage,
    testimonial,
    workshop,
    // objects
    altImage,
    barePortableText,
    bodyPortableText,
    button,
    hero,
    iframeEmbed,
    innerHero,
    mainImage,
    sections,
    sectionsCourseMaterial,
    simplePortableText,
    step,
    youtube,
    // sections
    ctaSection,
    courseSection,
    featCoursesSection,
    photoGallerySection,
    locationMapSection,
    reusedSection,
    rteSection,
    staffSection,
    stepsSection,
    testimonialsSection,
    // course materials sections
    courseChapterTitleSection,
    imageWithTextSection,
    rteSectionCourseMaterial,
    textOnlySection,
    // tabs
    seo
  ]),
})

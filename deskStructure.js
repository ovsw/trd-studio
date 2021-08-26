import S from "@sanity/desk-tool/structure-builder";
import { MdSettings, MdHome, MdPeople } from "react-icons/md";
import {
  FaRegNewspaper,
  FaRegStar,
  FaFile,
  FaUniversity,
  FaBook,
  FaFileAlt,
} from "react-icons/fa";
// import {ImSection} from 'react-icons/im'
// import {MdEvent} from "react-icons/md"

// import {pagesByStatusCopy} from "./structure/pagesByStatusCopy"
// import {pagesByStatusImage} from "./structure/pagesByStatusImage"
// import {pagesByStatusImages} from "./structure/pagesByStatusImages"

const hiddenDocTypes = (listItem) =>
  ![
    "siteSettings",
    "newsItem",
    "attraction",
    "page",
    "post",
    "reusableSection",
    "event",
    "sponsor",
    "siteHome",
    "course",
    "workshop",
    "courseSession",
    "staffMember",
    "testimonial",
  ].includes(listItem.getId());

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home Page")
        .icon(MdHome)
        .child(
          S.editor()
            .id("siteHome")
            .schemaType("siteHome")
            .documentId("siteHome")
        ),
      S.listItem()
        .title("Settings")
        .icon(MdSettings)
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),

      S.divider(),

      S.listItem()
        .title("Pages")
        .schemaType("page")
        .icon(FaFile)
        .child(S.documentTypeList("page").title("Pages")),
      S.listItem()
        .title("Special Pages")
        .icon(FaFileAlt)
        .child(
          S.list()
            .title("Special Pages")
            .items([
              S.documentListItem()
                .id("blogHome")
                .title("Blog Home")
                .schemaType("pageSpecial"),
              // S.documentListItem()
              //   .id("courseSignupFormPage")
              //   .title("Course Signup Page")
              //   .schemaType("pageSpecial"),
            ])
        ),
      S.listItem()
        .title("Posts")
        .schemaType("post")
        .child(S.documentTypeList("post").title("Blog Posts")),
      S.listItem()
        .title("Reusable Sections")
        .schemaType("reusableSection")
        .child(
          S.documentTypeList("reusableSection").title("Reusable Sections")
        ),

      S.divider(),
      S.listItem()
        .title("Active Courses")
        .icon(FaUniversity)
        .child(
          S.editor()
            .id("courseListingPage")
            .schemaType("courseListingPage")
            .documentId("courseListingPage")
        ),
      S.listItem()
        .title("All Courses")
        .schemaType("course")
        .child(S.documentTypeList("course").title("Courses")),
      S.listItem()
        .title("Course Modules")
        .schemaType("courseModule")
        .child(S.documentTypeList("courseModule").title("Course Modules")),
      S.listItem()
        .title("Modules By Course")
        .schemaType("course")
        .child(
          S.documentTypeList("course")
            .title("Courses")
            .child((courseId) =>
              S.documentList()
                .schemaType("courseModule")
                .title("Modules")
                .filter(
                  '_type == "courseModule" && $courseId in content.course[]._ref'
                )
                .params({ courseId })
            )
        ),
      // S.listItem()
      //   .title('Course Materials')
      //   .schemaType('courseMaterial')
      //   .child(S.documentTypeList('courseMaterial').title('Course Materials')),

      S.listItem()
        .title("Lessons by Module")
        .icon(FaBook)
        .schemaType("course")
        .child(
          S.documentTypeList("courseModule")
            .title("Select Course Module")
            .child((courseMaterialId) =>
              S.documentList()
                .schemaType("courseMaterial")
                .title("Course Lessons")
                .filter(
                  '_type == "courseMaterial" && content.courseModule._ref == $courseMaterialId'
                )
                .params({ courseMaterialId })
            )
        ),

      S.listItem()
        .title("Course Sessions")
        .schemaType("courseSession")
        .child(S.documentTypeList("courseSession").title("Course Sessions")),
      S.divider(),

      S.listItem()
        .title("Workshops")
        .schemaType("workshop")
        .child(S.documentTypeList("workshop").title("Workshops")),

      S.divider(),

      S.listItem()
        .title("Staff Members")
        .schemaType("staffMember")
        .child(S.documentTypeList("staffMember").title("Staff Members")),
      S.divider(),
      S.listItem()
        .title("Testimonials")
        .schemaType("testimonial")
        .child(S.documentTypeList("testimonial").title("Testimonials")),
      // S.listItem()
      //   .title('Reusable Sections')
      //   .icon(ImSection)
      //   .schemaType('reusableSection')
      //   .child(S.documentTypeList('reusableSection').title('Reusable Sections')),
      // S.listItem()
      //   .title('Sponsors')
      //   .schemaType('sponsor')
      //   .child(S.documentTypeList('sponsor').title('Sponsors')),
      // S.listItem()
      //   .title('FAQ Items')
      //   .schemaType('faqItem')
      //   .child(S.documentTypeList('faqItem').title('FAQ Items')),
      // S.listItem()
      //   .title('FAQ Categories')
      //   .schemaType('faqCategory')
      //   .child(S.documentTypeList('faqCategory').title('FAQ Categories')),
      // S.listItem()
      //   .title('Pages by Content Status')
      //   .child(
      //     S.list()
      //       .title('Organize by...')
      //       .id('contentTypes')
      //       .items([
      //         pagesByStatusCopy,
      //         pagesByStatusImages
      //     ])
      //   ),

      // S.listItem()
      //   .title('Projects by category')
      //   .child(
      //     // List out all categories
      //     S.documentTypeList('page')
      //       .title('Empty Pages')
      //       .child(() =>
      //         // List out project documents where the _id for the selected
      //         // category appear as a _ref in the project’s categories array
      //         S.documentList()
      //           .schemaType('page')
      //           .title('Pages')
      //           .filter(
      //             '_type == "page" && content.status.copy == "empty"'
      //           )
      //       )
      //   ),
      // S.listItem()
      //   .title('Blog posts')
      //   .schemaType('post')
      //   .child(S.documentTypeList('post').title('Blog posts')),
      // S.listItem()
      //   .title('Authors')
      //   .icon(MdPerson)
      //   .schemaType('author')
      //   .child(S.documentTypeList('author').title('Authors')),
      // S.listItem()
      //   .title('Categories')
      //   .schemaType('category')
      //   .child(S.documentTypeList('category').title('Categories')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      // ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);

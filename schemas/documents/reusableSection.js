import { ImSection } from "react-icons/im";

export default {
  name: "reusableSection",
  title: "Blog Post",
  type: "document",
  icon: ImSection,
  liveEdit: false,
  __experimental_actions: [
    "create",
    "update",
    "publish",
    "delete",
  ] /* 'create', 'delete' */,

  fields: [
    {
      name: "title",
      title: "Reusable Section title",
      description: "for internal use, does not appear in front-end",
      type: "string",
      validation: (Rule) => Rule.required().error("missing title"),
    },
    {
      name: "sections",
      title: "Sections",
      type: "array",
      options: {
        editModal: "fullscreen",
      },
      of: [
        { type: "rteSection" },
        { type: "ctaSection" },
        { type: "stepsSection" },
        { type: "courseSection" },
        { type: "photoGallerySection" },
        { type: "testimonialsSection" },
        { type: "featCoursesSection" },
        { type: "locationMapSection" },
        { type: "staffSection" },
      ],
      validation: (Rule) => Rule.required().error("add at least one section"),
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      const subtitle = "Reusable Section";

      return {
        title: title,
        subtitle: subtitle,
      };
    },
  },
};

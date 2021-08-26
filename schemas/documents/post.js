import Tabs from "sanity-plugin-tabs";
import { FaBlog } from "react-icons/fa";
import { format } from "date-fns";
import { ro } from "date-fns/locale";

export default {
  name: "post",
  title: "Blog Post",
  type: "document",
  icon: FaBlog,
  liveEdit: false,
  __experimental_actions: [
    "create",
    "update",
    "publish",
    "delete",
  ] /* 'create', 'delete' */,
  fields: [
    {
      name: "content",
      type: "object",
      title: "Content",
      inputComponent: Tabs,
      fieldsets: [
        { name: "main", title: "Main" },
        { name: "settings", title: "Settings" },
        { name: "seo", title: "SEO" },
      ],
      fields: [
        {
          fieldset: "main",
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required().error("missing post title"),
        },
        {
          fieldset: "main",
          name: "longTitle",
          title: "Long Title",
          type: "string",
          validation: (Rule) =>
            Rule.required().error("missing post long title"),
        },
        {
          fieldset: "main",
          name: "date",
          title: "Date",
          type: "date",
          options: {
            dateFormat: "Do MMMM YYYY",
          },
          validation: (Rule) => Rule.required().error("missing post date"),
        },
        {
          fieldset: "settings",
          name: "slug",
          type: "slug",
          title: "Slug",
          validation: (Rule) =>
            Rule.error("You have to fill out the slug of the page.").required(),
          description: `This page will have the URL: https://tridia.ro/blog/[whatever you type below]/`,
          options: {
            source: "content.title",
            maxLength: 96,
          },
        },
        {
          fieldset: "settings",
          name: "mainImage",
          type: "altImage",
          title: "Cover Image",
          description:
            "shown in the blog post listings and as a header background for the page",
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required().error("missing image"),
        },
        {
          fieldset: "main",
          name: "excerpt",
          title: "Excerpt",
          description: "a short description of the post, for ",
          type: "text",
          validation: (Rule) => Rule.required().error("missing excerpt"),
        },
        {
          fieldset: "main",
          name: "sections",
          title: "Content Sections",
          type: "sections",
        },
        {
          fieldset: "main",
          name: "sections1",
          title: "Content Sections",
          type: "array",
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
            { type: "typeformSection" },
            { type: "reusedSection" },
          ],
        },
        {
          fieldset: "seo",
          name: "seo",
          title: "SEO Title",
          type: "seo",
        },
      ],
    },
  ],
  orderings: [
    {
      name: "dateAsc",
      title: "Post Date older->newer",
      by: [
        {
          field: "content.date",
          direction: "asc",
        },
      ],
    },
    {
      name: "dateDesc",
      title: "Created newer->older",
      by: [
        {
          field: "content.date",
          direction: "desc",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "content.title",
      slug: "content.slug",
      media: "content.mainImage",
      date: "content.date",
    },
    prepare({ title = "No title", slug = {}, media, date }) {
      const dateObj = new Date(date);

      const path = `/${slug.current}/`;
      const subtitle = format(dateObj, "do MMMM, yyyy", { locale: ro });
      return {
        title,
        description: path,
        subtitle: subtitle,
        media: media,
      };
    },
  },
};

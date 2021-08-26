import { FaParagraph } from "react-icons/fa";

export default {
  name: "rteSection",
  title: "Rich Text Section",
  type: "object",
  icon: FaParagraph,
  liveEdit: false,
  __experimental_actions: [
    "create",
    "update",
    "publish",
    "delete",
  ] /* 'create', 'delete' */,
  fields: [
    // {
    //   name: 'title0',
    //   title: 'Section title start (not bold)',
    //   description: 'for internal use, the title will not be visible in the front-end',
    //   type: 'string',
    // },
    {
      name: "title",
      title: "Section title (bold)",
      description:
        "for internal use, the title will not be visible in the front-end",
      type: "string",
      validation: (Rule) => Rule.required().error("missing section title"),
    },
    // {
    //   name: 'title1',
    //   title: 'Section title end (not bold)',
    //   description: 'for internal use, the title will not be visible in the front-end',
    //   type: 'string',
    // },
    {
      name: "text",
      title: "Content",
      type: "bodyPortableText",
      validation: (Rule) => Rule.required().error("missing section body text"),
    },
  ],
  preview: {
    select: {
      title0: "title0",
      title: "title",
      title1: "title1",
    },
    prepare({ title0, title, title1 }) {
      const subtitle = "Rich Text Section";
      const title0Text = title0 ? title0 : "";
      const title1Text = title0 ? title1 : "";

      return {
        title: `${title0Text} ${title} ${title1Text}`,
        subtitle: subtitle,
      };
    },
  },
};

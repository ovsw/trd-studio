import { FaPaperPlane } from "react-icons/fa";

export default {
  name: "typeformSection",
  title: "Signup Form Section",
  type: "object",
  icon: FaPaperPlane,
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
      title: "Section title",
      type: "string",
      validation: (Rule) => Rule.required().error("missing section title"),
    },
    {
      name: "formUrl",
      title: "Link to Typeform",
      type: "string",
      validation: (Rule) => Rule.required().error("missing link to typeform"),
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      const subtitle = "Typeform Section";

      return {
        title: title,
        subtitle: subtitle,
      };
    },
  },
};

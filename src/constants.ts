import myStoreImage from "../public/mystore-screenshot.png";

export const CONSTANTS = {
  NAV_OPTIONS: [
    {
      label: "Github",
      link: "https://github.com/graydonvg",
      icon: "github",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/",
      icon: "linkedin",
    },
    // {
    //   label: "Resume",
    //   link: "/resume.pdf",
    //   icon: "resume",
    //   newTab: true,
    // },
  ],
  SCROLL_TO: {
    ABOUT_SECTION: "scrollToAboutMeSection",
    CONTACT_SECTION: "scrollToContactFormSection",
  },
  PROJECTS_DATA: [
    {
      title: "MyStore",
      description:
        "Developed an e-commerce platform featuring an admin panel with role-based access control to manage users, products, and orders efficiently.",
      tags: [
        "typescript",
        "react",
        "next.js",
        "redux",
        "supabase",
        "firebase",
        "mui",
        "stripe",
      ],
      projectUrl: "https://my-store-henna.vercel.app/",
      repositoryUrl: "https://github.com/graydonvg/my-store",
      image: myStoreImage,
      inspiration: {
        name: "superbalist.com",
        url: "https://superbalist.com/",
      },
    },
  ],
};

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
        "An e-commerce site with an admin panel with role based access control.",
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
      link: "https://my-store-henna.vercel.app/",
      image: myStoreImage,
      inspiration: {
        name: "superbalist.com",
        link: "https://superbalist.com/",
      },
    },
  ],
};

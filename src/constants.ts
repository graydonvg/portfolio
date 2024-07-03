export const SCROLL_TO = {
  about: "scrollToAboutMeSection",
  projects: "scrollToProjectsSection",
  contact: "scrollToContactFormSection",
};

export const CONSTANTS = {
  NAV_OPTIONS: {
    INTERNAL_LINKS: [
      {
        label: "About",
        scrollTo: SCROLL_TO.about,
        icon: "about",
      },
      {
        label: "Projects",
        scrollTo: SCROLL_TO.projects,
        icon: "projects",
      },
      {
        label: "Contact",
        scrollTo: SCROLL_TO.contact,
        icon: "contact",
      },
    ],
    EXTERNAL_LINKS: [
      {
        label: "Github",
        link: "https://github.com/graydonvg",
        icon: "github",
        newTab: true,
      },
      {
        label: "LinkedIn",
        link: "https://www.linkedin.com/",
        icon: "linkedin",
        newTab: true,
      },
      {
        label: "Resume",
        link: "/resume.pdf",
        icon: "resume",
        newTab: true,
      },
    ],
  },
};

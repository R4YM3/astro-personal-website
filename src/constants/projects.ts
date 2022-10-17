import abnLogo from "../images/logos/abn.svg";
import autoweekLogo from "../images/logos/autoweek.svg";
import dotfilesLogo from "../images/logos/dotfiles.svg";
import effectoryLogo from "../images/logos/effectory.svg";
import goeievraagLogo from "../images/logos/goeievraag.svg";
import kieskeurigLogo from "../images/logos/kieskeurig.svg";
import klmLogo from "../images/logos/klm.svg";
import rtlLogo from "../images/logos/rtl.svg";
import rtlxlLogo from "../images/logos/rtlxl.svg";
import sanomaLogo from "../images/logos/sanoma.svg";
import schoolbankLogo from "../images/logos/schoolbank.svg";
import videolandLogo from "../images/logos/videoland.svg";
import tarmacLogo from "../images/logos/tarmac.svg";
import vbkuLogo from "../images/logos/vbku.png";
import wtfLogo from "../images/logos/wtf.svg";

export const PROJECTS = [
  {
    image: {
      src: rtlLogo,
      alt: "RTL Account",
      backgroundColor: "#000000"
    },
    title: "RTL.nl",
    description:
      "Single Sign On account which is used by all the well known RTL websites, like buienradar.nl, videoland.com, rtlxl.nl. With each their own business logic and branding to take in account.",
    tags: [
      "NextJS",
      "Styled Components",
      "GraphQL",
      "Tests",
      "Cucumber",
      "Open Connect ID",
      "UX Design"
    ],
    link: {
      url: "https://account.rtl.nl",
      label: "account.rtl.nl"
    }
  },
  {
    image: {
      src: videolandLogo,
      alt: "Videoland",
      backgroundColor: "#000000"
    },
    title: "Videoland",
    description:
      "Working on complex onboarding and payment flows. Steadily deprecating legacy code to new quality code. While Videoland beats record after record.",
    tags: [
      "React",
      "Sass",
      "REST",
      "GraphQL",
      "Tests",
      "Cucumber",
      "Gigya",
      "Sitespect"
    ],
    link: {
      url: "https://www.videoland.com",
      label: "videoland.com"
    }
  },
  {
    image: {
      src: rtlxlLogo,
      alt: "RTLXL"
    },
    title: "RTLXL",
    description:
      "Deprecating RTLXL's own subscription by pushing users to Videoland by implementing a carefully researched user journeys.",
    tags: ["React", "Angular", "Micro frontend", "Sass", "REST", "Tests"],
    link: {
      label: "rtlxl.nl",
      url: "https://www.rtlxl.nl"
    }
  },
  {
    image: {
      src: dotfilesLogo,
      alt: "Dotfiles"
    },
    title: "Dotfiles",
    description:
      "In one hour completly configure a fresh Linux or MacOS computer with all my personal preferences. From OS related to application like my sweet NeoVim code editor.",
    tags: [
      "Ansible",
      "Bash",
      "NeoVim",
      "MacOS",
      "Debian",
      "Ubuntu",
      "Gnome",
      "tmux",
      "zsh",
      "Homebrew",
      "apt",
      "snap",
      "git"
    ],
    link: {
      label: "github.com/R4YM3/dotfiles-ansible",
      url: "https://github.com/R4YM3/dotfiles-ansible"
    }
  },
  {
    image: {
      src: effectoryLogo,
      alt: "Beste Werkgever",
      backgroundColor: "#ffffff"
    },
    title: "Beste Werkgever",
    description:
      "Listing closely to the whises of the new landing page for beste-werkgever.nl, then created a fresh design and converted it in quality frontend code",
    tags: [
      "UX Design",
      "UI Design",
      "HTML",
      "SASS",
      "Foundation",
      "Vanilla Javascript",
      "Consulting",
      "Photo/Video manipulation"
    ],
    link: {
      label: "beste-werkgevers.nl",
      url: "http://beste-werkgevers.nl"
    }
  },
  {
    image: {
      src: autoweekLogo,
      alt: "AutoWeek",
      backgroundColor: "#df1e26"
    },
    title: "AutoWeek",
    description:
      "From rebuilding existing pages with a design overhaul to creating a complex occassion application.",
    tags: [
      "Vue",
      "Vuex",
      "UX Design",
      "UI Design",
      "Atomic Design",
      "Styleguide",
      "Sass",
      "Gulp",
      "RequireJS",
      "Jinja"
    ],
    link: {
      label: "autoweek.nl",
      url: "https://www.autoweek.nl"
    }
  },

  {
    image: {
      src: vbkuLogo,
      alt: "Veen Bosch en Keuning",
      backgroundColor: "#ffffff"
    },
    title: "Veen Bosch en Keuning",
    description:
      "Assigned with the mission to make paid royalties of authors more insightfull. Which ended in a well designed POC working on stub data based on the real deal.",
    tags: [
      "Vue",
      "Vuex",
      "Rapid prototyping",
      "UX Design",
      "UI Design",
      "HTML5",
      "Sass"
    ],
    link: {
      label: "kieskeurig.nl",
      url: "https://www.kieskeurig.nl"
    }
  },

  {
    image: {
      src: tarmacLogo,
      alt: "Tarmac",
      backgroundColor: "#000000"
    },
    title: "Tarmac",
    description:
      "While carpooling my companion hacked the car which we were traveling in. So I could create a interactive interface which visualizes data given realtime by the car.",
    tags: [
      "HTML5",
      "Webapp",
      "UX Design",
      "UI Design",
      "Websockets",
      "jQuery",
      "Prototyping"
    ],
    link: {
      isDisabled: true,
      label: "bitbucket.org/.."
    }
  },

  {
    image: {
      src: kieskeurigLogo,
      alt: "Kieskeurig",
      backgroundColor: "#ef3939"
    },
    title: "Kieskeurig",
    description:
      "Deliverd frontend code for django-arctic framework which helps with the creation of custom content management systems.",
    tags: ["HTML5", "Sass", "Foundation", "Gulp", "jQuery"],
    link: {
      label: "kieskeurig.nl",
      url: "https://www.kieskeurig.nl"
    }
  },
  {
    image: {
      src: schoolbankLogo,
      alt: "Schoolbank",
      backgroundColor: "#a22114"
    },
    title: "Schoolbank",
    description:
      "Consulted Schoolbank how to rebuild the website frontend using a styleguide and contributed to Schoolbank's photo gallery.",
    tags: ["HTML5", "Sass", "Foundation", "jQuery", "Atomic design"],
    link: {
      label: "schoolbank.nl",
      url: "https://www.schoolbank.nl"
    }
  },
  {
    image: {
      src: sanomaLogo,
      alt: "Sanoma Account (DPG)",
      backgroundColor: "#000000"
    },
    title: "Sanoma Account (DPG)",
    description:
      "Made Sanoma Account themeable so it could be used on dozens well known websites, like NU.nl, Linda.nl, vtwonen.nl and more.",
    tags: ["HTML5", "Sass", "Gigya", "Gulp"],
    link: {
      isDisabled: true,
      label: "account.sanoma.com",
      url: "https://account.sanoma.com"
    }
  },
  {
    image: {
      src: goeievraagLogo,
      alt: "GoeieVraag",
      backgroundColor: "#ffffff"
    },
    title: "GoeieVraag",
    description:
      "Where to put questions which does not result into a factial answer? GoeieVraag! For this I contributed to digital a GoeieVraag Café. ",
    tags: ["HTML5", "Sass", "Grunt", "jQuery", "Atomic design"],
    link: {
      isDisabled: true,
      label: "goeievraag.nl",
      url: "https://www.goeievraag.nl"
    }
  },

  {
    image: {
      src: wtfLogo,
      alt: "WTF",
      backgroundColor: "#fef700"
    },
    title: "WTF",
    description:
      "NU.nl's playground. Pitched a new way how to present content which has proven to lower the bounce-rate.",
    tags: ["HTML5", "Sass", "Grunt", "jQuery", "UX Design", "UI Design"],
    link: {
      isDisabled: true,
      label: "wtf.nl",
      url: "https://www.wtf.nl"
    }
  },

  {
    image: {
      src: klmLogo,
      alt: "Air France KLM",
      backgroundColor: "#FFFFFF"
    },
    title: "Air France KLM",
    description:
      "From storyboarding video tutorials how Flying Blue works, to creating wireframes and designs for multiple KLM media.",
    tags: ["Storyboarding", "UX Design", "UI design"],
    link: {
      isDisabled: true,
      label: "your-bizbook.com",
      url: "https://www.your-bizbook.nl"
    }
  },
  {
    image: {
      src: abnLogo,
      alt: "ABN Amro",
      backgroundColor: "#FFFFFF"
    },
    title: "ABN Amro",
    description:
      "Created a new way how to communicate internally via a digizine. Swiping through a visually appealing magazine",
    tags: ["Vanilla Javascript", "UI Design", "UX Design"],
    link: {
      isDisabled: true,
      label: "digizine.abnamro.nl",
      url: "https://digizine.abnamro.nl"
    }
  }
];

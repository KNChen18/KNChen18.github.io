// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'KNChen18', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'CyberQuest',
          description:
            'Information Security Education Built for Educators and Students.',
          imageUrl:
            'https://github.com/KNChen18/CyberQuest/blob/main/CyberQuest%20Logo%20Prototypes/1.png',
          link: 'https://github.com/KNChen18/CyberQuest',
        }, 
      ],
    },
  },
  seo: {
    title: 'Portfolio of Kristina Chen',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/kristina-chen/',
    website: 'TBA',
    email: 'KNChen18@hotmail.com',
  },
  resume: {
    fileUrl:
      'https://www.linkedin.com/in/kristina-chen/details/featured/1735693235710/single-media-viewer/?profileId=ACoAACt_6nMBOmu1N2gmiAfwhWeaarUP_BzqGJQ', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C++',
    'C',
    'JavaScript',
    'React.js',
    'WireShark',
    'MySQL',
    'PostgreSQL',
    'Git',
    'CSS',
    'Linux',
    'Active Directory',
    'Nmap',
    'Bash',
    'VMWare Workstation Pro',
  ],
  experiences: [
    {
      company: 'Lynnwood Vision Center',
      position: 'Optometric Technician (Lead)',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://www.google.com/search?client=firefox-b-1-d&q=Lynnwood+VIsion+center&lqi=ChZMeW5ud29vZCBWSXNpb24gY2VudGVySOf_p_C-roCACFoiEAEQAhgAGAEYAiIWbHlubndvb2QgdmlzaW9uIGNlbnRlcpIBC29wdG9tZXRyaXN0mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJQT0daRGR6Sm5SUkFCqgFREAEqESINdmlzaW9uIGNlbnRlcigAMh4QASIagQogMTTR4GD2ln61rMBv_HM2hVTTbNKqbLUyGhACIhZseW5ud29vZCB2aXNpb24gY2VudGVy4AEA-gEECHkQQg#rlimm=7355729923831386859',
    },
    {
      company: 'Pacific Science Center',
      position: 'Site Lead',
      from: 'June 2023',
      to: 'August 2024',
      companyLink: 'https://pacificsciencecenter.org/',
    },
  ],
  certifications: [
    {
      name: 'Pre-Security',
      body: 'TryHackMe',
      year: 'November 2024',
      link: 'https://tryhackme.com',
    },
    {
      name: 'Intro to Cybersecurity',
      body: 'TryHackMe',
      year: 'September 2024',
      link: 'https://tryhackme.com',
    },
  ],
  educations: [
    {
      institution: 'University of Washington (Bothell)',
      degree: 'Bachelors of Applied Computing, minor in Education & Societies',
      from: '2019',
      to: '2024',
    },
    {
      institution: 'Raisbeck Aviation High School',
      degree: 'High School',
      from: '2015',
      to: '2019',
    }
  ],
  /*publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },8/
  ],
  // Display articles from your medium or dev account. (Optional)
  /*blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },*/
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;

// gitprofile.config.ts
//
// Daniel Stothec — Personal Portfolio
// Auto-deployed to https://stothec90.github.io via GitHub Actions on push to main.
//
// REVIEW-CHECKLIST (Daniel):
//   1. Bio/Description auf GitHub-Profil setzen (https://github.com/settings/profile)
//      — wird automatisch oben auf der Page gezogen, hier nicht konfigurierbar.
//   2. SEO-Description unten anpassen falls gewuenscht.
//   3. Experiences: derzeit nur TMMAC eingetragen — frühere Stationen ergaenzen falls relevant.
//   4. External-Projects: Image-URLs sind Platzhalter, ggf. eigene Screenshots/Logos hochladen.
//   5. payto / coreid leer gelassen — befuellen falls du oeffentliche XCB-Adresse/CorePass-ID haben willst.
//   6. Resume-PDF: leer gelassen — falls du einen Lebenslauf zeigen willst, in public/ legen + URL setzen.

const CONFIG = {
  github: {
    username: 'StotheC90',
    sponsorship: false,
  },
  donation: {
    embed: 'none' as const,
    misskeyUserId: '',
    embedColorScheme: 'auto' as const,
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Public GitHub Projects',
      mode: 'manual',
      automatic: {
        type: 'projects',
        sortBy: 'updated',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        // Nur die public Repos — private Repos werden eh nicht gerendert.
        projects: ['StotheC90/teleprompter', 'StotheC90/open-design'],
      },
    },
    external: {
      header: 'Featured Projects',
      projects: [
        {
          title: 'Tell Me More About Core',
          description:
            'Coming soon. Something is brewing — stay tuned.',
          // Placeholder = GitHub-Avatar (TMMAC-Logo). Sobald die Landingpage live ist, durch echten Screenshot ersetzen.
          imageUrl:
            'https://avatars.githubusercontent.com/u/105504238?v=4&s=400',
          link: 'https://tmmac.cc',
        },
        {
          title: 'Open Design — Contributor',
          description:
            'Local-first, open-source alternative to Claude Design. 19 Skills, 71 brand-grade design systems, runs on multiple AI CLIs. Contributed PR #270 (macOS lifecycle) and PR #570 (README docs).',
          imageUrl:
            'https://opengraph.githubassets.com/1/nexu-io/open-design',
          link: 'https://github.com/nexu-io/open-design',
        },
        {
          title: 'Teleprompter',
          description:
            'Single-file HTML teleprompter for podcast recordings — auto-scroll, voice-sync, keyboard shortcuts, remote control. Used in production for the TMMAC podcast.',
          imageUrl:
            'https://opengraph.githubassets.com/1/StotheC90/teleprompter',
          link: 'https://github.com/StotheC90/teleprompter',
        },
      ],
    },
  },
  seo: {
    title: 'Daniel Stothec — Web3 Developer & Core Builder',
    description:
      'Solidity & Ylem Smart Contracts, TypeScript/React frontends, and Core Blockchain tooling. Building Tell Me More About Core (Codetech ecosystem).',
    imageURL: '',
    githubId: '105504238',
    // Wallet-Discovery via Meta-Tags. Leer lassen wenn du keine oeffentliche XCB-Adresse zeigen willst.
    // Befuellen z.B. mit { property: 'ican/xcb', content: 'cb...' }
    payto: {
      property: '',
      content: '',
    },
  },
  social: {
    linkedin: '',
    twitter: 'Daniel_StotheC',
    fediverse: '',
    researchGate: '',
    facebook: '',
    tiktok: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    wiki: '',
    skype: '',
    telegram: '',
    website: 'https://tellmemoreaboutcore.com',
    phone: '',
    email: 'daniel@tellmemoreaboutcore.com',
    // payto: 'payto://xcb/...', // optional: deine oeffentliche XCB-Adresse
    coreid: '', // optional: deine CorePass-ID (https://corepass.net)
  },
  resume: {
    fileUrl: '', // leer = "Download Resume"-Button versteckt
  },
  publicKey: {
    fileUrl: '', // leer = "Download Public Key"-Button versteckt
  },
  skills: [
    'Solidity',
    'Ylem',
    'Smart Contracts',
    'Core Blockchain',
    'TypeScript',
    'React',
    'Node.js',
    'Vite',
    'WordPress',
    'Python',
    'Bash',
    'Docker',
    'PM2',
    'Web3',
    'NFT / RWA',
    'CorePass / Web4',
  ],
  experiences: [
    {
      company: 'Tell Me More About Core (Codetech Ecosystem)',
      position: 'Founder & Developer',
      from: '2024',
      to: 'Present',
      companyLink: 'https://tellmemoreaboutcore.com',
    },
    // TODO Daniel: frühere Stationen ergaenzen falls relevant
    // {
    //   company: 'Firma XY',
    //   position: 'Rolle',
    //   from: 'YYYY',
    //   to: 'YYYY',
    //   companyLink: 'https://...',
    // },
  ],
  certifications: [],
  educations: [],
  publications: [],
  blog: {
    source: 'dev' as const,
    username: '', // leer = Blog-Sektion versteckt; falls du dev.to oder Medium nutzt, hier eintragen
    limit: 3,
  },
  googleAnalytics: {
    id: '', // leer lassen, falls du kein Tracking willst
  },
  themeConfig: {
    defaultTheme: 'dracula',
    disableSwitch: false,
    respectPrefersColorScheme: true,
    displayAvatarRing: true,
    themes: [
      'dracula',
      'dark',
      'synthwave',
      'night',
      'forest',
      'business',
      'light',
      'nord',
      'winter',
    ],
  },
  footer: `Built with <a class="text-primary" href="https://github.com/rastislavcore/gitprofile" target="_blank" rel="noreferrer">GitProfile</a> · Hosted on GitHub Pages`,
  enablePWA: true,
  githubGraph: true,
};

export default CONFIG;

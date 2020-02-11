import KronokuPNG from '../../assets/images/kronoku.png';
import HadronPNG from '../../assets/images/hadron.png';
import ReactDateMePNG from '../../assets/images/reactdateme.png';
import VolcaPNG from '../../assets/images/volcacc.png';
import PortfolioPNG from '../../assets/images/portfolio.png';
import ReactLinkTabsPNG from '../../assets/images/reactlinktabs.png';
import MidiPlexPNG from '../../assets/images/midiplex.png';
import PhaserTransitionsPNG from '../../assets/images/phasertransitions.png';
import PhaserPhorgePNG from '../../assets/images/phaserphorge.png';
import S3SyncDirPNG from '../../assets/images/s3syncdir.png';

export default {
    apps: [
        {
            name: "Avrick.dev",
            description: "My personal portfolio site, which you are currently viewing. Built using React and the Framer Motion animation library for transitions and FX.",
            badges: ["javascript", "nodejs", "react", "express", "git", "heroku"],
            live: "https://avrick.dev",
            github: "https://github.com/JHAvrick/avrick.dev",
            preview: PortfolioPNG
        },
        {
            name: "Kronoku",
            description: 
                `
                    Single page web application for scheduling SMS messages to a single or group of recipients.
                    Built with react and develivered via Heroku, NodeJS, and Express.
                `,
            badges: ["javascript", "nodejs", "express", "react", "mysql", "heroku"],
            live: "http://www.kronoku.com/#home",
            github: "https://github.com/JHAvrick/kronoku",
            preview: KronokuPNG
        },
        {
            name: "MidiPlex",
            description: 
                `
                    An application for performing complex and real-time splitting, filtering, and routing of MIDI messages. 
                    Packaged as a desktop application using Electron. In active development.
                `,
            badges: ["javascript", "nodejs", "react", "sass", "electron"],
            github: "https://github.com/JHAvrick/midiplex",
            preview: MidiPlexPNG
        },
        {
            name: "Volca.cc",
            description: 
                `
                    An experimental web-based patch editor for the Korg Volca Bass synthesizer. 
                    Leverages the WebMidi API (chrome only) to send and recieve MIDI messages.
                `,
            badges: ["javascript", "sass", "html5", "react"],
            live: "https://volcacc.herokuapp.com/",
            github: "https://github.com/JHAvrick/volcacc",
            preview: VolcaPNG
        },
        {
            name: "Hadron",
            description: "HTML5 game built using the Phaser game library. Centralized leaderboards built with Node/Express/Postgres. Packaged as a native application using Cordava and published to the Google Play store.",
            badges: ["javascript", "html5", "nodejs", "postgres", "heroku"],
            live: "https://apexultra.itch.io/hadron",
            github: "https://github.com/JHAvrick/hadron",
            preview: HadronPNG
        }
    ],
    libs: [
        {
            name: "react-dateme",
            description: "Yet another date-time react component, published to NPM. Built primarily as an exercise and for use in the Kronoku web app.",
            badges: ["javascript", "react"],
            live: "https://jhavrick.github.io/react-dateme/test/",
            github: "https://github.com/JHAvrick/react-dateme",
            preview: ReactDateMePNG
        },
        {
            name: "react-link-tabs",
            description: "A collection of social-media sidebar style link components. Created primarily as an exercise to familiarize myself with styled-components.",
            badges: ["javascript", "react", "sass"],
            github: "https://github.com/JHAvrick/react-link-tabs",
            preview: ReactLinkTabsPNG 
        },
        {
            name: "phaser3-transitions",
            description: "A plugin/library for the Phaser 3 game framework which provides smooth enter and exit transitions for UI/UX components.",
            badges: ["javascript", "html5"],
            github: "https://github.com/JHAvrick/phaser3-transitions",
            preview: PhaserTransitionsPNG
        },
        {
            name: "phaser3-phorge",
            description: "A plugin/library for the Phaser 3 framework which provides advanced scene building and scene layout tools.",
            badges: ["javascript", "html5"],
            github: "https://github.com/JHAvrick/phaser3-phorge",
            preview: PhaserPhorgePNG
        },
    ],
    misc: [
        {
            name: "s3-sync-dir",
            description: "A CLI tool for syncing an S3 bucket to a local directoy. Built primarily as a learning exercise.",
            badges: ["javascript", "nodejs", "aws"],
            github: "https://github.com/JHAvrick/s3-sync-dir",
            preview: S3SyncDirPNG
        }
    ]
}
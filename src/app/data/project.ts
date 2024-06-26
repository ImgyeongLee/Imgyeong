import { DataType, ProjectType } from '../type/types';

export const professionalProject: DataType[] = [
    {
        id: 0,
        title: 'Adventure AI',
        description:
            'AdventureAI is a text-based RPG that uses AI to facilitate gameplay. Players can log in, join or host games, and embark on adventures with friends.',
        src: '/adventureAI.png',
        github: 'https://github.com/ImgyeongLee/AdventureAI',
        link: 'https://adventure-ai.vercel.app/',
        position: 1,
    },
    {
        id: 1,
        title: 'Syllabot',
        description:
            'Say hello to Syllabot! Syllabot is an AI chat bot that allows users to chat with an academic assistant chatbot trained on information from their course files.',
        src: '/syllabot.png',
        github: 'https://github.com/Nyumat/Syllabot?tab=readme-ov-file',
        link: 'https://devpost.com/software/syllabot-1dxsil',
        position: 2,
    },
    {
        id: 2,
        title: 'AI Gesture Art',
        description:
            'Create stunning visuals from dynamic hand gestures with built-in sketch autocompletion and AI art generation driven by OpenCV.',
        src: '/aigestureart.png',
        github: 'https://github.com/tobyloki/OpenCVApp',
        link: 'https://www.hackster.io/hackathoners/ai-gesture-art-d36827',
        position: 3,
    },
    {
        id: 3,
        title: 'Are you smarter than AI?',
        description:
            'Are you smarter than AI? is fun a web-based multiplayer game application. One of the players among you is an AI, incognito. Can you discern who the AI is?',
        src: '/areyousmarterthanai.png',
        github: 'https://github.com/Sankalpsp21/Smarter-Than-AI',
        link: 'https://hackathoners0.hashnode.dev/are-you-smarter-than-ai',
        position: 4,
    },
    {
        id: 4,
        title: 'FHIRType API',
        description:
            'The FHIRType API serves consistently formatted healthcare provider data from numerous FHIR Standard endpoints. ',
        src: '/bioreact.png',
        position: 5,
    },
];

export const allProjects: ProjectType[] = [
    {
        id: 0,
        title: 'Adventure AI',
        description:
            'AdventureAI is a text-based RPG that uses AI to facilitate gameplay. Players can log in, join or host games, and embark on adventures with friends.',
        src: '/adventureAI.png',
        github: 'https://github.com/ImgyeongLee/AdventureAI',
        link: 'https://adventure-ai.vercel.app/',
        stack: 'React, TypeScript, Convex, OpenAI, DALL-E',
    },
    {
        id: 1,
        title: 'Syllabot',
        description:
            'Say hello to Syllabot! Syllabot is an AI chat bot that allows users to chat with an academic assistant chatbot trained on information from their course files.',
        src: '/syllabot.png',
        github: 'https://github.com/Nyumat/Syllabot?tab=readme-ov-file',
        link: 'https://devpost.com/software/syllabot-1dxsil',
        stack: 'React, TypeScript, MongoDB, OpenAI, Pinecone',
    },
    {
        id: 2,
        title: 'AI Gesture Art',
        description:
            'Create stunning visuals from dynamic hand gestures with built-in sketch autocompletion and AI art generation driven by OpenCV.',
        src: '/aigestureart.png',
        github: 'https://github.com/tobyloki/OpenCVApp',
        link: 'https://www.hackster.io/hackathoners/ai-gesture-art-d36827',
        stack: 'Kotlin, Android Studio, OpenCV, Jetpack Compose',
    },
    {
        id: 3,
        title: 'Are you smarter than AI?',
        description:
            'Are you smarter than AI? is fun a web-based multiplayer game application. One of the players among you is an AI, incognito. Can you discern who the AI is?',
        src: '/areyousmarterthanai.png',
        github: 'https://github.com/Sankalpsp21/Smarter-Than-AI',
        link: 'https://hackathoners0.hashnode.dev/are-you-smarter-than-ai',
        stack: 'React, JavaScript, TypeScript, AWS Amplify Studio, GraphQL, OpenAI',
    },
    {
        id: 4,
        title: 'FHIRType API',
        description:
            'The FHIRType API serves consistently formatted healthcare provider data from numerous FHIR Standard endpoints. ',
        src: '/fhir.png',
        stack: 'Python, Swagger UI, React, PostgreSQL, GitHub Actions',
    },
    {
        id: 5,
        title: 'Portfolio website (new)',
        description: 'Re-built the personal portfolio website with Next.js and Typescript!',
        src: '/newportfolio.png',
        github: 'https://github.com/ImgyeongLee/Imgyeong',
        stack: 'Next.js, TypeScript',
    },
    {
        id: 6,
        title: 'SoundConductor',
        description:
            'Welcome to Sound Conductor! This project is an application that allows users to control their IoT devices using custom sounds. Control your house by clapping or yelling!',
        src: '/soundconductor.PNG',
        github: 'https://github.com/Sankalpsp21/SoundConductor',
        link: 'https://sound-conductor-4bsnr75vpq-uc.a.run.app/',
        stack: 'React, TypeScript, MongoDB, Googld Cloud, SmartThings API, Tensorflow',
    },
    {
        id: 7,
        title: 'ObjectHunt',
        description:
            'ObjectHunt is a fun and interactive two-player game that challenges players to find objects based on their name and location. ',
        src: '/objecthunt.png',
        github: 'https://github.com/ImgyeongLee/ObjectHunt',
        stack: 'Kotlin, Android Studio, Node.js, Express.js, Android ML kit, Socket.IO',
    },
    {
        id: 8,
        title: 'BioReact',
        description:
            'BioReact is a full-stack system for the BMES bioreactor. This contains both the frontend to control the machine and the backend that can handle the automation for it in a real-time.',
        src: '/bioreact.png',
        github: 'https://github.com/ImgyeongLee/BioReact',
        stack: 'React, JavaScript, Node.js, Express.js, Socket.IO',
    },
    {
        id: 9,
        title: 'Portfolio website (old)',
        description:
            'My second React project. Won the first prize at a 10-week long portfolio competition from OSU App Club!',
        src: '/oldportfolio.PNG',
        link: 'https://imgyeong-lee-portfolio-website.vercel.app/',
        stack: 'React, JavaScript, Redux, Three.js, TailwindCSS',
    },
    {
        id: 10,
        title: 'Toygether',
        description:
            'Toygether allows the students in Oregon State University to be able to seek teammates for their personal/toy projects. (We are building it right now!)',
        src: '/toygether.png',
        stack: 'Next.js, TypeScript, TailwindCSS, Redux Toolkit, MongoDB',
    },
    {
        id: 11,
        title: 'Litania',
        description:
            'Litania is my outsourcing product. This website allows the user to buy the items and to do battles with their original characters! (Still in progress!)',
        src: '/litania.png',
        stack: 'React, Convex, TypeScript, Redux, TailwindCSS, MongoDB',
    },
    {
        id: 12,
        title: 'Mastodon Bot Template',
        description:
            'This bot template is for people who are not familiar with coding at all. Currently over 150 people have used this! This is integrated with Google Spreadsheet API.',
        src: '/mastodonbot.png',
        github: 'https://github.com/ImgyeongLee/MastodonBot',
        link: 'https://x.com/DONTEXIST_3/status/1719272573446529149',
        stack: 'Python, Google Spreadsheet API, Mastodon API',
    },
    {
        id: 13,
        title: 'Discord Bot Template',
        description:
            'This bot template is also for people who are not used to coding. This is integrated with Google Spreadsheet API.',
        src: '/discordbot.png',
        github: 'https://github.com/ImgyeongLee/DiscordBot',
        link: 'https://x.com/DONTEXIST_3/status/1725120780705603766',
        stack: 'JavaScript, Google Spreadsheet API, Discord API',
    },
];

import { DataType, Project } from '../type/types';

export const professionalProject: DataType[] = [
    { title: 'Adventure AI', description: 'AIAIAIAI', image: 'image 0', position: 1 },
    { title: 'Syllabot', description: 'AIAIAIAIAIAIAIA', image: 'image 1', position: 2 },
    { title: 'AI Gesture Art', description: 'AIAIAIAI', image: 'image 2', position: 3 },
    { title: 'Are you smarter than AI?', description: 'AIAIAIAI', image: 'image 4', position: 4 },
    {
        title: 'FHIRType API',
        description:
            'The FHIRType API serves consistently formatted healthcare provider data from numerous FHIR Standard endpoints.',
        image: 'image 5',
        position: 5,
    },
];

export const allProjects: Project[] = [
    { id: 0, title: 'Adventure AI', description: 'AIAIAIAI', src: '/test.png' },
    {
        id: 1,
        title: 'Syllabot',
        description:
            'Say hello to Syllabot! Syllabot is an AI chat bot that allows users to chat with an academic assistant chatbot trained on information from their course files.',
        src: '/test.png',
        github: 'https://github.com/Nyumat/Syllabot?tab=readme-ov-file',
        link: 'https://devpost.com/software/syllabot-1dxsil',
    },
    {
        id: 2,
        title: 'AI Gesture Art',
        description:
            'Create stunning visuals from dynamic hand gestures with built-in sketch autocompletion and AI art generation driven by OpenCV.',
        src: '/test.png',
        github: 'https://github.com/tobyloki/OpenCVApp',
        link: 'https://www.hackster.io/hackathoners/ai-gesture-art-d36827',
    },
    {
        id: 3,
        title: 'Are you smarter than AI?',
        description: 'AIAIAIAI',
        src: '/test.png',
        github: 'https://github.com/Sankalpsp21/Smarter-Than-AI',
        link: 'https://hackathoners0.hashnode.dev/are-you-smarter-than-ai',
    },
    { id: 4, title: 'FHIRType API', description: 'AIAIAIAI', src: '/test.png' },
    { id: 5, title: 'Portfolio website (new)', description: '', src: '/test.png' },
    { id: 6, title: 'GitHub Rewards Program', description: 'AIAIAIAI', src: '/test.png' },
    {
        id: 7,
        title: 'SoundConductor',
        description:
            'Welcome to Sound Conductor! This project is an application that allows users to control their IoT devices using custom sounds. Control your house by clapping or yelling!',
        src: '/test.png',
        github: 'https://github.com/Sankalpsp21/SoundConductor',
        link: 'https://sound-conductor-4bsnr75vpq-uc.a.run.app/',
    },
    { id: 8, title: 'ObjectHunt', description: '', src: '/test.png' },
    { id: 9, title: 'BioReact', description: '', src: '/test.png' },
    { id: 10, title: 'Portfolio website (old)', description: '', src: '/test.png' },
    { id: 11, title: 'Toygether', description: '', src: '/test.png' },
    { id: 12, title: 'ToDoon', description: '', src: '/test.png' },
    { id: 13, title: 'Litania', description: '', src: '/test.png' },
    { id: 14, title: 'Automated Bot Template', description: '', src: '/test.png' },
];

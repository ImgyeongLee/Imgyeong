import { DataType, ProjectType } from "../type/types";

export const professionalProject: DataType[] = [
   {
      title: "Adventure AI",
      description: "AIAIAIAI",
      image: "image 0",
      position: 1,
   },
   {
      title: "Syllabot",
      description: "AIAIAIAIAIAIAIA",
      image: "image 1",
      position: 2,
   },
   {
      title: "AI Gesture Art",
      description: "AIAIAIAI",
      image: "image 2",
      position: 3,
   },
   {
      title: "Are you smarter than AI?",
      description: "AIAIAIAI",
      image: "image 4",
      position: 4,
   },
   {
      title: "FHIRType API",
      description:
         "The FHIRType API serves consistently formatted healthcare provider data from numerous FHIR Standard endpoints.",
      image: "image 5",
      position: 5,
   },
];

export const allProjects: ProjectType[] = [
   {
      id: 0,
      title: "Adventure AI",
      description:
         "AdventureAI is a text-based RPG that uses AI to facilitate gameplay. Players can log in, join or host games, and embark on adventures with friends.",
      src: "/adventureAI.png",
      github: "https://github.com/ImgyeongLee/AdventureAI",
      link: "https://adventure-ai.vercel.app/",
   },
   {
      id: 1,
      title: "Syllabot",
      description:
         "Say hello to Syllabot! Syllabot is an AI chat bot that allows users to chat with an academic assistant chatbot trained on information from their course files.",
      src: "/syllabot.png",
      github: "https://github.com/Nyumat/Syllabot?tab=readme-ov-file",
      link: "https://devpost.com/software/syllabot-1dxsil",
   },
   {
      id: 2,
      title: "AI Gesture Art",
      description:
         "Create stunning visuals from dynamic hand gestures with built-in sketch autocompletion and AI art generation driven by OpenCV.",
      src: "/aigestureart.png",
      github: "https://github.com/tobyloki/OpenCVApp",
      link: "https://www.hackster.io/hackathoners/ai-gesture-art-d36827",
   },
   {
      id: 3,
      title: "Are you smarter than AI?",
      description:
         "Are you smarter than AI? is fun a web-based multiplayer game application. One of the players among you is an AI, incognito. Can you discern who the AI is?",
      src: "/areyousmarterthanai.png",
      github: "https://github.com/Sankalpsp21/Smarter-Than-AI",
      link: "https://hackathoners0.hashnode.dev/are-you-smarter-than-ai",
   },
   { id: 4, title: "FHIRType API", description: "AIAIAIAI", src: "/test.png" },
   {
      id: 5,
      title: "Portfolio website (new)",
      description:
         "Re-built the personal portfolio website with Next.js and Typescript!",
      src: "/newportfolio.png",
   },
   {
      id: 6,
      title: "SoundConductor",
      description:
         "Welcome to Sound Conductor! This project is an application that allows users to control their IoT devices using custom sounds. Control your house by clapping or yelling!",
      src: "/soundconductor.PNG",
      github: "https://github.com/Sankalpsp21/SoundConductor",
      link: "https://sound-conductor-4bsnr75vpq-uc.a.run.app/",
   },
   { id: 7, title: "ObjectHunt", description: "", src: "/objecthunt.png" },
   { id: 8, title: "BioReact", description: "", src: "/bioreact.png" },
   {
      id: 9,
      title: "Portfolio website (old)",
      description:
         "My second React project. Won the first prize at a 10-week long portfolio competition from OSU App Club!",
      src: "/oldportfolio.PNG",
      link: "https://imgyeong-lee-portfolio-website.vercel.app/",
   },
   { id: 10, title: "Toygether", description: "", src: "/toygether.png" },
   { id: 11, title: "Litania", description: "", src: "/litania.png" },
   {
      id: 12,
      title: "Mastodon Bot Template",
      description: "",
      src: "/mastodonbot.png",
   },
   {
      id: 13,
      title: "Discord Bot Template",
      description: "",
      src: "/discordbot.png",
   },
];

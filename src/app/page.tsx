'use client';

import ProgressBar from './components/ProgressBar';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';
import Landing from './components/sections/Landing';
import Music from './components/sections/Music';
import Personal from './components/sections/Personal';
import Project from './components/sections/Project';

export default function Home() {
    return (
        <main className="h-full w-full">
            <ProgressBar />
            <Music />
            <Landing />
            <Experience />
            <Project />
            <Personal />
            <Contact />
        </main>
    );
}

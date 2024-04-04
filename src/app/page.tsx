import ProgressBar from './components/ProgressBar';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';
import Landing from './components/sections/Landing';
import Music from './components/sections/Music';
import Project from './components/sections/Project';

export default function Home() {
  return (
    <>
      <ProgressBar />
      <Music />
      <Landing />
      <Experience />
      <Project />
      <Contact />
    </>
  );
}

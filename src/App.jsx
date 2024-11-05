import Loading from './pages/Loading';
import "./App.css";
import { ThemeProvider } from './components/theme-provider';
import { NavDock } from './components/NavDock';
import SocialmediaIcons from './components/herosection/SocialmediaIcons';
import AllProject from './components/project/AllProject';
import HeroSection from './components/herosection/HeroSection';
import TechStack from './components/techStack/TechStack';
import Resume from './components/resume/Resume';
import Experience from './components/experience/Experience';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ShowParticles } from './components/herosection/ShowParticles';

function App() {
  const loadingRef = useRef();
  const mainRef = useRef();
  const [isContentVisible, setContentVisible] = useState(false); // State to control visibility
  const tl = gsap.timeline();

  // Animation and visibility control
  useGSAP(() => {
    tl.to(loadingRef.current, {
      delay: 5,
      display: "none",
      duration: 0.5,
      onComplete: () => setContentVisible(true) // Show content after loading animation
    });
    tl.from(mainRef.current, {
      opacity: 0,
      duration: 0.5,
    });
  });

  useEffect(() => {
    setContentVisible(false)
  }, [])

  return (
    <ThemeProvider defaultTheme='dark'>
      <div className="dark:bg-[#151312] font-body relative overflow-x-hidden min-h-screen">
        <div ref={loadingRef} className="overflow-hidden absolute top-0">
          <Loading />
        </div>

        {/* Conditionally render the main content */}
        <div ref={mainRef}>
          {isContentVisible && (
            <div className=''>
              <ShowParticles />
              <NavDock />
              <div className="relative ">
                <div id='hero' className="mx-auto w-11/12 md:w-10/12 mt-4">
                  <HeroSection />
                </div>
                <SocialmediaIcons />
              </div>
              <div className="mx-auto w-11/12 md:w-10/12 mt-4 pb-4 space-y-16">
                <AllProject />
                <TechStack />
                <Resume />
              </div>
              <Experience />
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

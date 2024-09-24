'use client'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import Image from "next/image"

import { myProjects } from '../constants/index';
import CanvasLoader from '../components/Loading';
import DemoComputer from '../components/DemoComputer';

import RightArrow from "@/assets/right-arrow.png"
import LeftArrow from "@/assets/left-arrow.png"
import UpArrow from "@/assets/arrow-up.png"

/**
 * The number of projects in the projects array
 */
const projectCount = myProjects.length;

/**
 * The Projects component renders a section of the page that displays
 * a selected project from the projects array. It also renders two
 * navigation buttons that allow the user to navigate to the previous
 * or next project in the array.
 *
 * The component uses the useState hook to keep track of the index of the
 * currently selected project in the array.
 *
 * The component also uses the useGSAP hook to create an animation that
 * fades in the text of the currently selected project. The animation
 * is triggered whenever the selected project changes.
 */
const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  /**
   * This function is called when the user clicks on one of the navigation
   * buttons. It updates the selectedProjectIndex state variable to the
   * index of the new project, and triggers the animation to fade in the
   * text of the new project.
   *
   * @param direction The direction of navigation. If 'previous', the
   * selected project index is decremented. If 'next', the selected project
   * index is incremented.
   */
  const handleNavigation = (direction : 'previous' | 'next') : void => {
    setSelectedProjectIndex((prevIndex) => {
      // If the user clicks the previous button, move to the previous project
      // in the array. If the user clicks the next button, move to the next
      // project in the array. If the user clicks the previous button when
      // the selected project is the first project in the array, move to the
      // last project in the array. If the user clicks the next button when
      // the selected project is the last project in the array, move to the
      // first project in the array.
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  /**
   * This hook is called whenever the selected project changes. It creates
   * an animation that fades in the text of the currently selected project.
   */
  useGSAP(() => {
    gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
  }, [selectedProjectIndex]);

  // Get the currently selected project from the projects array
  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section className="c-space my-20">
      <p className="head-text">My Selected Work</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0"> 
            <Image src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" width={100} height={96} />
          </div>

          <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
            <Image className=" shadow-sm" src={currentProject.logo} alt="logo" height={10} width={10} />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>

            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <Image src={tag.path} alt={tag.name} width={10} height={10}/>
                </div>
              ))}
            </div>

            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer">
              <p>Check Live Site</p>
              <Image src={UpArrow} alt="arrow" className="w-3 h-3" height={3} width={3}/>
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <Image src={LeftArrow} alt="left arrow" className='w-4 h-4' height={4} width={4}/>
            </button>

            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
              <Image src={RightArrow} alt="right arrow" className="w-4 h-4" width={4} height={4} />
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;

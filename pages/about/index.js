import React, { useState } from 'react';
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaBeer,
  FaCompassDrafting,
  FaJava,

} from "react-icons/fa";
import { BiHardHat } from "react-icons/bi";

import {
  SiNextdotjs,
  SiFramer,
  SiSolidity,
  SiExpress,
  SiKotlin,
  SiAndroidstudio

} from "react-icons/si";


//  data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key={1} />,
          <FaCss3 key={2} />,
          <FaJs key={3} />,
          <FaReact key={4} />,
          <SiNextdotjs key={5} />,
          <SiFramer key={6} />,
          <FaWordpress key={7} />,
        ],
        key: 1
      },
      {
        title: 'Blockchain Developer',
        icons: [<BiHardHat key={8} />, <SiExpress key={9} />, <SiSolidity key={10} />, <SiNextdotjs key={11} />, <FaJs key={12} />],
        key: 2
      },
      {
        title: 'App Developer',
        icons: [<SiKotlin key={13} />, <FaJava key={14} />, <SiAndroidstudio key={15} />, <FaReact key={16} />, <FaJs key={17} />],
        key: 3
      }

    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: '3★ at Codechef',
        stage: '2022-Present',
      },
      {
        title: 'Codeforces Pupil',
        stage: '2022-Present',
      },
    ],
  },
  {
    title: 'experience',
    info: [

      {
        title: 'Software Devloper Intern - Walmart',
        stage: '2023 - Present',
      },

    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Blockchain Specialization - University Of Buffalo, New York, Coursera',
        stage: '2022',
      },
      {
        title: 'Meta Android Devloper Specialization Certificate - Coursera',
        stage: '2022',
      },

    ],
  },
];
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CountUp from 'react-countup';
const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return <div className='h-full bg-primary/30 py-32  text-center xl:left'>
    <Circles />
    {/*avatar */}
    <motion.div
      variants={fadeIn('right', 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className='hidden xl:flex absolute bottom-0 -left-[370px]'
    >
      <Avatar />
    </motion.div>
    <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
      {/*text*/}
      <div className='flex-1 flex flex-col justify-center'>
        <motion.h2
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='h2'>Captivating <span className='text-accent'>stories</span> birth magnificient designs.</motion.h2>
        <motion.p
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-6 xl:mb-12 px-2 xl:px-0'>1 year ago, I began learning devlopment. Since then I have done various projects in many domains and generated innovative ideas. I am a blockchain, app , web devloper and problem solver</motion.p>
        {/*counters */}
        <motion.div
          variants={fadeIn('right', 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0'>
          <div className='flex flex-1 xl:gap-x-6'>
            {/*experience*/}
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={1} duration={0.01} />+
              </div>
              <div>YEARS OF EXPERIENCE</div>
            </div>

            {/*Clients*/}
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={10} duration={5} />+
              </div>
              <div>Satisfied Clients</div>
            </div>
            {/*Projects*/}
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={20} duration={5} />+
              </div>
              <div>Finished Projects</div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn('lefft', 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
        <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
          {aboutData.map((item, itemIndex) => {
            return (
              <div
                key={itemIndex}
                className={`${index === itemIndex
                  ? 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  : ''
                  } cursor-pointer capitalize xl:text-lg relative after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            );
          })}
        </div>
        <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
          {aboutData[index].info.map((item, itemIndex) => {
            return (
              <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                {/*title*/}
                <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                <div className='hidden md:flex'>-</div>
                <div >{item.stage}</div>
                <div className='flex gap-x-4'>
                  {/*icons*/}
                  {item.icons?.map((icon, itemIndex) => {
                    return <div key={itemIndex} className='text-2xl text-white'>{icon}</div>
                  })}
                </div>

              </div>
            );

          })}
        </div>
      </motion.div>
    </div>
  </div>;
};

export default About;

import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import style from './styles/about.module.css';
import { textVariant, fadeIn } from '../utils/motion';

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>
      About Me
    </motion.h1>
    <div className={style.para}>
      <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.text}>
      As a software engineer I&apos;m
        {' '}
        <a
          href="https://www.linkedin.com/in/jarray-mohamed-ali-088a62262/"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
           Mohamed Ali Jarray (Dali),
        </a>
        {' '}
        specialize in solving complex problems and developing robust solutions. With experience in Node.js, Spring Boot, and other technologies like Angular and   PostgreSQL, I have worked on a variety of projects, from backend systems to front-end interfaces. I thrive in challenging environments and am always looking for opportunities to innovate and optimize solutions. Combining strong technical skills with a passion for continuous learning, I aim to create impactful and efficient software.      </motion.p>
      <motion.p variants={fadeIn('', '', 1, 1)} className={style.text}>
        Feel free to explore my work on          {' '}
        <a
          href="https://github.com/dalijarray"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          {' '}
          GitHub  
        </a>
        {' '}
        to see my latest projects and contributions!      </motion.p>
      <motion.p variants={fadeIn('', '', 1.25, 1)} className={style.text}>
        Ready to bring your project to life? Reach out—I&apos;m excited to collaborate!
        {' '}
        <a
          href="https://drive.google.com/file/d/1VuMSxB2Iwn3XenVR0FYVG2J5K4fXtSXI/view?usp=sharing"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Check out my resume
        </a>
        {' '}
        for more insights into my journey and qualifications.
      </motion.p>
    </div>
  </>
);

export default SectionWrapper(About, 'about', '');

"use client"
import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <section id='about' className="p-2 rounded-xl mx-auto max-w-screen-xl">
      <div className="relative flex flex-col items-center p-2 mx-auto bg-light-blueish-gray shadow-2xl rounded-xl">
        <div className='gap-4 mx-4 lg:mx-40 mt-6 mb-4 lg:mb-8 text-black'>
          <h2 className='text-center text-5xl my-4 py-2 text-orange-custom'>About me</h2>
          <p className='mt-4 text-l'>
            I am Amit Kumar Das, an engineering post-graduate with a fervent passion for technology and software development. My journey in the tech world is driven by my commitment to crafting top-tier software solutions, focusing on engineering productivity, reliability, and release engineering. Currently, I lead a talented team dedicated to enhancing Jio’s Ecommerce solutions, including JioMart, TIRA, JioMart Partners, Fynd Retail Platform, JioMarket, and JioMart Digital.
          </p>
          <p className='mt-4 text-l'>
            My expertise spans across performance optimization, system reliability, automation, and cloud engineering. I thrive on solving complex problems and architecting innovative solutions.
          </p>
          <p className='mt-4 text-l'>
            With a relentless drive to stay at the forefront of technology, I actively engage in tech communities, educational tech channels, and other learning avenues. During my downtime, I enjoy solving coding challenges, working on personal projects, gaming, and strumming the guitar.
          </p>
          <p className='mt-4 text-l'>
            In my current role as the Head of Engineering at <Link href='https://www.ratl.ai' passHref target="_blank" className='underline hover:underline'>ratl.ai</Link>
            , I am revolutionizing the development process by integrating intelligent automation, comprehensive testing, and continuous monitoring. Our platform ensures that software meets and exceeds industry standards for performance, security, and user satisfaction. Additionally, I am deeply involved in leveraging generative AI technologies such as OpenAI, Gemini, and the LangChain framework to create advanced, AI-driven solutions that push the boundaries of innovation.
          </p>
          <p className='mt-4 text-l'>
            Previously, I held roles at notable companies like Microsoft, Jio, SAS, and Infosys, where I honed my skills in various aspects of software engineering and development. I have been recognized with several awards, including the Infosys Insta Award, SAS Spot Award, and the Valuable Contribution Award for my significant contributions.
          </p>
          <p className='mt-4 text-l'>
            My technical proficiency includes expertise in full stack development with technologies such as Next.js, React.js, Node.js, MongoDB, and more. I am also skilled in cloud platforms, microservices architecture, and containerization with Docker and Kubernetes. Additionally, I have experience with modern front-end frameworks like Tailwind CSS and Chakra UI. My current focus on generative AI allows me to innovate and create AI-driven solutions that are transforming the tech landscape.
          </p>
          <p className='mt-4 text-l'>
            I'm always open to meaningful conversations about technology and innovation. Let's connect and explore the possibilities together! Feel free to drop me a message if you'd like to learn more about my journey or discuss tech innovations.
          </p>
          <p className='mt-4 text-l'>
            My Mantra:
          </p>
          <p className="mt-4 text-l shadow-lg rounded p-2 bg-gray-100 text-gray-800">
            "If I have to do a task more than twice, I automate it. If I have to explain a task more than twice, I document it."
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
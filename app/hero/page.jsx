"use client"
import React, { useEffect } from 'react'
import hero  from '../images/hero.png';
import logo from '../images/logo.jpeg';
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <div className="border-4 border-yellow-400 rounded-lg p-4 mx-2">
        <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row-reverse sm:px-6 p-8">
            <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
                <div className="relative w-full p-3 rounded-xl md:p-8">
                    <div className="rounded-full bg-yellow-400 w-full">
                        <Image src={hero}
                            className='rounded-xl' />
                    </div>
                </div>
            </div>
            <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
                <div className="text-left">
                    <h3 className="leading-tight text-3xl text-yellow-400">
                        Hi! I'm
                    </h3>
                    <h2 className='mt-2 text-white text-6xl font-Merriweather'>Amit Kumar Das</h2>

                    <div className='text-3xl sm:text-4xl lg:text-4xl mt-1 text-yellow-400'>
                        <Typewriter
                            options={{
                                strings: ["A Tech Innovator", "A Visionary Leader", "A Creative Thinker"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <div className="flex items-center space-x-4 mt-4 mb-4">
                        <Link href='https://www.ratl.ai' passHref target="_blank" className='text-3xl text-white hover:underline'>Building ratl.ai</Link>
                        <Image
                            src={logo}
                            height={75}
                            width={75}
                            alt='logo'
                            className='h-12 w-12 sm:h-16 sm:w-16 bg-white rounded-full' // Adjust the class based on your desired size
                        />
                    </div>
                    <div className="mb-4 mt-2 flex sm:items-center lg:items-left">
                        <div className="inline-flex transition duration-150 ease-in-out" role="group">
                            <Link href='https://www.linkedin.com/in/amitkiit1994/' passHref

                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-lg custom-radius px-4 py-2 uppercase leading-normal text-black transition duration-150 ease-in-out bg-yellow-400 hover:bg-yellow-700 focus:bg-yellow-700 focus:outline-none focus:ring-0 active:bg-yellow-800 text-xl font-bold"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                            >
                                Let's Connect
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Hero;
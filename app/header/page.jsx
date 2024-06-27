"use client"
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Header = () => {
  const [router, setRouter] = useState(usePathname() || '/');
  const [isNavOpen, setNavOpen] = useState(false);
  const isActive = (path) => router === path;
  const handler = (url) => setRouter(url);
  const handleToggleNav = () => setNavOpen(!isNavOpen);

  return (
    <nav className="sticky top-0 py-4 md:py-6 bg-transparent shadow-2xl z-50 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 max-w-3xl md:flex md:items-center ">
        <div className="flex justify-between items-center w-full">
          <button
            className={`md:hidden border-4 border-solid border-gray-600 p-3 rounded ${isNavOpen ? 'bg-gray-200' : ''}`}
            id="navbar-toggle"
            onClick={handleToggleNav}
          >
            <i className={`fas fa-bars text-3xl ${isNavOpen ? 'text-black' : 'text-white'}`}></i>
          </button>
        </div>

        <div
          className={`md:flex flex-col md:flex-row ${isNavOpen ? 'block' : 'hidden'} md:ml-auto mt-3 md:mt-0`}
          id="navbar-collapse"
        >
          <a
            href="/"
            onClick={() => handler('/')}
            className={`p-2 lg:px-4 md:mx-2 text-lg rounded ${
              isActive('/') ? 'bg-orange-custom text-black shadow-lg' : 'text-black'
            }`}
          >
            home
          </a>

          <a
            href="/#about"
            onClick={() => handler('/#about')}
            className={`p-2 lg:px-4 md:mx-2 text-lg rounded ${
              isActive('/#about') ? 'bg-orange-custom text-black shadow-lg' : 'text-black'
            }`}
          >
            about
          </a>

          <a
            href="/#journey"
            onClick={() => handler('/#journey')}
            className={`p-2 lg:px-4 md:mx-2 text-lg rounded ${
              isActive('/#journey') ? 'bg-orange-custom text-black shadow-lg' : 'text-black'
            }`}
          >
            journey
          </a>

          <a
            href="/#testimonials"
            onClick={() => handler('/#testimonials')}
            className={`p-2 lg:px-4 md:mx-2 text-lg rounded ${
              isActive('/#testimonials') ? 'bg-orange-custom text-black shadow-lg' : 'text-black'
            }`}
          >
            testimonials
          </a>

          <a
            href="/#contact"
            onClick={() => handler('/#contact')}
            className={`p-2 lg:px-4 md:mx-2 text-lg rounded ${
              isActive('/#contact') ? 'bg-orange-custom text-black shadow-lg' : 'text-black'
            }`}
          >
            connect
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
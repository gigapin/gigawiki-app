import logo from '../../assets/GiGaWiki-logo-web.png';
import onlyLogo from '../../assets/GiGaWikiOnlyLogo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const demo = "http://demo.gigawiki.test";
  
  return (
    <nav className="px-4 py-5 container mx-auto border-b border-emerald-100 dark:border-emerald-700 text-gray-700  dark:text-gray-100">
      <div className="relative grid items-center grid-cols-2 lg:grid-cols-3">
        <ul className="flex hidden items-center list-none space-x-8 lg:flex text-xl">
          <li>
            <Link
              to="/"
              aria-label="Home"
              title="Home"
              className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/libraries"
              aria-label="Docs"
              title="Docs"
              className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Docs
            </Link>
          </li>
          <li>
            <Link
              to="/contacts"
              aria-label="Contact"
              title="Contact"
              className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Contact
            </Link>
          </li>
        </ul>
        <Link
          to="/"
          aria-label="GiGaWiki"
          title="GiGaWiki"
          className="inline-flex items-center lg:mx-auto"
        >
          <img
            className="h-6"
            src={logo}
            alt="Logo"
          />
        </Link>
        <ul className="items-center hidden ml-auto space-x-8 list-none lg:flex">
          <li>
            <a
              href={demo}
              target="_blank"
              rel='noreferrer'
              aria-label="Get Demo"
              title="Get Demo"
              className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400 hover:no-underline text-xl bg-green-400 p-4 text-white"
            >
              Get a demo
            </a>
          </li>
        </ul>
        <div className="ml-auto lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label="Home"
                      title="Home"
                      className="inline-flex items-center"
                    >
                      <img
                        className="h-8"
                        src={onlyLogo}
                        alt="Logo"
                      />
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4 mx-0 list-none">
                    <li>
                      <Link
                        to="/"
                        aria-label="Home"
                        title="Home"
                        className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/libraries"
                        aria-label="Docs"
                        title="Docs"
                        className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Docs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contacts"
                        aria-label="Contact"
                        title="Contact"
                        className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                    <a
                      href={demo}
                      target="_blank"
                      rel='noreferrer'
                      aria-label="Get Demo"
                      title="Get Demo"
                      className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400 hover:no-underline text-xl bg-green-400 p-2 text-white"
                    >
                      Get a demo
                    </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
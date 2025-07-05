import React from "react";

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <div className="flex justify-center space-x-6 mt-2">
 <a 
 href="https://twitter.com" 
 target="_blank" 
 rel="noopener noreferrer"
 className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
 >
 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
 <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.96L.44 4.138h-1.9l16.5 15.625z" />
 </svg>
 </a>
 <a 
 href="https://github.com/Shivamraj10" 
 target="_blank" 
 rel="noopener noreferrer"
 className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
 >
 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
 <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.105.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.39-1.336-1.76-1.336-1.76-1.09-.745.083-.73.083-.73 1.205.084 1.838 1.238 1.838 1.238 1.07 1.834 2.807 1.304 3.492.995.108-.776.418-1.304.76-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.238-3.22-.124-.3-.535-1.52.124-3.17 0 0 1.01-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.66 1.65.24 2.87.12 3.17.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.815 1.1.815 2.22 0 1.6-.015 2.89-.015 3.285 0 .32.21.69.825.57C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
 </svg>
 </a>
 <a 
 href="https://www.linkedin.com/in/shivam-raj01/" 
 target="_blank" 
 rel="noopener noreferrer"
 className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
 >
 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
 <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
 </svg>
 </a>
 </div>
        </nav>
        <aside>
          <p className="text-sm text-gray-600">
 © {new Date().getFullYear()} BookStore App. All rights reserved.
 </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;



import React from "react";
import Link from 'next/link';

type Project = {
  id: number;
  name: string;
  description: string;
  url: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: "Students Card",
    description: "There are three Students Id Cards with the help of props in Next js.",
    url: "https://github.com/Shahmeer-Ansari-2008/Students-IdCard.git",
  },
  {
    id: 2,
    name: "Routes Pages",
    description: "Header, Footer, Contact page and About page with Next JS.",
    url: "https://github.com/Shahmeer-Ansari-2008/Four-pages.git",
  },
  // Add more projects here...
];

const Projects: React.FC = () => {
  return (
    <div className="p-0 m-0 no-underline list-none box-border ">
    <div className="main bg-cover bg-gray-900 bg-center h-[800px] block" >
  <nav className="bg-gray-900 h-[80px] w-[100%]">
     
     <label className= "text-white text-[40px] leading-[80px] p-[100px] font-serif font-bold logo max-lg:text-[30px] max-lg:pl-[50px] "></label>
 
    
       <ul className="flex justify-end mr-[20px] left-[-80%] text-center">
         <li className="leading-[80px] m-[5px] block m-[50px 0] leading-[30px] mt-[-80px] ">
         <Link className="text-white text-base py-2 px-3.5 rounded-sm uppercase text-[20px] hover:bg-white  hover:text-cyan-500  " href="/">
   Home
 </Link>
         </li>
         <li className="leading-[80px] mx-[5px] block m-[50px 0] leading-[30px] mt-[-80px]">
           <Link className="text-white text-base py-2 px-3.5 rounded-sm uppercase text-[16px]  hover:bg-white hover:text-cyan-500"rel="stylesheet" href="/about">
           About
           </Link>
         </li>
         <li className="leading-[80px] m-[5px] block m-[50px 0] leading-[30px] mt-[-80px] ">
         <Link className="text-white text-base py-2 px-3.5 rounded-sm uppercase text-[16px] hover:bg-white  hover:text-cyan-500" href="/contact">
           Contact
         </Link>
         </li>
         <li className="leading-[80px] mx-[5px] block m-[50px 0] leading-[30px] mt-[-80px]">
           <Link className="text-white text-base py-2 px-3.5 rounded-sm uppercase text-[16px]  hover:bg-white hover:text-cyan-500 "rel="stylesheet" href="/skills">
           Skills
           </Link>
         </li>
         <li className="leading-[80px] mx-[5px] block m-[50px 0] leading-[30px] mt-[-80px]">
          <Link className="text-white text-base py-2 px-3.5 rounded-sm uppercase text-[16px]  hover:bg-white hover:text-cyan-500 active: font-bold underline"rel="stylesheet" href="/projects">
          Projects
          </Link>
        </li>
         
       </ul>
     
    
 </nav>
        <h1 className="text-center text-cyan-500 text-[50px] underline font-serif">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-[100px]">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-cyan-500">
                {project.name}
              </h2>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default Projects;

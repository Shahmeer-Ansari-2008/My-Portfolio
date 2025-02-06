import React from 'react';
import Link from 'next/link';

const skills = [
  {
    category: 'Frontend',
    technologies: ['Html', 'CSS', 'Next.js', 'TypeScript', 'Tailwind CSS',],
  },
  {
    category: 'UI/UX Design',
    technologies: ['Figma', 'Shadcn',],
  },
  {
    category: 'Tools & Others',
    technologies: ['Git', 'GitHub', 'VS Code',],
  },
];

const SkillsPage: React.FC = () => {
  return (
    <div className="p-0 m-0 no-underline list-none box-border ">
      <div className="main bg-cover bg-gray-900 bg-center h-[800px] block" >
      <nav className="bg-gray-900 h-[80px] w-[100%]">
     
     <label className= "text-white text-[40px] leading-[80px] p-[100px] font-serif font-bold logo max-lg:text-[30px] max-lg:pl-[50px] "></label>
 
    
       <ul className="flex justify-end mr-[20px] left-[-80%] text-center">
         <li className="leading-[80px] m-[5px] block m-[50px 0] leading-[30px] mt-[-80px] ">
         <Link className="text-white text-base py-2 px-3.5 rounded-sm uppercase text-[20px] hover:bg-white  hover:text-cyan-500 " href="/">
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
           <Link className="text-white text-base py-2 px-3.5 rounded-sm uppercase text-[16px]  hover:bg-white hover:text-cyan-500 active: font-bold underline "rel="stylesheet" href="/skills">
           Skills
           </Link>
    </li>
    <li className="leading-[80px] mx-[5px] block m-[50px 0] leading-[30px] mt-[-80px]">
          <Link className="text-white text-base py-2 px-3.5 rounded-sm uppercase text-[16px]  hover:bg-white hover:text-cyan-500"rel="stylesheet" href="/projects">
          Projects
          </Link>
        </li>
       </ul>
     
    
 </nav>
        <h1 className="text-center text-cyan-500 text-[50px] underline font-serif">My Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillCategory, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md mx-[100px]">
              <h2 className="text-2xl font-semibold mb-4">{skillCategory.category}</h2>
              <ul className="space-y-2">
                {skillCategory.technologies.map((technology, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-lg text-gray-700"
                  >
                    <span className="w-2.5 h-2.5 bg-cyan-500 rounded-full"></span>
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;

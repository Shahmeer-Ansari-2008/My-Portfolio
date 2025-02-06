
import React from 'react';
import Link from 'next/link';



export default function Home() {
  return (
    <div className="p-0 m-0 no-underline list-none box-border ">
      <div className="main bg-cover bg-gray-900 bg-center h-[800px] block" >
    <nav className="bg-gray-900 h-[80px] w-[100%]">
     
    <label className= "text-white text-[40px] leading-[80px] p-[100px] font-serif font-bold logo max-lg:text-[30px] max-lg:pl-[50px] "></label>

   
      <ul className="flex justify-end mr-[20px] left-[-80%] text-center">
        <li className="leading-[80px] m-[5px] block m-[50px 0] leading-[30px] mt-[-80px] ">
        <Link className="text-white text-base py-2 px-3.5 rounded-sm uppercase text-[20px] hover:bg-white  hover:text-cyan-500 active: font-bold underline " href="/">
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
          <Link className="text-white text-base py-2 px-3.5 rounded-sm uppercase text-[16px]  hover:bg-white hover:text-cyan-500"rel="stylesheet" href="/skills">
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
<div className="ml-[40px] mt-[60px] ">
      <h2 className='text-[30px] font-bold text-white'>
        Assalamualaikum,It's Me
      </h2>
      <h1 className='text-[50px] font-bold text-white'>Shahmeer Ahmed</h1>
      
      <div>
      <span className='text-[30px] font-bold text-white'>
        I'm a</span> <span className='text-[30px] font-bold text-cyan-500'>
         Frontend Developer</span> 
        </div>
        <p className='text-[20px] font-bold text-white' >You can vist my Github and LinkedIn accounts.</p>
        <Link
            href="https://Github/Shahmeer-Ansari-2008.com"
            className="text-white text-[30px] ml-[40px] hover:bg-white hover:text-blue-950 hover:font-bold"
          >
           Github
         </Link>   <Link
            href="https://www.linkedin.com/in/shahmeer-ahmed-5b750b33a/"
            className="text-white text-[30px] ml-[40px] hover:bg-white  hover:text-blue-950 hover:font-bold"
          >
          LinkedIn
          </Link> 
      </div>
    <div className="ml-[800px] mt-[-40px]">
    <img className="w-[300px] h-[300px] rounded-full shadow-lg shadow-cyan-500" src="images/me.jpg" alt="Shahmeer" />
    </div>
   
    </div>
    </div>
  
  )
}

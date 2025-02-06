
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

      
        <h1 className="text-center text-cyan-500 text-[50px] underline font-serif">
         About
    </h1>
    <p className="text-center text-[30px] text-white ">
      AssalamOAlaikum!<br />
      My name is "Shahmeer Ahmed". <br />
      I am a student of "GIAIC".<br />
      I am learning about "Web development". <br />
      My coding journey was start on 2024. <br />
      I didn't know about coding before "GIAIC". <br />
      But now I am better than before. <br />
      Thank You.
        </p>
        </div>
   
    </div>
    
  
  )
}

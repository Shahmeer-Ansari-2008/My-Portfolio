
import React from 'react';
import Link from 'next/link';



export default function Home() {
  return (
    <div className="p-0 m-0 no-underline list-none box-border ">
      <div className="main bg-cover bg-gray-900 bg-center h-[800px] block" >
    <nav className="bg-gray-900 h-[80px] w-[100%]">
     
    <label className= "text-white text-[40px] leading-[80px] p-[100px] font-bold logo max-lg:text-[30px] max-lg:pl-[50px] ">SHAHMEER</label>

   
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
        I'm a IT Student in</span> <span className='text-[30px] font-bold text-cyan-500'>
         GIAIC</span> 
        </div>
        <button className="mt-[40px]">
       
        <Link className="text-white bg-cyan-500 text-base py-2 px-3.5 font-bold ml-[40px] rounded-sm uppercase text-[16px] hover:bg-white  hover:text-cyan-500" href="/contact">
          Contact Me
        </Link>
       
        </button>
      </div>
    <div className="ml-[800px] mt-[-40px]">
    <img className="w-[300px] h-[300px] rounded-full shadow-lg shadow-cyan-500" src="images/me.jpg" alt="Shahmeer" />
    </div>
   
    </div>
    </div>
  
  )
}

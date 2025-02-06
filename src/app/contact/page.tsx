
'use client';  
import Link from "next/link"
import { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
const [formData, setFormData] = useState({
name: '',
email: '',
message: '',
});
const [isSubmitting, setIsSubmitting] = useState(false);
const [statusMessage, setStatusMessage] = useState('');

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
const { name, value } = e.target;
setFormData({
...formData,
[name]: value,
});
};

const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault();

setIsSubmitting(true);
setStatusMessage('');

try {
const result = await emailjs.send(
'service_ky80t16',       
'template_89gepwr',      
formData,
'GPMfe6_kzi_FmKBa5'            
);
setStatusMessage('Your message has been sent successfully!');
} catch (error) {
setStatusMessage('There was an error sending your message. Please try again later.');
}

setIsSubmitting(true);
};

return (
<div className="p-0 m-0 no-underline list-none box-border ">
<div className="main bg-cover bg-center bg-gray-900 h-[100vh] block">
<nav className="bg-gray-900 h-[80px] w-[100%]">
<label className= "text-white text-[40px] leading-[80px] p-[100px] font-serif font-bold logo max-lg:text-[30px] max-lg:pl-[50px] "></label>


<ul className="flex justify-end mr-[20px] left-[-100%] text-center">
 <li className="leading-[80px] m-[5px] block m-[50px 0] leading-[30px] mt-[-80px] ">
 <Link className="text-white text-base py-2 px-3.5 rounded-sm uppercase text-[16px] hover:bg-white  hover:text-cyan-500 " href="/">
Home
</Link>
 </li>
 <li className="leading-[80px] mx-[5px] block m-[50px 0] leading-[30px] mt-[-80px]">
   <Link className="text-white text-base py-2 px-3.5 rounded-sm uppercase text-[16px]  hover:bg-white hover:text-cyan-500"rel="stylesheet" href="/about">
   About
   </Link>
 </li>
 <li className="leading-[80px] m-[5px] block m-[50px 0] leading-[30px] mt-[-80px] ">
 <Link className="text-white text-base py-2 px-3.5 rounded-sm uppercase text-[20px] hover:bg-white  hover:text-cyan-500 active: font-bold underline " href="/contact">
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
<div className="contact">
<h1 className="text-center text-cyan-500 text-[50px] underline font-serif">Contact</h1>
</div>

<div className="max-w-lg mx-auto p-6  bg-white shadow-md rounded-md">
<h2 className="text-2xl font-bold mb-4 text-center text-cyan-500">Contact Form</h2>
<form onSubmit={handleSubmit} className="space-y-4">
<div>
  <label htmlFor="name" className="block text-sm font-medium text-cyan-500">Name</label>
  <input
    type="text"
    id="name"
    name="name"
    value={formData.name}
    onChange={handleChange}
    className="mt-1 block w-full px-3 py-2 border border-black rounded-md focus:ring-indigo-500 focus:border-indigo-500"
    required
  />
</div>

<div>
  <label htmlFor="email" className="block text-sm font-medium text-cyan-500">Email</label>
  <input
    type="email"
    id="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    className="mt-1 block w-full px-3 py-2 border border-black rounded-md focus:ring-indigo-500 focus:border-indigo-500"
    required
  />
</div>

<div>
  <label htmlFor="message" className="block text-sm font-medium text-cyan-500">Message</label>
  <textarea
    id="message"
    name="message"
    value={formData.message}
    onChange={handleChange}
    rows={4}
    className="mt-1 block w-full px-3 py-2 border border-black rounded-md focus:ring-indigo-500 focus:border-indigo-500"
    required
  />
</div>

<div className="text-center">
  <button
    type="submit"
    disabled={isSubmitting}
    className={`w-full py-2 px-4 text-white font-bold rounded-md ${
      isSubmitting
        ? 'bg-gray-400 cursor-not-allowed'
        : 'bg-cyan-500 hover:bg-gray-900'
    }`}
  >
    {isSubmitting ?'your message is Submitting' : 'Submit' }
  </button>
</div>
</form>

{statusMessage && (
<p className={`mt-4 text-center ${statusMessage.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
  {statusMessage}
</p>
)}
</div>

</div>
</div>
);
};

export default ContactForm;


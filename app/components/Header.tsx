
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {Facebook, Phone, Github, Linkedin, Mail} from "lucide-react";


const profile = "/images/myprofile.jpg";
const Header = () => {

  // using for email link
  const email = "crtmidsapak@gmail.com";
  const subject = "Hello Cy!";
  const body = "I would like to get in touch with you.";

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;


  return (
    <div className='w-[400px] border-[2px] lg:border-[1px] border-orange-600  bg-white'>

      {/* Image and Name */}
      <div className='flex flex-col items-center justify-center mb-4 bg-orange-600 text-white '>
        {/* Image */}
        <div className='h-[200px] w-[200px] m-4
          lg:h-[250px] lg:w-[250px]
        '>
          <Image src={profile} alt="My very handsome face." width={300} height={300} 
            className='object-fill rounded-full border-[5px] border-white'
          />
        </div>

        {/* Name */}
        <div className='text-center'>
          
          <h1 className='text-[2.3rem] font-bold'>CYPHIL RAVEN MIDSAPAK</h1>

          <div className='text-[1.2rem] m-0 p-0'>
            <h2>Software Developer, Data Enthusiast, and IoT Innovator. </h2>
          </div>
        </div>
      </div>

      {/* Contact Information + HIRE ME */}

      <div className='flex flex-col items-center justify-center h-full text-[#895129]'>
        <div className="grid grid-cols-3 gap-[50px]   place-items-center">
            <div className=''>
                <Link href="https://www.facebook.com/imcyphilraven" className='cursor-pointer'>
                      <Facebook size={40} color='#ea580c'/>
                </Link>
            </div>
            <div>
                <Link href="https://www.github.com/cyphe-did-it" className='cursor-pointer'>
                      <Github size={40} color='#ea580c' />
                </Link>
            </div>
            <div>
                <Link href="https://www.linkedin.com" className='cursor-pointer'>
                      <Linkedin size={40} color='#ea580c' />
                </Link>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-9 place-items-center m-5 text-[#895129]">
            <div>
                <Link href="https://www.facebook.com/imcyphilraven" className='cursor-pointer flex items-center justify-center text-orange-600'>
                    <Phone size={30} color='#ea580c'/>
                    <h1 className='text-[.8rem]'>+639673764833 (PHL)</h1>
                </Link>
            </div>
            <div className='relative group '>
                <Link href={mailtoLink} target='_blank' rel='noopener noreferrer' className='cursor-pointer flex items-center justify-center text-orange-600'>
                    <Mail size={30} color='#ea580c' />
                    <h1 className='text-[.8rem] hover:underline'>crtmidsapak@gmail.com</h1>
                </Link>

                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 w-[150px] text-sm text-orange-600 bg-gray-200 rounded opacity-0 group-hover:opacity-100 transition">
                  Send me an email
                </span>
            </div>
        </div>

      </div>

      {/* Hire me and CV below! */}
      <div className='flex flex-row items-center justify-center text-orange-600 m-4'>

          <button className='
            shadow shadow-orange-600 border border-white rounded-md p-3 m-2  w-[125px] text-white bg-orange-600 hover:text-orange-600 hover:bg-white hover:border-[1px] hover:border-orange-600
          '>
            <Link href={mailtoLink} target='_blank' rel='noopener noreferrer'>
                Hire Me
            </Link>
            
          </button>
          <button className='
            shadow shadow-orange-600 border border-white rounded-md p-3 m-2  w-[125px] text-white bg-orange-600 hover:text-orange-600 hover:bg-white hover:border-[1px] hover:border-orange-600
          '>
            <Link href="https://drive.google.com/file/d/1NLIBkze1EvqW1ZE-Epm9bVECxbRnh7aC/view?usp=sharing">
              Check My CV
            </Link>
          </button>
      </div>

    </div>
    
  )
}

export default Header;
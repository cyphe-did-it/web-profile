"use client";

import { useState, useEffect } from "react";
import { ArrowDownToLine, ChevronDown, Github, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const myprojects = [
    {
      title: "SORTINBOT: A Single-Use Plastic Bottle and Tin Can Sorter Bin with Rewards System",
      content: "SORTINBOT is my final year project. It is a sorting system for single-use plastic bottles and tin cans developed using Arduino, NodeMCU, sensors and motors, and Firebase as its server and database. Accompanied by a mobile application, it aims to encourage the community to properly recycle by giving them points for every bottle and tin can they sort using the device.",
    },
    {
      title: "Product Management System Using Python (CRUD Application)",
      content:"A working concept of product management where the user can enter new products, update existing products, and delete products. This is a working project for the software development track that I took. It utilizes Python libraries - custom tkinter, pandas, matplotlib, and mysql-connector and the use of MySQL database running on a local server."
    },
    {
      title: "Analysis on Palay and Corn Production in the Philippines",
      content:"A project out of curiosity. This analysis is based on the palay and crop production in the country in the last 13 years. I used Python libraries such as Pandas and Matplotlib clean and analyze the data and transferred it to Microsoft Power BI for data visualization. "
    },
  ]

const Projects1 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <>
            {/* FOR SORTINBOT  */}
            <div className={`
            border-[2px] border-teal-600 text-center p-1 m-1
            lg:text-justify transition-all duration-300 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
            `}>
                {/* Accordion Header */}
                <div className="flex justify-between items-center cursor-pointer " 
                    onClick={toggleAccordion}
                >
                    <div className="flex flex-col items-center justify-center
                        lg:grid lg:grid-cols-12 lg:p-2
                    ">
                        <div className="lg:w-[150px] lg:h-[150px] lg:col-span-3 ">
                            <Image src="/images/projects/sortinbot.jpg" alt="Sortinbot Image" width={1000} height={1000} className="object-contain w-[200px] h-[200px] bg-teal-600  mb-3 rounded-[20px] p-1
                            lg:w-[150px] lg:h-[150px] lg:m-0 lg:col-span-2 lg:place-items-center lg:justify-center"></Image>
                        </div>
                        
                        <div className="flex flex-row items-center justify-center gap-2 p-2
                            lg:col-span-9 lg:grid lg:grid-cols-12 
                        ">
                            <div className="lg:col-span-11">
                                <h3 className="text-[1.2rem] text-teal-600 font-bold">{myprojects[0].title}</h3>
                            </div>
                            <div className="lg:col-span-1">
                                <button className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                    <ChevronDown size={30} className="hover:bg-teal-600"/>
                                </button>
                            </div>
                        </div> 
                    </div>        
                </div>

                {/* Accordion Content */}
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen py-4 px-4' : 'max-h-0'}`}>
                    <div className="flex flex-col text-justify text-teal-600 font-medium">
                        <p>{myprojects[0].content}</p>
                        <div className="flex flex-row items-center justify-end">
                            <Link href="https://youtu.be/40JDfKzxoCY" className="hover:border-[2px] hover:border-teal-600 hover:rounded-[20px]">
                                <Youtube size={35} color="teal" />
                            </Link> 
                        </div>
                    </div>
                </div>
            </div>
        </>
           
  )
}


const Projects2 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        setIsVisible(true);
    }, []);

    

    return (
        <>
            {/* FOR PRODUCT-ENTRY  */}
            <div className={`
            border-[2px] border-teal-600 text-center p-1 m-1
            lg:text-justify transition-all duration-500 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
            `}>
                {/* Accordion Header */}
                <div className="flex justify-between items-center cursor-pointer " 
                    onClick={toggleAccordion}
                >
                    <div className="flex flex-col items-center justify-center
                        lg:grid lg:grid-cols-12 lg:p-2
                    ">
                        <div className="lg:w-[150px] lg:h-[150px] lg:col-span-3 ">
                            <Image src="/images/projects/product-entry.png" alt="Sortinbot Image" width={1000} height={1000} className="object-contain w-[200px] h-[200px] bg-teal-600  mb-3 rounded-[20px] p-1
                            lg:w-[150px] lg:h-[150px] lg:m-0 lg:col-span-2 lg:place-items-center lg:justify-center"></Image>
                        </div>
                        
                        <div className="flex flex-row items-center justify-center gap-2 p-2
                            lg:col-span-9 lg:grid lg:grid-cols-12  lg:place-item-end
                        ">
                            <div className="lg:col-span-11">
                                <h3 className="text-[1.2rem] text-teal-600 font-bold">{myprojects[1].title}</h3>
                            </div>
                            <div className="lg:col-span-1">
                                <button className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                    <ChevronDown size={30} className="hover:bg-teal-600"/>
                                </button>
                            </div>
                        </div> 
                    </div>        
                </div>

                {/* Accordion Content */}
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen py-4 px-4' : 'max-h-0'}`}>
                    <div className="flex flex-col text-justify text-teal-600 font-medium">
                        <p>{myprojects[1].content}</p>
                        <div className="flex flex-row items-center justify-end">
                            <Link href="https://github.com/cyphe-did-it/product_entry" className="hover:border-[2px] hover:border-teal-600 hover:rounded-[20px]">
                                <Github size={35} color="teal" />
                            </Link> 
                        </div>
                    </div>
                </div>
            </div>
        </>
        
  )
}
const Projects3 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <>
            {/* FOR CROP PROD  */}
            <div className={`
            border-[2px] border-teal-600 text-center p-1 m-1
            lg:text-justify transition-all duration-700 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
            `}>
                {/* Accordion Header */}
                <div className="flex justify-between items-center cursor-pointer text-teal-600" 
                    onClick={toggleAccordion}
                >
                    <div className="flex flex-col items-center justify-center
                        lg:grid lg:grid-cols-12 lg:p-2
                    ">
                        <div className="lg:w-[150px] lg:h-[150px] lg:col-span-3 ">
                            <Image src="/images/projects/crop-production.png" alt="Sortinbot Image" width={1000} height={1000} className="object-contain w-[200px] h-[200px] bg-teal-600  mb-3 rounded-[20px] p-1
                            lg:w-[150px] lg:h-[150px] lg:m-0 lg:col-span-2 lg:place-items-center lg:justify-center"></Image>
                        </div>
                        
                        <div className="flex flex-row items-center justify-center gap-2 p-2
                            lg:col-span-9 lg:grid lg:grid-cols-12 
                        ">
                            <div className="lg:col-span-11">
                                <h3 className="text-[1.2rem] text-teal-600  font-bold">{myprojects[2].title}</h3>
                            </div>
                            <div className="lg:col-span-1">
                                <button className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                    <ChevronDown size={30} className="hover:bg-teal-600"/>
                                </button>
                            </div>
                        </div> 
                    </div>        
                </div>

                {/* Accordion Content */}
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen py-4 px-4' : 'max-h-0'}`}>
                    <div className="flex flex-col text-justify text-teal-600 font-medium">
                        <p>{myprojects[2].content}</p>
                        <div className="flex flex-row items-center justify-end">
                            <Link href="https://drive.google.com/drive/folders/1vXJlifKJu6hcHULuBphBoDOUogy_Z6SU" className="hover:border-[2px] hover:border-teal-600 hover:rounded-[20px] mr-4">
                                    <ArrowDownToLine size={35} color="teal" />
                            </Link> 
                            <Link href="https://youtu.be/Q0GzzcGYR7s" className="hover:border-[2px] hover:border-teal-600 hover:rounded-[20px]">
                                <Youtube size={35} color="teal" />
                            </Link> 

                        </div>
                    </div>
                </div>
            </div>
        </>
        
  )
}

export {Projects1, Projects2, Projects3}


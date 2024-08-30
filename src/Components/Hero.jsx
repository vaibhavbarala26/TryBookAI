import React, { useContext } from 'react';
import "./Header.css";
import { PiNotebookBold } from "react-icons/pi";
import { FaRobot, FaDownload, FaLanguage } from "react-icons/fa";
import book1 from "../assets/book1.png";
import paradox from "../assets/paradox.png";
import FeaturesSection from './FeaturesSection';
import HowItWorksa from './HowItWorksa';
import SampleBooks from './SampleBooks';
import Roadmap from './Roadmap';
import { Link } from 'react-router-dom';
import Testimonials from './Testimonials';
import { themeContext } from '../Context/ThemeContext';

const Hero = () => {
    const {theme} = useContext(themeContext)
    console.log(theme);
    
    return (
        <div className={`bg-gray-900  ${theme === 'light' ? 'text-black bg-white' : 'text-white'}  flex flex-col items-center justify-center `}>
            <div className='px-4 md:px-10 text-center'>
                <h1 className='font-bold text-3xl md:text-5xl sx:max-md:text-2xl'>
                    Explore the Possibilities of <span className='text a'>AI Book Writing</span> with BookAI
                </h1>
                <div className='w-full flex justify-center mt-6'>
                    <div className='w-full md:w-[600px]'>
                        <p className={`font-semibold text-base md:text-lg text-gray-300 ${theme === 'light'? "text-black":"text-white"}`}>
                            Unleash the power of AI to create captivating books in minutes. Download, Distribute wherever you want. Generate unlimited free books.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col justify-center  ssx:max-md:px-10 items-center'>
                <div className='flex flex-col sm:flex-row justify-center mt-10 gap-2 '>
                    <div className='gap-4 flex'>
                    <Link to={"/payment"}><button className='button'>Get Started</button></Link>
                    <Link to={"/payment"}><button className='button'>Get API Access</button></Link>
                </div>
                </div>
                <div className='mt-10 container px-4 md:px-10 py-8 sx:max-lg:w-[100%]  '>
                    <div className='w-full sx:max-lg:w-[100%]'>
                        <img src={book1} alt="" className='hover:scale-105 transition-all rounded-lg' />
                    </div>
                </div>

                <div className='flex justify-end'>
                    <div className='container  sx:max-lg:w-48 w-48 flex items-center py-3 px-2 gap-2 relative bottom-16 sx:max-sm:hidden'>
                        <div className='icon h-8 w-8 rounded-full'></div>
                        <span >Chapter complete</span>
                    </div>
                </div>
<div id='feature'>
                <FeaturesSection />
                </div>
            </div>

            <div id='howitWorks'>
                <HowItWorksa  />
            </div>
            <div>
                <SampleBooks />
            </div>
            <div id='Roadmap'>
                <Roadmap />
            </div>
            <div>
                <Testimonials />
            </div>
        </div>
        </div>
    )
}

export default Hero;

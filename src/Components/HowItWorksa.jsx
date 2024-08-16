import React, { useContext } from 'react';
import { FaMagic, FaCog, FaPen, FaCheckCircle } from 'react-icons/fa';
import { themeContext } from '../Context/ThemeContext';

const HowItWorksa = () => {
  const {theme} = useContext(themeContext)
  return (
    <div className={`${theme === 'light'? 'text-black':'text-white'} py-12 px-10`}>
      <div className=" mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start">
            <FaMagic className="text-4xl text-blue-400 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Choose Your Genre</h3>
              <p>Select from a wide range of genres or create a custom blend.</p>
            </div>
          </div>
          <div className="flex items-start">
            <FaPen className="text-4xl text-blue-400 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Provide Key Details</h3>
              <p>Input main characters, plot points, or themes to guide the AI.</p>
            </div>
          </div>
          <div className="flex items-start">
            <FaCog className="text-4xl text-blue-400 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">AI Generation</h3>
              <p>Our advanced AI creates your book based on your inputs.</p>
            </div>
          </div>
          <div className="flex items-start">
            <FaCheckCircle className="text-4xl text-blue-400 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Review and Download</h3>
              <p>Review your generated book and download in your preferred format.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksa;

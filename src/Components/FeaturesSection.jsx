import React, { useContext } from 'react';
import { FaRobot, FaFileDownload, FaGlobe, FaBookOpen } from 'react-icons/fa';
import { MdOutlineCategory } from 'react-icons/md';
import { themeContext } from '../Context/ThemeContext';

const FeaturesSection = () => {
  const {theme} = useContext(themeContext)
  return (
    <div className={`py-12 ${theme === 'light' ? "text-black" : "text-white"}` }>
      <div className="flex justify-center gap-10 sx:max-md:grid sx:max-md:grid-cols-1">
        <div className="flex flex-col items-center">
          <FaRobot className="text-5xl mb-4" />
          <h3 className="text-xl font-semibold">AI-Powered Writing</h3>
          <p className="text-center">Generate high-quality content with advanced AI technology.</p>
        </div>
        <div className="flex flex-col items-center">
          <MdOutlineCategory className="text-5xl mb-4" />
          <h3 className="text-xl font-semibold">Custom Genres</h3>
          <p className="text-center">Create stories in any genre or blend multiple styles.</p>
        </div>
        <div className="flex flex-col items-center">
          <FaFileDownload className="text-5xl mb-4" />
          <h3 className="text-xl font-semibold">Instant Download</h3>
          <p className="text-center">Get your completed book in various formats instantly.</p>
        </div>
        <div className="flex flex-col items-center">
          <FaGlobe className="text-5xl mb-4" />
          <h3 className="text-xl font-semibold">Multilingual</h3>
          <p className="text-center">Generate content in multiple languages effortlessly.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;

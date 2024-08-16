import React, { useContext } from 'react';
import { FaUser, FaUsers, FaStore, FaPaintBrush } from 'react-icons/fa';
import { themeContext } from '../Context/ThemeContext';

const Roadmap = () => {
  const {theme} = useContext(themeContext)
  return (
    <div className={`bg-gray-900  p-8 rounded-lg flex flex-col items-center ${theme==='light'?"text-black bg-slate-200":"text-white"}`}>
      <h2 className="text-2xl font-bold mb-6">Roadmap</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-start space-x-4">
          <FaUser className="text-blue-400 text-3xl" />
          <div>
            <h3 className="text-xl font-semibold">Advanced Character Development</h3>
            <p>AI-powered tool for creating deep, complex characters.</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <FaUsers className="text-blue-400 text-3xl" />
          <div>
            <h3 className="text-xl font-semibold">Collaborative Writing</h3>
            <p>Co-create stories with other authors or AI assistants.</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <FaStore className="text-blue-400 text-3xl" />
          <div>
            <h3 className="text-xl font-semibold">E-book Platform Integration</h3>
            <p>Seamless publishing to popular e-book platforms.</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <FaPaintBrush className="text-blue-400 text-3xl" />
          <div>
            <h3 className="text-xl font-semibold">AI Cover Art Generation</h3>
            <p>Create stunning book covers with AI-generated art.</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Roadmap;

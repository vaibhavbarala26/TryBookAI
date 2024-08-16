import React, { useContext } from 'react';
import { themeContext } from '../Context/ThemeContext';

const Testimonials = () => {
  const {theme} = useContext(themeContext)
  return (
    <div className={`bg-gray-900 ${theme === 'light'? "text-black bg-slate-200":"text-white"} p-8 rounded-lg`}>
      <h2 className="text-2xl font-bold mb-6 text-center">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className={`bg-gray-800 p-6 rounded-lg text-center ${theme === 'light' ? "bg-slate-200":""}`}>
          <p className="text-lg italic mb-4">"BookAI revolutionized my writing process. I completed my debut novel in just two weeks!"</p>
          <p className="font-semibold">- Sarah J., Author</p>
        </div>
        
        <div className={`bg-gray-800 ${theme === 'light' ? "bg-slate-200":""} p-6 rounded-lg text-center`}>
          <p className="text-lg italic mb-4">"The AI-generated ideas helped me overcome writer's block. It's like having a co-author at your fingertips."</p>
          <p className="font-semibold">- Mark T., Aspiring Writer</p>
        </div>
        
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Stay Updated</h2>
        <p className="text-center mb-4">Subscribe to our newsletter for the latest AI writing tips and BookAI updates.</p>
        
        <form className="flex justify-center">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="p-2 w-full max-w-md rounded-l-lg text-gray-800"
          />
          <button 
            type="submit" 
            className="bg-blue-600 text-white p-2 rounded-r-lg">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Testimonials;

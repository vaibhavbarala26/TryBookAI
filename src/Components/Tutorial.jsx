import React, { useContext } from 'react';
import { themeContext } from '../Context/ThemeContext';

const Tutorial = () => {
    const {theme} = useContext(themeContext)
  return (
    <div className=" text-white p-8 flex flex-col items-center justify-center w-full sx:max-sm:px-0 ">
      <div className={` mx-auto ${theme === 'light' ? 'bg-white text-black':"text-white bg-[#1e293b]"} w-[62%] px-7 py-7 rounded-lg sx:max-sm:w-[100%]`}>
        <h2 className="text-3xl font-bold mb-8">Tutorial</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Step 1: Obtain an API Key</h3>
            <p>Generate an API key using the button in the Authentication section above.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Step 2: Make a Request</h3>
            <p>
              Use your preferred programming language or tool to make a POST request to the 
              <span className="text-blue-400"> /api/generate-book </span> endpoint. Include your API key in the header 
              and the required parameters in the request body.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Step 3: Handle the Response</h3>
            <p>The API will return a response with a job ID. You can use this ID to check the status of your book generation job.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Step 4: Retrieve the Generated Book</h3>
            <p>Once the job is complete, you can retrieve the generated book using the job ID (endpoint to be implemented).</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;

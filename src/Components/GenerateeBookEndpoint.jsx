import React, { useContext } from 'react';
import { themeContext } from '../Context/ThemeContext';

const GenerateBookEndpoint = () => {
  const {theme} = useContext(themeContext)
  return (
    <div className={`max-w-4xl mx-auto px-7 py-7 ${theme === 'light' ? 'bg-white text-black':"text-white bg-[#1e293b]"} mt-10 rounded-lg  ${theme === 'light' ? 'bg-white text-black':"text-white"}`}>
      <h2 className="text-2xl font-semibold mb-4">Endpoints</h2>
      <div className="flex items-center mb-6">
        <span className="bg-blue-500  px-3 py-1 rounded-md mr-4">POST</span>
        <span className="font-semibold text-lg">/api/generate-book</span>
      </div>
      <h3 className="text-xl font-semibold mb-4">Request Body</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-blue-600 ">
              <th className="py-3 px-4 border-b border-gray-200">Parameter</th>
              <th className="py-3 px-4 border-b border-gray-200">Type</th>
              <th className="py-3 px-4 border-b border-gray-200">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-4 border-b border-gray-200">api</td>
              <td className="py-3 px-4 border-b border-gray-200">string</td>
              <td className="py-3 px-4 border-b border-gray-200">
                The API provider to use. Options: "openai" or "together"
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-gray-200">model</td>
              <td className="py-3 px-4 border-b border-gray-200">string</td>
              <td className="py-3 px-4 border-b border-gray-200">
                The specific model to use (e.g., "gpt-3.5-turbo", "gpt-4", "llama-2-70b")
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-gray-200">topic</td>
              <td className="py-3 px-4 border-b border-gray-200">string</td>
              <td className="py-3 px-4 border-b border-gray-200">The main topic or theme of the book</td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-gray-200">language</td>
              <td className="py-3 px-4 border-b border-gray-200">string</td>
              <td className="py-3 px-4 border-b border-gray-200">
                The language in which the book should be generated
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GenerateBookEndpoint;
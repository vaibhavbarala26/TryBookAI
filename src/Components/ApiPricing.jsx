import React, { useContext } from 'react';
import { themeContext } from '../Context/ThemeContext';

const ApiPricing = () => {
    const {theme} = useContext(themeContext);
  return (
    <div className=" text-white p-8">
      <div className={`${theme === 'light' ? 'bg-white text-black':"text-white  bg-[#1e293b]"} max-w-4xl mx-auto px-7 py-7 rounded-lg`}>
        <h2 className="text-3xl font-bold mb-8">API Pricing</h2>
        <p className="mb-4">
          Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:
        </p>

        <div className="overflow-x-auto">
          <table className={`${theme === 'light' ? 'bg-white text-black':"text-white"} min-w-full table-auto  rounded-lg`}>
            <thead>
              <tr className="bg-blue-600 text-left">
                <th className="p-4 text-lg font-semibold">API</th>
                <th className="p-4 text-lg font-semibold">Model</th>
                <th className="p-4 text-lg font-semibold">Price per 1K Tokens</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700">
                <td className="p-4">OpenAI</td>
                <td className="p-4">GPT-3.5</td>
                <td className="p-4">$0.002</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="p-4">OpenAI</td>
                <td className="p-4">GPT-4</td>
                <td className="p-4">$0.03</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="p-4">Together AI</td>
                <td className="p-4">Llama-2-70b</td>
                <td className="p-4">$0.0008</td>
              </tr>
              <tr>
                <td className="p-4">Together AI</td>
                <td className="p-4">Llama-2-13b</td>
                <td className="p-4">$0.0006</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Token Estimation</h3>
          <p>
            On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Billing</h3>
          <p>
            You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApiPricing;

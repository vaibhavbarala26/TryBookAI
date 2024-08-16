import React, { useContext, useState } from 'react'
import Header from '../Components/Header'
import "./Payment.css"
import { themeContext } from '../Context/ThemeContext'
import { generateApiKey } from 'generate-api-key';
import Toogle from '../Components/Toogle';
import GenerateBookEndpoint from '../Components/GenerateeBookEndpoint';
import Tutorial from '../Components/Tutorial';
import ApiPricing from '../Components/ApiPricing';
const Payment = () => {
    const {theme} = useContext(themeContext)
    const [API , setApi] = useState("")
    const generate=()=>{
        const api = generateApiKey({method:"string" , length:26});
        console.log(api);
        setApi(api);
    }
    
  return (
    <>
    <div className={`${theme==='light' ? "bg-white" : ""} sx:max-sm:text-[10px]`} id='Over'>
    <div className='h-28 w-full bg-[#6366f1] flex flex-col items-center justify-center sx:max-sm:text-[10px]'>
        <h1 className='text-4xl text-white font-bold sx:max-sm:text-sm'>Book Generator API</h1>
    </div>
    <div className={`${theme==='light' ? "bg-white" : "bg-[#1e293b] "} flex flex-row w-[100%] justify-center  sx:max-sm:text-sm `}>
    <div className={`${theme==='light' ? "text-black" : "text-white"}  flex flex-row items-center justify-between w-[70%] px-10 sx:max-lg:flex sx:max-lg:flex-col sx:max-lg:py-2 gap-4 py-5 sticky  sx:max-sm:text-sm`}>
        <a href="#Over"><span className='cursor-pointer  sx:max-sm:text-sm'>OVERVIEW</span></a>
        <a href="#Authen"><span className='cursor-pointer  sx:max-sm:text-sm'>AUTHENTICATIAN</span></a>
        <a href="#Generate"><span className='cursor-pointer  sx:max-sm:text-sm'>ENDPOINTS</span></a>
        <a href="#ApiPricing"><span className='cursor-pointer  sx:max-sm:text-sm'>PRICING</span></a>
    </div>
    </div>
    <div className='flex flex-row w-full justify-end'>
        <div className='px-10 mt-6'>
        <Toogle></Toogle>
        </div>
    </div>
    <div className='flex flex-col items-center justify-center  sx:max-sm:text-sm'>
    <div className={`overview ${theme==='light' ? "bg-white" : "bg-[#1e293b] "} mt-10  px-4 py-4 rounded-lg w-[60%]  sx:max-sm:text-sm`}>
        <h1 className={`text-4xl py-4 ${theme==='light' ? "bg-white text-[#131834]" : "bg-[#1e293b] text-[#a5b4fc] "}  px-2 font-semibold  sx:max-sm:text-sm`}>Overview</h1>
        <p className={`${theme==='light' ? "text-black bg-white" : "text-white"} text-[20px] px-3  sx:max-sm:text-sm`}>
        The Book Generator API allows you to generate books on various topics using different language models. This documentation provides details on how to use the API, including authentication, available endpoints, and code examples.
        </p>
    </div>
    <div className={`overview bg-[#1e293b] mt-10 ${theme==='light' ? "bg-white text-[#131834]" : "bg-[#1e293b] text-[#a5b4fc] "}  px-4 py-4 rounded-lg w-[60%] flex gap-4 flex-col`} id='Authen'>
        <h1 className={`text-4xl py-4 ${theme==='light' ? "bg-white text-[#131834]" : "bg-[#1e293b] text-[#a5b4fc] "} px-2 font-semibold  sx:max-sm:text-sm`}>Authentication</h1>
        <p className={`${theme==='light' ? "text-black" : "text-white" }  sx:max-sm:text-sm`}>
        To use the API, you need to include your API key in the header of each request:
        </p>
        <div className='w-[100%]  border px-3 py-2  sx:max-sm:text-sm'>
            <span className={`${theme==='light' ? "text-black" : "text-white"} sx:max-sm:text-sm`}>X-API-KEY : YOUR_API_KEY</span>
        </div>
        <div className='flex flex-col justify-start gap-2 mt-2  sx:max-sm:text-sm'>
        <p className={`${theme==='light' ? "text-black" : "text-white"}  sx:max-sm:text-sm`}>
        To generate an API key, use the button below:
        </p>
        <div className='my-2'> 
        <button className='bg-blue-500 px-2 py-2 text-1xl text-white rounded-lg hover:-translate-y-2 hover:bg-blue-500  sx:max-sm:text-sm' onClick={(generate)}>Generate API Key</button>
        </div>
        <div className='border px-2 py-2  sx:max-sm:text-sm'>
        <span className={`${theme==='light' ? "text-black" : "text-white"}  sx:max-sm:text-sm`}>
           Your API KEY : {API.length>0 ? <><span>{API}</span></>:<></>}
        </span>
        </div>
        </div>
    </div>
    </div>
    <div id='Generate '>
       <GenerateBookEndpoint></GenerateBookEndpoint> 
    </div>
    <div id='Tutorial'>
        <Tutorial></Tutorial>
    </div>
    <div id='ApiPricing'>
        <ApiPricing></ApiPricing>
    </div>
    
    </div>
    </>
  )
}

export default Payment

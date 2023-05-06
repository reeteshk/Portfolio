import * as url from 'url'
import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/nodebackend.png'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.png'
import financeTracker from '../assets/portfolio/FinanceTracker.png'
import ecommerce from '../assets/portfolio/ecommerce.png'
import usestate from '../assets/portfolio/usestate.jpg'
import cloudinfra from "../assets/portfolio/cloudInfra.png"
import cloudbacked from "../assets/portfolio/awsbackend.png"
function Portfolio() {

    const handleDemoUrl = (url) => {
        window.open(url, '_blank')
    }

    
    const portfolio = [
    {
        id: 1,
        src: cloudinfra,
        url:"https://github.com/reeteshkesarwani/aws-infra",
        codeurl:"https://github.com/reeteshkesarwani/aws-infra"
    },
    {
        id: 2,
        src: cloudbacked,
        url:"https://github.com/reeteshkesarwani/webapp",
        codeurl:"https://github.com/reeteshkesarwani/webapp"
    },                                                                                              
    {
        id: 3,
        src: ecommerce,
        url:"https://gogroceryy.onrender.com/",
        codeurl:"https://github.com/reeteshkesarwani/FinalProject_WebDesign"
    },
    {
        id: 4,
        src: financeTracker,
        url:"https://drive.google.com/file/d/1mWrZeHgGdysOd2svTRlyilhWCyQBs56_/view",
        codeurl:"https://github.com/reeteshkesarwani/MoneyMasters"
    },
    {
        id: 5,
        src: installNode,
        url:"https://google.com",
        codeurl:"https://github.com/reeteshkesarwani/INFO6150-20821-Web-Design-User-Experien/tree/main/Assignment%208"
    },
    {
        id: 6,
        src: reactWeather,
        url:"https://reeteshkesarwani.github.io/weatherApp/",
        codeurl:"https://github.com/reeteshkesarwani/weatherApp"
    },
    ]

  return   (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-max-content mx-auto h-max-content text-white md:h-screen'>
    <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
    <div className='pb-8'>
      <p className='Text-4xl font-bold inline border-b-4 border-gray-5b00'>Portfolio</p>
      <p className='py-6'>Checkout some of my work right here</p>
    </div>



    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
    {
    portfolio.map(({id, src, url, codeurl}) => (
        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={src} alt="" className='rounded-md duration-200 hover:105'/>
            <div className='flex items-center justify-center'>
                <button onClick={() => handleDemoUrl(url)} className='w-1/2 px-6 py-3 mt-4 text-center text-white hover:scale-105 duration-200'>Demo</button>
                <button  onClick={() => handleDemoUrl(codeurl)} className='w-1/2 px-6 py-3 mt-4 text-center text-white hover:scale-105 duration-200'>Code</button>
            </div>
        </div>
    ))
    }
        
    </div>
    </div>
    </div>
  )
}

export default Portfolio

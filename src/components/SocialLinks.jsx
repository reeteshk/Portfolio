import React from 'react'
import { FaGithub,FaLinkedin} from 'react-icons/fa';   
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {SiLeetcode} from 'react-icons/si'


function SocialLinks() {

    const links=[
        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href:"https://www.linkedin.com/in/reeteshkesarwani/",
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                Github <FaGithub size={30} />
                </>
            ),
            href:"https://github.com/reeteshkesarwani",
        },
        {
            id: 3,
            child: (
                <>
                Mail <HiOutlineMail size={30} />
                </>
            ),
            href:"mailto:kesarwani.r@northeastern.edu",
        },
        {
            id: 4,
            child: (
                <>
                Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href:"https://drive.google.com/file/d/1DoFkiAhpQxWpaWt9iOJs-brPZx6ARWjR/view",
            style: 'rounded-tr-md',
            download:true,
        },
        {
            id: 5,
            child: (
                <>
                Leetcode <SiLeetcode size={30} />
                </>
            ),
            href:"https://leetcode.com/Reetesh88/",
            style: 'rounded-tr-md',
            download:true,
        },
    ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>

        {links.map(({id,child,href,style,download})=>(
            
            <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'+" "+style}>
             <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
           {child}</a></li>
        ))
        }



        
      </ul>
    </div>
  )
}

export default SocialLinks

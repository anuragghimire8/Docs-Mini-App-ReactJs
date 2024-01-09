import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu"; // Fix the import statement
import {IoClose} from "react-icons/io5"

const Card = ({data}) => {

    
  return (
    <div className='relative flex-shrink-0  w-60 h-72 rounded-[50px] text-white bg-black p-10 overflow-hidden'>
      <FaRegFileAlt />
      <p className='mt-5 text-sm leading-tight font-semibold'>{data.desc}</p>
      <div className='footer absolute bottom-0  w-full  left-0'>
        <div className='flex items-center justify-between py-3 px-8 mb-3'>
          <h5>{data.filesize}</h5>
          <span className='w-5 h-5 bg-sky-200  text-black rounded-full flex items-center justify-center'> 
          {
            data.close ?
                       <IoClose/>
            :
                <LuDownload style={{color:"black"}}  size=".8rem" /> 
            
          } 
           
           </span>
       
        </div>
        {
            data.tag.isOpen && (
                <div className={`tag w-full py-4  ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600" } flex items-center justify-center`}><h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3></div>
            ) 
        }
    
      </div>
    </div>
  );
}

export default Card;

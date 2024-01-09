import React, { useState } from 'react'
import Card from './Card'

const ForeGround = () => {
  
    
    const data=[
        {
            desc:"Anurag Ghimire, I am the React developer, currently looking for a React Js Internship right now",
        filesize:".9mb",
        close:false,
        tag:{isOpen:true,
        tagTitle:"Download Now" ,tagColor:"green"
    
    },
    
}
    ]
  return (
   
    <div className=' fixed top-0 lft-0 z-[3] w-full h-full bg-blue-500/10'>
    {
        data.map((item,index)=>{
            return(
                <Card data={item} />
            )
        })
    }
    </div>
 
  )
}

export default ForeGround

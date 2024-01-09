import React, { useState } from 'react'
import Card from './Card'
import { useRef } from 'react'
const ForeGround = () => {
  
    const ref=useRef(null)


    const data=[
        {
            desc:"Anurag Ghimire, I am the React developer, currently looking for a React Js Internship right now",
        filesize:".9mb",
        close:false,
        tag:{isOpen:true,
        tagTitle:"Download Now" ,tagColor:"green"},
    
    
    
},
{
    desc:"Anurag Ghimire, I am the React developer, currently looking for a React Js Internship right now",
filesize:".9mb",
close:true,
tag:{isOpen:true,
tagTitle:"Download Now" ,tagColor:"blue"

},



},
{
    desc:"Anurag Ghimire, I am the React developer, currently looking for a React Js Internship right now",
filesize:".9mb",
close:false,
tag:{isOpen:true,
tagTitle:"Upload Now" ,tagColor:"green"

},



}
    ]
  return (
   
    <div  ref={ref} className=' fixed top-0 lft-0 z-[3] w-full h-full bg-blue-500/10 flex gap-7 flex-wra p-5'>
    {
        data.map((item,index)=>{
            return(
                <Card data={item} refrence={ref} />
            )
        })
    }
    </div>
 
  )
}

export default ForeGround

import React, { useState } from 'react'
import bgImg from "../../assets/vector3.png"
import food1 from "../../assets/biryani2.png"
import food2 from "../../assets/biryani3.png"
import food3 from "../../assets/biryani5.png"

const imageList = [
    {
        id : 1,
        img : food1
    },
    {
        id : 2,
        img : food2
    },
    {
        id : 3,
        img : food3
    },
];

const bgImage = {
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height : "100%"
}
const Hero = () => {
    const [imageId, setImageId] = useState(food1)
  return (
    <>
       <div style={bgImage}
       className='"min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-900 dark:text-white duration-200 flex justify-center items-center'
       >
        <div className='container pb-8 sm:pb-0'>
           <div className='grid grid-cols-1 sm:grid-cols-2' >
               {/* text content section  */}
               <div data-aos="zoom-out" data-aos-duration="400" data-aos-once="true" className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
                <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                    Welcome to the Foodie Zone
                </h1>
                <p className='text-sm '>Welcome to Hunger zone, where culinary artistry meets exceptional hospitality. Explore our menu and reserve your unforgettable dining experience today!.</p>
                <div>
                    <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-2  rounded-full hover:scale-105 duration-200'>Order Now</button>
                </div>
               </div>
               {/* image section  */}
               <div className='order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative'>
                {/* main image section */}
                <div className='flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden'>
                    <img data-aos="zoom-in" data-aos-duration="300" data-aos-once="true" src={imageId} alt="" className='w-[300px] sm:w-[450px] mx-auto spin ' />
                </div>
                
                {/* image list section */}
                <div className='flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute  bottom-[0px] lg:-right-10 bg-white/30 rounded-full'>
                     {
                        imageList.map((item)=>(
                            <img
                            data-aos="zoom-in"
                            data-aos-duration="400"
                            data-aos-once="true"
                            key={item.id}
                            src={item.img}
                            className='max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200'
                             onClick={()=>setImageId(item.id === 1 ? food1: item.id===2 ? food2 : food3)}
                            />
                        ))
                     }
                </div>
               </div>
           </div>
        </div>
       </div>
    </>
  )
}

export default Hero
import React from 'react'
import Img from "../../assets/pancake2.png";
import Img2 from "../../assets/biryani2.png";
import Img3 from "../../assets/biryani4.png";


const ServicesData = [
    {
      id: 1,
      img: Img,
      name: "Pancakes",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    },
    {
      id: 2,
      img: Img2,
      name: "Chiken curry",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    },
    {
      id: 3,
      img: Img3,
      name: "Cold Cofee",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    },
  ];

const Services = () => {
  return (
    <>
       <div className='py-10'>
           <div className='container'>
            {/* header section  */}
                <div className='text-center mb-20 max-w-[400px] mx-auto'>
                    <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
                        Our Services
                    </p>
                    <h1 className='text-3xl font-bold'>
                        Services
                    </h1>
                    <p className='text-xs text-gray-400'>Our services cater to every palate, offering delectable cuisine, impeccable service, and a welcoming ambiance for your memorable dining moments.</p>
                </div>
                {/* card section  */}
                <div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-32 md:gap-5 place-items-center'>
                   {
                    ServicesData.map(({id,img,name,description})=>(
                        <div key={id} className='max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary hover:text-white duration-300 p-4 shadow-xl'>
                            <div className='h-[100px]'>
                                <img src={img} alt="" className='max-w-[200px]  mx-auto block object-contain transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-200' />

                            </div>
                            <div className='p-4 text-center'>
                                <h1 className='text-xl font-bold'>{name}</h1>
                                <p className='text-gray-600 dark:text-gray-200 text-sm line-clamp-2 group-hover:text-white duration-200'>{description}</p>
                            </div>
                            </div>
                    ))
                   }
                </div>
                </div>
           </div>
       </div>
    </>
  )
}

export default Services
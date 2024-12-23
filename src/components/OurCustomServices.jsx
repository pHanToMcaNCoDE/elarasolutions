import Image from 'next/image'
import React from 'react'

const OurCustomServices = ({services, serviceTitle}) => {
  return (
    <section className='bg-blue py-[150px] px-[24px] xl:px-[80px] min-h-screen flex flex-col justify-center items-center gap-[56px]'>
        <div className='w-[286px] md:w-[505px] flex flex-col justify-center items-center text-center gap-[13px]'>
            <p className='uppercase text-greenTwo leading-[24px] text-[.75rem] font-semibold font-instrument'>services</p>
            <h1 className='w-[241px] md:w-[436px] text-graySixteen leading-[40px] md:leading-[56px] text-[2rem] md:text-[2.5rem] font-semibold font-instrument'>{serviceTitle}</h1>
        </div>
        <div className='max-w-[1270px] mx-auto gap-[40px] md:gap-y-[56px] md:gap-x-[30px] grid grid-cols-1 md:grid-cols-2 justify-items-center place-items-center'>
            {
                services.map((service) => (
                    <div key={service.id} className='bg-blueSix border border-blueFive py-[40px] md:py-[36px] md:pb-[3px] px-[16px] md:px-[36px] rounded-[12.72px] md:rounded-[24px] w-[328.6px] md:w-full xl:w-[620px] h-[440px] md:h-[560px] gap-[24px] md:gap-[36px] flex flex-col justify-center items-start'>
                        <div className='gap-[8.48px] md:gap-[16px] flex flex-col justify-center items-start lg:w-[519px]'>
                            <h1 className='text-white font-semibold leading-[24px] md:leading-[38.4px] text-[1.25rem] md:text-[2rem] font-instrument'>{service.name}</h1>
                            <p className='font-instrument text-gray font-normal leading-[22.4px] md:leading-[24px] text-[.875rem] md:text-[0.938rem]'>{service.desc}</p>
                        </div>
                        <div className='relative'>
                            <div className='absolute w-full h-full bg-white rounded-[8.48px] md:rounded-[16px] z-[5px]'></div>
                            <Image className='object-cover w-[300px] md:w-[560px] h-[159px] md:h-[300px] rounded-[8.48px] md:rounded-[16px] relative z-10' src={service.img} alt={service.name}></Image>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default OurCustomServices
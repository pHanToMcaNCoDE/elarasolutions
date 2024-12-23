"use client"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

const CustomServicesCard = ({services}) => {
    const pathname = usePathname();

  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 justify-items-center place-items-center gap-y-[36px] lg:gap-y-[56px] gap-x-[16px]'>
        {
            
            (pathname === '/front-end' || pathname === '/data') && services.slice(1,).map((service, index) => (
                <div key={index} className='p-[24px] xl:p-[36px] rounded-[16px] lg:rounded-[24px] w-[340px] md:w-full h-full lg:h-[760px] bg-grayTen border border-blueFive flex flex-col justify-between items-start gap-[16px]'>
                    <div className='flex flex-col justify-center items-start gap-[16px]'>
                        <h1 className='w-[300px] lg:w-auto font-semibold leading-[31.2px] lg:leading-[46.8px] text-[1.5rem] lg:text-[2.25rem] text-blue'>{service.name}</h1>
                        <p className='w-full text-blueTwo font-normal text-[.813rem] lg:text-[1.125rem] leading-[18.2px] lg:leading-[28.8px]'>{service.desc}</p>
                        <ul className='list-disc px-3 flex flex-col justify-start items-start'>
                            {
                                service.list && Array.isArray(service.list) && service.list.map((desc, index) => (
                                    <li key={index} className='text-[.875rem] lg:text-[1rem] leading-[22.4px] lg:leading-[28.8px] text-blueTwo font-normal'>{desc}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='relative'>
                        <div className='absolute w-full h-full bg-blue rounded-[8px] lg:rounded-[16px]'></div>
                        <Image src={service.img} alt={service.name} className='rounded-[8px] lg:rounded-[16px] w-[300px] md:w-[560px] h-[200px] md:h-[298px] object-cover relative'></Image>
                    </div>
                </div>
            ))
        }
        {
            (pathname !== '/front-end' || pathname !== '/data') && services.map((service, index) => (
                <div key={index} className='p-[24px] xl:p-[36px] rounded-[16px] lg:rounded-[24px] w-[340px] md:w-full h-full lg:h-[228px] bg-grayTen flex flex-col justify-between items-start gap-[16px]'>
                    <div className='flex flex-col justify-center items-start gap-[16px]'>
                        <h1 className='w-[300px] lg:w-auto font-semibold leading-[28px] lg:leading-[31.2px] text-[1.25rem] lg:text-[1.5rem] text-blue'>{service.name}</h1>
                        <p className='w-full text-blueTwo font-normal text-[.813rem] lg:text-[1rem] leading-[18.2px] lg:leading-[24px]'>
                            {service.desc}
                        </p>
                        <ul className='list-disc px-3 flex flex-col justify-start items-start'>
                            {
                                service.list && Array.isArray(service.list) && service.list.map((desc, index) => (
                                    <li key={index} className='text-blueTwo font-normal'>{desc}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default CustomServicesCard
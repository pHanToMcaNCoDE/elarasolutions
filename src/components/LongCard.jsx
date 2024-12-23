import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

const LongCard = ({services}) => {

    const pathname = usePathname();
    
  return (
    <>
        {
            services.slice(0,1).map((service, index) => (
                <div key={index} className={(pathname === '/application-development-service' || pathname === '/cloud-computing') ? 'w-[340px] md:w-full xl:w-full h-full lg:h-[640px] rounded-[16px] xl:rounded-[40px] bg-blueSix border border-blueFive gap-10 flex flex-col md:flex-row justify-between items-center py-[24px] xl:py-[36px] px-[24px] xl:px-[50px]' : 'w-[340px] md:w-full xl:w-full h-full lg:h-[640px] rounded-[16px] xl:rounded-[40px] bg-grayTen border border-blueFive gap-10 flex flex-col md:flex-row justify-between items-center py-[24px] xl:py-[36px] px-[24px] xl:px-[50px]'}>
                    <div className='w-full md:w-[314px] xl:w-[514px] gap-[16px] flex flex-col justify-center items-start'>
                        <h1 className={pathname === '/cloud-computing' || pathname === '/application-development-service' ? 'text-white font-semibold leading-[31.2px] lg:leading-[41.6px] text-[1.5rem] lg:text-[2rem] font-instrument' : 'text-blue font-semibold leading-[31.2px] lg:leading-[41.6px] text-[1.5rem] lg:text-[2rem] font-instrument'}>{service.name}</h1>
                        <p className={pathname === '/cloud-computing' || pathname === '/application-development-service' ? 'text-gray font-normal text-[.875rem] lg:text-[1rem] leading-[19.6px] lg:leading-[28.8px]' : 'text-blueTwo font-normal text-[.875rem] lg:text-[1rem] leading-[19.6px] lg:leading-[28.8px]'}>{service.desc}</p>
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
                        <Image src={service.img} alt={service.name} className='relative w-[300px] md:w-[600px] h-[200px] md:h-full lg:h-[480px] rounded-[8px] lg:rounded-[16px] object-cover'></Image>
                    </div>
                </div>
            ))
        }
    </>
  )
}

export default LongCard
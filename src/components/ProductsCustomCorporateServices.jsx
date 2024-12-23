import Image from 'next/image'
import React from 'react'

const ProductsCustomServices = ({services}) => {
  return (
    <section className='py-[120px] lg:pt-[160px] lg:pb-[200px] px-[16px] lg:px-[64px] gap-[40px] lg:gap-[80px] flex flex-col justify-center items-center'>
        <h1 className='w-[272px] lg:w-[768px] gap-[12px] lg:gap-[16px] flex justify-center items-center leading-[38.4px] lg:leading-[67.2px] font-semibold text-[2rem] lg:text-[3.5rem] text-blue lg:text-blackThree text-center'>Core Banking Services We Offer</h1>
        <div className='max-w-[1312px] mx-auto gap-y-[48px] gap-x-[32px] grid grid-cols-1 md:grid-cols-2 justify-items-center place-items-center'>
            {
                services.map((service) => (
                    <div key={service.id} className='w-[328px] md:w-full xl:w-[640px] h-[320px] lg:h-[640px] rounded-lg lg:rounded-[16px] py-[40px] lg:py-[56px] px-[16px] lg:px-[32px] gap-[24px] flex flex-col justify-center items-start bg-grayTwentySeven border border-grayTwo'>
                        <div className='gap-[24px] lg:gap-[16px] flex flex-col justify-center items-start'>
                            <Image src={service.img} alt='Globe Icon' className='object-cover' width={66} height={66}></Image>
                            <h1 className='w-[300px] lg:w-full text-blackThree font-semibold leading-[31.2px] lg:leading-[38.4px] text-[1.5rem] lg:text-[2rem]'>{service.name}</h1>
                        </div>
                        
                        <p className='w-full text-blueTwo font-normal text-[.813rem] lg:text-[1rem] leading-[18.2px] lg:leading-[25.6px]'>
                            {service.desc}
                        </p>
                        <ul className='list-disc px-3 flex flex-col justify-start items-start'>
                            {
                                service.list && Array.isArray(service.list) && service.list.map((desc, index) => (
                                    <li key={index} className='text-[.875rem] lg:text-[1rem] leading-[22.4px] lg:leading-[28.8px] text-blueTwo font-normal'>{desc}</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default ProductsCustomServices
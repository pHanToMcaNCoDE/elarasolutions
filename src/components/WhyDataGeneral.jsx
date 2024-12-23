import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

const WhyGeneral = ({header, img, whyContent}) => {

    const pathname = usePathname();

  return (
    <section className='bg-white py-[80px] lg:py-[120px] px-[24px] lg:px-[100px] min-h-screen'>
        <div className='max-w-[1280px] mx-auto flex flex-col justify-center items-center gap-[40px] lg:gap-[80px] min-h-screen'>
            <h1 className='text-blue font-semibold lg:font-bold leading-[31.2px] lg:leading-[48px] text-[1.5rem] lg:text-[2.5rem] w-[328px] lg:w-[585px] gap-[12px] flex justify-center items-center text-center font-instrument'>{header}</h1>
            <div className='w-full flex flex-col md:flex-row justify-between items-start gap-[40px] lg:gap-[24px] min-h-screen'>
                <Image width={600} height={418} src={img.src} alt='Engineer' className='w-[330px] md:w-[50%] xl:w-[600px] min-h-[418px] lg:min-h-[760px] object-cover rounded-[24px] lg:rounded-[13.2px]'></Image>
                <div className='min-h-[418px] lg:min-h-[760px] w-[328px] md:w-[50%] xl:w-[640px] flex flex-col justify-between items-center gap-[10px]'>
                    {
                        whyContent.map((wc, index) => (
                            <div key={index} className='bg-gray w-full min-h-[240px] lg:min-h-[10px] rounded-[16px] py-[24px] xl:py-[35px] px-[16px] lg:px-[24px] flex flex-col justify-start items-start gap-[10px] lg:gap-[24px]'>
                                <h1 className='font-instrument text-blue font-semibold text-[1.25rem] xl:text-[1.75rem] leading-[26px] lg:leading-[34.16px]'>
                                    {
                                        pathname === `/application-development-service` ? (
                                            wc.heading
                                        ) : (
                                            `${wc.heading}`
                                        )
                                    }
                                </h1>
                                <p className='text-blueEight font-normal text-[.875rem] xl:text-[1rem] leading-[19.6px] lg:leading-[25.6px] font-instrument'>{wc.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyGeneral
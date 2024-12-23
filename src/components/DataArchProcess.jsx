import { usePathname } from 'next/navigation'
import React from 'react'

const OurDevProcess = ({devTitle, processes}) => {
    const pathname = usePathname()
  return (
    <section className='bg-blue w-full min-h-screen py-[120px] px-[76px] flex flex-col justify-center items-center gap-[120px] md:gap-[48px]'>
        <div className='flex flex-col justify-center items-center max-w-[1288px] mx-auto gap-[40px] md:gap-[64px]'>
            <div className='w-[328px] md:w-[681px] flex flex-col justify-center items-center text-center gap-[12px] font-instrument'>
                <h1 className='w-[213px] md:w-full lg:min-w-[687px] text-white font-bold leading-10 md:leading-[70px] text-[2rem] md:text-[3.5rem]'>{devTitle}</h1>
                {
                    pathname === '/it-consulting' && (<p className='w-full lg:w-[641px] font-normal text-base text-graySeventeen font-instrument'>At Elara Solutions, our IT consulting process is designed to optimise your business strategy through a four-step approach:</p>)
                }
            </div>
            <div className='max-w-[1240px] mx-auto gap-x-[16px] gap-y-[40px] grid grid-cols-1 md:grid-cols-2 justify-items-center place-items-center'>
                {
                    processes.map((process, index) => (

                        <div key={index} className='w-[328px] md:w-full xl:w-[608px] bg-graySix rounded-[16px] h-[360px] py-[40px] md:py-[56px] px-[16px] md:px-[36px] gap-[40px] md:gap-[42px] flex flex-col justify-center items-start border border-grayEight/[10%]'>
                            {
                                pathname === '/product-development' || pathname === '/it-consulting' ? (
                                    <h1 className='text-greenTwo font-bold font-instrument leading-[48px] md:leading-[72px] text-[2rem] md:text-[3rem]'>{process.no}</h1>
                                ) : (
                                    <h1 className='text-greenTwo font-bold font-instrument leading-[48px] md:leading-[72px] text-[2rem] md:text-[3rem]'>{process.id}</h1>
                                )
                            }
                            <div className='w-[296px] md:w-full xl:w-[536px] flex flex-col justify-center items-start gap-[30px]'>
                                <h1 className='text-blue font-instrument font-semibold text-[1.25rem] md:text-[1.5rem] leading-[30px] md:leading-[36px]'>{process.name}</h1>
                                <p className='text-blueTwo font-instrument font-normal text-[.875rem] md:text-[1rem] leading-[22.4px] md:leading-[25.6px]'>{process.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default OurDevProcess
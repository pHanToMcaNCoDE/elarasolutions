import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import icon from '../../public/assets/front-end/tech-icon.svg';

const SecurityTechnologiesHero = ({title, desc, heroImg, menuTitle, subTitle }) => {
  return (
    <section className='bg-grayTen w-full pt-[200px] pb-[100px] px-[40px]'>
        <div className='max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10'>
            <div className='w-full md:w-[50%] lg:min-w-[540px] flex flex-col justify-center items-start gap-[24px] lg:gap-[48px]'>
                <div className='flex flex-col justify-center items-start gap-[12px]'>
                    <div className='flex justify-center items-start gap-2 text-greenTwo font-normal text-[1rem] lg:text-[1.125rem] leading-[19.2px] lg:leading-[21.6px]'>
                        {/* <Image className='object-cover' src={icon} alt='Technology Icon' width={24} height={24}></Image> */}
                        <p>{menuTitle}</p> / <span className="text-blueTwo" >{subTitle}</span>
                    </div>
                    <h1 className='w-full text-blue font-bold leading-[35px] lg:leading-[50px] text-[1.75rem] lg:text-[2.5rem] font-instrument'>{title}</h1>
                </div>
                <p className='w-full xl:w-[540px] text-blueTwo font-normal text-[1rem] leading-[28.8px] font-instrument'>
                    {desc} 
                </p>
                <Link href={`/contact-us`} className='h-[48px] rounded-lg w-[177px] border border-greenTwo text-greenTwo font-normal text-[.875rem] leading-[16.8px] flex justify-center items-center gap-[56px]'>Get in Touch</Link>
            </div>
            <Image src={heroImg.src} alt='Technologies' width={640} height={560} className='hidden xl:flex object-cover rounded-[16px]'></Image>
            <Image src={heroImg.src} alt='Technologies' width={340} height={310.86} className='flex xl:hidden object-cover rounded-[16px]'></Image>
        </div>
    </section>
  )
}

export default SecurityTechnologiesHero
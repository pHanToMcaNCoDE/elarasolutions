import Image from 'next/image'
import React from 'react'

import cb from '../../public/assets/core-banking/cb.svg';
import obj from '../../public/obj.svg';

const ProductsCustomHero = ({title, desc, heroImg}) => {
  return (
    <section className='bg-blue relative flex flex-col lg:flex-row justify-between items-center pt-[95px] w-full min-h-screen lg:h-[980px] overflow-hidden'>
        <Image className='hidden lg:flex absolute w-full h-screen z-[3px] object-cover top-0 left-0' src={obj} alt='Object'></Image>
        <div className='w-full lg:w-[50%] min-h-[460px] lg:h-[88.5vh] 2xl:h-[92.5vh] flex flex-col justify-start px-[16px] lg:pl-[80px] py-[40px] lg:pt-[148px] items-start'>
            <div className='w-[328px] md:w-[532px] flex flex-col justify-center items-start gap-[26px]'>
                <h3 className='relative z-10 text-green text-base font-normal font-dmSans'>Products</h3>
                <h1 className='relative z-10 text-white font-medium leading-[38.88px] lg:leading-[60.48px] text-[2.25rem] lg:text-[3.5rem] font-instrument'>{title}</h1>
                <p className='lg:w-[500px] relative z-10 font-instrument text-grayTwentySix text-[.875rem] lg:text-[1.125rem] leading-[22.4px] lg:leading-[30px] font-normal'>
                    {desc}
                </p>
                <button className='relative z-10 gap-[10px] w-[179px] h-[44px] flex justify-center items-center py-[15px] rounded-lg text-blue leading-[14px] text-[.875rem] font-normal bg-gray'>Book a Demo</button>
            </div>
        </div>
        <Image className='w-full lg:w-[50%] h-[460px] lg:h-full object-cover z-10' src={heroImg} alt={title}></Image>
    </section>
  )
}

export default ProductsCustomHero
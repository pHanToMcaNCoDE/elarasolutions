import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import img from '../../public/assets/home/Contents.svg';

const ProductsPartner = () => {
  return (
    <section className='bg-greenTwo py-[96px] w-full xl:h-[688px] px-[46px]'>
        <div className='gap-[40px] lg:gap-[120px] flex flex-col lg:flex-row justify-between items-center max-w-[1280px] mx-auto'>
            <div className='w-[340px] md:w-full lg:w-[35%] xl:w-[600px] flex flex-col justify-center items-start gap-[24px] md:gap-[40px]'>
                <h1 className='w-full xl:w-[600px] text-white font-semibold leading-[48px] text-[2.5rem] font-instrument'>Partner with Elara Solutions for Core Banking Transformation</h1>
                <p className='text-gray font-normal text-[1.125rem] leading-[25.2px] w-full font-instrument'>
                    Transform your banking operations with Elara Solutions&apos; Core Banking Services. Our expert team will guide you through modernisation and digital innovation, ensuring enhanced efficiency, customer satisfaction, and compliance. Contact us today to discuss how we can help your financial institution thrive in a digital-first world.
                </p>
                <Link href={`/contact-us`} className='w-[274px] py-[16px] gap-[10px] flex justify-center items-center rounded-lg h-[56px] bg-white text-blue text-base font-normal'>Get in touch with us today!</Link>
            </div>

            <Image className='object-cover w-[308px] lg:w-auto xl:w-[560px] lg:h-[496px]' src={img} alt=''></Image>
        </div>
    </section>
  )
}

export default ProductsPartner
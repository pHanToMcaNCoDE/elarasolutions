import Image from 'next/image'
import React from 'react'
import logo from '../../../images/logo.svg';
import { GoArrowUpRight } from "react-icons/go";
import { IoCheckmarkOutline } from "react-icons/io5";
import white from '../../../../public/Elara-white.svg';
import sub from '../../../../public/assets/about-us/vector.svg';
import res from '../../../../public/assets/about-us/res-vec.svg';


const AboutUs = () => {
  return (
    <section className='w-full bg-white flex flex-col justify-center items-center gap-[200px] py-[120px] lg:py-0'>
        <div className='w-full bg-white flex flex-col justify-center items-center py-[120px] lg:py-0'>
            <div className='bg-gray xl:h-[720px] w-full mx-auto pt-[40px] pb-[40px] lg:pb-[90px] px-[16px] lg:px-[80px] flex flex-col md:flex-row justify-between items-center gap-[24px]'>
                <div className='w-full 2xl:max-w-[1396px] mx-auto flex flex-col md:flex-row justify-between items-center gap-[24px]'>
                    <Image className='w-[170.85px] lg:w-[307.54px] h-[20px] lg:h-[36px] object-cover' src={logo} alt='Elara Solutions'></Image>
                    <div className='w-[328px] md:w-[528px] lg:w-[601px] gap-[32px] flex flex-col justify-center items-start'>
                        <div className='w-[40px] h-[40px] bg-blue rounded-full flex justify-center items-center'>
                            <GoArrowUpRight className='text-white' size={25} />
                        </div>
                        <h1 className='text-blue font-medium leading-[40px] text-[1.5rem] lg:text-[2.25rem] font-instrument'>About us</h1>
                        <p className='w-full text-blue font-instrument font-normal text-[1rem] lg:text-[1.25rem] leading-[25.6px] lg:leading-[32px]'>
                            At Elara Technical Solutions, we specialize in crafting innovative IT solutions that empower businesses to thrive in a fast-evolving digital world.  Since our inception in 2016, we&apos;ve evolved from a passionate startup into a trusted name in IT infrastructure and digital transformation.
                        </p>
                        <div className='flex flex-col justify-center items-start gap-[16px] w-full'>
                            <div className='flex justify-center items-baseline gap-[4px] lg:gap-[12px]'>
                                <div className='w-[19px] h-[19px] bg-greenFive flex justify-center items-center border-[1.5px] rounded-[4px] border-greenTwo'>
                                    <IoCheckmarkOutline className='text-[1rem] text-greenTwo' />
                                </div>
                                <p className='text-blue font-normal text-[.875rem] lg:text-[1.125rem] leading-[22.4px] lg:leading-[28.8px]'>
                                    Since our inception in 2016, we&apos;ve evolved from a passionate startup into a trusted name in IT infrastructure and digital transformation.
                                </p>
                            </div>
                            <div className='flex justify-center items-baseline gap-[4px] lg:gap-[12px]'>
                                <div className='w-[19px] h-[19px] bg-greenFive flex justify-center items-center border-[1.5px] rounded-[4px] border-greenTwo'>
                                    <IoCheckmarkOutline className='text-[1rem] text-greenTwo' />
                                </div>
                                <p className='text-blue font-normal text-[.875rem] lg:text-[1.125rem] leading-[22.4px] lg:leading-[28.8px]'>
                                    From multinational corporations to SMEs, governments, and public institutions, we collaborate with a diverse clientele to ensure their IT systems align with their goals. At Elara Solutions, we don&apos;t just offer services; we build partnerships that redefine success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row w-full xl:h-[670px] 2xl:h-[640px]'>
                <div className='bg-blue w-full md:w-[50%] lg:w-[720px] 2xl:w-[50%] xl:h-[670px] 2xl:h-[640px] px-[16px] lg:px-[70px] py-[40px] lg:py-[72px]'>
                    <div className='w-full 2xl:h-[476px] gap-[32px] flex flex-col justify-center items-start'>
                        <div className='w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center'>
                            <GoArrowUpRight className='text-blue' size={25} />
                        </div>
                        <h1 className='text-white font-medium leading-[40px] text-[1.5rem] lg:text-[2.25rem] font-instrument'>What We Do</h1>
                        <p className='w-full text-white font-instrument font-normal text-[1rem] lg:text-[1.25rem] leading-[25.6px] lg:leading-[32px]'>
                            We provide tailored technological solutions that cater to the unique needs of businesses, governments, and institutions across industries. Our core expertise includes:
                        </p>
                        <div className='flex flex-col justify-center items-start gap-[24px] w-full'>
                            <div className='flex justify-start items-center gap-[12px]'>
                                <div className='w-[19px] h-[19px] bg-purple border-[1.5px] flex justify-center items-center rounded-[4px] border-white'>
                                    <IoCheckmarkOutline className='text-[1rem] text-white' />
                                </div>
                                <div className='flex flex-col justify-center items-start'>
                                    <h2 className='font-bold text-white leading-[22.4px] lg:leading-[25.6px] text-[.875rem] lg:text-[1rem]'>IT Infrastructure Services:</h2>
                                    <p className='text-white font-normal text-[.875rem] lg:text-[1rem] leading-[22.4px] lg:leading-[25.6px]'>
                                        Ensuring robust, scalable, and reliable systems.
                                    </p>
                                </div>
                            </div>
                            <div className='flex justify-start items-center gap-[12px]'>
                                <div className='w-[19px] h-[19px] bg-purple border-[1.5px] flex justify-center items-center rounded-[4px] border-white'>
                                    <IoCheckmarkOutline className='text-[1rem] text-white' />
                                </div>
                                <div className='flex flex-col justify-center items-start'>
                                    <h2 className='font-bold text-white leading-[22.4px] lg:leading-[25.6px] text-[.875rem] lg:text-[1rem]'>Innovative Practices:</h2>
                                    <p className='text-white font-normal text-[.875rem] lg:text-[1rem] leading-[22.4px] lg:leading-[25.6px]'>
                                        Leveraging emerging technologies to optimize business operations.
                                    </p>
                                </div>
                            </div>
                            <div className='flex justify-start items-center gap-[12px]'>
                                <div className='w-[19px] h-[19px] bg-purple border-[1.5px] flex justify-center items-center rounded-[4px] border-white'>
                                    <IoCheckmarkOutline className='text-[1rem] text-white' />
                                </div>
                                <div className='flex flex-col justify-center items-start'>
                                    <h2 className='font-bold text-white leading-[22.4px] lg:leading-[25.6px] text-[.875rem] lg:text-[1rem]'>Digital Transformation:</h2>
                                    <p className='text-white font-normal text-[.875rem] lg:text-[1rem] leading-[22.4px] lg:leading-[25.6px]'>
                                        Helping organizations embrace cutting-edge tools for sustainable growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-greenTwo w-full md:w-[50%] lg:w-[720px] 2xl:w-[50%] xl:h-[670px] 2xl:h-[640px] px-[16px] lg:px-[70px] py-[40px] lg:py-[72px]'>
                    <div className='w-full 2xl:h-[476px] gap-[32px] flex flex-col justify-center items-start'>
                        <div className='w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center'>
                            <GoArrowUpRight className='text-greenTwo' size={25} />
                        </div>
                        <h1 className='text-white font-medium leading-[40px] text-[1.5rem] lg:text-[2.25rem] font-instrument'>Why Choose Elara Solutions</h1>
                        <p className='w-full text-white font-instrument font-normal text-[1rem] lg:text-[1.25rem] leading-[25.6px] lg:leading-[32px]'>
                            Our watchword &quot;Building Digital Ecosystems – Empowering Global Growth and Innovation.&quot; This drives every solution we design, every service we deliver, and every partnership we build.
                        </p>
                        <div className='flex flex-col justify-center items-start gap-[24px] w-full'>
                            <div className='flex justify-start items-center gap-[12px]'>
                                <div className='w-[19px] h-[19px] bg-greenFive border-[1.5px] flex justify-center items-center rounded-[4px] border-white'>
                                    <IoCheckmarkOutline className='text-[1rem] text-white' />
                                </div>
                                <div className='flex flex-col justify-center items-start'>
                                    <h2 className='font-bold text-white leading-[22.4px] lg:leading-[25.6px] text-[.875rem] lg:text-[1rem]'>Innovation:</h2>
                                    <p className='text-white font-normal text-[.875rem] lg:text-[1rem] leading-[22.4px] lg:leading-[25.6px]'>
                                        We harness the latest advancements in technology to create forward-thinking solutions.
                                    </p>
                                </div>
                            </div>
                            <div className='flex justify-start items-center gap-[12px]'>
                                <div className='w-[19px] h-[19px] bg-greenFive border-[1.5px] flex justify-center items-center rounded-[4px] border-white'>
                                    <IoCheckmarkOutline className='text-[1rem] text-white' />
                                </div>
                                <div className='flex flex-col justify-center items-start'>
                                    <h2 className='font-bold text-white leading-[22.4px] lg:leading-[25.6px] text-[.875rem] lg:text-[1rem]'>Reliability:</h2>
                                    <p className='text-white font-normal text-[.875rem] lg:text-[1rem] leading-[22.4px] lg:leading-[25.6px]'>
                                        With a proven track record, we deliver on time, every time.
                                    </p>
                                </div>
                            </div>
                            <div className='flex justify-start items-center gap-[12px]'>
                                <div className='w-[19px] h-[19px] bg-greenFive border-[1.5px] flex justify-center items-center rounded-[4px] border-white'>
                                    <IoCheckmarkOutline className='text-[1rem] text-white' />
                                </div>
                                <div className='flex flex-col justify-center items-start'>
                                    <h2 className='font-bold text-white leading-[22.4px] lg:leading-[25.6px] text-[.875rem] lg:text-[1rem]'>Transformation:</h2>
                                    <p className='text-white font-normal text-[.875rem] lg:text-[1rem] leading-[22.4px] lg:leading-[25.6px]'>
                                        Our solutions drive growth, enhance profitability, and unlock new possibilities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full xl:max-w-[1280px] mx-auto gap-[40px] lg:gap-[67px] flex flex-col md:flex-row justify-start items-start md:items-center xl:rounded-[24px] h-[560px] md:h-[798px] bg-blue relative py-[100px] md:py-[188px] px-[16px] lg:px-[85.25px] overflow-hidden'>
            <div className='gap-[20.4px] lg:gap-[68px] flex flex-col justify-center items-start w-[328px] lg:w-[569.5px] relative z-10'>
                <Image className='w-[195px] h-[47px]' src={white} alt='Elara Logo'></Image>
                <p className='text-graySix w-full lg:w-[495px] font-normal leading-[21px] md:leading-[35.7px] text-[.875rem] md:text-[1.488rem] font-instrument'>
                    Harness the power of Elara&apos;s scalable IT infrastructure to future-proof your business and stay ahead of the curve <br className='hidden lg:flex'/>#digitalsolutions
                </p>
                <p className='font-instrument text-green font-normal leading-[19.6px] md:leading-[31.8px] text-[.875rem] md:text-[1.42rem]'>www.elara-solutions.com</p>
            </div>

            <Image src={sub} className='z-[2px] object-cover hidden md:flex w-[600px] xl:w-[720px] h-[720px] absolute top-[40px] right-[0%]' alt='Subtract'></Image>
            <Image src={res} className='z-[2px] object-cover flex md:hidden absolute top-[250px] sm:top-[200px] right-[0%]' alt='Subtract'></Image>
        </div>
    </section>
  )
}

export default AboutUs
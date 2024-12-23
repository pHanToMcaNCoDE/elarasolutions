import Image from 'next/image'
import React from 'react';
import team from '../../../../public/assets/about-us/team.svg';
import { GoArrowUpRight } from 'react-icons/go';
import Link from 'next/link';

const JoinOurTeam = () => {
  return (
    <section className='w-full xl:h-[800px] bg-blue flex flex-col justify-between items-center md:flex-row'>
        <div className='h-[360px] md:h-[800px] md:w-[50%] xl:w-[720px] 2xl:w-[50%] flex flex-col justify-center items-center'>
            <div className='w-[328px] md:w-[452px] flex flex-col justify-center items-center gap-[32px]'>
                <div className='md:w-[80%] lg:w-full 2xl:h-[476px] gap-[32px] flex flex-col justify-center items-start'>
                    <div className='w-[40px] h-[40px] bg-green rounded-full flex justify-center items-center'>
                        <GoArrowUpRight className='text-blue' size={25} />
                    </div>
                    <h1 className='text-white font-normal leading-[50px] text-[1.5rem] lg:text-[3rem] font-bevan'>Join Our Team</h1>
                    <p className='w-full text-white font-instrument font-normal text-[1rem] leading-[25.6px]'>
                        If solving these problems excites you, we&apos;re growing quickly and looking for kind, ambitious people to join our team.
                    </p>
                    <Link className='w-[242px] h-[46px] bg-white gap-[10px] py-[13px] flex justify-center items-center rounded-lg leading-[19.52px] text-[1rem] font-semibold text-blue' href={`/careers`}>Explore our Career page</Link>
                </div>
            </div>
        </div>
        <Image className='w-full md:w-[50%] xl:w-[720px] 2xl:w-[50%] h-[400px] md:h-[800px] object-cover' src={team} alt='Team'></Image>
    </section>
  )
}

export default JoinOurTeam
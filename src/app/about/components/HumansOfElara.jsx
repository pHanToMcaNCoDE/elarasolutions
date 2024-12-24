import Image from 'next/image'
import React from 'react'
import ceo from '../../../../public/assets/about-us/ceo.svg';
import partner from '../../../../public/assets/about-us/partner.svg';
import cos from '../../../../public/assets/about-us/cos.svg';
import assistant from '../../../../public/assets/about-us/ea.jpeg';

const HumansOfElara = () => {
  return (
    <section className='bg-white w-full min-h-screen pt-[160px] gap-[56px] flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center text-center gap-[24px] w-[324px] lg:w-full'>
            <h1 className='text-blue font-bevan font-normal leading-[31.68px] lg:leading-[73.92px] text-[1.5rem] lg:text-[3.5rem] w-[211px] lg:w-full'>Humans of Elara Solutions</h1>
            <p className='lg:w-[633px] text-blueTwo leading-[22.4px] lg:leading-[28.8px] font-normal text-[.875rem] lg:text-[1.125rem]'>We know great work begins with great people and we&apos;ve got the industry&apos;s best. Meet the Humans of Elara Solutions</p>
        </div>
        <div className='bg-blue lg:h-[1100px] w-full py-[80px] lg:py-[160px] px-[24px] lg:px-[80px] gap-[24px] lg:gap-[60px] flex flex-col md:flex-row justify-between items-center'>
            <div className='w-full 2xl:max-w-[1496px] mx-auto flex flex-col md:flex-row justify-between items-center'>
                <Image className='rounded-[24px] w-[328px] xl:w-[660px] h-[300px] xl:h-[780px] object-cover' src={ceo} alt='Benjamin Würzburger'></Image>
                <div className='w-[328px] lg:w-[560px] flex flex-col justify-center items-start gap-[32px]'>
                    <div className='w-[251px] flex flex-col justify-center items-start gap-[8px]'>
                        <h1 className='text-white font-medium leading-[32px] lg:leading-[38.4px] text-[1.25rem] lg:text-[1.5rem]'>Benjamin Würzburger</h1>
                        <p className='text-green font-semibold text-[1rem] lg:text-[1.125rem] leading-[25.6px] lg:leading-[28.8px]'>Chief Operting Officer</p>
                    </div>
                    <p className='text-graySixteen font-normal text-[.875rem] lg:text-[1.125rem] leading-[19.6px] lg:leading-[25.2px] w-full'>
                        Ben Würzburger is the Chief Operational Officer with extensive experience in managing operational strategies for digital services and financial technology platforms. He has over 10 years of experience across various industries, leading projects in mobile and core banking systems, digital transformation, and strategic partnerships. He has worked with numerous global companies such as Koenig & Bauer Digital, Elara Solutions, and Interswitch Group. He has held leadership positions that focused on advisory roles, managing cross-functional teams, and delivering complex projects across Europe, Asia, and Africa.
                    </p>
                </div>
            </div>
        </div>
        <div className='bg-white lg:h-[1100px] w-full 2xl:max-w-[1496px] mx-aut py-[80px] lg:py-[160px] px-[24px] lg:px-[80px] gap-[24px] lg:gap-[60px] flex flex-col md:flex-row justify-between items-center'>
            <div className='w-[328px] lg:w-[560px] flex flex-col justify-center items-start gap-[32px]'>
                <div className='w-[251px] flex flex-col justify-center items-start gap-[8px]'>
                    <h1 className='text-blue font-medium leading-[32px] lg:leading-[38.4px] text-[1.25rem] lg:text-[1.5rem]'>Marius Pracht</h1>
                    <p className='text-green font-semibold text-[1rem] lg:text-[1.125rem] leading-[25.6px] lg:leading-[28.8px]'>Managing Partner</p>
                </div>
                <p className='text-blueTwo font-normal text-[.875rem] lg:text-[1.125rem] leading-[19.6px] lg:leading-[25.2px] w-full'>
                    Marius is the Managing Partner at Elara Solutions, with extensive experience in digital product development and leadership. He has led several digital transformation projects in the financial services sector. Previously, as Head of Mobile Development at Interswitch Group, Marius led global teams to implement new technologies and build core mobile application frameworks. His technical expertise in React Native, combined with strong leadership, enables him to manage complex projects across Africa and the European market. Marius&apos; blend of global best practices, standards and local insights ensures Elara delivers innovative, tailored solutions that address clients&apos; challenges across areas such as financial inclusion, cybersecurity, and regulatory compliance, customer experience.
                </p>
            </div>
            <Image className='rounded-[24px] w-[328px] xl:w-[660px] h-[300px] xl:h-[780px] object-cover' src={partner} alt='Marius Pracht'></Image>
        </div>
        <div className='bg-blue lg:h-[1100px] w-full py-[80px] lg:py-[160px] px-[24px] lg:px-[80px] gap-[24px] lg:gap-[60px] flex flex-col md:flex-row justify-between items-center'>
            <div className='w-full 2xl:max-w-[1496px] mx-auto flex flex-col md:flex-row justify-between items-center'>
                <Image className='rounded-[24px] w-[328px] xl:w-[660px] h-[300px] xl:h-[780px] object-cover' src={cos} alt='Ismail Yahaya'></Image>
                <div className='w-[328px] lg:w-[560px] flex flex-col justify-center items-start gap-[32px]'>
                    <div className='w-[251px] flex flex-col justify-center items-start gap-[8px]'>
                        <h1 className='text-white font-medium leading-[32px] lg:leading-[38.4px] text-[1.25rem] lg:text-[1.5rem]'>Ismail Yahaya</h1>
                        <p className='text-green font-semibold text-[1rem] lg:text-[1.125rem] leading-[25.6px] lg:leading-[28.8px]'>Chief of Staff</p>
                    </div>
                    <p className='text-graySixteen font-normal text-[.875rem] lg:text-[1.125rem] leading-[19.6px] lg:leading-[25.2px] w-full'>
                        As the Chief of Staff at Elara Technical Solutions, Ismail Yahaya brings a wealth of experience in project management, financial oversight, and strategic operations, with a strong background in Islamic finance, asset management, and technology integration. His role encompasses the alignment of cross-functional teams, optimization of resources, and seamless execution of high-stakes projects within the fintech sector, where he excels in fostering collaboration between technical experts and business leaders.
                    </p>
                </div>
            </div>
        </div>
    
        <div className='bg-white lg:h-[1100px] w-full 2xl:max-w-[1496px] mx-auto py-[80px] lg:py-[160px] px-[24px] lg:px-[80px] gap-[24px] lg:gap-[60px] flex flex-col md:flex-row justify-between items-center'>
            <div className='w-[328px] lg:w-[560px] flex flex-col justify-center items-start gap-[32px]'>
                <div className='w-[256px] flex flex-col justify-center items-start gap-[8px]'>
                    <h1 className='text-blue font-medium leading-[32px] lg:leading-[38.4px] text-[1.25rem] lg:text-[1.5rem]'>Iguosa Joseph Iduozee</h1>
                    <p className='text-green font-semibold text-[1rem] lg:text-[1.125rem] leading-[25.6px] lg:leading-[28.8px]'>Executive Assistant</p>
                </div>
                <p className='text-blueTwo font-normal text-[.875rem] lg:text-[1.125rem] leading-[19.6px] lg:leading-[25.2px] w-full'>
                    As an Executive Assistant at Elara Technical Solutions, Joseph is highly organized and proactive with a keen ability to support C-suite executives in fast-paced, dynamic tech environments. Adept at managing complex schedules, coordinating high-level meetings, and acting as a reliable point of contact for internal and external stakeholders. Skilled in handling confidential information, streamlining administrative processes, and ensuring executives can focus on strategic priorities.
                </p>
            </div>
            <Image className='rounded-[24px] w-[328px] xl:w-[660px] h-[300px] xl:h-[780px] object-cover' src={assistant} alt='Iguosa Joseph Iduozee'></Image>
        </div>
    </section>
  )
}

export default HumansOfElara
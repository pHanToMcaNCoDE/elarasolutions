'use client'

import React, { useState } from 'react'
import OurServices from '../home/OurServices'
import { benefitsFE, benefitsMD, FaqMD, Faqs, processMD, servicesFrontend, servicesMobile, techFrontend, whyMobile } from '@/raw-data/data'
import LongCard from '@/components/LongCard'
import ServicesCard from '@/components/ServicesCard'
import WhyGeneral from '@/components/WhyGeneral'
import why from '../../../public/assets/mobile/why.svg';
import { whyFrontend } from '@/raw-data/data';
import TechnologiesHero from '@/components/TechnologiesHero';
import mb from '../../../public/assets/mobile/mb.svg';
import OurTechnologiesGeneral from '@/components/OurTechnologiesGeneral'
import KeyBenefitsGeneral from '@/components/KeyBenefitsGeneral'
import FAQGeneral from '@/components/FAQGeneral'
import PartnerWithElara from '@/components/PartnerWithElara'
import MoreTechnologies from '@/components/MoreTechnologies'
import OurColabProcess from '@/components/OurColabProcess'

const Page = () => {
    const [services, setServices] = useState(servicesMobile);
    const [header, setHeader] = useState((
      <>
      Why Choose<br className='lg:hidden'/> Elara Solutions <br className='lg:hidden'/>for Mobile Development?
      </>
    ));
    const [img, setImg] = useState(why);
    const [whyContent, setWhyContent] = useState(whyMobile);
    const [title, setTitle] = useState('Mobile Technologies');
    const [desc, setDesc] = useState('At Elara Solutions, we provide comprehensive mobile application development services that turn ideas into innovative and high-performing mobile apps. With expertise in both native and cross-platform development, we create solutions that deliver exceptional user experiences while ensuring high security, performance, and scalability. Our mobile development team utilises the latest tools and methodologies to create applications that support your business goals and resonate with users.'); 

    const [heroImg, setHeroImg] = useState(mb);
    const [tech, setTech] = useState(techFrontend);
    const [techTitle, setTechTitle] = useState('Our key mobile development Technologies');
    const [benefits, setBenefits] = useState(benefitsMD);
    const [faqs, setFaqs] = useState(FaqMD);
    const [faqTitle, setFaqTitle] = useState((
      <>
        FAQ for Mobile Application
      </>
    ))
    const [proc, setProc] = useState(processMD);

  return (
    <main>
        <TechnologiesHero title={title} desc={desc} heroImg={heroImg} />
        <WhyGeneral header={header} img={img} whyContent={whyContent}/>
        <section className='py-[80px] lg:py-[120px] px-[24px] lg:px-[100px] flex flex-col justify-center items-center gap-[96px] bg-white'>
          <div className='max-w-[1296px] mx-auto gap-[56px] flex flex-col justify-center items-center'>
            <h1 className='w-[314px] lg:w-[742px] font-bold leading-[35px] lg:leading-[70px] text-[1.75rem] lg:text-[3.5rem] font-instrument text-blue text-center'>Our Mobile Development Services</h1>
            <ServicesCard services={services} />
          </div>
        </section>
        <OurTechnologiesGeneral tech={tech} techTitle={techTitle} />
        <OurColabProcess proc={proc}/>
        <KeyBenefitsGeneral benefits={benefits} />
        <FAQGeneral faqs={faqs} faqTitle={faqTitle}/>
        <PartnerWithElara/>
        <MoreTechnologies/>
    </main>
  )
}

export default Page
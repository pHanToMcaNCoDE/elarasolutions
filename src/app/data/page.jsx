'use client'

import React, { useState } from 'react'
import { benefitsCD, FaqsCD, FaqsDA, processCD, servicesCloud, servicesData, whyData } from '@/raw-data/data'
import ServicesCard from '@/components/ServicesCard'
import WhyGeneral from '@/components/WhyGeneral'
import why from '../../../public/assets/data/why.svg';
import TechnologiesHero from '@/components/TechnologiesHero';
import da from '../../../public/assets/data/da.svg';
import OurTechnologiesGeneral from '@/components/OurTechnologiesGeneral'
import KeyBenefitsGeneral from '@/components/KeyBenefitsGeneral'
import FAQGeneral from '@/components/FAQGeneral'
import PartnerWithElara from '@/components/PartnerWithElara'
import MoreTechnologies from '@/components/MoreTechnologies'
import OurColabProcess from '@/components/OurColabProcess'
import LongCard from '@/components/LongCard'

const page = () => {
    const [services, setServices] = useState(servicesData);
    const [header, setHeader] = useState((
      <>
      Why Choose<br className='lg:hidden'/> Elara Solutions <br className='lg:hidden'/>for Data solutions?
      </>
    ));
    const [img, setImg] = useState(why);
    const [whyContent, setWhyContent] = useState(whyData);
    const [title, setTitle] = useState('Data');
    const [desc, setDesc] = useState("In today's data-driven world, leveraging advanced data technologies is crucial for businesses aiming to make informed decisions, enhance efficiency, and drive innovation. At Elara Solutions, we specialise in building robust data ecosystems that empower organisations with real-time insights, predictive capabilities, and seamless data integration."); 

    const [heroImg, setHeroImg] = useState(da);
    const [tech, setTech] = useState();
    const [techTitle, setTechTitle] = useState('Our Data Technologies');
    const [benefits, setBenefits] = useState(benefitsCD);
    const [faqs, setFaqs] = useState(FaqsDA);
    const [faqTitle, setFaqTitle] = useState((
      <>
        FAQ for Data Technologies
      </>
    ))

    const [proc, setProc] = useState(processCD);
  return (
    <main>
        <TechnologiesHero title={title} desc={desc} heroImg={heroImg} />
        <WhyGeneral header={header} img={img} whyContent={whyContent}/>
        <section className='py-[80px] lg:py-[120px] px-[24px] lg:px-[100px] flex flex-col justify-center items-center gap-[96px] bg-white'>
          <div className='max-w-[1296px] mx-auto gap-[56px] flex flex-col justify-center items-center'>
            <h1 className='w-[314px] lg:w-[742px] font-bold leading-[35px] lg:leading-[70px] text-[1.75rem] lg:text-[3.5rem] font-instrument text-blue text-center'>Our Data Services</h1>
            <LongCard services={services} />
            <ServicesCard services={services} />
          </div>
        </section>
        <OurTechnologiesGeneral techTitle={techTitle} />
        <FAQGeneral faqs={faqs} faqTitle={faqTitle}/>
        <PartnerWithElara/>
        <MoreTechnologies/>
    </main>
  )
}

export default page
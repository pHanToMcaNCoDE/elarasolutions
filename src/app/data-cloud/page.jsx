'use client'

import React, { useState } from 'react'
import {  benefitsDC, FaqDataCloud, processMD, servicesDataCloud, whyDataCloud } from '@/raw-data/data'
import WhyGeneral from '@/components/WhyDataGeneral'
import why from '../../../public/assets/data/sub-pages/why.svg';
import DataTechnologiesHero from '@/components/DataTechnologiesHero';
import mb from '../../../public/assets/data/sub-pages/dc.svg';
import KeyBenefitsGeneral from '@/components/KeyBenefitsGeneral'
import FAQGeneral from '@/components/FAQGeneral'
import PartnerWithElara from '@/components/PartnerWithElara'
import MoreTechnologies from '@/components/MoreTechnologies'
import TechnologiesProcess from '@/components/TechnologiesProcess'
import CustomServicesCard from '@/components/CustomServicesCard';

const page = () => {
    const [services, setServices] = useState(servicesDataCloud);
    const [header, setHeader] = useState((
      <>
      Why Choose<br className='lg:hidden'/> Elara Solutions for<br className='lg:hidden'/> Snowflake Data Cloud?
      </>
    ));
    const [img, setImg] = useState(why);
    const [whyContent, setWhyContent] = useState(whyDataCloud);
    const [title, setTitle] = useState('Snowflake Data Cloud at Elara Solutions');
    const [desc, setDesc] = useState('At Elara Solutions, we harness the power of Snowflake Data Cloud to provide scalable, secure, and flexible data storage and analytics solutions. Snowflake’s unique architecture enables businesses to manage diverse data types and integrate seamlessly with other cloud platforms. Whether you are looking to optimise data warehousing, real-time analytics, or business intelligence, Snowflake ensures high-performance capabilities to meet your evolving needs.'); 

    const [heroImg, setHeroImg] = useState(mb);
    const [techTitle, setTechTitle] = useState('Snowflake Data Cloud Process at Elara Solutions');
    const [menuTitle, setMenuTitle] = useState('Data Technologies');
    const [subTitle, setSubTitle] = useState('Snowflake Data Cloud');
    const [benefits, setBenefits] = useState(benefitsDC);
    const [faqs, setFaqs] = useState(FaqDataCloud);
    const [faqTitle, setFaqTitle] = useState((
      <>
        Frequently Asked Questions
      </>
    ))
    const [proc, setProc] = useState(processMD);

  return (
    <main>
        <DataTechnologiesHero title={title} desc={desc} heroImg={heroImg} menuTitle={menuTitle} subTitle={subTitle}/>
        <WhyGeneral header={header} img={img} whyContent={whyContent}/>
        <section className='py-[80px] lg:py-[120px] px-[24px] lg:px-[100px] flex flex-col justify-center items-center gap-[96px] bg-white'>
          <div className='max-w-[1296px] mx-auto gap-[56px] flex flex-col justify-center items-center'>
            <h1 className='w-[314px] lg:w-[742px] font-bold leading-[35px] lg:leading-[70px] text-[1.75rem] lg:text-[3.5rem] font-instrument text-blue text-center'>Our Snowflake Data <br/>Cloud Services</h1>
            <CustomServicesCard services={services} />
          </div>
        </section>
        <TechnologiesProcess proc={proc} techTitle={techTitle}/>
        <KeyBenefitsGeneral benefits={benefits} />
        <FAQGeneral faqs={faqs} faqTitle={faqTitle}/>
        <PartnerWithElara/>
        <MoreTechnologies/>
    </main>
  )
}

export default page
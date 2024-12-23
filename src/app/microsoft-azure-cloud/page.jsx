'use client'

import React, { useState } from 'react'
import {  benefitsMicrodoftData, whyAzureCloudData, FaqMicrosoftCloud, microsoftCloudProcess, servicesAzureCloud, whyAzureCloud } from '@/raw-data/data'
import WhyGeneral from '@/components/WhyDataGeneral'
import why from '../../../public/assets/data/sub-pages/why.svg';
import DataTechnologiesHero from '@/components/DataTechnologiesHero';
import midpc from '../../../public/assets/data/sub-pages/midp.svg';
import KeyBenefitsGeneral from '@/components/KeyBenefitsGeneral'
import FAQGeneral from '@/components/FAQGeneral'
import PartnerWithElara from '@/components/PartnerWithElara'
import MoreTechnologies from '@/components/MoreTechnologies'
import TechnologiesProcess from '@/components/TechnologiesProcess'
import CustomServicesCard from '@/components/CustomServicesCard';

const Page = () => {
    const [services, setServices] = useState(servicesAzureCloud);
    const [header, setHeader] = useState((
      <>
     Why Choose Elara Solutions for <br className='lg:hidden'/> Microsoft Azure Cloud?
      </>
    ));
    const [img, setImg] = useState(why);
    const [whyContent, setWhyContent] = useState(whyAzureCloudData);
    const [title, setTitle] = useState('Microsoft Azure Cloud Services at Elara Solutions');
    const [desc, setDesc] = useState('At Elara Solutions, we leverage Microsoft Azure Cloud to provide businesses with robust, scalable, and secure data storage and analytics solutions. Azure empowers organisations to handle large volumes of data, derive actionable insights, and accelerate digital transformation. With a range of services from data management to AI-driven analytics, Azure offers a unified cloud environment for businesses to drive innovation and operational efficiency.'); 

    const [heroImg, setHeroImg] = useState(midpc);
    const [techTitle, setTechTitle] = useState('Microsoft Intelligent Data Platform Cloud Process at Elara Solutions');
    const [menuTitle, setMenuTitle] = useState('Data Technologies');
    const [subTitle, setSubTitle] = useState('Microsoft Azure Cloud');
    const [benefits, setBenefits] = useState(benefitsMicrodoftData);
    const [faqs, setFaqs] = useState(FaqMicrosoftCloud);
    const [faqTitle, setFaqTitle] = useState((
      <>
       Frequently Asked Questions
      </>
    ))
    const [proc, setProc] = useState(microsoftCloudProcess  );

  return (
    <main>
        <DataTechnologiesHero title={title} desc={desc} heroImg={heroImg} menuTitle={menuTitle} subTitle={subTitle}/>
        <WhyGeneral header={header} img={img} whyContent={whyContent}/>
        <section className='py-[80px] lg:py-[120px] px-[24px] lg:px-[100px] flex flex-col justify-center items-center gap-[96px] bg-white'>
          <div className='max-w-[1296px] mx-auto gap-[56px] flex flex-col justify-center items-center'>
            <h1 className='w-[314px] lg:w-[742px] font-bold leading-[35px] lg:leading-[70px] text-[1.75rem] lg:text-[3.5rem] font-instrument text-blue text-center'>Our Microsoft Intelligent   <br/>Data Platform Cloud <br/>Services </h1>
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

export default Page
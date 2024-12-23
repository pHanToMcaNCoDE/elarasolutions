'use client'

import React, { useState } from 'react'
import {  benefitsMicrodoftData, FaqMicrosoftCloud, microsoftCloudProcess, servicesAzureCloud, whyAzureCloud } from '@/raw-data/data'
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

const page = () => {
    const [services, setServices] = useState(servicesAzureCloud);
    const [header, setHeader] = useState((
      <>
     Why Choose Elara Solutions for <br className='lg:hidden'/> Microsoft Intelligent Data <br className='lg:hidden'/>Platform Cloud?
      </>
    ));
    const [img, setImg] = useState(why);
    const [whyContent, setWhyContent] = useState(whyAzureCloud);
    const [title, setTitle] = useState('Microsoft Intelligent Data Platform Cloud Services at Elara Solutions');
    const [desc, setDesc] = useState('Elara Solutions leverages Microsoft Intelligent Data Platform Cloud to provide businesses with a comprehensive solution for data management, analytics, and AI integration. This powerful cloud platform consolidates data across various sources, optimises data governance, and enables advanced insights through integrated AI models. From data storage to predictive analytics, Microsoft’s platform enhances decision-making and operational efficiency across industries.'); 

    const [heroImg, setHeroImg] = useState(midpc);
    const [techTitle, setTechTitle] = useState('Microsoft Intelligent Data Platform Cloud Process at Elara Solutions');
    const [menuTitle, setMenuTitle] = useState('Data Technologies');
    const [subTitle, setSubTitle] = useState('Microsoft Intelligent Data ');
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

export default page
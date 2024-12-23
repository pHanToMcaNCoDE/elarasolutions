'use client'

import React, { useState } from 'react'
import {  benefitsAWSCloud, FaqAWSCloud, awsCloudProcess, servicesAWSCloud, whyAWSCloud } from '@/raw-data/data'
import WhyGeneral from '@/components/WhyDataGeneral'
import why from '../../../public/assets/data/sub-pages/why.svg';
import DataTechnologiesHero from '@/components/DataTechnologiesHero';
import midpc from '../../../public/assets/data/sub-pages/aws.svg';
import KeyBenefitsGeneral from '@/components/KeyBenefitsGeneral'
import FAQGeneral from '@/components/FAQGeneral'
import PartnerWithElara from '@/components/PartnerWithElara'
import MoreTechnologies from '@/components/MoreTechnologies'
import TechnologiesProcess from '@/components/TechnologiesProcess'
import CustomServicesCard from '@/components/CustomServicesCard';

const Page = () => {
    const [services, setServices] = useState(servicesAWSCloud);
    const [header, setHeader] = useState((<>Why Choose Elara Solutions for <br className='lg:hidden'/> AWS Cloud?</>));
    const [img, setImg] = useState(why);
    const [whyContent, setWhyContent] = useState(whyAWSCloud);
    const [title, setTitle] = useState('AWS Cloud Services at Elara Solutions');
    const [desc, setDesc] = useState('Elara Solutions helps businesses harness the full potential of AWS Cloud services to streamline data storage, processing, and analytics. AWS provides a robust cloud infrastructure that supports vast amounts of data, ensuring scalability, security, and high availability. From data lakes to advanced analytics, AWS enables real-time insights and helps organisations drive data-driven decision-making.'); 

    const [heroImg, setHeroImg] = useState(midpc);
    const [techTitle, setTechTitle] = useState('AWS Cloud Process at Elara Solutions');
    const [proc, setProc] = useState(awsCloudProcess);
    const [menuTitle, setMenuTitle] = useState('Data Technologies');
    const [subTitle, setSubTitle] = useState('AWS Cloud');
    const [benefits, setBenefits] = useState(benefitsAWSCloud);
    const [faqs, setFaqs] = useState(FaqAWSCloud);
    const [faqTitle, setFaqTitle] = useState((<>Frequently Asked Questions</>));

  return (
    <main>
        <DataTechnologiesHero title={title} desc={desc} heroImg={heroImg} menuTitle={menuTitle} subTitle={subTitle}/>
        <WhyGeneral header={header} img={img} whyContent={whyContent}/>
        <section className='py-[80px] lg:py-[120px] px-[24px] lg:px-[100px] flex flex-col justify-center items-center gap-[96px] bg-white'>
          <div className='max-w-[1296px] mx-auto gap-[56px] flex flex-col justify-center items-center'>
            <h1 className='w-[314px] lg:w-[742px] font-bold leading-[35px] lg:leading-[70px] text-[1.75rem] lg:text-[3.5rem] font-instrument text-blue text-center'>Our AWS Cloud  <br/>Services </h1>
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
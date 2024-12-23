'use client'

import React, { useState } from 'react'
import {  benefitsOracleData, FaqOracleData, oracleDataProcess, servicesODS, whyOracle } from '@/raw-data/data'
import WhyGeneral from '@/components/WhyDataGeneral'
import why from '../../../public/assets/data/sub-pages/why.svg';
import DataTechnologiesHero from '@/components/DataTechnologiesHero';
import midpc from '../../../public/assets/data/sub-pages/oracle.svg';
import KeyBenefitsGeneral from '@/components/KeyBenefitsGeneral'
import FAQGeneral from '@/components/FAQGeneral'
import PartnerWithElara from '@/components/PartnerWithElara'
import MoreTechnologies from '@/components/MoreTechnologies'
import TechnologiesProcess from '@/components/TechnologiesProcess'
import CustomServicesCard from '@/components/CustomServicesCard';

const Page = () => {
    const [services, setServices] = useState(servicesODS);
    const [header, setHeader] = useState((<>Why Choose Elara Solutions for <br className='lg:hidden'/> Oracle Data Solutions?</>));
    const [img, setImg] = useState(why);
    const [whyContent, setWhyContent] = useState(whyOracle);
    const [title, setTitle] = useState('Oracle Data Solutions at Elara Solutions');
    const [desc, setDesc] = useState('Elara Solutions provides comprehensive Oracle Data Solutions to help businesses manage, store, and analyse their data efficiently. Leveraging Oracle’s industry-leading database technologies, we offer end-to-end solutions that ensure high availability, scalability, and performance, enabling businesses to gain actionable insights and optimise operations.'); 

    const [heroImg, setHeroImg] = useState(midpc);
    const [techTitle, setTechTitle] = useState('Oracle Data Process at Elara Solutions');
    const [proc, setProc] = useState(oracleDataProcess);
    const [menuTitle, setMenuTitle] = useState('Data Technologies');
    const [subTitle, setSubTitle] = useState('Oracle');
    const [benefits, setBenefits] = useState(benefitsOracleData);
    const [faqs, setFaqs] = useState(FaqOracleData);
    const [faqTitle, setFaqTitle] = useState((<>Frequently Asked Questions</>));

  return (
    <main>
        <DataTechnologiesHero title={title} desc={desc} heroImg={heroImg} menuTitle={menuTitle} subTitle={subTitle}/>
        <WhyGeneral header={header} img={img} whyContent={whyContent}/>
        <section className='py-[80px] lg:py-[120px] px-[24px] lg:px-[100px] flex flex-col justify-center items-center gap-[96px] bg-white'>
          <div className='max-w-[1296px] mx-auto gap-[56px] flex flex-col justify-center items-center'>
            <h1 className='w-[314px] lg:w-[742px] font-bold leading-[35px] lg:leading-[70px] text-[1.75rem] lg:text-[3.5rem] font-instrument text-blue text-center'>Our Oracle Data  <br/>Services </h1>
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
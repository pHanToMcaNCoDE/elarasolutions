'use client'

import React, { useState } from 'react'
import { benefitsCD, FaqsDA, processCD, servicesSecurity, whySE } from '@/raw-data/data'
import ServicesCard from '@/components/ServicesCard'
import WhyGeneral from '@/components/WhyGeneral'
import why from '../../../public/assets/security/why.svg';
import TechnologiesHero from '@/components/TechnologiesHero';
import se from '../../../public/assets/security/se.svg';
import OurTechnologiesGeneral from '@/components/OurTechnologiesGeneral'
import FAQGeneral from '@/components/FAQGeneral'
import PartnerWithElara from '@/components/PartnerWithElara'
import MoreTechnologies from '@/components/MoreTechnologies'

const Page = () => {
    const [services, setServices] = useState(servicesSecurity);
    const [header, setHeader] = useState((
      <>
      Why Choose<br className='lg:hidden'/> Elara Solutions <br className='lg:hidden'/>for Security solutions?
      </>
    ));
    const [img, setImg] = useState(why);
    const [whyContent, setWhyContent] = useState(whySE);
    const [title, setTitle] = useState('Security');
    const [desc, setDesc] = useState("At Elara Solutions, security is at the core of every solution we deliver. In today’s digital landscape, safeguarding sensitive information is paramount. We help organisations implement robust security frameworks that prevent cyber threats, protect data integrity, and ensure compliance with regulatory standards."); 

    const [heroImg, setHeroImg] = useState(se);
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

    console.log('Security', services)
    
  return (
    <main>
        <TechnologiesHero title={title} desc={desc} heroImg={heroImg} />
        <WhyGeneral header={header} img={img} whyContent={whyContent}/>
        <section className='py-[80px] lg:py-[120px] px-[24px] lg:px-[100px] flex flex-col justify-center items-center gap-[96px] bg-white'>
          <div className='max-w-[1296px] mx-auto gap-[56px] flex flex-col justify-center items-center'>
            <h1 className='w-[314px] lg:w-[742px] font-bold leading-[35px] lg:leading-[70px] text-[1.75rem] lg:text-[3.5rem] font-instrument text-blue text-center'>Our Security Services</h1>
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

export default Page
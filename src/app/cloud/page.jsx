'use client'

import React, { useState } from 'react'
import { benefitsCD, FaqsCD, processCD, servicesCloud, whyCloud } from '@/raw-data/data'
import ServicesCard from '@/components/ServicesCard'
import WhyGeneral from '@/components/WhyGeneral'
import why from '../../../public/assets/cloud/why.svg';
import TechnologiesHero from '@/components/TechnologiesHero';
import cd from '../../../public/assets/cloud/cd.svg';
import OurTechnologiesGeneral from '@/components/OurTechnologiesGeneral'
import KeyBenefitsGeneral from '@/components/KeyBenefitsGeneral'
import FAQGeneral from '@/components/FAQGeneral'
import PartnerWithElara from '@/components/PartnerWithElara'
import MoreTechnologies from '@/components/MoreTechnologies'
import OurColabProcess from '@/components/OurColabProcess'

const page = () => {
    const [services, setServices] = useState(servicesCloud);
    const [header, setHeader] = useState((
      <>
      Why Choose<br className='lg:hidden'/> Elara Solutions <br className='lg:hidden'/>for Cloud Development?
      </>
    ));
    const [img, setImg] = useState(why);
    const [whyContent, setWhyContent] = useState(whyCloud);
    const [title, setTitle] = useState('Cloud Technologies');
    const [desc, setDesc] = useState('Elara Solutions offers advanced cloud development services to drive digital transformation and enable businesses to harness the full potential of cloud technology. Our cloud solutions are designed to provide scalability, efficiency, and cost-effectiveness, empowering organisations to innovate faster and adapt to changing demands. With extensive experience across various industries, we help businesses streamline their operations, enhance collaboration, and improve data security using the latest cloud technologies and methodologies.'); 

    const [heroImg, setHeroImg] = useState(cd);
    const [tech, setTech] = useState();
    const [techTitle, setTechTitle] = useState('Our key Cloud Technologies');
    const [benefits, setBenefits] = useState(benefitsCD);
    const [faqs, setFaqs] = useState(FaqsCD);
    const [faqTitle, setFaqTitle] = useState((
      <>
        FAQ for Cloud Development
      </>
    ))

    const [proc, setProc] = useState(processCD);
  return (
    <main>
        <TechnologiesHero title={title} desc={desc} heroImg={heroImg} />
        <WhyGeneral header={header} img={img} whyContent={whyContent}/>
        <section className='py-[80px] lg:py-[120px] px-[24px] lg:px-[100px] flex flex-col justify-center items-center gap-[96px] bg-white'>
          <div className='max-w-[1296px] mx-auto gap-[56px] flex flex-col justify-center items-center'>
            <h1 className='w-[314px] lg:w-[742px] font-bold leading-[35px] lg:leading-[70px] text-[1.75rem] lg:text-[3.5rem] font-instrument text-blue text-center'>Our Cloud Development Services</h1>
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

export default page
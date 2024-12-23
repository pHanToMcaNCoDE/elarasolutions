'use client'

import React, { useState } from 'react'
import { servicesAWSCloud, whyAS, asProcess, benefitsAS, faqAS } from '@/raw-data/data'
import WhyGeneral from '@/components/WhyDataGeneral'
import why from '../../../public/assets/data/sub-pages/why.svg';
import as from '../../../public/assets/app-security/as.svg';
import KeyBenefitsGeneral from '@/components/KeyBenefitsGeneral'
import FAQGeneral from '@/components/FAQGeneral'
import PartnerWithElara from '@/components/PartnerWithElara'
import MoreTechnologies from '@/components/MoreTechnologies'
import TechnologiesProcess from '@/components/TechnologiesProcess'
import SecurityTechnologiesHero from '@/components/SecurityTechnologiesHero'
import CustomServicesCard from '@/components/CustomServicesCard'

const Page = () => {
    const [services, setServices] = useState(servicesAWSCloud);
    const [header, setHeader] = useState((<>Why Choose Elara Solutions for <br className='lg:hidden'/> Application Security?</>));
    const [img, setImg] = useState(why);
    const [whyContent, setWhyContent] = useState(whyAS);
    const [title, setTitle] = useState('Application Security Services at Elara Solutions');
    const [desc, setDesc] = useState('At Elara Solutions, we offer comprehensive Application Security solutions designed to protect your applications from vulnerabilities, cyber threats, and data breaches. We understand that modern applications are complex and require multi-layered security strategies to ensure that data, infrastructure, and user privacy are safeguarded. Our experts leverage industry-leading tools and methodologies to provide continuous protection throughout the development lifecycle and beyond.'); 

    const [heroImg, setHeroImg] = useState(as);
    const [techTitle, setTechTitle] = useState('Application Security Process at Elara Solutions');
    const [proc, setProc] = useState(asProcess);
    const [menuTitle, setMenuTitle] = useState('Security Technologies');
    const [subTitle, setSubTitle] = useState('Application Security');
    const [benefits, setBenefits] = useState(benefitsAS);
    const [faqs, setFaqs] = useState(faqAS);
    const [faqTitle, setFaqTitle] = useState((<>FAQ for Application Security</>));

  return (
    <main>
        <SecurityTechnologiesHero title={title} desc={desc} heroImg={heroImg} menuTitle={menuTitle} subTitle={subTitle}/>
        <WhyGeneral header={header} img={img} whyContent={whyContent}/>
        <section className='py-[80px] lg:pt-[120px] lg:pb-[240px] px-[24px] lg:px-[100px] flex flex-col justify-center items-center gap-[96px] bg-white'>
          <div className='max-w-[1296px] mx-auto gap-[56px] flex flex-col justify-center items-center'>
            <h1 className='w-[314px] lg:w-[742px] font-bold leading-[35px] lg:leading-[70px] text-[1.75rem] lg:text-[3.5rem] font-instrument text-blue text-center'>Our Application Security Services</h1>
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
'use client'

import React, { useState } from 'react'
import { whyNS, servicesNS, nsProcess, faqNS, benefitsNS } from '@/raw-data/data'
import WhyGeneral from '@/components/WhyDataGeneral'
import why from '../../../public/assets/data/sub-pages/why.svg';
import ns from '../../../public/assets/network-security/ns.svg';
import KeyBenefitsGeneral from '@/components/KeyBenefitsGeneral'
import FAQGeneral from '@/components/FAQGeneral'
import PartnerWithElara from '@/components/PartnerWithElara'
import MoreTechnologies from '@/components/MoreTechnologies'
import TechnologiesProcess from '@/components/TechnologiesProcess'
import SecurityTechnologiesHero from '@/components/SecurityTechnologiesHero'
import CustomServicesCard from '@/components/CustomServicesCard'

const Page = () => {
    const [services, setServices] = useState(servicesNS);
    const [header, setHeader] = useState((<>Why Choose Elara Solutions <br className='lg:hidden'/>for Network Security?</>));
    const [img, setImg] = useState(why);
    const [whyContent, setWhyContent] = useState(whyNS);
    const [title, setTitle] = useState('Network Security Services at Elara Solutions');
    const [desc, setDesc] = useState("At Elara Solutions, we understand the importance of protecting your network from emerging threats. Our Network Security services focus on safeguarding your organisation's digital assets, ensuring confidentiality, integrity, and availability. With a combination of advanced technologies, expert strategies, and proactive monitoring, we help prevent breaches, mitigate risks, and maintain compliance with industry standards."); 

    const [heroImg, setHeroImg] = useState(ns);
    const [techTitle, setTechTitle] = useState('Network Security Process at Elara Solutions');
    const [proc, setProc] = useState(nsProcess);
    const [menuTitle, setMenuTitle] = useState('Security Technologies');
    const [subTitle, setSubTitle] = useState('Network Security');
    const [benefits, setBenefits] = useState(benefitsNS);
    const [faqs, setFaqs] = useState(faqNS);
    const [faqTitle, setFaqTitle] = useState((<>FAQ for Network Security</>));

  return (
    <main>
        <SecurityTechnologiesHero title={title} desc={desc} heroImg={heroImg} menuTitle={menuTitle} subTitle={subTitle}/>
        <WhyGeneral header={header} img={img} whyContent={whyContent}/>
        <section className='py-[80px] lg:pt-[120px] lg:pb-[240px] px-[24px] lg:px-[100px] flex flex-col justify-center items-center gap-[96px] bg-white'>
          <div className='max-w-[1296px] mx-auto gap-[56px] flex flex-col justify-center items-center'>
            <h1 className='w-[314px] lg:w-[742px] font-bold leading-[35px] lg:leading-[70px] text-[1.75rem] lg:text-[3.5rem] font-instrument text-blue text-center'>Our Network Security Services</h1>
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
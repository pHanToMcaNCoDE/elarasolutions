'use client'

import React, { useState } from 'react'
import { servicesEPS, whyEPS, benefitsEPS, faqEPS, epsProcess } from '@/raw-data/data'
import WhyGeneral from '@/components/WhyDataGeneral'
import why from '../../../public/assets/data/sub-pages/why.svg';
import eps from '../../../public/assets/endpoint-security/eps.svg';
import KeyBenefitsGeneral from '@/components/KeyBenefitsGeneral'
import FAQGeneral from '@/components/FAQGeneral'
import PartnerWithElara from '@/components/PartnerWithElara'
import MoreTechnologies from '@/components/MoreTechnologies'
import TechnologiesProcess from '@/components/TechnologiesProcess'
import SecurityTechnologiesHero from '@/components/SecurityTechnologiesHero'
import CustomServicesCard from '@/components/CustomServicesCard'

const Page = () => {
    const [services, setServices] = useState(servicesEPS);
    const [header, setHeader] = useState((<>Why Choose Elara Solutions for <br className='hidden lg:flex'/> Endpoint Security?</>));
    const [img, setImg] = useState(why);
    const [whyContent, setWhyContent] = useState(whyEPS);
    const [title, setTitle] = useState("Endpoint Security Services at Elara Solutions"); 
    const [desc, setDesc] = useState("At Elara Solutions, we offer advanced Endpoint Security services to protect your organisation's network from potential threats at the device level. With the rise of remote work and the increasing use of mobile devices, safeguarding endpoints has become a critical part of any cybersecurity strategy. Our solutions provide real-time protection against malware, ransomware, and other cyber threats that can compromise your organisation's data integrity.")

    const [heroImg, setHeroImg] = useState(eps);
    const [techTitle, setTechTitle] = useState('Endpoint Security Process at Elara Solutions');
    const [proc, setProc] = useState(epsProcess);
    const [menuTitle, setMenuTitle] = useState('Security Technologies');
    const [subTitle, setSubTitle] = useState('Endpoint Security');
    const [benefits, setBenefits] = useState(benefitsEPS);
    const [faqs, setFaqs] = useState(faqEPS);
    const [faqTitle, setFaqTitle] = useState((<>Frequently Asked Questions</>));

  return (
    <main>
        <SecurityTechnologiesHero title={title} desc={desc} heroImg={heroImg} menuTitle={menuTitle} subTitle={subTitle}/>
        <WhyGeneral header={header} img={img} whyContent={whyContent}/>
        <section className='py-[80px] lg:pt-[120px] lg:pb-[240px] px-[24px] lg:px-[100px] flex flex-col justify-center items-center gap-[96px] bg-white'>
          <div className='max-w-[1296px] mx-auto gap-[56px] flex flex-col justify-center items-center'>
            <h1 className='w-[314px] lg:w-[842px] font-bold leading-[35px] lg:leading-[70px] text-[1.75rem] lg:text-[3.5rem] font-instrument text-blue text-center'>Our Endpoint Security Services</h1>
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
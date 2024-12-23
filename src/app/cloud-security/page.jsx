'use client'

import React, { useState } from 'react'
import { whyCS, servicesCS, csProcess, benefitsCS, faqCS } from '@/raw-data/data'
import WhyGeneral from '@/components/WhyDataGeneral'
import why from '../../../public/assets/data/sub-pages/why.svg';
import cs from '../../../public/assets/cloud-security/cs.svg';
import KeyBenefitsGeneral from '@/components/KeyBenefitsGeneral'
import FAQGeneral from '@/components/FAQGeneral'
import PartnerWithElara from '@/components/PartnerWithElara'
import MoreTechnologies from '@/components/MoreTechnologies'
import TechnologiesProcess from '@/components/TechnologiesProcess'
import SecurityTechnologiesHero from '@/components/SecurityTechnologiesHero'
import CustomServicesCard from '@/components/CustomServicesCard'

const Page = () => {
    const [services, setServices] = useState(servicesCS);
    const [header, setHeader] = useState((<>Why Choose Elara Solutions <br className='lg:hidden'/>for Cloud Security?</>));
    const [img, setImg] = useState(why);
    const [whyContent, setWhyContent] = useState(whyCS);
    const [title, setTitle] = useState('Cloud Security Services at Elara Solutions');
    const [desc, setDesc] = useState("At Elara Solutions, we specialise in Cloud Security to ensure that your organisation's cloud infrastructure is safe, compliant, and resilient against potential threats. With the shift to cloud computing, security concerns have risen. Our cloud security services include proactive threat detection, encryption, access control, and compliance management to keep your data and applications protected, whether they’re hosted on public, private, or hybrid clouds."); 

    const [heroImg, setHeroImg] = useState(cs);
    const [techTitle, setTechTitle] = useState('Cloud Security Process at Elara Solutions');
    const [proc, setProc] = useState(csProcess);
    const [menuTitle, setMenuTitle] = useState('Security Technologies');
    const [subTitle, setSubTitle] = useState('Cloud Security');
    const [benefits, setBenefits] = useState(benefitsCS);
    const [faqs, setFaqs] = useState(faqCS);
    const [faqTitle, setFaqTitle] = useState((<>Frequently Asked Questions</>));

  return (
    <main>
        <SecurityTechnologiesHero title={title} desc={desc} heroImg={heroImg} menuTitle={menuTitle} subTitle={subTitle}/>
        <WhyGeneral header={header} img={img} whyContent={whyContent}/>
        <section className='py-[80px] lg:pt-[120px] lg:pb-[240px] px-[24px] lg:px-[100px] flex flex-col justify-center items-center gap-[96px] bg-white'>
          <div className='max-w-[1296px] mx-auto gap-[56px] flex flex-col justify-center items-center'>
            <h1 className='w-[314px] lg:w-[742px] font-bold leading-[35px] lg:leading-[70px] text-[1.75rem] lg:text-[3.5rem] font-instrument text-blue text-center'>Our Cloud Security Services</h1>
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
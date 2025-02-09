'use client'

import React, { useState } from 'react'
import { faqCRM, benefitsCRM, crmProcess, whyCRM, servicesCRM } from '@/raw-data/data'
import WhyGeneral from '@/components/WhyDataGeneral'
import why from '../../../public/assets/data/sub-pages/why.svg';
import crm from '../../../public/assets/crm/crm.svg';
import KeyBenefitsGeneral from '@/components/KeyBenefitsGeneral'
import FAQGeneral from '@/components/FAQGeneral'
import PartnerWithElara from '@/components/PartnerWithElara'
import MoreTechnologies from '@/components/MoreTechnologies'
import TechnologiesProcess from '@/components/TechnologiesProcess'
import SecurityTechnologiesHero from '@/components/SecurityTechnologiesHero'
import CustomServicesCard from '@/components/CustomServicesCard'

const Page = () => {
    const [services, setServices] = useState(servicesCRM);
    const [header, setHeader] = useState((<>Why Choose Elara Solutions for <br className='hidden lg:flex'/> Compliance & Risk Management?</>));
    const [img, setImg] = useState(why);
    const [whyContent, setWhyContent] = useState(whyCRM);
    const [title, setTitle] = useState((
      <>
        Compliance & Risk<br className='hidden lg:flex'/> Management Services at<br className='hidden lg:flex'/> Elara Solutions
      </>));
    const [desc, setDesc] = useState("At Elara Solutions, we provide comprehensive Compliance & Risk Management services to help businesses navigate complex regulatory landscapes, minimise risks, and ensure they meet industry standards. Our approach combines cutting-edge technology with expert knowledge to safeguard your operations, protect your reputation, and enhance overall business resilience."); 

    const [heroImg, setHeroImg] = useState(crm);
    const [techTitle, setTechTitle] = useState('Compliance & Risk Management Process at Elara Solutions');
    const [proc, setProc] = useState(crmProcess);
    const [menuTitle, setMenuTitle] = useState('Security Technologies');
    const [subTitle, setSubTitle] = useState('Compliance & Risk Management');
    const [benefits, setBenefits] = useState(benefitsCRM);
    const [faqs, setFaqs] = useState(faqCRM);
    const [faqTitle, setFaqTitle] = useState((<>Frequently Asked Questions</>));

  return (
    <main>
        <SecurityTechnologiesHero title={title} desc={desc} heroImg={heroImg} menuTitle={menuTitle} subTitle={subTitle}/>
        <WhyGeneral header={header} img={img} whyContent={whyContent}/>
        <section className='py-[80px] lg:pt-[120px] lg:pb-[240px] px-[24px] lg:px-[100px] flex flex-col justify-center items-center gap-[96px] bg-white'>
          <div className='max-w-[1296px] mx-auto gap-[56px] flex flex-col justify-center items-center'>
            <h1 className='w-[314px] lg:w-[842px] font-bold leading-[35px] lg:leading-[70px] text-[1.75rem] lg:text-[3.5rem] font-instrument text-blue text-center'>Our Compliance & Risk Management Services</h1>
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
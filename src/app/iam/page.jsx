'use client'

import React, { useState } from 'react'
import { servicesCS, whyIAM, iamProcess, benefitsIAM, faqIAM } from '@/raw-data/data'
import WhyGeneral from '@/components/WhyDataGeneral'
import why from '../../../public/assets/data/sub-pages/why.svg';
import iam from '../../../public/assets/iam/iam.svg';
import KeyBenefitsGeneral from '@/components/KeyBenefitsGeneral'
import FAQGeneral from '@/components/FAQGeneral'
import PartnerWithElara from '@/components/PartnerWithElara'
import MoreTechnologies from '@/components/MoreTechnologies'
import TechnologiesProcess from '@/components/TechnologiesProcess'
import SecurityTechnologiesHero from '@/components/SecurityTechnologiesHero'
import CustomServicesCard from '@/components/CustomServicesCard'

const Page = () => {
    const [services, setServices] = useState(servicesCS);
    const [header, setHeader] = useState((<>Why Choose Elara Solutions for IAM?</>));
    const [img, setImg] = useState(why);
    const [whyContent, setWhyContent] = useState(whyIAM);
    const [title, setTitle] = useState('Identity & Access Management (IAM) Services at Elara Solutions');
    const [desc, setDesc] = useState("We offer comprehensive IAM solutions to help organisations secure their critical systems and data. By managing who has access to what within your enterprise, IAM ensures that only authorised users can access sensitive resources while providing granular control over permissions and activities. Our IAM services are designed to reduce security risks, enhance compliance, and improve operational efficiency by centralising access management across your infrastructure."); 

    const [heroImg, setHeroImg] = useState(iam);
    const [techTitle, setTechTitle] = useState('IAM Process at Elara Solutions');
    const [proc, setProc] = useState(iamProcess);
    const [menuTitle, setMenuTitle] = useState('Security Technologies');
    const [subTitle, setSubTitle] = useState('IAM');
    const [benefits, setBenefits] = useState(benefitsIAM);
    const [faqs, setFaqs] = useState(faqIAM);
    const [faqTitle, setFaqTitle] = useState((<>Frequently Asked Questions</>));

  return (
    <main>
        <SecurityTechnologiesHero title={title} desc={desc} heroImg={heroImg} menuTitle={menuTitle} subTitle={subTitle}/>
        <WhyGeneral header={header} img={img} whyContent={whyContent}/>
        <section className='py-[80px] lg:pt-[120px] lg:pb-[240px] px-[24px] lg:px-[100px] flex flex-col justify-center items-center gap-[96px] bg-white'>
          <div className='max-w-[1296px] mx-auto gap-[56px] flex flex-col justify-center items-center'>
            <h1 className='w-[314px] lg:w-[742px] font-bold leading-[35px] lg:leading-[70px] text-[1.75rem] lg:text-[3.5rem] font-instrument text-blue text-center'>Our IAM Services</h1>
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
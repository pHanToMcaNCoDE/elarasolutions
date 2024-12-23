'use client'

import React, { useState } from 'react'
import { whyDSE, servicesDSE, benefitsDSE, faqDSE, dseProcess } from '@/raw-data/data'
import WhyGeneral from '@/components/WhyDataGeneral'
import why from '../../../public/assets/data/sub-pages/why.svg';
import dse from '../../../public/assets/data-security-enc/dse.svg';
import KeyBenefitsGeneral from '@/components/KeyBenefitsGeneral'
import FAQGeneral from '@/components/FAQGeneral'
import PartnerWithElara from '@/components/PartnerWithElara'
import MoreTechnologies from '@/components/MoreTechnologies'
import TechnologiesProcess from '@/components/TechnologiesProcess'
import SecurityTechnologiesHero from '@/components/SecurityTechnologiesHero'
import CustomServicesCard from '@/components/CustomServicesCard'

const page = () => {
    const [services, setServices] = useState(servicesDSE);
    const [header, setHeader] = useState((<>Why Choose Elara Solutions <br className='lg:hidden'/>for Network Security?</>));
    const [img, setImg] = useState(why);
    const [whyContent, setWhyContent] = useState(whyDSE);
    const [title, setTitle] = useState('Data Security & Encryption Services at Elara Solutions');
    const [desc, setDesc] = useState("At Elara Solutions, we prioritise data security and encryption to ensure your sensitive information is protected at all times. With growing concerns about cyber threats and data breaches, it's essential to have strong security measures in place. Our data security solutions include end-to-end encryption, secure data storage, and secure transmission protocols that safeguard your business against unauthorised access and cyberattacks."); 

    const [heroImg, setHeroImg] = useState(dse);
    const [techTitle, setTechTitle] = useState('Network Security Process at Elara Solutions');
    const [proc, setProc] = useState(dseProcess);
    const [menuTitle, setMenuTitle] = useState('Security Technologies');
    const [subTitle, setSubTitle] = useState('Data Security & Encryption');
    const [benefits, setBenefits] = useState(benefitsDSE);
    const [faqs, setFaqs] = useState(faqDSE);
    const [faqTitle, setFaqTitle] = useState((<>Frequently Asked Questions</>));

  return (
    <main>
        <SecurityTechnologiesHero title={title} desc={desc} heroImg={heroImg} menuTitle={menuTitle} subTitle={subTitle}/>
        <WhyGeneral header={header} img={img} whyContent={whyContent}/>
        <section className='py-[80px] lg:pt-[120px] lg:pb-[240px] px-[24px] lg:px-[100px] flex flex-col justify-center items-center gap-[96px] bg-white'>
          <div className='max-w-[1296px] mx-auto gap-[56px] flex flex-col justify-center items-center'>
            <h1 className='w-[314px] lg:w-[742px] font-bold leading-[35px] lg:leading-[70px] text-[1.75rem] lg:text-[3.5rem] font-instrument text-blue text-center'>Our Data Security & Encryption Services</h1>
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

export default page
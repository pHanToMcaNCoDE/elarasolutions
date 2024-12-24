'use client'

import React, { useState } from 'react'
import { faqCRM, benefitsCRM, crmProcess, whyCRM, servicesCRM } from '@/raw-data/data'
import WhyGeneral from '@/components/WhyDataGeneral'
import why from '../../../public/assets/data/sub-pages/why.svg';
import aws from '../../../public/assets/aws/aws.svg';
import KeyBenefitsGeneral from '@/components/KeyBenefitsGeneral'
import FAQGeneral from '@/components/FAQGeneral'
import PartnerWithElara from '@/components/PartnerWithElara'
import MoreTechnologies from '@/components/MoreTechnologies'
import TechnologiesProcess from '@/components/TechnologiesProcess'
import SecurityTechnologiesHero from '@/components/SecurityTechnologiesHero'
import CustomServicesCard from '@/components/CustomServicesCard'

const Page = () => {
    const [services, setServices] = useState(servicesCRM);
    const [header, setHeader] = useState((<>Why Choose Elara Solutions for <br className='hidden lg:flex'/> AWS Cloud Development?</>));
    const [img, setImg] = useState(why);
    const [whyContent, setWhyContent] = useState(whyCRM);
    const [title, setTitle] = useState('AWS');
    const [desc, setDesc] = useState("At Elara Solutions, we specialise in offering robust AWS cloud services to enhance your business’s digital infrastructure. Our AWS solutions enable businesses to leverage the power of cloud computing to drive innovation, optimise costs, and scale rapidly."); 

    const [heroImg, setHeroImg] = useState(aws);
    const [techTitle, setTechTitle] = useState('Our AWS Development Process');
    const [proc, setProc] = useState(crmProcess);
    const [menuTitle, setMenuTitle] = useState('Cloud Technologies');
    const [subTitle, setSubTitle] = useState('AWS');
    const [benefits, setBenefits] = useState(benefitsCRM);
    const [faqs, setFaqs] = useState(faqCRM);
    const [faqTitle, setFaqTitle] = useState((<>Frequently Asked Questions</>));

  return (
    <main>
        <SecurityTechnologiesHero title={title} desc={desc} heroImg={heroImg} menuTitle={menuTitle} subTitle={subTitle}/>
        <WhyGeneral header={header} img={img} whyContent={whyContent}/>
        <section className='py-[80px] lg:pt-[120px] lg:pb-[240px] px-[24px] lg:px-[100px] flex flex-col justify-center items-center gap-[96px] bg-white'>
          <div className='max-w-[1296px] mx-auto gap-[56px] flex flex-col justify-center items-center'>
            <h1 className='w-[314px] lg:w-[842px] font-bold leading-[35px] lg:leading-[70px] text-[1.75rem] lg:text-[3.5rem] font-instrument text-blue text-center'>AWS Services We Provide</h1>
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
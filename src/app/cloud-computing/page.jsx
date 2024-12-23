'use client'

import React, { useState } from 'react'
import OurServices from '../home/OurServices'
import { benefitsCCP, faqCCP, faqIC, processIC, servicesCCP, whyCCP } from '@/raw-data/data'
import WhyGeneral from '@/components/WhyGeneral'
import why from '../../../public/assets/cloud-computing/why.svg';
import ccp from '../../../public/assets/cloud-computing/ccp.svg';
import KeyBenefitsGeneral from '@/components/KeyBenefitsGeneral'
import ServiceCustomHero from '@/components/ServiceCustomHero'
import ProductsPartner from '@/components/ProductsPartner'
import FAQGeneral from '@/components/FAQGeneral'
import LongCard from '@/components/LongCard'
import ServicesCard from '@/components/ServicesCard'

const Page = () => {
    const [header, setHeader] = useState((
      <>
      Why Choose<br className='lg:hidden'/> Elara Solutions <br className='lg:hidden'/>for Cloud Computing?
      </>
    ));
    const [img, setImg] = useState(why);
    const [whyContent, setWhyContent] = useState(whyCCP);
    const [title, setTitle] = useState('Cloud Computing');
    const [desc, setDesc] = useState('Elara Solutions offers cloud computing services that empower businesses to scale efficiently, increase flexibility, and reduce costs. Our cloud solutions are designed to optimise your IT infrastructure by leveraging the power of leading cloud platforms like AWS, Microsoft Azure, and Google Cloud.'); 

    const [heroImg, setHeroImg] = useState(ccp);
    const [benefits, setBenefits] = useState(benefitsCCP);
    const devTitle = (
        <>
            Our IT Consulting process
        </>
    )

    const [processes, setProcesses] = useState(processIC);
    const faqTitle = (
        <>
            Frequently asked questions on <br className='hidden lg:flex'/>Cloud Computing Services
        </>
    )

    const [faqs, setFaqs] = useState(faqCCP)
    const [services, setServices] = useState(servicesCCP);
    
  return (
    <main>
        <ServiceCustomHero title={title} desc={desc} heroImg={heroImg} />
        <WhyGeneral header={header} img={img} whyContent={whyContent}/>
        <section className='py-[80px] lg:py-[150px] px-[24px] lg:px-[80px] flex flex-col justify-center items-center gap-[56px] bg-blue'>
          <div className='max-w-[1296px] mx-auto gap-[56px] flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center text-center gap-[13px]'>
                <p className='uppercase text-greenTwo font-instrument leading-[24px] text-[.875rem] font-semibold'>services</p>
                <h1 className='w-[314px] lg:w-[742px] font-bold leading-[35px] lg:leading-[70px] text-[1.75rem] lg:text-[3.5rem] font-instrument text-white text-center'>Our Cloud Development Services</h1>
            </div>
            <LongCard services={services} />
            <ServicesCard services={services} />
          </div>
        </section>
        <KeyBenefitsGeneral benefits={benefits} />
        <FAQGeneral faqs={faqs} faqTitle={faqTitle} />
        <ProductsPartner/>
        <OurServices/>
    </main>
  )
}

export default Page
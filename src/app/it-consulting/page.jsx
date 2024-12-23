'use client'

import React, { useState } from 'react'
import OurServices from '../home/OurServices'
import { benefitsIC, faqIC, processIC, whyIC } from '@/raw-data/data'
import WhyGeneral from '@/components/WhyGeneral'
import why from '../../../public/assets/it-consulting/why.svg';
import ic from '../../../public/assets/it-consulting/ic.svg';
import KeyBenefitsGeneral from '@/components/KeyBenefitsGeneral'
import ServiceCustomHero from '@/components/ServiceCustomHero'
import ProductsPartner from '@/components/ProductsPartner'
import OurDevProcess from '@/components/DataArchProcess'
import FAQGeneral from '@/components/FAQGeneral'
import ConsultingServices from '@/components/ConsultingServices'
import ConsultingTechnologies from '@/components/ConsultingTechnologies'

const Page = () => {
    const [header, setHeader] = useState((
      <>
      Why Choose<br className='lg:hidden'/> Elara Solutions <br className='lg:hidden'/>for IT Consulting?
      </>
    ));
    const [img, setImg] = useState(why);
    const [whyContent, setWhyContent] = useState(whyIC);
    const [title, setTitle] = useState('IT Consulting');
    const [desc, setDesc] = useState('In today’s fast-paced technological landscape, businesses need expert guidance to navigate the complexities of IT systems, innovation, and digital transformation. At Elara Solutions, we provide strategic IT consulting services designed to optimise operations, drive innovation, and ensure your technology investments align with your business goals. Our experienced consultants work closely with you to understand your unique challenges and craft tailored solutions that accelerate growth and maximise ROI.'); 

    const [heroImg, setHeroImg] = useState(ic);
    const [benefits, setBenefits] = useState(benefitsIC);
    const devTitle = (
        <>
            Our IT Consulting process
        </>
    )

    const [processes, setProcesses] = useState(processIC);
    const faqTitle = (
        <>
            Frequently asked questions on <br className='hidden lg:flex'/>IT Consulting with Elara Solutions
        </>
    )

    const [faqs, setFaqs] = useState(faqIC)
    
  return (
    <main>
        <ServiceCustomHero title={title} desc={desc} heroImg={heroImg} />
        <WhyGeneral header={header} img={img} whyContent={whyContent}/>
        <ConsultingServices/>
        <ConsultingServices/>
        <OurDevProcess processes={processes} devTitle={devTitle} />
        <KeyBenefitsGeneral benefits={benefits} />
        <ConsultingTechnologies/>
        <FAQGeneral faqs={faqs} faqTitle={faqTitle} />
        <ProductsPartner/>
        <OurServices/>
    </main>
  )
}

export default Page
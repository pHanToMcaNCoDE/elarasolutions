'use client'

import React, { useState } from 'react'
import OurServices from '../home/OurServices'
import { benefitsCDS, servicesCDS, whyCDS, FaqsCDS } from '@/raw-data/data'
import WhyGeneral from '@/components/WhyGeneral'
import why from '../../../public/assets/cloud-dev-service/why.svg';
import cds from '../../../public/assets/cloud-dev-service/cds.svg';
import KeyBenefitsGeneral from '@/components/KeyBenefitsGeneral'
import ServiceCustomHero from '@/components/ServiceCustomHero'
import OurCustomServices from '@/components/OurCustomServices'
import ProductsPartner from '@/components/ProductsPartner'
import FAQGeneral from '@/components/FAQGeneral'

const Page = () => {
    const [header, setHeader] = useState((
      <>
      Why Choose<br className='lg:hidden'/> Elara Solutions <br className='lg:hidden'/>for Cloud Development?
      </>
    ));
    const [img, setImg] = useState(why);
    const [whyContent, setWhyContent] = useState(whyCDS);
    const [title, setTitle] = useState('Cloud Development');
    const [desc, setDesc] = useState('At Elara Solutions, we specialise in delivering comprehensive cloud development services that empower businesses to leverage the full potential of cloud technology. Our expert team is dedicated to building scalable, secure, and high-performance cloud applications tailored to meet the unique needs of your organisation. Whether you are looking to migrate existing applications to the cloud or develop new cloud-native solutions, we are here to guide you every step of the way.'); 

    const [heroImg, setHeroImg] = useState(cds);
    const [benefits, setBenefits] = useState(benefitsCDS);
    const [faqs, setFaqs] = useState(FaqsCDS);
    const [services, setServices] = useState(servicesCDS)
    const serviceTitle = 'Our Cloud Development Services'
    const [faqTitle, setFaqTitle] = useState((
        <>
          FAQ for Cloud Development
        </>
      ))

  return (
    <main>
        {/* <TechnologiesHero title={title} desc={desc} heroImg={heroImg} /> */}
        <ServiceCustomHero title={title} desc={desc} heroImg={heroImg} />
        <WhyGeneral header={header} img={img} whyContent={whyContent}/>
        <OurCustomServices services={services} serviceTitle={serviceTitle} />
        <KeyBenefitsGeneral benefits={benefits} />
        <FAQGeneral faqs={faqs} faqTitle={faqTitle}/>
        <ProductsPartner/>
        <OurServices/>
    </main>
  )
}

export default Page
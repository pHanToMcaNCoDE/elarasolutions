'use client'

import React, { useState } from 'react'
import OurServices from '../home/OurServices'
import { benefitsDA, whyDA, FaqsDataA, DataAchServices } from '@/raw-data/data'
import WhyGeneral from '@/components/WhyGeneral'
import why from '../../../public/assets/data-architecture/why.svg';
import da from '../../../public/assets/data-architecture/da.svg';
import KeyBenefitsGeneral from '@/components/KeyBenefitsGeneral'
import ServiceCustomHero from '@/components/ServiceCustomHero'
import ProductsPartner from '@/components/ProductsPartner'
import FAQGeneral from '@/components/FAQGeneral'
import OurDevProcess from '@/components/DataArchProcess';


const page = () => {
    const [header, setHeader] = useState((
      <>
      Why Choose<br className='lg:hidden'/> Elara Solutions <br className='lg:hidden'/>for  Snowflake Integration?
      </>
    ));
    const [img, setImg] = useState(why);
    const [whyContent, setWhyContent] = useState(whyDA);
    const [title, setTitle] = useState('Data Architecture');
    const [desc, setDesc] = useState('Elara Solutions brings unparalleled expertise in integrating Snowflake into your cloud data architecture, enabling unmatched efficiency, scalability, and performance. With Snowflake’s advanced data capabilities and our industry-leading approach, we help you seamlessly transition to a cloud-native environment, maximising data management potential and operational agility.'); 
    const [faqs, setFaqs] = useState(FaqsDataA);

    const [heroImg, setHeroImg] = useState(da);
    const [benefits, setBenefits] = useState(benefitsDA);
    const serviceTitle = 'Our Application Development Services'
    const [processes, setProcesses] = useState(DataAchServices);

    const [faqTitle, setFaqTitle] = useState((
        <>
          Frequently asked questions For Data Architecture
        </>
      ))

    const devTitle = (
      <>
        Our Snowflake <br/>Integration Process
      </>
    )

    const [devProcess, setDevProcess] = useState(DataAchServices);
  return (
    <main>
        <ServiceCustomHero title={title} desc={desc} heroImg={heroImg} />
        <WhyGeneral header={header} img={img} whyContent={whyContent}/>
        <KeyBenefitsGeneral benefits={benefits} />
        <OurDevProcess processes={processes} devTitle={devTitle} />
        <FAQGeneral faqs={faqs} faqTitle={faqTitle}/>
        <ProductsPartner/>
        <OurServices/>
    </main>
  )
}

export default page
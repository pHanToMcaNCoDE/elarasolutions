'use client'

import React, { useState } from 'react'
import OurServices from '../home/OurServices'
import { benefitsPD, faqPD, processPD, servicesADS, whyPD } from '@/raw-data/data'
import WhyGeneral from '@/components/WhyGeneral'
import why from '../../../public/assets/product-dev/why.svg';
import pd from '../../../public/assets/product-dev/pd.svg';
import KeyBenefitsGeneral from '@/components/KeyBenefitsGeneral'
import ServiceCustomHero from '@/components/ServiceCustomHero'
import ProductsPartner from '@/components/ProductsPartner'
import OurDevProcess from '@/components/DataArchProcess'
import FAQGeneral from '@/components/FAQGeneral'

const Page = () => {
    const [header, setHeader] = useState((
      <>
      Why Choose<br className='lg:hidden'/> Elara Solutions <br className='lg:hidden'/>for Your Application Development?
      </>
    ));
    const [img, setImg] = useState(why);
    const [whyContent, setWhyContent] = useState(whyPD);
    const [title, setTitle] = useState('Product Development');
    const [desc, setDesc] = useState('At Elara Solutions, we help businesses turn ideas into fully functional products, from concept through development and deployment. With our expertise in Product Development, we craft scalable, efficient, and innovative products that align with your goals, ensuring they deliver real value to customers.'); 

    const [heroImg, setHeroImg] = useState(pd);
    const [benefits, setBenefits] = useState(benefitsPD);
    const [services, setServices] = useState(servicesADS)
    const serviceTitle = 'Our Application Development Services'
    const devTitle = (
        <>
            Our Product <br className='hidden lg:flex'/> Development Services
        </>
    )

    const [processes, setProcesses] = useState(processPD);
    const faqTitle = (
        <>
            Frequently asked questions about <br className='hidden lg:flex'/>Product Development with Elara Solutions
        </>
    )

    const [faqs, setFaqs] = useState(faqPD)
    
  return (
    <main>
        {/* <TechnologiesHero title={title} desc={desc} heroImg={heroImg} /> */}
        <ServiceCustomHero title={title} desc={desc} heroImg={heroImg} />
        <WhyGeneral header={header} img={img} whyContent={whyContent}/>
        <OurDevProcess processes={processes} devTitle={devTitle} />
        <KeyBenefitsGeneral benefits={benefits} />
        <FAQGeneral faqs={faqs} faqTitle={faqTitle} />
        <ProductsPartner/>
        <OurServices/>
    </main>
  )
}

export default Page
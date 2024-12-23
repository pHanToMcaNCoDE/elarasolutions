'use client'

import React, { useState } from 'react'
import OurServices from '../home/OurServices'
import { benefitsADS, servicesADS, whyADS } from '@/raw-data/data'
import WhyGeneral from '@/components/WhyGeneral'
import why from '../../../public/assets/app-dev-service/why.svg';
import ads from '../../../public/assets/app-dev-service/ads.svg';
import KeyBenefitsGeneral from '@/components/KeyBenefitsGeneral'
import ServiceCustomHero from '@/components/ServiceCustomHero'
import OurCustomServices from '@/components/OurCustomServices'
import ProductsPartner from '@/components/ProductsPartner'

const Page = () => {
    const [header, setHeader] = useState((
      <>
      Why Choose<br className='lg:hidden'/> Elara Solutions <br className='lg:hidden'/>for Application Development?
      </>
    ));
    const [img, setImg] = useState(why);
    const [whyContent, setWhyContent] = useState(whyADS);
    const [title, setTitle] = useState('Application Development');
    const [desc, setDesc] = useState('At Elara Solutions, we are at the forefront of enterprise application development, empowering organisations to harness the full potential of technology. As a leading provider in this space, we specialise in creating innovative, high-performance applications that drive business efficiency and growth. Our team is dedicated to building both native and cross-platform solutions that cater to the unique needs of your enterprise, ensuring seamless integration and maximum functionality.'); 

    const [heroImg, setHeroImg] = useState(ads);
    const [benefits, setBenefits] = useState(benefitsADS);
    const [services, setServices] = useState(servicesADS)
    const serviceTitle = 'Our Application Development Services'

  return (
    <main>
        {/* <TechnologiesHero title={title} desc={desc} heroImg={heroImg} /> */}
        <ServiceCustomHero title={title} desc={desc} heroImg={heroImg} />
        <WhyGeneral header={header} img={img} whyContent={whyContent}/>
        <OurCustomServices services={services} serviceTitle={serviceTitle} />
        <KeyBenefitsGeneral benefits={benefits} />
        <ProductsPartner/>
        <OurServices/>
    </main>
  )
}

export default Page
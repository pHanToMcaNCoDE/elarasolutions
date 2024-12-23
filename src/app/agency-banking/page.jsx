'use client'

import React, { useState } from 'react'
import { benefitsAgencyBanking, agencyServices, featuresAgency, whyAgencyBanking } from '@/raw-data/data'
import WhyGeneral from '@/components/WhyGeneral2'
import why from '../../../public/assets/agency-banking/why.svg';
import KeyBenefitsGeneral from '@/components/KeyBenefitsGeneral'
import ProductsCustomHero from '@/components/ProductsCustomHero'
import cb from '../../../public/assets/agency-banking/ab.svg';
import ProductsKeyFeatures from '@/components/ProductsKeyFeatures'
import ProductsCustomServices from '@/components/ProductsCustomServices'
import ProductsSuccessStories from '@/components/ProductsSuccessStories'
import ProductsPartner from '@/components/ProductsPartner'
import OurProducts from '../home/OurProducts'
import OurDevProcess from '@/components/AgencyDevProcess';


const Page = () => {
    const [header, setHeader] = useState((
      <>
        Why Choose Elara Solutions
      </>
    ));
    const [img, setImg] = useState(why);
    const [whyContent, setWhyContent] = useState(whyAgencyBanking);
    const [title, setTitle] = useState('Transforming Financial Access with Agency Banking Solutions');
    const [desc, setDesc] = useState('At Elara Solutions, we specialise in developing comprehensive Agency Banking solutions that extend banking services to underserved populations. Our innovative approach leverages technology to empower local agents to deliver essential financial services, fostering financial inclusion and enhancing customer convenience.'); 

    const [heroImg, setHeroImg] = useState(cb);
    const [benefits, setBenefits] = useState(benefitsAgencyBanking);

    const [features, setFeatures] = useState(featuresAgency);
    const [services, setServices] = useState(agencyServices);

  return (
    <main>
        <ProductsCustomHero title={title} desc={desc} heroImg={heroImg} />
        <WhyGeneral header={header} img={img} whyContent={whyContent}/>
        <ProductsKeyFeatures features={features} />
        <OurDevProcess services={services} />
        <KeyBenefitsGeneral benefits={benefits} />
        <ProductsSuccessStories/>
        <ProductsPartner/>
        <OurProducts/>
    </main>
  )
}

export default Page
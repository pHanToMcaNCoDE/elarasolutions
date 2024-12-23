'use client'

import React, { useState } from 'react'
import { benefitsLendingService, lendingServices, featuresLendingService, whyLendingSevices } from '@/raw-data/data'
import WhyGeneral from '@/components/WhyGeneral2'
import why from '../../../public/assets/lending-services/why.svg';
import KeyBenefitsGeneral from '@/components/KeyBenefitsGeneral'
import ProductsCustomHero from '@/components/ProductsCustomHero'
import cb from '../../../public/assets/lending-services/ls.svg';
import ProductsKeyFeatures from '@/components/ProductsKeyFeatures'
import ProductsCustomServices from '@/components/ProductsCustomServices'
import ProductsSuccessStories from '@/components/ProductsSuccessStories'
import ProductsPartner from '@/components/ProductsPartner'
import OurProducts from '../home/OurProducts'
import TechnologyStack from '@/components/TechnologyStack';

const Page = () => {
    const [header, setHeader] = useState((
      <>
        Why Choose Elara Solutions
      </>
    ));
    const [img, setImg] = useState(why);
    const [whyContent, setWhyContent] = useState(whyLendingSevices);
    const [title, setTitle] = useState('Lending Services');
    const [desc, setDesc] = useState('At Elara Solutions, we specialise in providing comprehensive Lending Services that empower financial institutions to streamline their loan management processes. Our tailored solutions are designed to enhance operational efficiency, improve customer experience, and ensure compliance with regulatory requirements. By leveraging cutting-edge technology, we help our clients stay ahead in the competitive lending landscape.'); 

    const [heroImg, setHeroImg] = useState(cb);
    const [benefits, setBenefits] = useState(benefitsLendingService);

    const [features, setFeatures] = useState(featuresLendingService);
    const [services, setServices] = useState(lendingServices);

  return (
    <main>
        <ProductsCustomHero title={title} desc={desc} heroImg={heroImg} />
        <WhyGeneral header={header} img={img} whyContent={whyContent}/>
        <ProductsKeyFeatures features={features} />
        <ProductsCustomServices services={services} />
        <TechnologyStack/>
        <KeyBenefitsGeneral benefits={benefits} />
        <ProductsSuccessStories/>
        <ProductsPartner/>
        <OurProducts/>
    </main>
  )
}

export default Page
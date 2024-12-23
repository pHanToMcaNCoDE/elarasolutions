'use client'

import React, { useState } from 'react'
import { benefitsCorporateBanking, corporateServices, featuresCorporate, whyCore } from '@/raw-data/data'
import WhyGeneral from '@/components/WhyGeneral'
import why from '../../../public/assets/corporate-banking/why.svg';
import KeyBenefitsGeneral from '@/components/KeyBenefitsGeneral'
import ProductsCustomHero from '@/components/ProductsCustomHero'
import cb from '../../../public/assets/corporate-banking/cb.svg';
import ProductsKeyFeatures from '@/components/ProductsKeyFeatures'
import ProductsCustomCorporateServices from '@/components/ProductsCustomCorporateServices'
import ProductsSuccessStories from '@/components/ProductsSuccessStories'
import ProductsPartner from '@/components/ProductsPartner'
import OurProducts from '../home/OurProducts'

const page = () => {
    const [header, setHeader] = useState((
      <>
        Why Choose Elara Solutions
      </>
    ));
    const [img, setImg] = useState(why);
    const [whyContent, setWhyContent] = useState(whyCore);
    const [title, setTitle] = useState('Corporate Banking');
    const [desc, setDesc] = useState('In the fast-paced world of corporate banking, having robust and efficient software solutions is essential for financial institutions to meet the diverse needs of businesses. At Elara Solutions, we specialise in Corporate Banking Software Development, delivering innovative, scalable, and secure solutions that enhance operational efficiency and improve client relationships.'); 

    const [heroImg, setHeroImg] = useState(cb);
    const [benefits, setBenefits] = useState(benefitsCorporateBanking);

    const [features, setFeatures] = useState(featuresCorporate);
    const [services, setServices] = useState(corporateServices);

  return (
    <main>
        <ProductsCustomHero title={title} desc={desc} heroImg={heroImg} />
        <WhyGeneral header={header} img={img} whyContent={whyContent}/>
        <ProductsKeyFeatures features={features} />
        <ProductsCustomCorporateServices  services={services} />
        <KeyBenefitsGeneral benefits={benefits} />
        <ProductsSuccessStories/>
        <ProductsPartner/>
        <OurProducts/>
    </main>
  )
}

export default page
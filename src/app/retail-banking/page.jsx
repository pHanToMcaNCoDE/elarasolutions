'use client'

import React, { useState } from 'react'
import { benefitsRetailBanking, retailServices, featuresRetails, whyCore } from '@/raw-data/data'
import WhyGeneral from '@/components/WhyGeneral'
import why from '../../../public/assets/retail-banking/why.svg';
import KeyBenefitsGeneral from '@/components/KeyBenefitsGeneral'
import ProductsCustomHero from '@/components/ProductsCustomHero'
import cb from '../../../public/assets/retail-banking/rb.svg';
import ProductsKeyFeatures from '@/components/ProductsKeyFeatures'
import ProductsCustomServices from '@/components/ProductsCustomServices'
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
    const [title, setTitle] = useState('Retail Banking');
    const [desc, setDesc] = useState('Elara Solutions specialises in Retail Banking solutions that empower financial institutions to deliver personalised services and foster customer engagement. Our platform enhances the banking experience through innovative features tailored to individual client needs.'); 

    const [heroImg, setHeroImg] = useState(cb);
    const [benefits, setBenefits] = useState(benefitsRetailBanking);

    const [features, setFeatures] = useState(featuresRetails);
    const [services, setServices] = useState(retailServices);

  return (
    <main>
        <ProductsCustomHero title={title} desc={desc} heroImg={heroImg} />
        <WhyGeneral header={header} img={img} whyContent={whyContent}/>
        <ProductsKeyFeatures features={features} />
        <ProductsCustomServices services={services} />
        <KeyBenefitsGeneral benefits={benefits} />
        <ProductsSuccessStories/>
        <ProductsPartner/>
        <OurProducts/>
    </main>
  )
}

export default page
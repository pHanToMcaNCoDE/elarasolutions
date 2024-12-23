'use client'

import React, { useState } from 'react'
import { benefitsLifesyleServices, lifesyleServices, featuresLifesyleServices, whyLifesyleServices } from '@/raw-data/data'
import WhyGeneral from '@/components/WhyGeneral2'
import why from '../../../public/assets/lifestyle-services/why.svg';
import KeyBenefitsGeneral from '@/components/KeyBenefitsGeneral'
import ProductsCustomHero from '@/components/ProductsCustomHero'
import cb from '../../../public/assets/lifestyle-services/ls.svg';
import ProductsKeyFeatures from '@/components/ProductsKeyFeatures'
import ProductsCustomServices from '@/components/ProductsCustomServices'
import ProductsSuccessStories from '@/components/ProductsSuccessStories'
import ProductsPartner from '@/components/ProductsPartner'
import OurProducts from '../home/OurProducts'
1
const page = () => {
    const [header, setHeader] = useState((
      <>
        Why Choose Elara Solutions
      </>
    ));
    const [img, setImg] = useState(why);
    const [whyContent, setWhyContent] = useState(whyLifesyleServices);
    const [title, setTitle] = useState('Lifestyle Services');
    const [desc, setDesc] = useState('At Elara Solutions, we recognise that lifestyle plays a crucial role in enhancing customer engagement and satisfaction in the financial services sector. Our Lifestyle Services are designed to integrate seamlessly with banking and financial applications, providing users with personalised experiences that promote financial well-being and community involvement. By leveraging technology, we empower businesses to connect with their customers in meaningful ways, fostering loyalty and trust.'); 

    const [heroImg, setHeroImg] = useState(cb);
    const [benefits, setBenefits] = useState(benefitsLifesyleServices);

    const [features, setFeatures] = useState(featuresLifesyleServices);
    const [services, setServices] = useState(lifesyleServices);

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
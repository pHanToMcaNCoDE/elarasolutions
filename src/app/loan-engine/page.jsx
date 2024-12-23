'use client'

import React, { useState } from 'react'
import { benefitsLoanEngine, loanEngineServices, featuresLoanEngine, whyLoanEngine } from '@/raw-data/data'
import WhyGeneral from '@/components/WhyGeneral2'
import why from '../../../public/assets/loan-engine/why.svg';
import KeyBenefitsGeneral from '@/components/KeyBenefitsGeneral'
import ProductsCustomHero from '@/components/ProductsCustomHero'
import cb from '../../../public/assets/loan-engine/le.svg';
import ProductsKeyFeatures from '@/components/ProductsKeyFeatures'
import ProductsCustomServices from '@/components/ProductsCustomServices'
import ProductsSuccessStories from '@/components/ProductsSuccessStories'
import ProductsPartner from '@/components/ProductsPartner'
import OurProducts from '../home/OurProducts'
import LoanEngineDevProcess from '@/components/LoanEngineDevProcess';
import IndustriesWeServe from '../home/IndustriesWeServe';

const page = () => {
    const [header, setHeader] = useState((
      <>
        Why Choose Elara Solutions
      </>
    ));
    const [img, setImg] = useState(why);
    const [whyContent, setWhyContent] = useState(whyLoanEngine);
    const [title, setTitle] = useState('Loan Engine');
    const [desc, setDesc] = useState('At Elara Solutions, we specialise in developing robust Loan Engine solutions that streamline the loan origination and management process for financial institutions. Our Loan Engine is designed to automate workflows, enhance user experience, and ensure compliance with regulatory standards, enabling lenders to offer efficient and competitive loan products.'); 

    const [heroImg, setHeroImg] = useState(cb);
    const [benefits, setBenefits] = useState(benefitsLoanEngine);

    const [features, setFeatures] = useState(featuresLoanEngine);
    const [services, setServices] = useState(loanEngineServices);

  return (
    <main>
        <ProductsCustomHero title={title} desc={desc} heroImg={heroImg} />
        <WhyGeneral header={header} img={img} whyContent={whyContent}/>
        <ProductsKeyFeatures features={features} />
        <LoanEngineDevProcess services={services} />
        <IndustriesWeServe/>
        <KeyBenefitsGeneral benefits={benefits} />
        <ProductsSuccessStories/>
        <ProductsPartner/>
        <OurProducts/>
    </main>
  )
}

export default page
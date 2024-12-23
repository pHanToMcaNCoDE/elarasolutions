'use client'

import React, { useState } from 'react'
import { corporateTicketingServices, benefitsTicketingServices } from '@/raw-data/data'
import WhyGeneral from '@/components/WhyGeneral'
import KeyBenefitsGeneral from '@/components/KeyBenefitsGeneral'
import ProductsCustomHero from '@/components/ProductsCustomHero'
import cb from '../../../public/assets/ticketing-services/ts.svg';
import ProductsCustomCorporateServices from '@/components/ProductsCustomCorporateServices'
import ProductsSuccessStories from '@/components/ProductsSuccessStories'
import ProductsPartner from '@/components/ProductsPartner'
import OurProducts from '../home/OurProducts'

const Page = () => {
    const [header, setHeader] = useState((
      <>
        Why Choose Elara Solutions
      </>
    ));
    const [title, setTitle] = useState('Ticketing Services');
    const [desc, setDesc] = useState('At Elara Solutions, we understand that the ticketing industry is rapidly evolving, driven by technological advancements and changing consumer expectations. Our Ticketing Services are designed to provide innovative and scalable solutions that streamline the ticketing process for events, concerts, sports, and more. We leverage cutting-edge technology to enhance user experiences, simplify event management, and maximise revenue for organisers.'); 

    const [heroImg, setHeroImg] = useState(cb);
    const [benefits, setBenefits] = useState(benefitsTicketingServices);

    const [services, setServices] = useState(corporateTicketingServices);

  return (
    <main>
        <ProductsCustomHero title={title} desc={desc} heroImg={heroImg} />
        <ProductsCustomCorporateServices  services={services} />
        <KeyBenefitsGeneral benefits={benefits} />
        <ProductsSuccessStories/>
        <ProductsPartner/>
        <OurProducts/>
    </main>
  )
}

export default Page
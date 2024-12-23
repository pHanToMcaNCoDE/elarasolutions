'use client'

import React, { useState } from 'react'
import OurServices from '../home/OurServices'
import {  whyMAD, FaqsDataA, mobilAppDevProcess } from '@/raw-data/data'
import WhyGeneral from '@/components/WhyGeneral'
import why from '../../../public/assets/mobile-app-dev/why.svg';
import mobileapp from '../../../public/assets/mobile-app-dev/mappd.svg';
import ServiceCustomHero from '@/components/ServiceCustomHero'
import ProductsPartner from '@/components/ProductsPartner'
import OurDevProcess from '@/components/MobilAppDevProcess';
import MobileDevSolution from '@/components/MobileDevSolution'


const page = () => {
    const [header, setHeader] = useState((
      <>
      Why Choose<br className='lg:hidden'/> Elara Solutions <br className='lg:hidden'/>for Mobile App Development?
      </>
    ));
    const [img, setImg] = useState(why);
    const [whyContent, setWhyContent] = useState(whyMAD);
    const [title, setTitle] = useState('Mobile Application Development');
    const [desc, setDesc] = useState('At Elara Solutions, we craft innovative mobile applications tailored to transform your ideas into robust digital solutions. Leveraging the latest tools, frameworks, and industry standards, our development team brings experience and precision to every project. Whether you are a major player or an emerging SME, we understand the unique needs of diverse industries, ensuring a seamless and impactful mobile app experience for every user.'); 
    const [faqs, setFaqs] = useState(FaqsDataA);

    const [heroImg, setHeroImg] = useState(mobileapp);
    const serviceTitle = 'Our Application Development Services'
    const [services, setServices] = useState(mobilAppDevProcess);

    const [tech, setTech] = useState();
    const [techTitle, setTechTitle] = useState('Our key Cloud Technologies');

  return (
    <main>
        <ServiceCustomHero title={title} desc={desc} heroImg={heroImg} />
        <WhyGeneral header={header} img={img} whyContent={whyContent}/>
        <OurDevProcess services={services} />
        <section className='py-[80px] lg:py-[120px] px-[24px] lg:px-[100px]bg-white'>
        <MobileDevSolution tech={tech} techTitle={techTitle} />
        </section>
        <ProductsPartner/>
        <OurServices/>
    </main>
  )
}

export default page
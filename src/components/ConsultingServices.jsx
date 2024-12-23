import Image from 'next/image'
import React from 'react'

import dt from '../../public/assets/it-consulting/dt.svg';
import cai from '../../public/assets/it-consulting/cai.svg';
import cm from '../../public/assets/it-consulting/cm.svg';
import hcs from '../../public/assets/it-consulting/hcs.svg';
import api from '../../public/assets/it-consulting/api.svg';
import erp from '../../public/assets/it-consulting/erp.svg';
import lm from '../../public/assets/it-consulting/lm.png';
import cs from '../../public/assets/it-consulting/cs.svg';
import ra from '../../public/assets/it-consulting/ra.svg';
import cso from '../../public/assets/it-consulting/cso.svg';
import bdc from '../../public/assets/it-consulting/bdc.svg';
import bi from '../../public/assets/it-consulting/bi.svg';
import bca from '../../public/assets/it-consulting/bca.svg';
import ndm from '../../public/assets/it-consulting/ndm.svg';
import ism from '../../public/assets/it-consulting/ism.svg';
import drc from '../../public/assets/it-consulting/drc.svg';

const ConsultingServices = () => {
  return (
    <section className='bg-blue py-[80px] lg:py-[150px] px-[40px] w-full min-h-screen flex flex-col justify-center items-center'>
        <div className='max-w-[1280px] mx-auto flex flex-col justify-center items-center gap-10 lg:gap-[56px]'>
            <div className='w-[318px] lg:w-[519px] gap-[13px] flex flex-col justify-center items-center text-center'>
                <p className='font-instrument text-greenTwo text-[.75rem] font-semibold leading-[24px]'>services</p>
                <h1 className='font-semibold leading-[44.8px] md:leading-[56px] text-[2rem] md:text-[2.5rem] text-graySixteen font-instrument'>Our IT Consulting Services</h1>
            </div>
            <div className='w-full flex flex-col justify-center items-center gap-10 lg:gap-[72px]'>
                <div className='flex flex-col justify-center items-start gap-10'>
                    <h1 className='text-white font-medium leading-[26px] lg:leading-[45px] text-[1.25rem] lg:text-[2.25rem] font-instrument'>
                        Technology Strategy & Planning
                    </h1>
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center place-items-center gap-[24px]'>
                        <div className='w-[328px] md:w-full xl:w-[410.67px] h-[360px] md:h-[450px] bg-blueSix border border-blueFive gap-[24px] flex flex-col justify-center items-start py-[24px] px-[16px] lg:p-[40px] rounded-lg'>
                            <div className='font-instrument gap-[8px] md:gap-[24px] flex flex-col justify-center items-start xl:w-[330.67px]'>
                                <h1 className='text-white font-medium leading-[27px] md:leading-[30px] text-[1.125rem] md:text-[1.25rem]'>Digital Transformation</h1>
                                <p className='text-[.875rem] leading-[21px] md:text-base font-normal text-grayTwentyFive'>
                                    We help you transition from legacy systems to modern, agile solutions that drive business efficiency and innovation.
                                </p>
                            </div>
                            <div className='relative'>
                                <div className='absolute w-full h-full rounded-[16px] z-[5px] bg-white'></div>
                                <Image className='relative z-10 object-cover w-[300px] md:w-full xl:w-[349px] h-[160px] md:h-[206px] rounded-[16px]' src={dt} alt='Digital Transformation'></Image>
                            </div>
                        </div>
                        <div className='w-[328px] md:w-full xl:w-[410.67px] h-[360px] md:h-[450px] bg-blueSix border border-blueFive gap-[24px] flex flex-col justify-center items-start py-[24px] px-[16px] lg:p-[40px] rounded-lg'>
                            <div className='font-instrument gap-[8px] md:gap-[24px] flex flex-col justify-center items-start xl:w-[330.67px]'>
                                <h1 className='text-white font-medium leading-[27px] md:leading-[30px] text-[1.125rem] md:text-[1.25rem]'>IT Roadmap Development</h1>
                                <p className='text-[.875rem] leading-[21px] md:text-base font-normal text-grayTwentyFive'>
                                    Crafting detailed IT roadmaps that guide your organisation&apos;s technology investments and align them with long-term business objectives.
                                </p>
                            </div>
                            <div className='relative'>
                                <div className='absolute w-full h-full rounded-[16px] z-[5px] bg-white'></div>
                                <Image className='relative z-10 object-cover w-[300px] md:w-full xl:w-[349px] h-[160px] md:h-[206px] rounded-[16px]' src={dt} alt='IT Roadmap Development'></Image>
                            </div>
                        </div>
                        <div className='w-[328px] md:w-full xl:w-[410.67px] h-[360px] md:h-[450px] bg-blueSix border border-blueFive gap-[24px] flex flex-col justify-center items-start py-[24px] px-[16px] lg:p-[40px] rounded-lg'>
                            <div className='font-instrument gap-[8px] md:gap-[24px] flex flex-col justify-center items-start xl:w-[330.67px]'>
                                <h1 className='text-white font-medium leading-[27px] md:leading-[30px] text-[1.125rem] md:text-[1.25rem]'>Technology Assessments</h1>
                                <p className='text-[.875rem] leading-[21px] md:text-base font-normal text-grayTwentyFive'>
                                    Assessing your current IT infrastructure to identify gaps, risks, and opportunities for improvement.
                                </p>
                            </div>
                            <div className='relative'>
                                <div className='absolute w-full h-full rounded-[16px] z-[5px] bg-white'></div>
                                <Image className='relative z-10 object-cover w-[300px] md:w-full xl:w-[349px] h-[160px] md:h-[206px] rounded-[16px]' src={dt} alt='Technology Assessments'></Image>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-start gap-10'>
                    <h1 className='text-white font-medium leading-[26px] lg:leading-[45px] text-[1.25rem] lg:text-[2.25rem] font-instrument'>
                        Cloud Strategy & Migration
                    </h1>
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center place-items-center gap-[24px]'>
                        <div className='w-[328px] md:w-full xl:w-[410.67px] h-[360px] md:h-[450px] bg-blueSix border border-blueFive gap-[24px] flex flex-col justify-center items-start py-[24px] px-[16px] lg:p-[40px] rounded-lg'>
                            <div className='font-instrument gap-[8px] md:gap-[24px] flex flex-col justify-center items-start xl:w-[330.67px]'>
                                <h1 className='text-white font-medium leading-[27px] md:leading-[30px] text-[1.125rem] md:text-[1.25rem]'>Cloud Adoption</h1>
                                <p className='text-[.875rem] leading-[21px] md:text-base font-normal text-grayTwentyFive'>
                                    Guiding your organisation through the process of adopting cloud technologies to reduce costs, enhance scalability, and improve flexibility.
                                </p>
                            </div>
                            <div className='relative'>
                                <div className='absolute w-full h-full rounded-[16px] z-[5px] bg-white'></div>
                                <Image className='relative z-10 object-cover w-[300px] md:w-full xl:w-[349px] h-[160px] md:h-[206px] rounded-[16px]' src={cai} alt='Cloud Adoption'></Image>
                            </div>
                        </div>
                        <div className='w-[328px] md:w-full xl:w-[410.67px] h-[360px] md:h-[450px] bg-blueSix border border-blueFive gap-[24px] flex flex-col justify-center items-start py-[24px] px-[16px] lg:p-[40px] rounded-lg'>
                            <div className='font-instrument gap-[8px] md:gap-[24px] flex flex-col justify-center items-start xl:w-[330.67px]'>
                                <h1 className='text-white font-medium leading-[27px] md:leading-[30px] text-[1.125rem] md:text-[1.25rem]'>Cloud Migration</h1>
                                <p className='text-[.875rem] leading-[21px] md:text-base font-normal text-grayTwentyFive'>
                                    Seamlessly migrating your applications, databases, and workloads to the cloud, ensuring minimal downtime and disruption.
                                </p>
                            </div>
                            <div className='relative'>
                                <div className='absolute w-full h-full rounded-[16px] z-[5px] bg-white'></div>
                                <Image className='relative z-10 object-cover w-[300px] md:w-full xl:w-[349px] h-[160px] md:h-[206px] rounded-[16px]' src={cm} alt='Cloud Migration'></Image>
                            </div>
                        </div>
                        <div className='w-[328px] md:w-full xl:w-[410.67px] h-[360px] md:h-[450px] bg-blueSix border border-blueFive gap-[24px] flex flex-col justify-center items-start py-[24px] px-[16px] lg:p-[40px] rounded-lg'>
                            <div className='font-instrument gap-[8px] md:gap-[24px] flex flex-col justify-center items-start xl:w-[330.67px]'>
                                <h1 className='text-white font-medium leading-[27px] md:leading-[30px] text-[1.125rem] md:text-[1.25rem]'>Hybrid Cloud Solutions</h1>
                                <p className='text-[.875rem] leading-[21px] md:text-base font-normal text-grayTwentyFive'>
                                    Creating customised hybrid cloud strategies that combine on-premises systems with cloud services for a seamless, flexible solution.
                                </p>
                            </div>
                            <div className='relative'>
                                <div className='absolute w-full h-full rounded-[16px] z-[5px] bg-white'></div>
                                <Image className='relative z-10 object-cover w-[300px] md:w-full xl:w-[349px] h-[160px] md:h-[206px] rounded-[16px]' src={hcs} alt='Hybrid Cloud Solutions'></Image>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-start gap-10'>
                    <h1 className='text-white font-medium leading-[26px] lg:leading-[45px] text-[1.25rem] lg:text-[2.25rem] font-instrument'>
                        System Integration & Optimisation
                    </h1>
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center place-items-center gap-[24px]'>
                        <div className='w-[328px] md:w-full xl:w-[410.67px] h-[360px] md:h-[450px] bg-blueSix border border-blueFive gap-[24px] flex flex-col justify-center items-start py-[24px] px-[16px] lg:p-[40px] rounded-lg'>
                            <div className='font-instrument gap-[8px] md:gap-[24px] flex flex-col justify-center items-start xl:w-[330.67px]'>
                                <h1 className='text-white font-medium leading-[27px] md:leading-[30px] text-[1.125rem] md:text-[1.25rem]'>
                                    Application Integration
                                </h1>
                                <p className='text-[.875rem] leading-[21px] md:text-base font-normal text-grayTwentyFive'>
                                    Connecting disparate systems and platforms to ensure smooth data flow and streamline operations.
                                </p>
                            </div>
                            <div className='relative'>
                                <div className='absolute w-full h-full rounded-[16px] z-[5px] bg-white'></div>
                                <Image className='relative z-10 object-cover w-[300px] md:w-full xl:w-[349px] h-[160px] md:h-[206px] rounded-[16px]' src={api} alt='Application Integration'></Image>
                            </div>
                        </div>
                        <div className='w-[328px] md:w-w-[300px] md:w-full xl:full xl:w-h-[160px] md:[410.67px] h-[360px] md:h-[450px] bg-blueSix border border-blueFive gap-[24px] flex flex-col justify-center items-start py-[24px] px-[16px] lg:p-[40px] rounded-lg'>
                            <div className='font-instrument gap-[8px] md:gap-[24px] flex flex-col justify-center items-start xl:w-[330.67px]'>
                                <h1 className='text-white font-medium leading-[27px] md:leading-[30px] text-[1.125rem] md:text-[1.25rem]'>Enterprise Resource Planning (ERP)</h1>
                                <p className='text-[.875rem] leading-[21px] md:text-base font-normal text-grayTwentyFive'>
                                    Implementing and optimising ERP systems like SAP, Oracle, and Microsoft Dynamics to integrate key business functions.
                                </p>
                            </div>
                            <div className='relative'>
                                <div className='absolute w-full h-full rounded-[16px] z-[5px] bg-white'></div>
                                <Image className='relative z-10 object-cover w-[300px] md:w-full xl:w-[349px] h-[160px] md:h-[206px] rounded-[16px]' src={erp} alt='Enterprise Resource Planning (ERP)'></Image>
                            </div>
                        </div>
                        <div className='w-[328px] md:w-w-[300px] md:w-full xl:full xl:w-h-[160px] md:[410.67px] h-[360px] md:h-[450px] bg-blueSix border border-blueFive gap-[24px] flex flex-col justify-center items-start py-[24px] px-[16px] lg:p-[40px] rounded-lg'>
                            <div className='font-instrument gap-[8px] md:gap-[24px] flex flex-col justify-center items-start xl:w-[330.67px]'>
                                <h1 className='text-white font-medium leading-[27px] md:leading-[30px] text-[1.125rem] md:text-[1.25rem]'>Legacy System Modernisation</h1>
                                <p className='text-[.875rem] leading-[21px] md:text-base font-normal text-grayTwentyFive'>
                                    Updating and integrating legacy systems with modern technologies to increase efficiency and extend their lifespan.
                                </p>
                            </div>
                            <div className='relative'>
                                <div className='absolute w-full h-full rounded-[16px] z-[5px] bg-white'></div>
                                <Image className='relative z-10 object-cover w-[300px] md:w-full xl:w-[349px] h-[160px] md:h-[206px] rounded-[16px]' src={lm} alt='Legacy System Modernisation'></Image>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-start gap-10'>
                    <h1 className='text-white font-medium leading-[26px] lg:leading-[45px] text-[1.25rem] lg:text-[2.25rem] font-instrument'>
                        Cybersecurity & Risk Management
                    </h1>
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center place-items-center gap-[24px]'>
                        <div className='w-[328px] md:w-full xl:w-[410.67px] h-[360px] md:h-[450px] bg-blueSix border border-blueFive gap-[24px] flex flex-col justify-center items-start py-[24px] px-[16px] lg:p-[40px] rounded-lg'>
                            <div className='font-instrument gap-[8px] md:gap-[24px] flex flex-col justify-center items-start xl:w-[330.67px]'>
                                <h1 className='text-white font-medium leading-[27px] md:leading-[30px] text-[1.125rem] md:text-[1.25rem]'>Cybersecurity Strategy</h1>
                                <p className='text-[.875rem] leading-[21px] md:text-base font-normal text-grayTwentyFive'>
                                    Develop a robust cybersecurity strategy that safeguards your infrastructure, data, and sensitive information from external threats.
                                </p>
                            </div>
                            <div className='relative'>
                                <div className='absolute w-full h-full rounded-[16px] z-[5px] bg-white'></div>
                                <Image className='relative z-10 object-cover w-[300px] md:w-full xl:w-[349px] h-[160px] md:h-[206px] rounded-[16px]' src={cs} alt='Cybersecurity Strategy'></Image>
                            </div>
                        </div>
                        <div className='w-[328px] md:w-w-[300px] md:w-full xl:full xl:w-h-[160px] md:[410.67px] h-[360px] md:h-[450px] bg-blueSix border border-blueFive gap-[24px] flex flex-col justify-center items-start py-[24px] px-[16px] lg:p-[40px] rounded-lg'>
                            <div className='font-instrument gap-[8px] md:gap-[24px] flex flex-col justify-center items-start xl:w-[330.67px]'>
                                <h1 className='text-white font-medium leading-[27px] md:leading-[30px] text-[1.125rem] md:text-[1.25rem]'>Risk Assessments</h1>
                                <p className='text-[.875rem] leading-[21px] md:text-base font-normal text-grayTwentyFive'>
                                    Identifying potential vulnerabilities and creating proactive risk management strategies to mitigate threats.
                                </p>
                            </div>
                            <div className='relative'>
                                <div className='absolute w-full h-full rounded-[16px] z-[5px] bg-white'></div>
                                <Image className='relative z-10 object-cover w-[300px] md:w-full xl:w-[349px] h-[160px] md:h-[206px] rounded-[16px]' src={ra} alt='Risk Assessments'></Image>
                            </div>
                        </div>
                        <div className='w-[328px] md:w-w-[300px] md:w-full xl:full xl:w-h-[160px] md:[410.67px] h-[360px] md:h-[450px] bg-blueSix border border-blueFive gap-[24px] flex flex-col justify-center items-start py-[24px] px-[16px] lg:p-[40px] rounded-lg'>
                            <div className='font-instrument gap-[8px] md:gap-[24px] flex flex-col justify-center items-start xl:w-[330.67px]'>
                                <h1 className='text-white font-medium leading-[27px] md:leading-[30px] text-[1.125rem] md:text-[1.25rem]'>Compliance Solutions</h1>
                                <p className='text-[.875rem] leading-[21px] md:text-base font-normal text-grayTwentyFive'>
                                    Ensuring your systems and processes comply with industry standards and regulations such as GDPR, HIPAA, and PCI-DSS.
                                </p>
                            </div>
                            <div className='relative'>
                                <div className='absolute w-full h-full rounded-[16px] z-[5px] bg-white'></div>
                                <Image className='relative z-10 object-cover w-[300px] md:w-full xl:w-[349px] h-[160px] md:h-[206px] rounded-[16px]' src={cso} alt='Compliance Solutions'></Image>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-start gap-10'>
                    <h1 className='text-white font-medium leading-[26px] lg:leading-[45px] text-[1.25rem] lg:text-[2.25rem] font-instrument'>
                        Data Management & Analytics
                    </h1>
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center place-items-center gap-[24px]'>
                        <div className='w-[328px] md:w-full xl:w-[410.67px] h-[360px] md:h-[450px] bg-blueSix border border-blueFive gap-[24px] flex flex-col justify-center items-start py-[24px] px-[16px] lg:p-[40px] rounded-lg'>
                            <div className='font-instrument gap-[8px] md:gap-[24px] flex flex-col justify-center items-start xl:w-[330.67px]'>
                                <h1 className='text-white font-medium leading-[27px] md:leading-[30px] text-[1.125rem] md:text-[1.25rem]'>Data Strategy</h1>
                                <p className='text-[.875rem] leading-[21px] md:text-base font-normal text-grayTwentyFive'>
                                    Develop comprehensive data strategies that maximise the value of your data and improve decision-making.
                                </p>
                            </div>
                            <div className='relative'>
                                <div className='absolute w-full h-full rounded-[16px] z-[5px] bg-white'></div>
                                <Image className='relative z-10 object-cover w-[300px] md:w-full xl:w-[349px] h-[160px] md:h-[206px] rounded-[16px]' src={bdc} alt='Data Management & Analytics'></Image>
                            </div>
                        </div>
                        <div className='w-[328px] md:w-w-[300px] md:w-full xl:full xl:w-h-[160px] md:[410.67px] h-[360px] md:h-[450px] bg-blueSix border border-blueFive gap-[24px] flex flex-col justify-center items-start py-[24px] px-[16px] lg:p-[40px] rounded-lg'>
                            <div className='font-instrument gap-[8px] md:gap-[24px] flex flex-col justify-center items-start xl:w-[330.67px]'>
                                <h1 className='text-white font-medium leading-[27px] md:leading-[30px] text-[1.125rem] md:text-[1.25rem]'>Business Intelligence (BI)</h1>
                                <p className='text-[.875rem] leading-[21px] md:text-base font-normal text-grayTwentyFive'>
                                    Implementing BI tools to transform data into actionable insights and support strategic decisions.
                                </p>
                            </div>
                            <div className='relative'>
                                <div className='absolute w-full h-full rounded-[16px] z-[5px] bg-white'></div>
                                <Image className='relative z-10 object-cover w-[300px] md:w-full xl:w-[349px] h-[160px] md:h-[206px] rounded-[16px]' src={bi} alt='Business Intelligence (BI)'></Image>
                            </div>
                        </div>
                        <div className='w-[328px] md:w-w-[300px] md:w-full xl:full xl:w-h-[160px] md:[410.67px] h-[360px] md:h-[450px] bg-blueSix border border-blueFive gap-[24px] flex flex-col justify-center items-start py-[24px] px-[16px] lg:p-[40px] rounded-lg'>
                            <div className='font-instrument gap-[8px] md:gap-[24px] flex flex-col justify-center items-start xl:w-[330.67px]'>
                                <h1 className='text-white font-medium leading-[27px] md:leading-[30px] text-[1.125rem] md:text-[1.25rem]'>Big Data & Cloud Analytics</h1>
                                <p className='text-[.875rem] leading-[21px] md:text-base font-normal text-grayTwentyFive'>
                                    Leveraging big data solutions and cloud analytics platforms to gain real-time insights and predict future trends.
                                </p>
                            </div>
                            <div className='relative'>
                                <div className='absolute w-full h-full rounded-[16px] z-[5px] bg-white'></div>
                                <Image className='relative z-10 object-cover w-[300px] md:w-full xl:w-[349px] h-[160px] md:h-[206px] rounded-[16px]' src={bca} alt='Big Data & Cloud Analytics'></Image>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-start gap-10'>
                    <h1 className='text-white font-medium leading-[26px] lg:leading-[45px] text-[1.25rem] lg:text-[2.25rem] font-instrument'>
                        IT Infrastructure & Support
                    </h1>
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center place-items-center gap-[24px]'>
                        <div className='w-[328px] md:w-full xl:w-[410.67px] h-[360px] md:h-[450px] bg-blueSix border border-blueFive gap-[24px] flex flex-col justify-center items-start py-[24px] px-[16px] lg:p-[40px] rounded-lg'>
                            <div className='font-instrument gap-[8px] md:gap-[24px] flex flex-col justify-center items-start xl:w-[330.67px]'>
                                <h1 className='text-white font-medium leading-[27px] md:leading-[30px] text-[1.125rem] md:text-[1.25rem]'>Network Design & Management</h1>
                                <p className='text-[.875rem] leading-[21px] md:text-base font-normal text-grayTwentyFive'>
                                    Designing and optimising networks that provide reliable connectivity and support business operations.
                                </p>
                            </div>
                            <div className='relative'>
                                <div className='absolute w-full h-full rounded-[16px] z-[5px] bg-white'></div>
                                <Image className='relative z-10 object-cover w-[300px] md:w-full xl:w-[349px] h-[160px] md:h-[206px] rounded-[16px]' src={ndm} alt='Network Design & Management'></Image>
                            </div>
                        </div>
                        <div className='w-[328px] md:w-w-[300px] md:w-full xl:full xl:w-h-[160px] md:[410.67px] h-[360px] md:h-[450px] bg-blueSix border border-blueFive gap-[24px] flex flex-col justify-center items-start py-[24px] px-[16px] lg:p-[40px] rounded-lg'>
                            <div className='font-instrument gap-[8px] md:gap-[24px] flex flex-col justify-center items-start xl:w-[330.67px]'>
                                <h1 className='text-white font-medium leading-[27px] md:leading-[30px] text-[1.125rem] md:text-[1.25rem]'>IT Support & Maintenance</h1>
                                <p className='text-[.875rem] leading-[21px] md:text-base font-normal text-grayTwentyFive'>
                                    Offering ongoing support to ensure your IT systems are running smoothly, with proactive monitoring and troubleshooting.
                                </p>
                            </div>
                            <div className='relative'>
                                <div className='absolute w-full h-full rounded-[16px] z-[5px] bg-white'></div>
                                <Image className='relative z-10 object-cover w-[300px] md:w-full xl:w-[349px] h-[160px] md:h-[206px] rounded-[16px]' src={ism} alt='IT Support & Maintenance'></Image>
                            </div>
                        </div>
                        <div className='w-[328px] md:w-w-[300px] md:w-full xl:full xl:w-h-[160px] md:[410.67px] h-[360px] md:h-[450px] bg-blueSix border border-blueFive gap-[24px] flex flex-col justify-center items-start py-[24px] px-[16px] lg:p-[40px] rounded-lg'>
                            <div className='font-instrument gap-[8px] md:gap-[24px] flex flex-col justify-center items-start xl:w-[330.67px]'>
                                <h1 className='text-white font-medium leading-[27px] md:leading-[30px] text-[1.125rem] md:text-[1.25rem]'>Disaster Recovery & Business Continuity</h1>
                                <p className='text-[.875rem] leading-[21px] md:text-base font-normal text-grayTwentyFive'>
                                    Develop disaster recovery plans to protect your data and ensure business continuity in the event of system failures.
                                </p>
                            </div>
                            <div className='relative'>
                                <div className='absolute w-full h-full rounded-[16px] z-[5px] bg-white'></div>
                                <Image className='relative z-10 object-cover w-[300px] md:w-full xl:w-[349px] h-[160px] md:h-[206px] rounded-[16px]' src={drc} alt='Disaster Recovery & Business Continuity'></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ConsultingServices
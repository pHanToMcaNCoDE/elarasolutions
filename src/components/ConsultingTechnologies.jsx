import Image from 'next/image'
import React from 'react'
import copy from '../../public/assets/it-consulting/icons/copy.svg';
import doc from '../../public/assets/it-consulting/icons/doc.svg';
import signal from '../../public/assets/it-consulting/icons/signal.svg';
import levelup from '../../public/assets/it-consulting/icons/level-up.svg';
import speed from '../../public/assets/it-consulting/icons/speed.svg';
import time from '../../public/assets/it-consulting/icons/time.svg';
import edit from '../../public/assets/it-consulting/icons/edit.svg';
import screens from '../../public/assets/it-consulting/icons/screens.svg';
import steps from '../../public/assets/it-consulting/icons/steps.svg';
import dir from '../../public/assets/it-consulting/icons/dir.svg';
import branch from '../../public/assets/it-consulting/icons/branch.svg';
import book from '../../public/assets/it-consulting/icons/book.svg';

const ConsultingTechnologies = () => {
  return (
    <section className='py-[150px] lg:py-[104px] px-[80px] lg:px-[54px] flex flex-col justify-center items-center gap-[56px] w-full min-h-screen'>
        <h1 className='w-[280px] md:w-full text-blue text-center font-semibold leading-10 md:leading-[56px] text-[2rem] md:text-[2.5rem]'>
            Technologies we consult on
        </h1>

        <div className='max-w-[1320px] mx-auto py-[40px] lg:py-[150px] px-[40px] gap-[64px] flex flex-col justify-center items-start bg-blue rounded-[40px]'>
            <div className='flex flex-col justify-center items-start gap-[24px] lg:gap-10 w-full'>
                <h1 className='text-white leading-[25px] font-instrument lg:leading-[45px] font-medium text-[1.25rem] lg:text-[2.25rem]'>User Experience (UX) Design</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[16px] lg:gap-[24px]'>
                    <div className='w-full lg:w-[292px] h-[141px] lg:h-[216px] bg-blueSix border border-blueFive rounded-lg py-[24px] px-[16px] lg:p-[40px] gap-[8px] lg:gap-[24px] flex flex-col justify-center items-start'>
                        <div className='p-[20px] w-[64px] h-[64px] rounded-lg flex justify-center items-center border border-blueFive bg-blueFive'>
                            <Image width={24} height={24} className='object-cover' src={copy} alt='Copy Icon'></Image>
                        </div>
                        <p className='text-grayTwentyFive font-medium text-[.875rem] leading-[21px] lg:text-base w-full lg:w-[212px] font-barlow'>
                            User Research and Persona Development
                        </p>
                    </div>
                    <div className='w-full lg:w-[292px] h-[141px] lg:h-[216px] bg-blueSix border border-blueFive  rounded-lg py-[24px] px-[16px] lg:p-[40px] gap-[8px] lg:gap-[24px] flex flex-col justify-center items-start'>
                        <div className='p-[20px] w-[64px] h-[64px] rounded-lg flex justify-center items-center border border-blueFive bg-blueFive'>
                            <Image width={24} height={24} className='object-cover' src={doc} alt='Document Icon'></Image>
                        </div>
                        <p className='text-grayTwentyFive font-medium text-[.875rem] leading-[21px] lg:text-base w-full lg:w-[212px] font-barlow'>
                            Information Architecture and Wireframing
                        </p>
                    </div>
                    <div className='w-full lg:w-[292px] h-[141px] lg:h-[216px] bg-blueSix border border-blueFive  rounded-lg py-[24px] px-[16px] lg:p-[40px] gap-[8px] lg:gap-[24px] flex flex-col justify-center items-start'>
                        <div className='p-[20px] w-[64px] h-[64px] rounded-lg flex justify-center items-center border border-blueFive bg-blueFive'>
                            <Image width={24} height={24} className='object-cover' src={signal} alt='Signal Icon'></Image>
                        </div>
                        <p className='text-grayTwentyFive font-medium text-[.875rem] leading-[21px] lg:text-base w-full lg:w-[212px] font-barlow'>
                            Interactive Prototyping and User Testing
                        </p>
                    </div>
                    <div className='w-full lg:w-[292px] h-[141px] lg:h-[216px] bg-blueSix border border-blueFive  rounded-lg py-[24px] px-[16px] lg:p-[40px] gap-[8px] lg:gap-[24px] flex flex-col justify-center items-start'>
                        <div className='p-[20px] w-[64px] h-[64px] rounded-lg flex justify-center items-center border border-blueFive bg-blueFive'>
                            <Image width={24} height={24} className='object-cover' src={levelup} alt='Level-up Icon'></Image>
                        </div>
                        <p className='text-grayTwentyFive font-medium text-[.875rem] leading-[21px] lg:text-base w-full lg:w-[212px] font-barlow'>
                            UI Design and Visual Branding
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-start gap-10 w-full'>
                <h1 className='text-white leading-[25px] font-instrument lg:leading-[45px] font-medium text-[1.25rem] lg:text-[2.25rem]'>User Interface (UI) Design</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[24px]'>
                    
                    <div className='w-full lg:w-[292px] h-[141px] lg:h-[216px] bg-blueSix border border-blueFive  rounded-lg py-[24px] px-[16px] lg:p-[40px] gap-[8px] lg:gap-[24px] flex flex-col justify-center items-start'>
                        <div className='p-[20px] w-[64px] h-[64px] rounded-lg flex justify-center items-center border border-blueFive bg-blueFive'>
                            <Image width={24} height={24} className='object-cover' src={speed} alt='Spped Icon'></Image>
                        </div>
                        <p className='text-grayTwentyFive font-medium text-[.875rem] leading-[21px] lg:text-base w-full lg:w-[212px] font-barlow'>
                            Intuitive and Visually Appealing Interface Design
                        </p>
                    </div>
                    <div className='w-full lg:w-[292px] h-[141px] lg:h-[216px] bg-blueSix border border-blueFive  rounded-lg py-[24px] px-[16px] lg:p-[40px] gap-[8px] lg:gap-[24px] flex flex-col justify-center items-start'>
                        <div className='p-[20px] w-[64px] h-[64px] rounded-lg flex justify-center items-center border border-blueFive bg-blueFive'>
                            <Image width={24} height={24} className='object-cover' src={time} alt='Time Icon'></Image>
                        </div>
                        <p className='text-grayTwentyFive font-medium text-[.875rem] leading-[21px] lg:text-base w-full lg:w-[212px] font-barlow'>
                            Custom Iconography and Illustration
                        </p>
                    </div>
                    <div className='w-full lg:w-[292px] h-[141px] lg:h-[216px] bg-blueSix border border-blueFive  rounded-lg py-[24px] px-[16px] lg:p-[40px] gap-[8px] lg:gap-[24px] flex flex-col justify-center items-start'>
                        <div className='p-[20px] w-[64px] h-[64px] rounded-lg flex justify-center items-center border border-blueFive bg-blueFive'>
                            <Image width={24} height={24} className='object-cover' src={edit} alt='Edit Icon'></Image>
                        </div>
                        <p className='text-grayTwentyFive font-medium text-[.875rem] leading-[21px] lg:text-base w-full lg:w-[212px] font-barlow'>
                            Typography and Color Palette Selection
                        </p>
                    </div>
                    <div className='w-full lg:w-[292px] h-[141px] lg:h-[216px] bg-blueSix border border-blueFive  rounded-lg py-[24px] px-[16px] lg:p-[40px] gap-[8px] lg:gap-[24px] flex flex-col justify-center items-start'>
                        <div className='p-[20px] w-[64px] h-[64px] rounded-lg flex justify-center items-center border border-blueFive bg-blueFive'>
                            <Image width={24} height={24} className='object-cover' src={screens} alt='Screens Icon'></Image>
                        </div>
                        <p className='text-grayTwentyFive font-medium text-[.875rem] leading-[21px] lg:text-base w-full lg:w-[212px] font-barlow'>
                            Responsive Design for Various Devices
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-start gap-10 w-full'>
                <h1 className='text-white leading-[25px] font-instrument lg:leading-[45px] font-medium text-[1.25rem] lg:text-[2.25rem]'>Branding and Identity</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[24px]'>
                    <div className='w-full lg:w-[292px] h-[141px] lg:h-[216px] bg-blueSix border border-blueFive  rounded-lg py-[24px] px-[16px] lg:p-[40px] gap-[8px] lg:gap-[24px] flex flex-col justify-center items-start'>
                        <div className='p-[20px] w-[64px] h-[64px] rounded-lg flex justify-center items-center border border-blueFive bg-blueFive'>
                            <Image width={24} height={24} className='object-cover' src={steps} alt='Steps Icon'></Image>
                        </div>
                        <p className='text-grayTwentyFive font-medium text-[.875rem] leading-[21px] lg:text-base w-full lg:w-[212px] font-barlow'>
                            Logo Design and Visual Identity Development
                        </p>
                    </div>
                    <div className='w-full lg:w-[292px] h-[141px] lg:h-[216px] bg-blueSix border border-blueFive  rounded-lg py-[24px] px-[16px] lg:p-[40px] gap-[8px] lg:gap-[24px] flex flex-col justify-center items-start'>
                        <div className='p-[20px] w-[64px] h-[64px] rounded-lg flex justify-center items-center border border-blueFive bg-blueFive'>
                            <Image width={24} height={24} className='object-cover' src={dir} alt='Direction Icon'></Image>
                        </div>
                        <p className='text-grayTwentyFive font-medium text-[.875rem] leading-[21px] lg:text-base w-full lg:w-[212px] font-barlow'>
                            Brand Strategy and Positioning
                        </p>
                    </div>
                    <div className='w-full lg:w-[292px] h-[141px] lg:h-[216px] bg-blueSix border border-blueFive  rounded-lg py-[24px] px-[16px] lg:p-[40px] gap-[8px] lg:gap-[24px] flex flex-col justify-center items-start'>
                        <div className='p-[20px] w-[64px] h-[64px] rounded-lg flex justify-center items-center border border-blueFive bg-blueFive'>
                            <Image width={24} height={24} className='object-cover' src={branch} alt='Branch Icon'></Image>
                        </div>
                        <p className='text-grayTwentyFive font-medium text-[.875rem] leading-[21px] lg:text-base w-full lg:w-[212px] font-barlow'>
                            Brand Guidelines and Style Guides
                        </p>
                    </div>
                    <div className='w-full lg:w-[292px] h-[141px] lg:h-[216px] bg-blueSix border border-blueFive  rounded-lg py-[24px] px-[16px] lg:p-[40px] gap-[8px] lg:gap-[24px] flex flex-col justify-center items-start'>
                        <div className='p-[20px] w-[64px] h-[64px] rounded-lg flex justify-center items-center border border-blueFive bg-blueFive'>
                            <Image width={24} height={24} className='object-cover' src={book} alt='Book Icon'></Image>
                        </div>
                        <p className='text-grayTwentyFive font-medium text-[.875rem] leading-[21px] lg:text-base w-full lg:w-[212px] font-barlow'>
                            Marketing Collateral Design (Brochures, Business Cards, etc.)
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-start gap-10 w-full'>
                <h1 className='text-white leading-[25px] font-instrument lg:leading-[45px] font-medium text-[1.25rem] lg:text-[2.25rem]'>Tools and Apps</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[24px]'>
                    <div className='w-full lg:w-[292px] h-[141px] lg:h-[216px] bg-blueSix border border-blueFive  rounded-lg py-[24px] px-[16px] lg:p-[40px] gap-[8px] lg:gap-[24px] flex flex-col justify-center items-start'>
                        <div className='p-[20px] w-[64px] h-[64px] rounded-lg flex justify-center items-center border border-blueFive bg-blueFive'>
                            <Image width={24} height={24} className='object-cover' src={steps} alt='Steps Icon'></Image>
                        </div>
                        <p className='text-grayTwentyFive font-medium text-[.875rem] leading-[21px] lg:text-base w-full lg:w-[212px] font-barlow'>
                            FIGMA
                        </p>
                    </div>
                    <div className='w-full lg:w-[292px] h-[141px] lg:h-[216px] bg-blueSix border border-blueFive  rounded-lg py-[24px] px-[16px] lg:p-[40px] gap-[8px] lg:gap-[24px] flex flex-col justify-center items-start'>
                        <div className='p-[20px] w-[64px] h-[64px] rounded-lg flex justify-center items-center border border-blueFive bg-blueFive'>
                            <Image width={24} height={24} className='object-cover' src={dir} alt='Direction Icon'></Image>
                        </div>
                        <p className='text-grayTwentyFive font-medium text-[.875rem] leading-[21px] lg:text-base w-full lg:w-[212px] font-barlow'>
                            Sketch
                        </p>
                    </div>
                    <div className='w-full lg:w-[292px] h-[141px] lg:h-[216px] bg-blueSix border border-blueFive  rounded-lg py-[24px] px-[16px] lg:p-[40px] gap-[8px] lg:gap-[24px] flex flex-col justify-center items-start'>
                        <div className='p-[20px] w-[64px] h-[64px] rounded-lg flex justify-center items-center border border-blueFive bg-blueFive'>
                            <Image width={24} height={24} className='object-cover' src={branch} alt='Branch Icon'></Image>
                        </div>
                        <p className='text-grayTwentyFive font-medium text-[.875rem] leading-[21px] lg:text-base w-full lg:w-[212px] font-barlow'>
                            Adobe XD
                        </p>
                    </div>
                    <div className='w-full lg:w-[292px] h-[141px] lg:h-[216px] bg-blueSix border border-blueFive  rounded-lg py-[24px] px-[16px] lg:p-[40px] gap-[8px] lg:gap-[24px] flex flex-col justify-center items-start'>
                        <div className='p-[20px] w-[64px] h-[64px] rounded-lg flex justify-center items-center border border-blueFive bg-blueFive'>
                            <Image width={24} height={24} className='object-cover' src={book} alt='Book Icon'></Image>
                        </div>
                        <p className='text-grayTwentyFive font-medium text-[.875rem] leading-[21px] lg:text-base w-full lg:w-[212px] font-barlow'>
                            webflow
                        </p>
                    </div>
                    <div className='w-full lg:w-[292px] h-[141px] lg:h-[216px] bg-blueSix border border-blueFive  rounded-lg py-[24px] px-[16px] lg:p-[40px] gap-[8px] lg:gap-[24px] flex flex-col justify-center items-start'>
                        <div className='p-[20px] w-[64px] h-[64px] rounded-lg flex justify-center items-center border border-blueFive bg-blueFive'>
                            <Image width={24} height={24} className='object-cover' src={steps} alt='Steps Icon'></Image>
                        </div>
                        <p className='text-grayTwentyFive font-medium text-[.875rem] leading-[21px] lg:text-base w-full lg:w-[212px] font-barlow'>
                            Adobe Photoshop
                        </p>
                    </div>
                    <div className='w-full lg:w-[292px] h-[141px] lg:h-[216px] bg-blueSix border border-blueFive  rounded-lg py-[24px] px-[16px] lg:p-[40px] gap-[8px] lg:gap-[24px] flex flex-col justify-center items-start'>
                        <div className='p-[20px] w-[64px] h-[64px] rounded-lg flex justify-center items-center border border-blueFive bg-blueFive'>
                            <Image width={24} height={24} className='object-cover' src={dir} alt='Direction Icon'></Image>
                        </div>
                        <p className='text-grayTwentyFive font-medium text-[.875rem] leading-[21px] lg:text-base w-full lg:w-[212px] font-barlow'>
                            Adobe illustrator
                        </p>
                    </div>
                    <div className='w-full lg:w-[292px] h-[141px] lg:h-[216px] bg-blueSix border border-blueFive  rounded-lg py-[24px] px-[16px] lg:p-[40px] gap-[8px] lg:gap-[24px] flex flex-col justify-center items-start'>
                        <div className='p-[20px] w-[64px] h-[64px] rounded-lg flex justify-center items-center border border-blueFive bg-blueFive'>
                            <Image width={24} height={24} className='object-cover' src={branch} alt='Branch Icon'></Image>
                        </div>
                        <p className='text-grayTwentyFive font-medium text-[.875rem] leading-[21px] lg:text-base w-full lg:w-[212px] font-barlow'>
                            Adobe InDesign
                        </p>
                    </div>
                    <div className='w-full lg:w-[292px] h-[141px] lg:h-[216px] bg-blueSix border border-blueFive  rounded-lg py-[24px] px-[16px] lg:p-[40px] gap-[8px] lg:gap-[24px] flex flex-col justify-center items-start'>
                        <div className='p-[20px] w-[64px] h-[64px] rounded-lg flex justify-center items-center border border-blueFive bg-blueFive'>
                            <Image width={24} height={24} className='object-cover' src={book} alt='Book Icon'></Image>
                        </div>
                        <p className='text-grayTwentyFive font-medium text-[.875rem] leading-[21px] lg:text-base w-full lg:w-[212px] font-barlow'>
                            Adobe After Effects
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ConsultingTechnologies
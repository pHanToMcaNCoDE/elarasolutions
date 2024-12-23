"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { IoMdArrowForward } from "react-icons/io";
import swift from '../../public/assets/mobile/prg/swift.svg';
import objc from '../../public/assets/mobile/prg/dotnet.svg';
import kot from '../../public/assets/mobile/prg/kotlin.svg';
import java from '../../public/assets/mobile/prg/java.svg';
import native from '../../public/assets/mobile/prg/react-native.svg';
import flutter from '../../public/assets/mobile/prg/flutter.svg';
import xam from '../../public/assets/mobile/prg/xamarin.svg';
import html from '../../public/assets/mobile/prg/html.svg';
import css from '../../public/assets/mobile/prg/css.svg';
import js from '../../public/assets/mobile/prg/js.svg';
import firebase from '../../public/assets/mobile/prg/firebase.svg';
import aws from '../../public/assets/mobile/prg/aws.svg';
import az from '../../public/assets/mobile/prg/azure.svg';
import gql from '../../public/assets/mobile/prg/graphql.svg';


const MobileOurTechnologiesGeneral = ({tech, techTitle}) => {

    const pathname = usePathname();

  return (
    <div className='w-full xl:max-w-[1320px] mx-auto py-[80px] lg:py-[150px] px-[40px] xl:rounded-[40px] bg-blue h-full xl:min-h-[2000px] flex flex-col justify-center items-center gap-[64px]'>
        <div className='flex flex-col justify-center items-start gap-[40px] w-full'>
            <h1 className='text-white leading-[26px] lg:leading-[45px] text-[1.25rem] lg:text-[2rem] font-semibold lg:font-medium font-instrument'>For iOS Development</h1>
            <div className='grid grid-cols-2 gap-[24px] justify-items-center place-items-center w-full'>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[608px] h-[192px] p-[40px] rounded-lg flex flex-col justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={swift} alt='Swift'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>Swift</p>
                </div>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[608px] h-[192px] p-[40px] rounded-lg flex flex-col justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={objc} alt='Objective-C'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>Objective-C</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-start gap-[40px] w-full'>
            <h1 className='text-white leading-[26px] lg:leading-[45px] text-[1.25rem] lg:text-[2rem] font-semibold lg:font-medium font-instrument'>For Android Development</h1>
            <div className='grid grid-cols-2 gap-[24px] justify-items-center place-items-center w-full'>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[608px] h-[192px] p-[40px] rounded-lg flex flex-col justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={kot} alt='Kotlin'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>Kotlin</p>
                </div>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[608px] h-[192px] p-[40px] rounded-lg flex flex-col justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={java} alt='Java'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>Java</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-start gap-[40px] w-full'>
            <h1 className='text-white leading-[26px] lg:leading-[45px] text-[1.25rem] lg:text-[2rem] font-semibold lg:font-medium font-instrument'>For cross-platform development</h1>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-[24px] justify-items-center place-items-center w-full'>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] p-[40px] rounded-lg flex flex-col justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={native} alt='React Native'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>React Native</p>
                </div>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] p-[40px] rounded-lg flex flex-col justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={flutter} alt='Flutter'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>Flutter</p>
                </div>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] p-[40px] rounded-lg flex flex-col justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={xam} alt='Xamarin'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>Xamarin</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-start gap-[40px] w-full'>
            <h1 className='text-white leading-[26px] lg:leading-[45px] text-[1.25rem] lg:text-[2rem] font-semibold lg:font-medium font-instrument'>For Progressive Web Apps (PWAs)</h1>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-[24px] justify-items-center place-items-center w-full'>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] p-[40px] rounded-lg flex flex-col justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={html} alt='Hyper Text Markup Language'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>HTMl</p>
                </div>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] p-[40px] rounded-lg flex flex-col justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={css} alt='Cascading Style Sheet'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>CSS</p>
                </div>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] p-[40px] rounded-lg flex flex-col justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={js} alt='JavaScript'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>JavaScript</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-start gap-[40px] w-full'>
            <h1 className='text-white leading-[26px] lg:leading-[45px] text-[1.25rem] lg:text-[2rem] font-semibold lg:font-medium font-instrument'>For backend integration and cloud services</h1>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-[24px] justify-items-center place-items-center w-full'>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] p-[40px] rounded-lg flex flex-col justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={firebase} alt='Firebase'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>Firebase</p>
                </div>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] p-[40px] rounded-lg flex flex-col justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={aws} alt='Amazon Web Services'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>AWS</p>
                </div>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] p-[40px] rounded-lg flex flex-col justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={az} alt='Azure'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>Azure</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-start gap-[40px] w-full'>
            <h1 className='text-white leading-[26px] lg:leading-[45px] text-[1.25rem] lg:text-[2rem] font-semibold lg:font-medium font-instrument'>For data exchange and server communication</h1>
            <div className='grid grid-cols-2 gap-[24px] justify-items-center place-items-center w-full'>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[608px] h-[192px] p-[40px] rounded-lg flex flex-col justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={objc} alt='Restful APIs'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>Restful APIs</p>
                </div>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[608px] h-[192px] p-[40px] rounded-lg flex flex-col justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={gql} alt='GraphQL'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>GraphQL</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MobileOurTechnologiesGeneral
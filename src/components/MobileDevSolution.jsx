import Image from 'next/image'
import React from 'react'

import aws from '../../public/assets/cloud/prg/aws.svg';
import azure from '../../public/assets/cloud/prg/azure.svg';
import gcp from '../../public/assets/cloud/prg/gcp.svg';
import docker from '../../public/assets/cloud/prg/docker.svg';
import kub from '../../public/assets/cloud/prg/kubernetes.svg';
import jen from '../../public/assets/cloud/prg/jenkins.svg';
import gitlab from '../../public/assets/cloud/prg/gitlab.svg';
import tForm from '../../public/assets/cloud/prg/terraform.svg';
import rds from '../../public/assets/cloud/prg/aws-rds.svg';
import bQuery from '../../public/assets/cloud/prg/google-big-query.svg';
import sql from '../../public/assets/cloud/prg/sql.svg';
import lambda from '../../public/assets/cloud/prg/aws-lambda.svg';
import gcf from '../../public/assets/cloud/prg/google-cloud-functions.svg';
import aFunc from '../../public/assets/cloud/prg/azure-functions.svg';

const CloudOurTechnologies = () => {
  return (
    <div className='w-full xl:max-w-[1320px] mx-auto py-[80px] lg:py-[150px] px-[40px] xl:rounded-[40px] bg-blue h-full flex flex-col justify-center items-center gap-[64px]'>
        <div className='flex flex-col justify-center items-start gap-[40px] w-full'>
            <h1 className='text-white leading-[26px] lg:leading-[45px] text-[1.25rem] lg:text-[2rem] font-semibold lg:font-medium font-instrument'>Explore Our Mobile Development Solutions</h1>
            <div className='flex flex-col lg:flex-row gap-[8px] lg:gap-[24px] justify-center items-center w-full'>
                <div className='flex gap-[16px] lg:gap-[24px] justify-center items-center w-full lg:w-auto'>
                    <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                        <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                            <Image width={40} height={40} className='object-cover' src={aws} alt='Custom Enterprise Mobile Solutions'></Image>
                        </div>
                        <p className='font-instrument text-grayTwentyFive font-medium text-base'>Custom Enterprise Mobile Solutions</p>
                    </div>
                    <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                        <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                            <Image width={40} height={40} className='object-cover' src={azure} alt='Mobile App Modernisation and Migration'></Image>
                        </div>
                        <p className='font-instrument text-grayTwentyFive font-medium text-base'>Mobile App Modernisation and Migration</p>
                    </div>
                </div>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={gcp} alt='App Integration with Existing Systems'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>App Integration with Existing Systems</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-start gap-[40px] w-full'>
            <div className='flex flex-row gap-[16px] lg:gap-[24px] justify-center items-center w-full'>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[608px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={docker} alt='Native iOS and Android App Development'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>Native iOS and Android App Development</p>
                </div>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[608px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={kub} alt='Cross-Platform Development with Flutter and React Native'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>Cross-Platform Development with Flutter and React Native</p>
                </div>
            </div>
        </div>



        <div className='flex flex-col justify-center items-start gap-[40px] w-full'>
            <h1 className='text-white leading-[26px] lg:leading-[45px] text-[1.25rem] lg:text-[2rem] font-semibold lg:font-medium font-instrument'>Core technologies we work with</h1>
            <div className='flex flex-col lg:flex-row gap-[8px] lg:gap-[24px] justify-center items-center w-full'>
                <div className='flex gap-[16px] lg:gap-[24px] justify-center items-center w-full lg:w-auto'>
                    <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                        <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                            <Image width={40} height={40} className='object-cover' src={aws} alt='Java/Kotlin(Andriod)'></Image>
                        </div>
                        <p className='font-instrument text-grayTwentyFive font-medium text-base'>Java/Kotlin(Andriod)</p>
                    </div>
                    <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                        <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                            <Image width={40} height={40} className='object-cover' src={azure} alt='Swift/Objective-C(IOS)'></Image>
                        </div>
                        <p className='font-instrument text-grayTwentyFive font-medium text-base'>Swift/Objective-C(IOS)</p>
                    </div>
                </div>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={gcp} alt='Dart(Flutter)'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>Dart(Flutter)</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-start gap-[40px] w-full'>
            <div className='flex flex-row gap-[16px] lg:gap-[24px] justify-center items-center w-full'>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[608px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={docker} alt='Javascript(React Native, Ionic, Cordova)'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>Javascript(React Native, Ionic, Cordova)</p>
                </div>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[608px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={kub} alt='C#(Xamarin)'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>C#(Xamarin)</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CloudOurTechnologies
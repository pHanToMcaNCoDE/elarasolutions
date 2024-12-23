import Image from 'next/image'
import React from 'react'

import had from '../../public/assets/security/prg/hadoop.svg';
import rsa from '../../public/assets/security/prg/rsa.svg';
import pal from '../../public/assets/security/prg/palo.svg';
import cisco from '../../public/assets/security/prg/cisco.svg';
import fort from '../../public/assets/security/prg/fortinet.svg';
import cro from '../../public/assets/security/prg/crowdstrike.svg';
import mc from '../../public/assets/security/prg/mcafee.svg';
import sop from '../../public/assets/security/prg/sophos.svg';
import okt from '../../public/assets/security/prg/okta.svg';
import auth from '../../public/assets/security/prg/auth0.svg';
import mad from '../../public/assets/security/prg/azure-active.svg';
import azure from '../../public/assets/cloud/prg/azure.svg';
import gcp from '../../public/assets/cloud/prg/gcp.svg';

const SecurityOurTechnologies = () => {
  return (
    <div className='w-full xl:max-w-[1320px] mx-auto py-[80px] lg:py-[150px] px-[40px] xl:rounded-[40px] bg-blue h-full xl:min-h-[2000px] flex flex-col justify-center items-center gap-[64px]'>
        <div className='flex flex-col justify-center items-start gap-[40px] w-full'>
            <h1 className='text-white leading-[26px] lg:leading-[45px] text-[1.25rem] lg:text-[2rem] font-semibold lg:font-medium font-instrument'>Encryption Standards</h1>
            <div className='flex flex-col lg:flex-row gap-[8px] lg:gap-[24px] justify-center items-center w-full'>
                <div className='flex gap-[16px] lg:gap-[24px] justify-center items-center w-full lg:w-auto'>
                    <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                        <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                            <Image width={40} height={40} className='object-cover' src={had} alt='AES-256'></Image>
                        </div>
                        <p className='font-instrument text-grayTwentyFive font-medium text-base'>AES-256</p>
                    </div>
                    <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                        <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                            <Image width={40} height={40} className='object-cover' src={rsa} alt='RSA'></Image>
                        </div>
                        <p className='font-instrument text-grayTwentyFive font-medium text-base'>RSA</p>
                    </div>
                </div>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={had} alt='SSL/TLS'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>SSL/TLS</p>
                </div>
            </div>
        </div>

        <div className='flex flex-col justify-center items-start gap-[40px] w-full'>
            <h1 className='text-white leading-[26px] lg:leading-[45px] text-[1.25rem] lg:text-[2rem] font-semibold lg:font-medium font-instrument'>Firewall Technologies</h1>
            <div className='flex flex-col lg:flex-row gap-[8px] lg:gap-[24px] justify-center items-center w-full'>
                <div className='flex gap-[16px] lg:gap-[24px] justify-center items-center w-full lg:w-auto'>
                    <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                        <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                            <Image width={40} height={40} className='object-cover' src={pal} alt='Palo Alto'></Image>
                        </div>
                        <p className='font-instrument text-grayTwentyFive font-medium text-base'>Palo Alto</p>
                    </div>
                    <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                        <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                            <Image width={40} height={40} className='object-cover' src={cisco} alt='Cisco ASA'></Image>
                        </div>
                        <p className='font-instrument text-grayTwentyFive font-medium text-base'>Cisco ASA</p>
                    </div>
                </div>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={fort} alt='Fortinet'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>Fortinet</p>
                </div>
            </div>
        </div>

        <div className='flex flex-col justify-center items-start gap-[40px] w-full'>
            <h1 className='text-white leading-[26px] lg:leading-[45px] text-[1.25rem] lg:text-[2rem] font-semibold lg:font-medium font-instrument'>Endpoint Protection</h1>
            <div className='flex flex-col lg:flex-row gap-[8px] lg:gap-[24px] justify-center items-center w-full'>
                <div className='flex gap-[16px] lg:gap-[24px] justify-center items-center w-full lg:w-auto'>
                    <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                        <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                            <Image width={40} height={40} className='object-cover' src={cro} alt='CrowdStrike'></Image>
                        </div>
                        <p className='font-instrument text-grayTwentyFive font-medium text-base'>CrowdStrike</p>
                    </div>
                    <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                        <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                            <Image width={40} height={40} className='object-cover' src={mc} alt='McAfee'></Image>
                        </div>
                        <p className='font-instrument text-grayTwentyFive font-medium text-base'>McAfee</p>
                    </div>
                </div>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={sop} alt='Sophos'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>Sophos</p>
                </div>
            </div>
        </div>

        <div className='flex flex-col justify-center items-start gap-[40px] w-full'>
            <h1 className='text-white leading-[26px] lg:leading-[45px] text-[1.25rem] lg:text-[2rem] font-semibold lg:font-medium font-instrument'>Cloud Security Platforms</h1>
            <div className='flex flex-col lg:flex-row gap-[8px] lg:gap-[24px] justify-center items-center w-full'>
                <div className='flex gap-[16px] lg:gap-[24px] justify-center items-center w-full lg:w-auto'>
                    <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                        <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                            <Image width={40} height={40} className='object-cover' src={had} alt='AWS Security'></Image>
                        </div>
                        <p className='font-instrument text-grayTwentyFive font-medium text-base'>AWS Security</p>
                    </div>
                    <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                        <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                            <Image width={40} height={40} className='object-cover' src={gcp} alt='Google Cloud Security'></Image>
                        </div>
                        <p className='font-instrument text-grayTwentyFive font-medium text-base'>Google Cloud Security</p>
                    </div>
                </div>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={azure} alt='Microsoft Azure Security'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>Microsoft Azure Security</p>
                </div>
            </div>
        </div>

        <div className='flex flex-col justify-center items-start gap-[40px] w-full'>
            <h1 className='text-white leading-[26px] lg:leading-[45px] text-[1.25rem] lg:text-[2rem] font-semibold lg:font-medium font-instrument'>Identity Management</h1>
            <div className='flex flex-col lg:flex-row gap-[8px] lg:gap-[24px] justify-center items-center w-full'>
                <div className='flex gap-[16px] lg:gap-[24px] justify-center items-center w-full lg:w-auto'>
                    <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                        <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                            <Image width={40} height={40} className='object-cover' src={okt} alt='Okta'></Image>
                        </div>
                        <p className='font-instrument text-grayTwentyFive font-medium text-base'>Okta</p>
                    </div>
                    <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                        <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                            <Image width={40} height={40} className='object-cover' src={auth} alt='Auth0'></Image>
                        </div>
                        <p className='font-instrument text-grayTwentyFive font-medium text-base'>Auth0</p>
                    </div>
                </div>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={mad} alt='Microsoft Azure AD'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>Microsoft Azure AD</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecurityOurTechnologies
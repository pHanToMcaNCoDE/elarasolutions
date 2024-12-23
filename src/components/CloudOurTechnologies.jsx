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
    <div className='w-full xl:max-w-[1320px] mx-auto py-[80px] lg:py-[150px] px-[40px] xl:rounded-[40px] bg-blue h-full xl:min-h-[2000px] flex flex-col justify-center items-center gap-[64px]'>
        <div className='flex flex-col justify-center items-start gap-[40px] w-full'>
            <h1 className='text-white leading-[26px] lg:leading-[45px] text-[1.25rem] lg:text-[2rem] font-semibold lg:font-medium font-instrument'>Cloud Providers</h1>
            <div className='flex flex-col lg:flex-row gap-[8px] lg:gap-[24px] justify-center items-center w-full'>
                <div className='flex gap-[16px] lg:gap-[24px] justify-center items-center w-full lg:w-auto'>
                    <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                        <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                            <Image width={40} height={40} className='object-cover' src={aws} alt='Amazon Web Services'></Image>
                        </div>
                        <p className='font-instrument text-grayTwentyFive font-medium text-base'>AWS</p>
                    </div>
                    <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                        <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                            <Image width={40} height={40} className='object-cover' src={azure} alt='azure'></Image>
                        </div>
                        <p className='font-instrument text-grayTwentyFive font-medium text-base'>Microsoft Azure</p>
                    </div>
                </div>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={gcp} alt='Google Cloud Platform (GCP)'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>Google Cloud Platform (GCP)</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-start gap-[40px] w-full'>
            <h1 className='text-white leading-[26px] lg:leading-[45px] text-[1.25rem] lg:text-[2rem] font-semibold lg:font-medium font-instrument'>Containerisation</h1>
            <div className='flex flex-row gap-[16px] lg:gap-[24px] justify-center items-center w-full'>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[608px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={docker} alt='Docker'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>Docker</p>
                </div>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[608px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={kub} alt='Kubernetes'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>Kubernetes</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-start gap-[40px] w-full'>
            <h1 className='text-white leading-[26px] lg:leading-[45px] text-[1.25rem] lg:text-[2rem] font-semibold lg:font-medium font-instrument'>DevOps Tools</h1>
            <div className='flex flex-col lg:flex-row gap-[8px] lg:gap-[24px] justify-center items-center w-full'>
                <div className='flex gap-[16px] lg:gap-[24px] justify-center items-center w-full lg:w-auto'>
                    <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                        <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                            <Image width={40} height={40} className='object-cover' src={jen} alt='Jenkins'></Image>
                        </div>
                        <p className='font-instrument text-grayTwentyFive font-medium text-base'>Jenkins</p>
                    </div>
                    <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                        <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                            <Image width={40} height={40} className='object-cover' src={gitlab} alt='GitLab CI/CD'></Image>
                        </div>
                        <p className='font-instrument text-grayTwentyFive font-medium text-base'>GitLab CI/CD</p>
                    </div>
                </div>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={tForm} alt='Terraform'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>Terraform</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-start gap-[40px] w-full'>
            <h1 className='text-white leading-[26px] lg:leading-[45px] text-[1.25rem] lg:text-[2rem] font-semibold lg:font-medium font-instrument'>Database Solutions</h1>
            <div className='flex flex-col lg:flex-row gap-[8px] lg:gap-[24px] justify-center items-center w-full'>
                <div className='flex gap-[16px] lg:gap-[24px] justify-center items-center w-full lg:w-auto'>
                    <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                        <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                            <Image width={40} height={40} className='object-cover' src={rds} alt='Amazon RDS'></Image>
                        </div>
                        <p className='font-instrument text-grayTwentyFive font-medium text-base'>Amazon RDS</p>
                    </div>
                    <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                        <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                            <Image width={40} height={40} className='object-cover' src={bQuery} alt='Google BigQuery'></Image>
                        </div>
                        <p className='font-instrument text-grayTwentyFive font-medium text-base'>Google BigQuery</p>
                    </div>
                </div>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={sql} alt='Azure SQL'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>Azure SQL</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-start gap-[40px] w-full'>
            <h1 className='text-white leading-[26px] lg:leading-[45px] text-[1.25rem] lg:text-[2rem] font-semibold lg:font-medium font-instrument'>For backend integration and cloud services</h1>
            <div className='flex flex-col lg:flex-row gap-[8px] lg:gap-[24px] justify-center items-center w-full'>
                <div className='flex gap-[16px] lg:gap-[24px] justify-center items-center w-full lg:w-auto'>
                    <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                        <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                            <Image width={40} height={40} className='object-cover' src={lambda} alt='Azure Lambda'></Image>
                        </div>
                        <p className='font-instrument text-grayTwentyFive font-medium text-base'>Azure Lambda</p>
                    </div>
                    <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                        <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                            <Image width={40} height={40} className='object-cover' src={gcf} alt='Google Cloud Functions'></Image>
                        </div>
                        <p className='font-instrument text-grayTwentyFive font-medium text-base'>Google Cloud FUnctions</p>
                    </div>
                </div>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={aFunc} alt='Azure Functions'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>Azure Functions</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CloudOurTechnologies
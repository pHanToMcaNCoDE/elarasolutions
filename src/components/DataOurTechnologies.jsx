import Image from 'next/image'
import React from 'react'

import had from '../../public/assets/data/prg/hadoop.svg';
import spa from '../../public/assets/data/prg/apache-spark.svg';
import kaf from '../../public/assets/data/prg/kafka.svg';
import bquery from '../../public/assets/data/prg/bquery.svg';
import sno from '../../public/assets/data/prg/snowflake.svg';
import rshift from '../../public/assets/data/prg/rshift.svg';
import bi from '../../public/assets/data/prg/bi.svg';
import tab from '../../public/assets/data/prg/tab.svg';
import loo from '../../public/assets/data/prg/looker.svg';
import tfl from '../../public/assets/data/prg/tflow.svg';
import lea from '../../public/assets/data/prg/slearn.svg';
import pyt from '../../public/assets/data/prg/pytorch.svg';
import aws from '../../public/assets/cloud/prg/aws.svg';
import azure from '../../public/assets/cloud/prg/azure.svg';
import gcp from '../../public/assets/cloud/prg/gcp.svg';

const DataOurTechnologies = () => {
  return (
    <div className='w-full xl:max-w-[1320px] mx-auto py-[80px] lg:py-[150px] px-[40px] xl:rounded-[40px] bg-blue h-full xl:min-h-[2000px] flex flex-col justify-center items-center gap-[64px]'>
        <div className='flex flex-col justify-center items-start gap-[40px] w-full'>
            <h1 className='text-white leading-[26px] lg:leading-[45px] text-[1.25rem] lg:text-[2rem] font-semibold lg:font-medium font-instrument'>Big Data</h1>
            <div className='flex flex-col lg:flex-row gap-[8px] lg:gap-[24px] justify-center items-center w-full'>
                <div className='flex gap-[16px] lg:gap-[24px] justify-center items-center w-full lg:w-auto'>
                    <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                        <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                            <Image width={40} height={40} className='object-cover' src={had} alt='Apache Hadoop'></Image>
                        </div>
                        <p className='font-instrument text-grayTwentyFive font-medium text-base'>Apache Hadoop</p>
                    </div>
                    <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                        <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                            <Image width={40} height={40} className='object-cover' src={spa} alt='Apache Spark'></Image>
                        </div>
                        <p className='font-instrument text-grayTwentyFive font-medium text-base'>Apache Spark</p>
                    </div>
                </div>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={kaf} alt='Apache Kafka'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>Apache Kafka</p>
                </div>
            </div>
        </div>


        <div className='flex flex-col justify-center items-start gap-[40px] w-full'>
            <h1 className='text-white leading-[26px] lg:leading-[45px] text-[1.25rem] lg:text-[2rem] font-semibold lg:font-medium font-instrument'>Data Warehousing</h1>
            <div className='flex flex-col lg:flex-row gap-[8px] lg:gap-[24px] justify-center items-center w-full'>
                <div className='flex gap-[16px] lg:gap-[24px] justify-center items-center w-full lg:w-auto'>
                    <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                        <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                            <Image width={40} height={40} className='object-cover' src={bquery} alt='Google Big Query'></Image>
                        </div>
                        <p className='font-instrument text-grayTwentyFive font-medium text-base'>Google Big Query</p>
                    </div>
                    <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                        <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                            <Image width={40} height={40} className='object-cover' src={sno} alt='Snowflake'></Image>
                        </div>
                        <p className='font-instrument text-grayTwentyFive font-medium text-base'>Snowflake</p>
                    </div>
                </div>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={rshift} alt='Amazon Redshift'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>Amazon Redshift</p>
                </div>
            </div>
        </div>


        <div className='flex flex-col justify-center items-start gap-[40px] w-full'>
            <h1 className='text-white leading-[26px] lg:leading-[45px] text-[1.25rem] lg:text-[2rem] font-semibold lg:font-medium font-instrument'>BI & Analytics</h1>
            <div className='flex flex-col lg:flex-row gap-[8px] lg:gap-[24px] justify-center items-center w-full'>
                <div className='flex gap-[16px] lg:gap-[24px] justify-center items-center w-full lg:w-auto'>
                    <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                        <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                            <Image width={40} height={40} className='object-cover' src={bi} alt='Power BI'></Image>
                        </div>
                        <p className='font-instrument text-grayTwentyFive font-medium text-base'>Power BI</p>
                    </div>
                    <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                        <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                            <Image width={40} height={40} className='object-cover' src={tab} alt='Tableau'></Image>
                        </div>
                        <p className='font-instrument text-grayTwentyFive font-medium text-base'>Tableau</p>
                    </div>
                </div>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={loo} alt='Looker'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>Looker</p>
                </div>
            </div>
        </div>


        <div className='flex flex-col justify-center items-start gap-[40px] w-full'>
            <h1 className='text-white leading-[26px] lg:leading-[45px] text-[1.25rem] lg:text-[2rem] font-semibold lg:font-medium font-instrument'>Machine Learning</h1>
            <div className='flex flex-col lg:flex-row gap-[8px] lg:gap-[24px] justify-center items-center w-full'>
                <div className='flex gap-[16px] lg:gap-[24px] justify-center items-center w-full lg:w-auto'>
                    <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                        <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                            <Image width={40} height={40} className='object-cover' src={tfl} alt='TensorFlow'></Image>
                        </div>
                        <p className='font-instrument text-grayTwentyFive font-medium text-base'>TensorFlow</p>
                    </div>
                    <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                        <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                            <Image width={40} height={40} className='object-cover' src={lea} alt='Scikit-Learn'></Image>
                        </div>
                        <p className='font-instrument text-grayTwentyFive font-medium text-base'>Scikit-Learn</p>
                    </div>
                </div>
                <div className='bg-blueSix border border-blueFive w-full xl:w-[397.33px] h-[192px] py-[24px] px-[16px] lg:p-[40px] rounded-lg flex flex-col justify-center lg:justify-start items-start gap-[24px]'>
                    <div className='bg-grayEleven border-[.8px] gap-[8px] rounded-lg w-[64px] h-[64px] flex justify-center items-center border-blueFive py-[9.6px]'>
                        <Image width={40} height={40} className='object-cover' src={pyt} alt='PyTorch'></Image>
                    </div>
                    <p className='font-instrument text-grayTwentyFive font-medium text-base'>PyTorch</p>
                </div>
            </div>
        </div>


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
    </div>
  )
}

export default DataOurTechnologies
import React from 'react'

const Page = () => {
  return (
    <section className='bg-grayThree py-[221px]'>
        <div className='max-w-[1016px] mx-auto gap-[40px] flex flex-col justify-center items-start'>
            <div className='w-full flex flex-col lg:flex-row justify-between items-center'>
                <h1 className='text-blue font-bold leading-[56px] text-[2.5rem]'>Privacy Policy</h1>
                <div className='pt-[20px] pb-[16px] w-[240px] flex justify-center items-center gap-[16px] h-[76px]'>
                    <button className='w-[120px] h-[40px] flex justify-center items-center p-[8px] border-[.4px] border-greenTwo text-greenTwo rounded-[4px] text-[1.125rem] leading-[24px] font-normal font-instrument'>English</button>
                    <button className='w-[120px] h-[40px] flex justify-center items-center p-[8px] border-[.4px] border-transparent text-[1.125rem] leading-[24px] font-normal font-instrument text-blueTwelve'>Deutsch</button>
                </div>
            </div>

            
        </div>
    </section>
  )
}

export default Page
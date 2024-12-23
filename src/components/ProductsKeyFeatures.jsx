import React from 'react'

const ProductsKeyFeatures = ({features}) => {
  return (
    <section className='py-[120px] lg:py-[160px] px-[16px] lg:px-[120px] w-full min-h-screen gap-[40px] lg:gap-[62px] flex flex-col justify-center items-center'>
        <div className='gap-[12px] flex flex-col justify-center items-center text-center font-instrument'>
            <p className='uppercase leading-[12px] font-medium text-[.75rem] lg:text-[.875rem] text-greenTwo'>here when you need it</p>
            <h1 className='text-blue leading-[38.4px] lg:leading-[67.2px] text-[2rem] lg:text-[3.5rem] font-bold font-instrument'>Key Features</h1>
        </div>
        <div className='max-w-[1200px] mx-auto gap-[40px] lg:gap-[36px] grid grid-cols-1 md:grid-cols-2 justify-items-center place-items-center'>
            {
                features.map((feature) => (
                    <div key={feature.id} className={`${feature.id === 2 || feature.id === 3 || feature.id === 6 ? 'bg-greenTwo' : 'bg-blue'} w-[328px] md:w-full xl:w-[582px] h-[320px] lg:h-[360px] rounded-lg lg:rounded-[16px] px-[16px] py-[40px] lg:p-[32px] gap-[24px] lg:gap-[110px] flex flex-col justify-between items-start`}>
                        <p className='text-white font-medium leading-[27px] xl:leading-[33px] text-[1.125rem] xl:text-[1.275rem]'>{feature.name}</p>
                        <p className='text-gray font-medium leading-[27px] xl:leading-[36px] text-[1.125rem] xl:text-[1.1rem]'>{feature.desc}</p>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default ProductsKeyFeatures
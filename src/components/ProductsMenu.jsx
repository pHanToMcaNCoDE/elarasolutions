import Link from 'next/link'
import React from 'react'
import { IoArrowForwardOutline } from 'react-icons/io5'

const ProductsMenu = () => {
  return (
    <div className='p-[24px] flex flex-col justify-start items-start gap-[24px] w-full xl:w-[1202px] xl:h-[248px] xl:grid xl:grid-cols-4 xl:justify-items-center xl:place-items-center xl:gap-[40px]'>
        <Link href={`/core-banking`} className='flex justify-between items-center w-full text-green font-medium font-instrument leading-[28.8px] text-[1.125rem]'>
            Core Banking
            <IoArrowForwardOutline></IoArrowForwardOutline>
        </Link>
        <Link href={`/retail-banking`} className='flex justify-between items-center w-full text-green font-medium font-instrument leading-[28.8px] text-[1.125rem]'>
            Retail Banking
            <IoArrowForwardOutline></IoArrowForwardOutline>
        </Link>
        <Link href={`/corporate-banking`} className='flex justify-between items-center w-full text-green font-medium font-instrument leading-[28.8px] text-[1.125rem]'>
            Corporate Banking
            <IoArrowForwardOutline></IoArrowForwardOutline>
        </Link>
        <Link href={`/agency-banking`} className='flex justify-between items-center w-full text-green font-medium font-instrument leading-[28.8px] text-[1.125rem]'>
            Agency Banking
            <IoArrowForwardOutline></IoArrowForwardOutline>
        </Link>
        <Link href={`/lending-services`} className='flex justify-between items-center w-full text-green font-medium font-instrument leading-[28.8px] text-[1.125rem]'>
            Lending Services
            <IoArrowForwardOutline></IoArrowForwardOutline>
        </Link>
        <Link href={`/loan-engine`} className='flex justify-between items-center w-full text-green font-medium font-instrument leading-[28.8px] text-[1.125rem]'>
            Loan Engine
            <IoArrowForwardOutline></IoArrowForwardOutline>
        </Link>
        <Link href={`/lifestyle-services`} className='flex justify-between items-center w-full text-green font-medium font-instrument leading-[28.8px] text-[1.125rem]'>
            Lifestyle Services
            <IoArrowForwardOutline></IoArrowForwardOutline>
        </Link>
        <Link href={`/ticketing-services`} className='flex justify-between items-center w-full text-green font-medium font-instrument leading-[28.8px] text-[1.125rem]'>
            Ticketing Services
            <IoArrowForwardOutline></IoArrowForwardOutline>
        </Link>
    </div>
  )
}

export default ProductsMenu
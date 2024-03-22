import React from 'react'
import Header from '../components/Header'
import CardImage from './../assets/images/CreditCard.png'
import MasterCard from './../assets/images/MastercardIcon.svg'
import Visa from './../assets/images/visa.svg'
import Image from "next/image";
import { IoWalletSharp } from 'react-icons/io5';
import { FaPaypal } from 'react-icons/fa';
import Invoices from '../components/Invoices'



type Props = {}

export default function BilingPage({ }: Props) {
  return (
    <>
      <section>
        <Header title='Billing' />
      </section>
      <section className='flex flex justify-center gap-5 flex-wrap'>
        <div>
          <div className='flex justify-between w-[989px]'>
            <div>
              <Image width={461} src={CardImage} alt='card' />
            </div>
            <div className='bg-white w-[240px] h-[240px] flex flex-col justify-center items-center rounded-[13px]'>
              <div className='text-[40px] text-white bg-[#4FD1C5] p-3 rounded-[13px]'>
                <IoWalletSharp />
              </div>
              <div className='flex flex-col items-center border-b-[1px] pt-5 pb-2'>
                <p className='font-bold text-[18px] text-[#2D3748]'>Salary</p>
                <p className='text-[#A0AEC0] text-[12px]'>Belong Interactive</p>
              </div>
              <span className='font-bold text-[18px] text-[#2D3748] mt-[10px]'>+$2000</span>
            </div>
            <div className='bg-white w-[240px] h-[240px] flex flex-col justify-center items-center rounded-[13px]'>
              <div className='text-[40px] text-white bg-[#4FD1C5] p-3 rounded-[13px]'>
                <FaPaypal />
              </div>
              <div className='flex flex-col items-center border-b-[1px] pt-5 pb-2'>
                <p className='font-bold text-[18px] text-[#2D3748]'>Paypal</p>
                <p className='text-[#A0AEC0] text-[12px]'>Freelance Payment</p>
              </div>
              <span className='font-bold text-[18px] text-[#2D3748] mt-[10px]'>$455.00</span>
            </div>
          </div>
          <div className='w-[989px] h-[172px] bg-white p-5 rounded-[13px] mt-[20px]'>
            <div className='flex justify-between'>
              <p className='text-[#2D3748] text-[14px] font-bold'>Payment Method</p>
              <button className='text-[10px] font-bold pt-2 pr-3 pl-3 pb-2 bg-black text-white rounded-[10px]'>ADD A NEW CARD</button>
            </div>
            <div className='flex justify-between mt-[40px]'>
              <div className='relative'>
                <input className='border p-4 w-[458px] rounded-[10px] pl-[50px]' placeholder='7812 2139 0823 XXXX' type="number" />
                <Image className='absolute top-[37%] left-[4%]' src={MasterCard} alt='#' />
              </div>
              <div className='relative'>
                <input className='border p-4 w-[458px] rounded-[10px] pl-[50px]' placeholder='7812 2139 0823 XXXX' type="number" />
                <Image className='absolute top-[42%] left-[4%]' src={Visa} alt='#' />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Invoices />
        </div>
      </section>
    </>
  )
}
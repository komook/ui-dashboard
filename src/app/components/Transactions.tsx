import React from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import { RiCalendarEventLine } from 'react-icons/ri';
import { TbExclamationMark } from 'react-icons/tb';

const TransactionsData = [
  {
    name: 'Netflix',
    data: '27 March 2020, at 12:30 PM',
    money: '-$2500',
  },
  {
    name: 'Apple',
    data: '27 March 2020, at 12:30 PM',
    money: '+$2500',
  },
  {
    name: 'Stripe',
    data: '26 March 2020, at 13:45 PM',
    money: '+$800',
  },
  {
    name: 'HubSpot',
    data: '26 March 2020, at 12:30 PM',
    money: '+$1700',
  },
  {
    name: 'Webflow',
    data: '26 March 2020, at 05:00 AM',
    money: 'Pending',
  },
  {
    name: 'Microsoft',
    data: '26 March 2020, at 05:00 AM',
    money: '-$987',
  },
]
const arrow = (d: string) => {
  if (d[0] === '+') {
    return (
      <div className='p-3 w-[42px]  border rounded-full border-[#48BB78]'>
        <FaArrowUp className='text-[#48BB78] ' />
      </div>
    )
  } if (d[0] === '-') {
    return (
      <div className='p-3 w-[42px]  border rounded-full border-[#E53E3E]'>
        <FaArrowDown className='text-[#E53E3E] ' />
      </div>
    )
  }
  else {
    return (
      <div className='p-3 w-[42px]  border rounded-full border-[#A0AEC0]'>
        <TbExclamationMark className='text-[#A0AEC0] ' />
      </div>
    )

  }
};
const changeColor = (d:string) => {
  if(d[0] === '+'){
    return(
      <div className='text-[#48BB78] font-bold text-[14px]'>{d}</div>
    )
  }if(d[0] === '-'){
    return(
      <div className='text-[#E53E3E] font-bold text-[14px]'>{d}</div>
    )
  }else{
    return(
      <div className='text-[#2D3748] font-bold text-[14px]'>{d}</div>
    )
  }
}

export default function Transactions() {
  return (
    <div className='w-[674px] h-[538px] bg-white rounded-[12px] p-5'>
      <div className='flex justify-between pb-5'>
        <div className='text-[#2D3748] font-bold text-[18px]'>Your Transactions</div>
        <div className='flex items-center jusitfy-center gap-1 text-[#A0AEC0] font-bold text-[14px]'><RiCalendarEventLine />23 - 30 March 2020</div>
      </div>
      {TransactionsData.map((d) => (
        <div className='flex items-center justify-between pt-3 pb-3'>
          <div className='flex gap-[10px]'>
            <div>
              {arrow(d.money)}
            </div>
            <div>
              <div>{d.name}</div>
              <div>{d.data}</div>
            </div>
          </div>
          <div>{changeColor(d.money)}</div>
        </div>
      ))}
    </div>
  )
}
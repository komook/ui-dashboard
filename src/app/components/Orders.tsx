import React from 'react'
import { FcAndroidOs, FcContacts, FcDocument, FcEngineering, FcPicture, FcSimCard } from 'react-icons/fc'

type Props = {}


const OrdersData = [
    {
        name: '$2400, Design changes',
        data: '22 DEC 7:20 PM',
        icon: <FcAndroidOs />,
    },
    {
        name: 'New order #4219423',
        data: '21 DEC 11:21 PM',
        icon: <FcContacts />,
    },
    {
        name: 'Server Payments for April',
        data: '21 DEC 9:28 PM',
        icon: <FcDocument />,
    },
    {
        name: 'New card added for order #3210145',
        data: '20 DEC 3:52 PM',
        icon: <FcPicture />,
    },
    {
        name: 'Unlock packages for Development',
        data: '19 DEC 11:35 PM',
        icon: <FcSimCard />,
    },
    {
        name: 'New order #9851258',
        data: '18 DEC 4:41 PM',
        icon: <FcEngineering />,
    },
]

export default function Orders({}: Props) {
  return (
    <div className='flex flex-col w-[519px] h-[519px] bg-white p-8 rounded-[15px] max-[1625px]:w-[400px]'>
        <div className='mb-[55px]'>
            <p className='text-[18px] font-bold'>Orders overview</p>
            <div><span className='text-green-500'>+30%</span> this month</div>
        </div>
        {OrdersData.map((d) =>(
            <div className='border-l-[2px] pl-8 pb-5 relative'>
                <div className='absolute bg-white p-1 top-[0px] left-[-17px] text-[25px]'>{d.icon}</div>
                <p className='text-[14px] font-bold'>{d.name}</p>
                <p className='text-[#A0AEC0] text-[12px]'>{d.data}</p>
            </div>
        ))}
    </div>
  )
}
'use client'

import React,{ useState } from 'react'
import { BsFileEarmarkPdfFill } from 'react-icons/bs'
import { Button, Modal } from 'antd';


let Data = [
  {
    data: 'March, 01, 2020',
    number: '#MS-415646',
    price: '$180',
    icon: <BsFileEarmarkPdfFill />,
    textIcon: 'PDF',
  },
  {
    data: 'February, 10, 2021',
    number: '#RV-126749',
    price: '$250',
    icon: <BsFileEarmarkPdfFill />,
    textIcon: 'PDF',
  },
  {
    data: 'April, 05, 2020',
    number: '#FB-212562',
    price: '$560',
    icon: <BsFileEarmarkPdfFill />,
    textIcon: 'PDF',
  },
  {
    data: 'June, 25, 2019',
    number: '#QW-103578',
    price: '$120',
    icon: <BsFileEarmarkPdfFill />,
    textIcon: 'PDF',
  },
  {
    data: 'March, 01, 2019',
    number: '#AR-803481',
    price: '$300',
    icon: <BsFileEarmarkPdfFill />,
    textIcon: 'PDF',
  },
  {
    data: 'March, 01, 2020',
    number: '#MS-415646',
    price: '$180',
    icon: <BsFileEarmarkPdfFill />,
    textIcon: 'PDF',
  },
  {
    data: 'February, 10, 2021',
    number: '#RV-126749',
    price: '$250',
    icon: <BsFileEarmarkPdfFill />,
    textIcon: 'PDF',
  },
  {
    data: 'April, 05, 2020',
    number: '#FB-212562',
    price: '$560',
    icon: <BsFileEarmarkPdfFill />,
    textIcon: 'PDF',
  },
  {
    data: 'June, 25, 2019',
    number: '#QW-103578',
    price: '$120',
    icon: <BsFileEarmarkPdfFill />,
    textIcon: 'PDF',
  },
  {
    data: 'March, 01, 2019',
    number: '#AR-803481',
    price: '$300',
    icon: <BsFileEarmarkPdfFill />,
    textIcon: 'PDF',
  },
]
let previeData = Data.slice(0, 5)



;
export default function Invoices() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  }

  return (
    <>
      <Modal title="Invoices" open={isModalOpen} footer={false} onCancel={handleCancel}>
        {Data.map((d) => (
          <div className='flex justify-between items-center p-3'>
          <div className='flex flex-col'>
            <div className='font-bold text-[14px] text-[#2D3748]'>{d.data}</div>
            <div className='font-bold text-[12px] text-[#A0AEC0]'>{d.number}</div>

          </div>
          <div className='flex items-center'>
            <div className='font-bold text-[12px] text-[#A0AEC0] mr-[10px]'>{d.price}</div>
            {d.icon}
            <div className='font-bold text-[10px] text-[#2D3748]' >{d.textIcon}</div>
          </div>
        </div>
        ))}
      </Modal>
      <div className='w-[584px] h-[432px] bg-white p-2 rounded-[13px]'>
        <div className='flex justify-between p-3'>
          <div className='font-bold text-[18px] text-[#2D3748]'>Invoices</div>
          <div onClick={showModal} className='text-[#4FD1C5] text-[10px] pt-1 pb-1 pr-5 pl-5 border-[#4FD1C5] border rounded-[5px] cursor-pointer hover:bg-[#4FD1C5] hover:text-white transition'> VIEW ALL</div>
        </div>
        {previeData.map((d) => (
          <div className='flex justify-between items-center p-3'>
            <div className='flex flex-col'>
              <div className='font-bold text-[14px] text-[#2D3748]'>{d.data}</div>
              <div className='font-bold text-[12px] text-[#A0AEC0]'>{d.number}</div>

            </div>
            <div className='flex items-center'>
              <div className='font-bold text-[12px] text-[#A0AEC0] mr-[10px]'>{d.price}</div>
              {d.icon}
              <div className='font-bold text-[10px] text-[#2D3748]' >{d.textIcon}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
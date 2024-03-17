import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className='flex float-right pt-8 pb-8'>
        <a href="" className='text-[12px] text-[#A0AEC0]'>Creative Tim</a>
        <a href="" className='text-[12px] text-[#A0AEC0] ml-[32px]'>Simmmple</a>
        <a href="" className='text-[12px] text-[#A0AEC0] ml-[32px]'>Blog</a>
        <a href="" className='text-[12px] text-[#A0AEC0] ml-[32px]'>License</a>
    </div>
  )
}
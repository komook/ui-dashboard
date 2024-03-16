import React from 'react'
import { FaBell } from 'react-icons/fa';
import { IoIosSettings } from 'react-icons/io';
import { IoPerson } from 'react-icons/io5';

type HeaderProps = {
    title: string;
}

export default function Header(props: HeaderProps) {
    
    return (
        <div className='flex justify-between items-center w-full'>
            <p className='font-bold text-[20px] ml-[50%]'>{props.title}</p>
            <div className='flex items-center gap-5'>
                <div className='flex items-center gap-3 cursor-pointer'>
                    <IoPerson />
                    <p className='font-bold'>Sign In</p>
                </div>
                <IoIosSettings className='cursor-pointer'/>
                <FaBell className='cursor-pointer'/>
            </div>
        </div>
    )
}
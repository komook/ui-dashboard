'use client'
import { Modal } from 'antd';
import React, { useState } from 'react';

import { FcBusinessman } from 'react-icons/fc';

export default function AuthoresTable() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentValue, setCurrentValue] = useState([
        {

            name: 'Esthera Jackson',
            email: 'esthera@simmmple.com',
            func: 'Manager Organization',
            status: 'Online',
            join: '14/06/21',
            icon: <FcBusinessman />,
        },
        {

            name: 'Alexa Liras',
            email: 'alexa@simmmple.com',
            func: 'Programmer Developer',
            status: 'Offline',
            join: '14/06/21',
            icon: <FcBusinessman />,
        },
        {

            name: 'Laurent Michael',
            email: 'laurent@simmmple.com',
            func: 'Executive Projects',
            status: 'Online',
            join: '14/06/21',
            icon: <FcBusinessman />,
        },
        {

            name: 'Freduardo Hill',
            email: 'freduardo@simmmple.com',
            func: 'Manager Organization',
            status: 'Online',
            join: '14/06/21',
            icon: <FcBusinessman />,
        },
        {

            name: 'Daniel Thomas',
            email: 'daniel@simmmple.com',
            func: 'Programmer Developer',
            status: 'Offline',
            join: '14/06/21',
            icon: <FcBusinessman />,
        },
        {

            name: 'Mark Wilson',
            email: 'mark@simmmple.com',
            func: 'Designer UI/UX Design',
            status: 'Offline',
            join: '14/06/21',
            icon: <FcBusinessman />,
        },
    ])

    const showModal = (e) => {
        setIsModalOpen(true);
        setCurrentValue(e)
    };
    const handleOk = () => {
        setIsModalOpen(false);

    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (

        <div>
            <>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                    <form action="">
                        <input className='border-[3px]' type="text" />
                        <input className='border-[3px]' type="text" />
                        <input className='border-[3px]' type="text" />
                    </form>
                </Modal>
            </>
            {currentValue.map((d) => (
                <div className='flex p-2'>
                    <div>
                        {d.name}
                        {d.email}
                        {d.func}
                    </div>
                    <div onClick={() => (showModal(d))} className='ml-5 bg-red-500 cursor-pointer'>
                        EDIT
                    </div>

                </div>
            ))}
        </div>
    )
}
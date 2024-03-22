'use client'
import { Modal } from 'antd';
import { totalmem } from 'os';
import React, { useState } from 'react';

import { FcBusinessman } from 'react-icons/fc';

export default function AuthoresTable() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    let [array, setArray] = useState([{

        name: 'Esthera Jackson',
        number: 'Manager Organization',
        email: 'esthera@simmmple.com',
        status: 'Online',
        join: '14/06/21',
        icon: <FcBusinessman />,
    },
    {

        name: 'Alexa Liras',
        email: 'alexa@simmmple.com',
        number: 'Programmer Developer',
        status: 'Offline',
        join: '14/06/21',
        icon: <FcBusinessman />,
    },
    {

        name: 'Laurent Michael',
        email: 'laurent@simmmple.com',
        number: 'Executive Projects',
        status: 'Online',
        join: '14/06/21',
        icon: <FcBusinessman />,
    },
    {

        name: 'Freduardo Hill',
        email: 'freduardo@simmmple.com',
        number: 'Manager Organization',
        status: 'Online',
        join: '14/06/21',
        icon: <FcBusinessman />,
    },
    {

        name: 'Daniel Thomas',
        email: 'daniel@simmmple.com',
        number: 'Programmer Developer',
        status: 'Offline',
        join: '14/06/21',
        icon: <FcBusinessman />,
    },
    {

        name: 'Mark Wilson',
        email: 'mark@simmmple.com',
        number: 'Designer UI/UX Design',
        status: 'Offline',
        join: '14/06/21',
        icon: <FcBusinessman />,
    },
    ])
    let [inputdata, setInputdata] = useState({ name: "", number: "", email: '', status: '', join: '', icon: '', })
    let [index, setIndex] = useState()

    let { name, number, email, status, join, icon } = inputdata;




    function data(e) {
        setInputdata({ ...inputdata, [e.target.name]: e.target.value })
    }




    // updatedata
    function updatedata(i) {

        let { name, number, email, status, join, icon } = array[i]//this perticular index no row data shoud be update so we get this index no row data in name or number 
        setInputdata({ name, number, email, status, join, icon })

        setIndex(i)

    }

    //know add data at perticular index means update it on that index
    function updateinfo() {
        let total = [...array]
        total.splice(index, 1, { name, number, email, status, join, icon })


        setArray(total)

        setInputdata({ name: "", number: "", email: '', status: '', join: '', icon: '', })
        setIsModalOpen(false);
    }


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <>
                <Modal title="Edit" open={isModalOpen} footer={false} onCancel={handleCancel} >
                    <div className='flex flex-col items-center'>
                        <input className='border-[2px] w-[300px] p-2 text-[18px] mb-[10px] rounded-[13px]' type="text" value={inputdata.name || ""} name='name' autoComplete='off' placeholder='Enter Name' onChange={data} />
                        <input className='border-[2px] w-[300px] p-2 text-[18px] mb-[10px] rounded-[13px]' type="text" value={inputdata.number || ""} name="number" placeholder='Enter Job' onChange={data} />
                        <button className='text-[20px] font-bold bg-green-300 pr-9 pl-9 pt-2 pb-2   rounded-[10px] mt-[10px] hover:bg-green-500 transition' onClick={updateinfo}>UPDATE</button>
                    </div>
                </Modal>
            </>
            <br />

            <div className='bg-white pr-9 pl-9 pt-3 pb-3 rounded-[13px]'>
                <div>
                    <div className='font-bold text-[#2D3748] text-[18px] mb-[23px]'>Authors Table</div>
                    <div className=' relative flex justify-between text-[10px] text-[#A0AEC0]  pb-2'>
                        <div>AUTHOR</div>
                        <div className='flex'>

                            <div className='absolute  left-[50%]'>FUNCTION</div>
                            <div className='absolute  left-[68%]'>STATUS</div>
                            <div className='absolute  left-[83%]'>EMPLOYED</div>

                        </div>
                    </div>
                    {

                        array && array.map(
                            (item, i) => {
                                return (
                                    <div key={i} className='flex justify-between items-center border-t-[1px] pt-3 pb-3 pr-2 hover:bg-[#F8F9FA]'>
                                        <div className='flex items-center'>
                                            <div className='text-[35px] bg-gray-100 p-1 rounded-[13px] mr-[15px]'>{item.icon}</div>
                                            <div className='flex flex-col'>

                                                <div className='font-bold text-[14px]'>{item.name}</div>
                                                <div className='text-[#718096]'>{item.email}</div>
                                            </div>
                                        </div>
                                        <div className='flex justify-between items-center w-[755px]'>
                                            <div className='w-[100px] font-bold text-[#718096] text-[14px]'>{item.number}</div>
                                            <div className={item.status === 'Online' ? 'text-bold text-white bg-green-400 pt-0 pr-2 pb-0 pl-2 rounded-[10px]' : 'text-bold text-white bg-gray-400 pt-0 pr-2 pb-0 pl-2 rounded-[10px]'}>{item.status}</div>
                                            <div className='text-[#2D3748] font-bold'>{item.join}</div>
                                            <div><button className='text-[#718096] font-bold text-[12px] p-1 rounded-[5px] transition hover:bg-gray-200' onClick={() => (updatedata(i), (showModal()))}>Edit</button></div>
                                        </div>

                                    </div>
                                )
                            }
                        )
                    }
                </div>
            </div>

        </div>
    )
}
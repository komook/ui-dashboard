import React, { useState } from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'
import { Button, Modal } from 'antd';

export default function BillingInfo() {
    let [array, setArray] = useState([
        { name: 'Viking Burrito', email: 'oliver@burrito.com', vat: 'FRB1235476' },
        { name: 'Viking Burrito', email: 'oliver@burrito.com', vat: 'FRB1235476' },
        { name: 'Viking Burrito', email: 'oliver@burrito.com', vat: 'FRB1235476' }
    ])
    let [inputdata, setInputdata] = useState({ name: "", email: "", vat: "" })
    let [index, setIndex] = useState()
    let [bolin, setBolin] = useState(false)
    let { name, email, vat } = inputdata;




    function data(e) {
        setInputdata({ ...inputdata, [e.target.name]: e.target.value })
    }






    // deleting row 
    function deletedata(i) {
        console.log(i, "this index row want to be delete")
        let total = [...array]
        total.splice(i, 1)
        setArray(total)

    }

    // updatedata
    function updatedata(i) {

        let { name, email, vat } = array[i]//this perticular index no row data shoud be update so we get this index no row data in name or email 
        setInputdata({ name, email, vat })
        setBolin(true)
        setIndex(i)

    }

    //know add data at perticular index means update it on that index
    function updateinfo() {
        let total = [...array]
        total.splice(index, 1, { name, email, vat })
        setArray(total)
        setBolin(false)
        setInputdata({ name: "", email: "", vat: "" })
    }

    //////////////////////////////////////////////

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (

        <div className='w-[900px] h-[538px] bg-white p-5 rounded-[12px]'>
            <>

                <Modal title="edit" open={isModalOpen} onCancel={handleCancel} footer={false}>
                    <div className='flex flex-col gap-3 items-center'>
                        <input className='border-[2px] w-[50%] p-1' type="text" value={inputdata.name || ""} name='name' autoComplete='off' placeholder='Enter Name' onChange={data} />
                        <input className='border-[2px] w-[50%] p-1' type="text" value={inputdata.email || ""} name="email" placeholder='Enter Number' onChange={data} />
                        <input className='border-[2px] w-[50%] p-1' type="text" value={inputdata.vat || ""} name="vat" placeholder='Enter Number' onChange={data} />
                        <button className='bg-green-500 text-white pt-1 pb-1 pl-2 pr-2 hover:bg-green-600 transition' onClick={updateinfo}>{!bolin ? `Add data` : `Update data`}</button>
                    </div>
                </Modal>
            </>


            <div className='text-[18px] font-bold pt-2'>Billing Information</div>
            <div className='mt-[20px]'>

                {
                    array && array.map(
                        (item, i) => {
                            return (
                                <div key={i} className='bg-[#F8F9FA] p-5 mb-[22px] rounded-[12px]'>
                                    <div className='flex justify-between'>
                                        <div className='text-gray-500 font-bold'>
                                            Oliver Liam
                                        </div>
                                        <div className='flex gap-3'>
                                            <div className='flex items-center gap-1'>
                                                <div className='text-red-600'>
                                                    <MdDelete />
                                                </div>
                                                <button className='text-red-600 text-[12px] font-bold' onClick={() => deletedata(i)}>DELETE</button>
                                            </div>
                                            <div className='flex items-center gap-1'>
                                                <MdEdit />
                                                <button className='text-[12px] font-bold' onClick={() => { updatedata(i), showModal() }}>EDIT</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='text-gray-500 font-bold text-[13px]'> <span className='text-gray-400 text-[12px]'>Company Name:</span> {item.name}</div>
                                        <div className='text-gray-500 font-bold text-[13px]'> <span className='text-gray-400 text-[12px]'>Email Address:</span> {item.email}</div>
                                        <div className='text-gray-500 font-bold text-[13px]'> <span className='text-gray-400 text-[12px]'>VAT Number:</span> {item.vat}</div>
                                    </div>
                                </div>
                            )
                        }
                    )

                }








            </div>

        </div>
    )
}

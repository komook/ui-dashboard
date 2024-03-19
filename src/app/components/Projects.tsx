import React from 'react'
import { projects } from './Data'
import ProgressBar from '@ramonak/react-progress-bar'
import { FaCheck } from 'react-icons/fa'
type Props = {}

export default function Projects({ }: Props) {
    return (
        <div className='flex flex-col justify-between bg-white p-5 rounded-[15px] '>
            <div>
                <div>
                    <p>Projects</p>
                    <div className='text-[#A0AEC0] flex items-center'><span className=' text-[8px] text-white p-1 rounded-full bg-green-300 mr-[7px]'><FaCheck /> </span> <span className='font-bold mr-[4px]'>30 done </span> this month</div>
                </div>
                <div className='flex justify-between mt-[34px] text-[#A0AEC0] text-[10px]'>
                    <div className=''>
                        COMPANIES
                    </div>
                    <div className='flex justify-between w-[300px]'>
                        <div>BUDGET</div>
                        <div className='mr-[58px]'>COMPLETION</div>
                    </div>
                </div>
            </div>
            <div>
                {projects.map((c) => (
                    <div className='flex justify-between pt-3 pb-3 items-center border-t-[1px] hover:bg-[#F8F9FA]'>
                        <div className='flex items-center'>
                            <div className='text-[20px] p-2 bg-[#4FD1C5] text-white rounded-[12px]'>
                                {c.icon}
                            </div>
                            <div className='font-bold ml-4'>
                                {c.title}
                            </div>
                        </div>
                        <div className='flex items-center justify-between w-[300px]'>
                            <div className='font-bold'>
                                {c.budget}
                            </div>
                            <div className='w-[125px]'>
                                <div className='text-[#4FD1C5]'>
                                    {c.completion}%
                                </div>
                                <ProgressBar width="700" bgColor='#4FD1C5' height="5px" customLabel=' ' completed={c.completion} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
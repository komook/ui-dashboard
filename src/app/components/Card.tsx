import React from 'react'

export type CardProps = {
    text: string;
    count: string;
    img: React.ReactNode;
}


export default function Card(props: CardProps) {
    return (
        <>
            <section className='flex items-center justify-between bg-white w-[382px] h-[80px] rounded-[15px] p-4 max-[1625px]:w-[300px]'>
                <div className='flex flex-col'>
                    <div className='text-[#bababa] font-bold text-[12px]'>
                        {props.text}
                    </div>
                    <div className='font-bold text-[18px]'>
                        {props.count}
                    </div>
                </div>
                <div className='p-3 text-white bg-[#4FD1C5] rounded-[10px]'>
                    {props.img}
                </div>
            </section>
        </>
    )
}
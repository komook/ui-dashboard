'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { IoIosMenu } from 'react-icons/io'
import youtubelogo from '@/app/assets/images/youtube_logo.png'
import HoverDiv from './HoverDiv'
import { cn } from '../utils/cn'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ytSidebarDataset } from './SidebarData'


type Props = {}

export default function Sidebar({ }: Props) {
    const [isSidebarOpen, setSidebar] = useState(true)
    function toggleSideBar() {
        setSidebar(!isSidebarOpen)
    }

    return (
        <div className=' h-full flex-col w-[350px]  flex text-white '>
            <section className='px-5 py-4 flex items-center gap-4'>
                <HoverDiv onClick={toggleSideBar} className='p-2 text-black rounded-full'>
                    <IoIosMenu className='text-3xl' />
                </HoverDiv>
                <h1 className='text-black font-bold'>PURITY UI DASHBOARD</h1>
            </section>
            <main className={cn('flex flex-col w-[240px] h-full', {
                'w-[100px]': !isSidebarOpen
            })}>
                {ytSidebarDataset.map((d, i) => (
                    <>{d.title && (
                        <section className='px-4'>
                            <SidebarItem activeIcon={d.activeIcon} defaultIcon={d.defaultIcon} isSidebarOpen={isSidebarOpen} path={d.path} title={d.title} />
                        </section>)}
                        {d.sectionTitle && (
                            <section className='p-4 pl-7'  >
                                <p className={cn('text-[#2D3748] font-bold', { 'hidden': !isSidebarOpen }) }>{d.sectionTitle}</p>
                            </section>
                        )}
                    </>
                ))}

            </main>
        </div>
    )
}

type SidebarItemProps = {
    title: string | undefined;
    defaultIcon: React.ReactNode;
    activeIcon: React.ReactNode;
    path?: string;
    isSidebarOpen: boolean;
};
function SidebarItem(props: SidebarItemProps) {
    const pathname = usePathname()
    return (
        <Link href={props.path ?? "#"}>
            <HoverDiv className={cn('w-full flex items-center gap-5', { 'flex-col gap-2': !props.isSidebarOpen })} isActive={pathname === props.path}>
                <section className='text-2xl h-7  items-center'>{props.path === pathname ? props.activeIcon : props.defaultIcon}</section>
                <p className={cn('text-sm font-semibold', { 'text-[10px]': !props.isSidebarOpen })}>{props.title}</p>
            </HoverDiv>
        </Link>
    )
}
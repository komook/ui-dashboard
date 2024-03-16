import React from 'react'
import { cn } from '../utils/cn'

type Props = {}

export default function HoverDiv(props: React.HTMLAttributes<HTMLDivElement> & { isActive?: boolean }) {
  return (
    <div {...props} className={cn("font-bold text-[#bababa] py-2 px-3 my-1 hover:bg-white  transition-all cursor-pointer rounded-xl", { "bg-white text-black ": props.isActive }, props.className)} />
  )
}
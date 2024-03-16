'use client'

import React from "react";
import Header from "./components/Header";
import Card, { CardProps } from "./components/Card";
import { FaFile, FaShoppingCart, FaWallet, FaWrench } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import chakra from './assets/images/chakra.png'
import Image from "next/image";
import people from './assets/images/pople.png'
import ChartsArea from "./components/ChartsArea";
import ChartsBar from "./components/ChartsBar";
import ProgressBar from "@ramonak/react-progress-bar";
import { IoIosRocket } from "react-icons/io";
import Projects from "./components/Projects";

const cardData: CardProps[] = [
  {
    text: 'Today`s Money',
    count: '$4,400',
    img: <FaWallet />,
  },
  {
    text: 'Today`s Users',
    count: '2,300',
    img: <TbWorld />,
  },
  {
    text: 'New Clients',
    count: '+3,052',
    img: <FaFile />,
  },
  {
    text: 'Total Sales',
    count: '$173,000',
    img: <FaShoppingCart />,
  },
];

const ActiveUsers = [
  {
    text: 'Users',
    count: '32,984',
    img: <FaWallet />,
    progress: 30,
  },
  {
    text: 'Click',
    count: '2,42m',
    img: <IoIosRocket />,
    progress: 70,
  },
  {
    text: 'Sales',
    count: '2,400$',
    img: <FaShoppingCart />,
    progress: 100,
  },
  {
    text: 'Items',
    count: '320',
    img: <FaWrench />,
    progress: 50,
  },
]



export default function Home() {
  return (
    <>
      <div className="">
        <Header title="Dashboard" />
      </div>
      <section className="flex justify-center gap-5 flex-wrap mt-[25px]">
        {cardData.map((d, i) => (
          <Card key={i} text={d.text} count={d.count} img={d.img} />
        ))}
      </section>
      <section className="flex justify-center gap-5 flex-wrap mt-[20px]">
        <div className="flex flex-wrap justify-between bg-white w-[922px] h-[290px] p-4 rounded-[10px]">
          <div>
            <p className="text-[#A0AEC0] font-bold text-[12px]">Built by developers</p>
            <p className="text-[#2D3748] font-bold text-[18px]">Purity UI Dashboard</p>
            <p className="text-[#A0AEC0] w-[330px] text-[14px]">From colors, cards, typography to complex elements, you will find the full documentation.</p>
          </div>
          <div>
            <Image className="rounded-[10px]" src={chakra} alt="#" />
          </div>
        </div>
        <div className="relative rounded-[10px] bg-white p-5 h-[290px] w-[654px]">
          <div className="z-10 absolute top-[12%] left-[7%]">
            <p className="text-white font-bold text-[18px]">
              Work with the Rockets
            </p>
            <p className="text-white text-[14px] w-[384px]">Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.</p>
          </div>
          <div>
            <Image width={615} className="rounded-[10px] " src={people} alt="people" />
          </div>
        </div>
      </section>
      <section className="mt-[20px] rounded-[15px] flex gap-5 justify-center flex-wrap">
        <div className=" rounded-[15px] bg-white p-5 w-[652px] h-[445px]">
          <div>
            <ChartsBar />
          </div>
          <div>
            <p className="text-[18px] font-bold mt-[18px] mb-[40px]">Active Users</p>
          </div>
          <div className="flex justify-between  ">
            {ActiveUsers.map((i) => (
              <div className="w-[100px]">
                <div className="flex items-center">
                  <div className="text-white p-3 bg-[#4FD1C5] rounded-[15px]">
                    {i.img}
                  </div>
                  <div className="text-[12px] text-[#A0AEC0] ml-[8px]">
                    {i.text}
                  </div>
                </div>
                <div className="font-bold text-[18px] pt-[15px] pb-[10px]">
                  {i.count}
                </div>
                <div>
                  <ProgressBar width="60" bgColor='#4FD1C5' height="5px" customLabel=' ' completed={i.progress} />
                </div>
              </div>
            ))}

          </div>
        </div>
        <div className="flex flex-col justify-between bg-white rounded-[15px] pb-8 p-4 w-[924px] h-[445px]">
          <div>
            <div className="font-bold text-[18px]">
              Sales overview
            </div>
            <div>
              <span className="text-green-500">(+5) more </span>
              in 2021
            </div>
          </div>
          <ChartsArea/>
        </div>
      </section>
      <section>
        <div>
              <Projects/>
        </div>
        <div>

        </div>
      </section>
    </>
  );
}

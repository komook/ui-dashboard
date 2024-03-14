import React from "react";
import Header from "./components/Header";
import Card, { CardProps } from "./components/Card";
import { FaFile, FaShoppingCart, FaWallet } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import chakra from './assets/images/chakra.png'
import Image from "next/image";
import people from './assets/images/pople.png'
import shadowPeople from './assets/images/shadow-people.png'


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

export default function Home() {
  return (
    <>
      <div className="">
        <Header title="Dashboard" />
      </div>
      <section className="flex justify-between flex-wrap gap-2 mt-[25px]">
        {cardData.map((d, i) => (
          <Card key={i} text={d.text} count={d.count} img={d.img} />
        ))}
      </section>
      <section className="flex justify-between gap-3 flex-wrap mt-[20px]">
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
            <Image width={615} className="rounded-[10px] top-[7%] left-[3%] absolute" src={shadowPeople} alt="#" />
          </div>
        </div>
      </section>
      <section>
        <div>

        </div>
        <div>

        </div>
      </section>
    </>
  );
}

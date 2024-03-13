import React from "react";
import Header from "./components/Header";
import Card, { CardProps } from "./components/Card";
import { FaFile, FaShoppingCart, FaWallet } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";


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
      <div>
        <section className="flex justify-between flex-wrap gap-2 mt-[25px]">
          {cardData.map((d, i) => (
            <Card key={i} text={d.text} count={d.count} img={d.img} />
          ))}
        </section>
      </div>
    </>
  );
}

import React, { useState } from 'react';
import Button2 from '../components/Button2';
import { arrowRight } from '../assets/icons'; // Ensure the correct path and file extension
import { shoes, statistics } from '../constants'; // Ensure statistics is correctly imported
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../components/ShoeCard'; 

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full px-4 pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span>
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos id voluptate porro quos soluta nemo, quo alias qui placeat cum inventore, ea sit nihil atque distinctio aliquid! Voluptas, eos quod.
        </p>
        <Button2 label="Shop Now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-red">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen mac-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="Shoe Collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%]">
          {shoes.map((shoe) => (
            <ShoeCard
              key={shoe.id} // Ensure each shoe has a unique identifier
              imgURL={shoe}
              changeBigShoeImage={setBigShoeImg}
              bigShoeImg={bigShoeImg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

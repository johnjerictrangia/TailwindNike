import React from 'react';
import Button2 from '../components/Button2';
import {arrowRight} from '../assets/icons'; // Ensure the correct path and file extension
import { statistics } from '../constants'; // Ensure statistics is correctly imported

const Heros = () => {
  return (
    <section 
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full px-4 pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p> 
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px]  max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
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
            <div>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Heros;

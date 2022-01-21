import Header from "../componenets/Header"
import SectionButton from '../componenets/SectionButton';
import insomnia from '../images/insomnia.svg';
import discord from '../images/discord.png'
import React, { useEffect, useRef, useState } from "react"
import Product from '../componenets/Product'
import axios from 'axios'


//let product1description = `Fresh United States Edu Gmail `
//let arr = [{name: 'hello'}, {name: 'hello'}, {name: 'hello'}]
//let renderedOutput = arr.map(item => <Product productName={item.name} price={item.name} desc={item.name} />)


export default function Home() {
  
  const [prods, setProds] = useState(null)
  //let renderedOutput;
  useEffect(() => {
    
    
  axios.get("http://localhost:3001").then(response => {
      console.log(response.data.map(item => <Product productName={item.name} price={item.name} desc={item.name} />))
      setProds(response.data.map(item => <Product productName={item.name} price={item.name} desc={item.name} />))
    });
  

  });
  
  return (
    <div>
      <div className="h-1080 resize-none">
        <div className="flex-grow flex items-center scroll bg-black text-white h-1/6">
          <div className="flex items-center ml-8 item-">
            <a className="static items-stretch " href="./">
              <img src={insomnia} alt="logo" class="resize h-28 w-28" />
            </a>
            <div className="font-mono text-2xl font-medium"><h1 classname="font-mono"> Insomnia Labs</h1></div>
          </div>
          <div className="hidden lg:inline-block lg:space-x-28 lg:m-auto lg:pr-80">
            <SectionButton className="text-white font-bold" directName="Home" />
            <SectionButton className="text-white font-bold" directName="Products" />
            <SectionButton className="text-white font-bold" directName="Socials" />
          </div>
          <div className="absolute right-0">
            <a href="./" class="flex items-center space-x-3 lg:pr-52">
              <img src={discord} alt="discordLogo" class="resize h-12 w-12"></img> <p>Join Server</p>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 place-content-center bg-black h-5/6">
          <div className="flex items-center space-x-14 m-auto relative bottom-32 ">
            <SectionButton href="https://shoppy.gg/product/7mJJIsh" className="flex justify-center items-center py-4 px-14 w-full font-medium bg-neon-blue rounded-full hover:opacity-75 md:w-auto" directName="Purchase" />
            <SectionButton className="flex justify-center items-center py-4 px-14 w-full font-medium bg-neon-blue rounded-full hover:opacity-75 md:w-auto" directName="Dashboard" />
          </div>
        </div>
      </div>
      <div className="bg-blue-400 h-1080">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-6 justify-center">
         {prods}
        </div>

      </div>
    </div>


  )
}

const callback = function (entries) {
  entries.forEach((entry) => {
    console.log(entry);

    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fadeIn");
    } else {
      entry.target.classList.remove("animate-fadeIn");
    }
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".js-show-on-scroll");
targets.forEach(function (target) {
  target.classList.add("opacity-0");
  observer.observe(target);
});
  //<img src={insomnia} alt="logo" class="object-scale-down h-25 w-25"/>
  //<Header className="mainHeader" companyName='Insomnia'/>



/*

export default function Home() {
return (
  <main>
    <div className="flex h-40 bg-black">
        <img src={insomnia} alt="logo" class="object-scale-down h-20 w-20" />
      <div className="md:flex items-center space-x-8 hidden m-auto">
        <SectionButton className="text-white" directName="Home" />
        <SectionButton className="text-white" directName="Products" />
        <SectionButton className="text-white" directName="Socials" />
      </div>
    </div>
  </main>


)
}
*/


//Product productName={"Prime US Edu Gmail"} price={"$2.75/email"} desc={product1description} />
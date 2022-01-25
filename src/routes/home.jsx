import Header from "../componenets/Header"
import SectionButton from '../componenets/SectionButton';
import insomnia from '../images/insomnia.svg';
import discord from '../images/discord.png'
import React, { useEffect, useRef, useState } from "react"
import Product from '../componenets/Product'
import axios from 'axios'
import botDetection from "../antibot/index.js";
import LargeButton from "../componenets/LargeButton"




async function dataCollection() {
  const humanData = await botDetection()
  axios.post('http://localhost:3001', humanData)
}






export default function Home() {

  const [prods, setProds] = useState(null)
  const [serverInvite, setServerInvite] = useState(null)

  //let renderedOutput;

  useEffect(() => {
    dataCollection()
  }, []);

  useEffect(() => {
    axios.get("https://boring-mclean-74ab64.netlify.app/.netlify/functions/api/stock").then(response => {
      setProds(response.data.map(item => <Product productName={item.name} price={"$" + item.price} desc={item.description} />))
    });
  }, []);

  useEffect(() => {
    axios.get("https://boring-mclean-74ab64.netlify.app/.netlify/functions/api/discord").then(response => {
      console.log(response.data)
      setServerInvite(response.data)
    });
  }, []);

  return (
    <div>
      <div className="resize-none">
        <div className="flex-grow flex items-center scroll bg-black text-white h-1/6">
          <div className="flex items-center ml-8 item-">
            <a className="static items-stretch " href="./">
              <img src={insomnia} alt="logo" class="resize h-28 w-28" />
            </a>
            <div className="font-mono text-2xl font-medium"><h1 classname="font-mono"> Insomnia Labs</h1></div>
          </div>
          <div className="hidden lg:inline-block lg:space-x-28 lg:m-auto lg:pr-80">
            <SectionButton directName="Home" />
            <SectionButton directName="Products" />
            <SectionButton directName="Socials" />
          </div>
          <div className="absolute right-0">
            <a href={serverInvite} class="flex items-center space-x-3 lg:pr-52">
              <img src={discord} alt="discordLogo" class="resize h-12 w-12"></img> <p>Join Server</p>
            </a>
          </div>
        </div>
        <div className="bg-black h-screen flex">
          <div className="mx-auto my-auto">
            <h1 className="text-white text-center text-3xl font-mono pb-5">Insomnia Labs</h1>
          

            <div className="flex space-x-14 m-auto">
              <LargeButton href="https://shoppy.gg/product/7mJJIsh" directName="Purchase" />
              <LargeButton directName={"Dashboard"} />
            </div>
            </div>
          </div>
        
      </div>
      <div className="bg-black h-screen">
        <h1 className="text-white text-center text-4xl font-serif pt-6">Products</h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-6 justify-center pt-6">
          {prods}
        </div>

      </div>
    </div>


  )
}


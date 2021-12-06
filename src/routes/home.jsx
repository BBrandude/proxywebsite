import Header from "../componenets/Header"
import SectionButton from '../componenets/SectionButton';
//import logo from './logo.svg';
import React from "react"

export default function Home() {
    return (
        <main>
        <div className="topContainer">
          <Header className="mainHeader" companyName='Forte'/>
          <SectionButton href="/#section2" className="home" directName="Home"/>
          <SectionButton className="products" directName="Products"/>
          <SectionButton className="socials" directName="Socials"/>
        </div>
        
        <div className="page3" id="section2">
          hi
        </div>
        </main>
    )
  }
import Header from "../componenets/Header"
import SectionButton from '../componenets/SectionButton';
//import logo from './logo.svg';
import React from "react"

export default function Home() {
    return (
        <main>
        <div className="flex h-20 bg-blue-400">
          <Header className="mainHeader" companyName='Forte'/>
          <div className="md:flex items-center space-x-8 hidden m-auto">
            <SectionButton className="prod" directName="Home"/>
            <SectionButton className="products" directName="Products"/>
            <SectionButton className="socials" directName="Socials"/>
          </div>
        </div>
        
        <div className="h-96 text-green-300" id="section2 ">
          hi
        </div>
        </main>

        
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
  
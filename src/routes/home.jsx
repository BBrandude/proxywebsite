import Header from "../componenets/Header"
import SectionButton from '../componenets/SectionButton';
import insomnia from './insomnia.svg';
import React from "react"

export default function Home() {
  return (
    <main>
      <div className="flex items-center h-40 bg-black text-white">
        <a className="static left-3 flex items-stretch w-1/12" href="./">
          <img src={insomnia} alt="logo" class="resize h-28 w-28 " />
        </a>
        <div className="font-mono text-2xl font-medium"><h1 classname="font-mono"> Insomnia Labs</h1></div>
        <div className="md:flex items-center space-x-8 hidden m-auto w-2/6">
          <SectionButton className="text-white" directName="Home" />
          <SectionButton className="text-white" directName="Products" />
          <SectionButton className="text-white" directName="Socials" />
        </div>
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
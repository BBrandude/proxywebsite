import Header from "../componenets/Header"
import SectionButton from '../componenets/SectionButton';
import insomnia from './insomnia.svg';
import React from "react"

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
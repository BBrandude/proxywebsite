import React from 'react';

const SocialsButton = ({href, directName, socialsImage}) => {
  return <a className="flex justify-center items-center py-4 px-7 font-medium bg-gradient-to-t from-indigo-400 to-indigo-500 rounded-full hover:opacity-75 w-1/4" href={href}>
  <div className="flex flex-row"><img className="object-contain h-8 w-8" alt="socialsImage" src={socialsImage}></img><h1>{directName}</h1></div>
</a>;
};

export default SocialsButton;

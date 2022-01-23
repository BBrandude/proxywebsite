import React from 'react';

const LargeButton = ({directName, href}) => {
  return <a className="flex justify-center items-center py-4 px-14 w-full font-medium bg-neon-blue rounded-full hover:opacity-75 md:w-auto" href={href}>
  {directName}
</a>
};

export default LargeButton;

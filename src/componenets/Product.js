import React from 'react'
import insomnia from '../images/insomnia.svg'

const product = ({ productName, price, desc }) => {
    return (
        <div className='flex flex-col bg-chillSlate rounded-2xl h-96 p-5 space-y-5'>
            <div className="flex flex-row">
                <img src={insomnia} className="rounded-xl resize h-20 w-20" alt="logo"></img>

                <div className="flex flex-col pl-5">
                    <h1 className='text-white'>{productName}</h1>
                    <h3 className="text-white pt-3">{price}</h3>
                </div>


            </div>
            <div className="text-white">
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default product

/*
let description = desc.split("\n");
    let list = [];
    for(let line of description) {
        list.push(<li>{line}</li>)
*/
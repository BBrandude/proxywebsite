import React from 'react'
import insomnia from '../images/insomnia.svg'

const product = ({productName, price, desc}) => {
    let description = desc.split("\n");
    let list = [];
    for(let line of description) {
        list.push(<li>{line}</li>)
    }
    return (
        <div className='bg-white rounded-2xl h-96 w-96'>
             <div className="flex flex-row pl-5 pt-5">
                    <div><img src={insomnia} className="rounded-xl resize h-20 w-20" alt="logo"></img></div>
                    
                    <div className="flex-col pl-5">
                        <h1>{productName}</h1>
                        <h3 className="pt-3">{price}</h3>
                    </div>
                    

                </div>
                
                <ul className="list-disc pl-8">{list}</ul>
             </div>
    )
}

export default product

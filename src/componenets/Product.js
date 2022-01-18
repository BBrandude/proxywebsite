import React from 'react'
import insomnia from '../images/insomnia.svg'

const product = () => {
    return (
        <div className='bg-green-400 rounded-2xl h-96 w-96'>
            <div className="flex flex-row">
                <div className="pl-5 pt-5">
                    <img src={insomnia} className="rounded-xl resize h-16 w-16" alt="logo"></img>
                    <h3>US Prime Edu Gmail</h3>
                </div>
            </div>
        </div>
    )
}

export default product

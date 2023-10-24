import React from 'react'
import veges from '../../ASSETS/veges.png'
import './Footer1.css'
const Footer1 = () => {
    return (
        <div className='footer1'>
            <div className='left'>
                <img src={veges} alt='veges' />
            </div>
            <div className='right'>
                <h1>No. 1 online shopping source
                </h1>
                <p>We make our cutomers happy and satisfied by providing them express delivery.
                    
                </p>
            </div>
        </div>
    )
}

export default Footer1
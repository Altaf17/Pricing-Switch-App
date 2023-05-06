import React from 'react'
import './Sub.css'

const Sub = (props) => {
    const { plans, theme,price } = props
    return (
        <div className='price-box --card'>
            <div className={` box --p2 ${theme}`}>
                <p className='--text-light'>{plans}</p>
                <h4 className='--text-light'>
                    <span>$</span>
                    <span className='basic'>{price}</span>
                </h4>
            </div>
            <div className="feature">
                <ul>
                    <li>Unlimited Pages</li>
                    <li>Unlimited BandWidth</li>
                    <li>500GB Storage</li>
                </ul>
                <button className={`btn ${theme}`}>Buy Now</button>
            </div>
        </div>
    )
}

export default Sub
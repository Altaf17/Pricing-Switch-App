import React from 'react';
import './Sub.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sub = (props) => {

    const { plans, theme, price, isBasic, isPro, isMaster, yearly } = props ;
    const handleClicked = () => {
        toast.success(`Package Successfully Added of Amount ${price}`)
    }
    return (
        <div className='price-box --card'>
            <div className={` box --p2 ${theme}`}>
                <p className='--text-light'>{plans}</p>
                <h4 className='--text-light'>
                    <span>$</span>
                    <span className='basic'>{price}</span>
                    {yearly && (<p className='--text-light'><del>30% off</del></p>)}
                </h4>
                {isBasic && <p className='--text-light'>Everything in Basic,</p>}
                {isPro && <p className='--text-light'>Everything in Basic, Plus</p>}
                {isMaster && <p className='--text-light'>Everything in Pro, Plus</p>}
            </div>
            <div className="feature">
                <ul>
                    {isBasic && <li>Unlimited Pages</li>}
                    {isBasic && <li>Unlimited BandWidth</li>}
                    {isBasic && <li>500GB Storage</li>}

                    {isPro && <li>10 Backup</li>}
                    {isPro && <li>Email Support</li>}
                    {isPro && <li>Github Tool</li>}

                    {isMaster && <li>20 Backup</li>}
                    {isMaster && <li>Push Notifications</li>}
                    {isMaster && <li>Priority Support</li>}

                </ul>
                <button
                    className={`btn ${theme}`}
                    onClick={handleClicked}
                >
                    Buy Now
                </button>
                <ToastContainer />
            </div>
        </div>
    )
}

export default Sub
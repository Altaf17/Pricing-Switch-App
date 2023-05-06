import React, { useState } from 'react'
import './SubList.css'
import Sub from './Sub'

const SubList = () => {
    const [basic,setBasic] =useState(99)
    const [pro,setPro] =useState(200)
    const [master,setMaster] =useState(500)
    return (
        <section className="main">
            <div className="container --center-all">
                <div className="title">
                    <h2>Pricing</h2>
                    <div className="--line"></div>
                    <div className='--flex-center --my2'>
                        <p>Monthly</p>
                        <div className='--mx2'>
                            <span className="toggle-btn">
                                <div className="ball"></div>
                            </span>
                        </div>
                        
                        <p>Yearly</p>
                    </div>
                </div>
                <div className="sub-plan">
                    <Sub plans={"Basic"} theme={"theme1"} price={basic}/>
                    <Sub plans={"Pro"}  theme={"theme2"} price={pro}/>
                    <Sub  plans={"Master"} theme={"theme3"} price={master}/>
                </div>
            </div>
        </section>
    )
}

export default SubList
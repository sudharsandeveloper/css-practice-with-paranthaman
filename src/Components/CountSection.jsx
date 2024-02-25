import React from 'react';
import img1 from '../Public/Images/aprove.svg';
import img2 from '../Public/Images/clock.svg';
import img3 from '../Public/Images/dollar.svg';
import img4 from '../Public/Images/file.svg'

function CountSection() {
  return (
    <div className='container counter-sec'>
        <div className="card counter-card">
            <div className="logo-sec mr-10">
                <img src={img1} alt="" />
            </div>
            <div className="con-sec">
                <div className="con-title">
                    <span className='mr-10 con1'>All</span>
                    <span className='batch'>77</span>
                </div>
                <span className='rate'>$189,774</span>
            </div>
        </div>
        <div className="card counter-card">
            <div className="logo-sec mr-10 clock-sec">
                <img src={img2} alt="" />
            </div>
            <div className="con-sec">
                <div className="con-title">
                    <span className='mr-10 con1'>Pending</span>
                    <span className='batch'>30</span>
                </div>
                <span className='rate'>$105,666</span>
            </div>
        </div>
        <div className="card counter-card">
            <div className="logo-sec mr-10 doller-sec">
                <img src={img3} alt="" />
            </div>
            <div className="con-sec">
                <div className="con-title">
                    <span className='mr-10 con1'>Paid</span>
                    <span className='batch'>40</span>
                </div>
                <span className='rate'>$100,642</span>
            </div>
        </div>
        <div className="card counter-card">
            <div className="logo-sec mr-10 file-sec">
                <img src={img4} alt="" />
            </div>
            <div className="con-sec">
                <div className="con-title">
                    <span className='mr-10 con1'>Overall Due</span>
                    <span className='batch'>13</span>
                </div>
                <span className='rate'>24</span>
            </div>
        </div>
    </div>
  )
}

export default CountSection
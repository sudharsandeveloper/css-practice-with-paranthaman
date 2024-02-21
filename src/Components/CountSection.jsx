import React from 'react'
import img1 from '../Public/Images/aprove.svg'

function CountSection() {
  return (
    <div className='container'>
        <div className="card">
            <div className="logo-sec">
                <img src={img1} alt="" />
            </div>
            <div className="con-sec">
                <div className="con-title">
                    <span>All</span>
                    <span className='batch'>77</span>
                </div>
                <span className='rate'>$189,774</span>
            </div>
        </div>
    </div>
  )
}

export default CountSection
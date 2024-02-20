import React from 'react'
import image from '../Public/Images/profits 1.svg';
import profile_img from '../Public/Images/profile.jpg'

function Header() {
  return (
    <header className='header-section'>
        <div className='container header'>
        <div className='title-section'>
            <div>
            <img src={image}/>
            </div>
            <span className='title-t1'>OLG </span>
            <span className='title-t2'>FINANCING</span>
        </div>
        <nav className='menu-section'>
            <ul className='menu-section-ul'>
            <li className='menu-1'>Invoice</li>
            <li className='menu-2'>Transaction History</li>
            <li className='profile-section'>
                <span>Profile</span>
                <img className='profile-img' src={profile_img} />
            </li>
            </ul>
        </nav>
        </div>
    </header>
  )
}

export default Header
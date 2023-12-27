import 'react-dom';
import '../App.css';

import HamburgerMenu from './Hamburger';

function NavBar(){
  return(
    <>
    <div className='Nav_container'>
        <div className='Nav-links-container'>
            <a href='#' className='top-Container-links'>Home</a>
            <a href='#' className='top-Container-links'>Blog</a>
            <a href='#' className='top-Container-links'>Contact us</a>
            <a href='#' className='top-Container-links'>About us</a>

            <button className='top-Container-btn'>SUBSCRIBE</button>
            <HamburgerMenu/>
        </div>
    </div>
    </>
  )
}

export default NavBar;
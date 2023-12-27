import 'react-dom';
import '../App.css';

function Footer(){
    return(
        <>
        <div className='Footer_container'>
            <div className='Footer-links-container'>
                <h2 className='Footer-heading'>Your Company.</h2>
                <p className='Footer-subheading'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                </p>
            </div>
            <div className='Footer-links-container'>
                <a href='#' className='Footer_links'>Blogs</a>
                <a href='#' className='Footer_links'>About</a>
                <a href='#' className='Footer_links'>Contact</a>
                <a href='#' className='Footer_links'>Disclaimer</a>
            </div>
            <div className='Footer-links-container'>
            <a href='#' className='Footer_links'>Blogs</a>
                <a href='#' className='Footer_links'>Terms and  condition</a>
                <a href='#' className='Footer_links'>Contact Info</a>
                <a href='#' className='Footer_links'>Privacy Policy</a>
            </div>
        </div>
        </>
    )
}

export default Footer;
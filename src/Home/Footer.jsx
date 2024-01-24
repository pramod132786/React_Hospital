import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { AiOutlinePhone, AiOutlineClockCircle, AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <div> 
    <footer className="footer  text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>About Us</h5>
            <hr></hr>
            <p>Sunridge hospital is a Multi-Specialty hospital where we focus on delivering state of the art healthcare services at affordable prices.</p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <hr></hr>
            <ul className="list-unstyled">
              <li><a href="#about-us" className="footer-link">About Us</a></li>
              <li><a href="#our-doctors" className="footer-link">Our Doctors</a></li>
              <li><a href="#testimonials" className="footer-link">Testimonials</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Our Terms</h5>
            <hr></hr>
            <ul className="list-unstyled">
              <li><a href="#privacy-policy" className="footer-link">Privacy Policy</a></li>
              <li><a href="#terms-and-conditions" className="footer-link">Terms and Conditions</a></li>
              <li><a href="#blog" className="footer-link">Blog</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <hr></hr>
            <div className='contact'>
            <div className="d-flex align-items-center">
              <AiOutlinePhone className="mr-2" size={20}/> &nbsp; &nbsp;
              <p className="mb-0">08055223347</p>
            </div>
            <div className="d-flex align-items-center mb-0">
              <AiOutlineClockCircle className="mr-2" size={20} /> &nbsp; &nbsp;
              <p className="mb-0">We are open 24/7</p>
            </div>
            <div className="col-md-3">
            
            <div className="d-flex" style={{marginTop:"20px"}}>
             
              <div className="social-icon-box" style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '5px', margin: '5px' }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <AiOutlineFacebook size={30}  style={{color:"black"}}/>
              </a> 
              </div>
             
              <div className="social-icon-box" style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '5px', margin: '5px' ,marginLeft:"20px"}}>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <AiOutlineTwitter size={30}  style={{color:"black"}}/>
              </a>
              </div>
              
              <div className="social-icon-box" style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '5px', margin: '5px' ,marginLeft:"20px"}}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <AiOutlineInstagram size={30} style={{color:"black"}}/>
              </a>
              </div>
              </div>
            </div>
          </div>
          </div>
        
        </div>
       
      </div>
      
    </footer>
    <div className='footbottom'>
    <p>Copyright © 2024, Sunridge Hospitals, All Rights Reserved</p>
    </div>
    </div>
  );
};

export default Footer;

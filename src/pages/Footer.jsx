import React from 'react'
import "./styles/Footer.css"
import email from "../assets/email-icon.svg"
import location from "../assets/location-icon.svg"
import phone from "../assets/phone-icon.svg"
import shopf from "../assets/shop-f.png"

const Footer = () => {

    return (
        <footer className="footer-wrapper">
            <div className="container-default w-container">
                <div className="footer-top">
                    <div  className="inner-container _440px" >
                        <a href="" aria-current="page" className="footer-logo-wrapper w-inline-block w--current"><img src={shopf} alt="Logo" className="width-100" /></a>
                        <p className="color-neutral-400 mg-bottom-0">Our Beep.com online store has what you need from your favorite brands. Look at our entire catalog and find what you need.</p>
                    </div>
                    <div  className="inner-container _608px-tablet" >
                        <div className="mg-bottom-24px">
                            <div className="text-300 bold color-neutral-100">Subscribe to our newsletter</div>
                        </div>
                        <div className="mg-bottom-0 w-form">
                        <form id="wf-form-Footer-Subscribe" name="wf-form-Footer-Subscribe"   >
                           <div className="w-layout-grid grid-subscribe-form-button-left"><input type="email" className="input input-subscribe-footer w-input" maxLength="256" name="Email-2" data-name="Email 2" placeholder="Enter your email address" id="Email-2" required="" /><input type="submit" value="Subscribe" data-wait="Please wait..." id="w-node-_016325b5-6fb2-c0fa-e951-650ad0b159c0-d0b159b0" className="btn-primary white w-button" /></div>
                        </form>
                            <div className="success-message w-form-done" tabIndex="-1" role="region" aria-label="Footer Subscribe success">
   
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="footer-middle">
                    <div id="w-node-_016325b5-6fb2-c0fa-e951-650ad0b159cb-d0b159b0"  >
                        <div className="text-300 bold footer-title">Pages</div>
                        <div className="footer-pages-links-container">
                            <ul id="w-node-_016325b5-6fb2-c0fa-e951-650ad0b159cf-d0b159b0"  className="footer-list-wrapper">
                                <li className="footer-list-item"><a href="" className="footer-link">Home</a></li>
                                <li className="footer-list-item"><a href="" className="footer-link">Login</a></li>
                                <li className="footer-list-item"><a href="" className="footer-link">Purchases</a></li>
                                <li className="footer-list-item"><a href="" className="footer-link">Cart</a></li>
                            </ul>
                            <ul id="w-node-_016325b5-6fb2-c0fa-e951-650ad0b159e8-d0b159b0"  className="footer-list-wrapper">
                                <li className="footer-list-item"><a href="" className="footer-link">About us</a></li>
                                <li className="footer-list-item"><a href="" className="footer-link">Help center</a></li>
                                <li className="footer-list-item"><a href="" className="footer-link">Our stores</a></li>
                                <li className="footer-list-item"><a href="" className="footer-link">Work with us</a></li>
                                <li className="footer-list-item"><a href="" className="footer-link">Electronic voucher</a></li>
                                <li className="footer-list-item"><a href="" className="footer-link">Careers</a></li>
                            </ul>
                            <ul id="w-node-_016325b5-6fb2-c0fa-e951-650ad0b15a04-d0b159b0"  className="footer-list-wrapper">
                                <li className="footer-list-item"><a href="" className="footer-link">Beep Bank</a></li>
                                <li className="footer-list-item"><a href="" className="footer-link">Beep Card</a></li>
                                <li className="footer-list-item"><a href="" className="footer-link">Express Cash</a></li>
                                <li className="footer-list-item mg-bottom-0"><a href="" target="_blank" className="footer-link highlighted">Extra Guarantee</a></li>
                            </ul>
                        </div>
                    </div>
                    <div  >
                        <div className="text-300 bold footer-title">Utility pages</div>
                        <ul  className="footer-list-wrapper">
                            <li className="footer-list-item"><a href="" className="footer-link">Sign in</a></li>
                            <li className="footer-list-item"><a href="" className="footer-link">Sign up</a></li>
                            <li className="footer-list-item"><a href="" className="footer-link">Forgot password</a></li>
                            <li className="footer-list-item"><a href="" className="footer-link">Reset password</a></li>
                            <li className="footer-list-item"><a href="" className="footer-link">Terms &amp;&nbsp;conditions</a></li>
                            <li className="footer-list-item"><a href="" className="footer-link">Confirm your email</a></li>
    
                        </ul>
                    </div>
                    <div data-w-id="016325b5-6fb2-c0fa-e951-650ad0b15a30">
                        <div className="text-300 bold footer-title">Contact us</div>
                        <ul className="footer-list-wrapper">
                            <li className="footer-list-item">
                                <a  href="tel:(482)504-3207" className="footer-contact-link-wrapper w-inline-block">
                                    <img src={phone} loading="eager" alt="Phone" className="footer-contact-link---icon" />
                                    <div className="mg-top-4px">
                                        <div className="opacity-80 mg-bottom-6px">
                                            <div className="text-200 medium color-neutral-100">Phone</div>
                                        </div>
                                        <div className="color-neutral-100">(482) 504 - 3207</div>
                                    </div>
                                </a>
                            </li>
                            <li className="footer-list-item mg-bottom-24px">
                                <a  href="" className="footer-contact-link-wrapper w-inline-block">
                                    <img src={email} loading="eager" alt="Email" className="footer-contact-link---icon" />
                                    <div className="mg-top-4px">
                                        <div className="opacity-80 mg-bottom-6px">
                                            <div className="text-200 medium color-neutral-100">Email</div>
                                        </div>
                                        <div className="color-neutral-100">contact@levano.com</div>
                                    </div>
                                </a>
                            </li>
                            <li className="footer-list-item mg-bottom-0">
                                <a  href="" target="_blank" className="footer-contact-link-wrapper w-inline-block">
                                    <img src={location} loading="eager" alt="" className="footer-contact-link---icon" />
                                    <div className="mg-top-4px">
                                        <div className="opacity-80 mg-bottom-6px">
                                            <div className="text-200 medium color-neutral-100">Location</div>
                                        </div>
                                        <div className="color-neutral-100">1535 Pacific Ave San Francisco, CA</div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p data-w-id="016325b5-6fb2-c0fa-e951-650ad0b15a50" className="color-neutral-100 mg-bottom-0" >Copyright © Beep  | Designed by <a href="" target="_blank" className="color-neutral-100 link">Alexis Levano</a> - Powered by <a href="" target="_blank" className="color-neutral-100 link">Academlo</a></p>
                    <div style={ { display: "flex" }} data-w-id="016325b5-6fb2-c0fa-e951-650ad0b15a57" className="w-layout-grid social-media-grid-top right center-tablet" >
                        <a href="https://facebook.com/" target="_blank" className="social-icon-square w-inline-block">
                            <div className="social-icon-font"></div>
                        </a>
                        <a href="https://twitter.com/" target="_blank" className="social-icon-square w-inline-block">
                            <div className="social-icon-font"></div>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" className="social-icon-square w-inline-block">
                            <div className="social-icon-font"></div>
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank" className="social-icon-square w-inline-block">
                            <div className="social-icon-font"></div>
                        </a>
                        <a href="https://youtube.com/" target="_blank" className="social-icon-square w-inline-block">
                            <div className="social-icon-font"></div>
                        </a>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer
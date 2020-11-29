import React from 'react'
import './Footer.css'
import { Button } from './Button'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">Join us to be part of the real coffee lovers.</p>
                <p className="footer-subscription-text">You can unsubscribe anytime.</p>
                <div className="input-areas">
                    <form>
                        <input
                            type="email"
                            name="email"
                            placeholder="your email"
                            className="footer-input"
                        />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>

            </section>
            <div class="footer-links">
                <div className="footer-link-wrapper">
                    <div class="footer-link-items">
                        <h2>About us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investitors</Link>
                        <Link to="/">Terms of service</Link>


                    </div>
                    <div class="footer-link-items">
                        <h2>Contact us</h2>
                        <Link to="/sign-up">Contact</Link>
                        <Link to="/">Support</Link>
                        <Link to="/"></Link>
                        <Link to="/"></Link>
                        <Link to="/"></Link>

                    </div>
                </div>

                <div className="footer-link-wrapper">
                    <div class="footer-link-items">
                        <h2>Videos</h2>
                        <Link to="/sign-up">Submit video</Link>
                        <Link to="/"></Link>
                        <Link to="/"></Link>
                        <Link to="/"></Link>
                        <Link to="/"></Link>


                    </div>
                    <div class="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to="/sign-up">Instagram</Link>
                        <Link to="/">Facebook</Link>
                        <Link to="/">YouTube</Link>
                        <Link to="/">Twitter</Link>
                    </div>
                </div>
            </div>
            <section class="social-media">
                <div class="social-media-wrap">
                    <div class="footer-logo">
                        <Link to="/" className="social-logo">
                            <i class="fas fa-coffee"></i>   Coffee time
                        </Link>
                    </div>
                    <div class="social-icons">
                        <Link to="/" target="_blank" area-label="Facebook" class="social-icon-link facebook">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="/" target="_blank" area-label="Facebook" class="social-icon-link instagram">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to="/" target="_blank" area-label="Facebook" class="social-icon-link youtube">
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link to="/" target="_blank" area-label="Facebook" class="social-icon-link twitter">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to="/" target="_blank" area-label="Facebook" class="social-icon-link linkedin">
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Footer

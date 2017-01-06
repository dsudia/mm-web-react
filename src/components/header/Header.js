import React, { Component } from 'react';
import $ from 'jquery'

class Header extends Component {
    constructor(props) {
        super(props)
        this._toggleDiv = this._toggleDiv.bind(this)
    }

    _toggleDiv() {
        $(this.refs['main-nav-mobile']).slideToggle()
    }
    
    render() {
        return (
            <div>
                <header>
                    <div className="row-header">
                        <div className="logo">
                            <a href="index.html" className="logo-light"></a>
                        </div>
                        <nav className="main-nav-wrap">
                            <ul className="main-navigation">
                                <li className="menu-drop"><a className="smoothscroll" href="index.html" title="">Home <i className="fa fa-sort-desc" aria-hidden="true"></i></a>
                                    <ul className="dropdown">
                                        <li><a href="index.html">Default Home</a></li>
                                        <li><a href="animated-background.html">Animated Background</a></li>
                                        <li><a href="animated-text.html">Animated Text</a></li>
                                        <li><a href="coloured-background.html">Colored Background</a></li>
                                        <li><a href="home-with-slider.html">Home with Slider</a></li>
                                    </ul>
                                </li>
                                <li className="menu-drop"><a className="smoothscroll" href="" title="">Showcase <i className="fa fa-sort-desc" aria-hidden="true"></i></a>
                                    <ul className="dropdown">
                                        <li><a href="features.html">Features</a></li>
                                        <li><a href="services.html">Services</a></li>
                                    </ul>
                                </li>
                                <li><a className="smoothscroll" href="about.html" title="">About</a></li>
                                <li className="menu-drop"><a className="smoothscroll" href="blog.html" title="">Blog <i className="fa fa-sort-desc" aria-hidden="true"></i></a>
                                    <ul className="dropdown-blog">
                                        <li><a href="blog.html">Blog Default - (List)</a></li>
                                        <li><a href="blog-right-sidebar.html">Blog - (Right Sidebar)</a></li>
                                        <li><a href="blog-left-sidebar.html">Blog - (Left Sidebar)</a></li>
                                        <li><a href="blog-single-post.html">Blog Post - (No Sidebar)</a></li>
                                    </ul>
                                </li>
                                <li className="menu-drop"><a className="smoothscroll" href="#" title="">Pages <i className="fa fa-sort-desc" aria-hidden="true"></i></a>
                                    <ul className="dropdown">
                                        <li><a href="faq.html">FAQ</a></li>
                                        <li><a href="careers.html">Careers</a></li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                        <li><a href="404.html">Error 404</a></li>
                                        <li><a href="privacy.html">Privacy</a></li>
                                        <li><a href="comparison-tables.html">Comparison Tables</a></li>
                                        <li><a href="coming-soon.html">Coming Soon</a></li>
                                        <li><a href="login.html">Sign In</a></li>
                                        <li><a href="register.html">Sign Up</a></li>
                                    </ul>
                                </li>
                                <li className="highlight with-sep"><a href="login.html" title="">Sign In</a></li>
                                <li className="highlight with-sep"><a href="register.html" title="">Sign Up</a></li>
                            </ul>
                            <ul ref="main-nav-mobile" className="main-navigation-mobile">
                                <li className="mobile-title"><a href="index.html" title="">Home</a>
                                    <ul className="mobile-content">
                                        <li><a href="index.html">Default Home</a></li>
                                        <li><a href="animated-background.html">Animated Background</a></li>
                                        <li><a href="animated-text.html">Animated Text</a></li>
                                        <li><a href="coloured-background.html">Colored Background</a></li>
                                        <li><a href="home-with-slider.html">Home with Slider</a></li>
                                    </ul>
                                </li>
                                <li className="mobile-title"><a href="about.html">About</a>
                                    <ul className="mobile-content"><li><a href="about.html">About</a></li></ul>
                                </li>
                                <li className="mobile-title"><a href="index.html" title="">Showcase</a>
                                    <ul className="mobile-content">
                                        <li><a href="features.html">Features</a></li>
                                        <li><a href="services.html">Services</a></li>
                                    </ul>
                                </li>
                                <li className="mobile-title"><a href="index.html">Blog</a>
                                    <ul className="mobile-content">
                                        <li><a href="blog.html">Blog Default - (List)</a></li>
                                        <li><a href="blog-right-sidebar.html">Blog - (Right Sidebar)</a></li>
                                        <li><a href="blog-left-sidebar.html">Blog - (Left Sidebar)</a></li>
                                        <li><a href="blog-single-post.html">Blog Post - (No Sidebar)</a></li>
                                    </ul>
                                </li>
                                <li className="mobile-title"><a href="">Pages</a>
                                    <ul className="mobile-content">
                                        <li><a href="faq.html">FAQ</a></li>
                                        <li><a href="careers.html">Careers</a></li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                        <li><a href="404.html">Error 404</a></li>
                                        <li><a href="privacy.html">Privacy</a></li>
                                        <li><a href="comparison-tables.html">Comparison Tables</a></li>
                                        <li><a href="coming-soon.html">Coming Soon</a></li>
                                        <li><a href="login.html">Sign In</a></li>
                                        <li><a href="register.html">Sign Up</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <a onClick={this._toggleDiv} className="menu-toggle" href="#"><span>Menu</span></a>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;
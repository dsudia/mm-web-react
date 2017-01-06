import React, { Component } from 'react';
import heroImage from '../../assets/img/training.jpg'
import './hero.css'

class Hero extends Component {
  render() {
    return (
      <div>
        <section id="hero-3" className="hero-3">
            <div id="img-back">
                <div className="cnt-hero-content">
                    <div className="hero-box">
                        <div className="container">
                            <div className="hero-text align-center">
                                <h1>Montessori Match</h1>
                                <p>Find schools and teachers with a great cultural fit.</p>
                                <div className="screenshot animated fadeInUp">
                                    <img src={heroImage} className="img-responsive" alt="screenshot" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
}

export default Hero;
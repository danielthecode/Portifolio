import React from 'react';
import "./hero.scss";
import dots from '../../images/dots.svg'
import dtc from '../../images/dtc.svg'

const Hero = () => {
  return <div >
      <div className="overlay overlay-lg">
          <div className="top-left">
          <img src={dtc} className='dtc' alt="" />
          </div>

          <div className="top-right">
          <svg width="800" height="109" viewBox="0 0 800 109" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M47.55 1.8H66.75L78.9 37.05L91.2 1.8H110.25L91.95 50.25L105.45 84.15L135.6 1.49999H158.1L115.5 108H97.65L78.9 63.3L60.3 108H42.45L0 1.49999H22.2L52.5 84.15L65.7 50.25L47.55 1.8ZM242.96 89.85V108H169.01V1.49999H241.61V19.65H189.71V45.3H234.56V62.1H189.71V89.85H242.96ZM259.098 108V1.49999H279.798V89.85H334.098V108H259.098ZM337.902 54C337.902 47.5 339.052 41.15 341.352 34.95C343.752 28.65 347.202 22.95 351.702 17.85C356.202 12.65 361.702 8.54999 368.202 5.55C374.702 2.44999 382.102 0.899993 390.402 0.899993C400.202 0.899993 408.652 3.05 415.752 7.35C422.952 11.65 428.302 17.25 431.802 24.15L415.902 35.1C414.102 31.1 411.752 27.95 408.852 25.65C405.952 23.25 402.852 21.6 399.552 20.7C396.252 19.7 393.002 19.2 389.802 19.2C384.602 19.2 380.052 20.25 376.152 22.35C372.352 24.45 369.152 27.2 366.552 30.6C363.952 34 362.002 37.8 360.702 42C359.502 46.2 358.902 50.4 358.902 54.6C358.902 59.3 359.652 63.85 361.152 68.25C362.652 72.55 364.752 76.4 367.452 79.8C370.252 83.1 373.552 85.75 377.352 87.75C381.252 89.65 385.502 90.6 390.102 90.6C393.402 90.6 396.752 90.05 400.152 88.95C403.552 87.85 406.702 86.1 409.602 83.7C412.502 81.3 414.752 78.2 416.352 74.4L433.302 84.15C431.202 89.45 427.752 93.95 422.952 97.65C418.252 101.35 412.952 104.15 407.052 106.05C401.152 107.95 395.302 108.9 389.502 108.9C381.902 108.9 374.952 107.35 368.652 104.25C362.352 101.05 356.902 96.85 352.302 91.65C347.802 86.35 344.252 80.45 341.652 73.95C339.152 67.35 337.902 60.7 337.902 54ZM491.316 108.75C483.516 108.75 476.416 107.25 470.016 104.25C463.716 101.25 458.266 97.2 453.666 92.1C449.166 86.9 445.666 81.1 443.166 74.7C440.666 68.2 439.416 61.55 439.416 54.75C439.416 47.65 440.716 40.9 443.316 34.5C446.016 28 449.666 22.25 454.266 17.25C458.966 12.15 464.466 8.15 470.766 5.24999C477.166 2.24999 484.166 0.749995 491.766 0.749995C499.466 0.749995 506.466 2.3 512.766 5.4C519.166 8.49999 524.616 12.65 529.116 17.85C533.616 23.05 537.116 28.85 539.616 35.25C542.116 41.65 543.366 48.25 543.366 55.05C543.366 62.05 542.066 68.8 539.466 75.3C536.866 81.7 533.216 87.45 528.516 92.55C523.916 97.55 518.416 101.5 512.016 104.4C505.716 107.3 498.816 108.75 491.316 108.75ZM460.416 54.75C460.416 59.35 461.116 63.8 462.516 68.1C463.916 72.4 465.916 76.25 468.516 79.65C471.216 82.95 474.466 85.6 478.266 87.6C482.166 89.5 486.566 90.45 491.466 90.45C496.466 90.45 500.916 89.45 504.816 87.45C508.716 85.35 511.966 82.6 514.566 79.2C517.166 75.7 519.116 71.85 520.416 67.65C521.816 63.35 522.516 59.05 522.516 54.75C522.516 50.15 521.766 45.75 520.266 41.55C518.866 37.25 516.816 33.45 514.116 30.15C511.516 26.75 508.266 24.1 504.366 22.2C500.566 20.2 496.266 19.2 491.466 19.2C486.366 19.2 481.866 20.25 477.966 22.35C474.166 24.35 470.966 27.05 468.366 30.45C465.766 33.85 463.766 37.65 462.366 41.85C461.066 46.05 460.416 50.35 460.416 54.75ZM646.095 108V38.1L618.795 90.15H607.245L579.945 38.1V108H559.245V1.49999H581.445L612.945 62.1L644.745 1.49999H666.795V108H646.095ZM762.98 89.85V108H689.03V1.49999H761.63V19.65H709.73V45.3H754.58V62.1H709.73V89.85H762.98Z" fill="#5867B7"/>
</svg>



          </div>
          
          <div className="bottom-right">
          <img src={dots} className='dots' alt="" />

          </div>

      
      
          <div className="container-hero">
            <div className="text">
              <h1 className="hero-title">I'm Daniel Olugbodi</h1>
                <h3 className="hero-sub">Web Developer</h3>
                <p className="hero-desc">
                    Hello, I am Daniel, I am a Web Developer and Designer. 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error doloribus omnis nobis excepturi, ratione numquam?
                </p>
                <a href="/" className="btn">Download CV</a>
                <a href="/" className="btn-2">Let's Talk</a>
            </div>
                
      
  </div>
  </div> 
  </div>
  ;
};

export default Hero;
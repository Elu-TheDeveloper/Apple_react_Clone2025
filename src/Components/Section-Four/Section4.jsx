import React from 'react';
import sport from "@/assets/images/home/sport2.png";
import iPadAir from"@/assets/images/home/iPad_Air.png"
function Section4() {
  return (
    <section className="fourth-highlight-wrapper">
      <div className="container-fluid">
        <div className="row">
        <div className="left-side-wrapper col-sm-12 col-md-6">
            <div className="left-side-container">
              <div className="logo-wrapper">
              <img src={sport} alt='sport'/>
              </div>
            <div className="descrption-wrapper">
            <h5>Fitness for Everyone.</h5>
           <h5>Personalized for you.</h5> 
            </div>
            <div className="links-wrapper right">
  <ul>
    <li><a href="" className="primary-btn">Learn more</a></li>
    <li className="button"><a href="" className="secondary-btn">Buy</a></li>
  </ul>
</div>
            </div>
            
          </div>
          <div className="right-side-wrapper col-sm-12 col-md-6">
            <div className="right-side-container">
              <div className="title-wrapper white">
              <img src={iPadAir} />
              </div>
              <div className="links-wrapper right">
  <ul>
    <li><a href="" className="primary-btn">Learn more</a></li>
    <li className="button"><a href="" className="secondary-btn">Buy</a></li>
  </ul>
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
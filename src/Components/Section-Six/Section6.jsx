import React from 'react'
import Tradein from "@/assets/images/home/Tradein.png";
function Section6() {
  return (
    <section className="sixth-highlight-wrapper">
		<div className="container-fluid">
			<div className="row">
				<div className="left-side-wrapper col-sm-12 col-md-6">
					<div className="left-side-container long">
						<div className="mark">
						<img src={Tradein}/>
							<div className="logo-wrapper">
							<div class="links-wrapper right">
 
  <h5>Get up to 3% Daily Cash back with every purchase</h5>
<hr/>
  <ul>
    <li><a href="" className="primary-btn">Get Your Estimate</a></li>
  </ul>
</div>
						</div>
					</div>						
					</div>
				</div>
				<div className="right-side-wrapper col-sm-12 col-md-6">
					<div className="right-side-container">
						<div className="title-wraper">
							Apple Card Monthly Installments 
						</div> 
						<div className="description-wraper">
							Pay for your next iPhone over time, interest-free with Apple Card.
						</div>
						<div className="links-wrapper right">
  <ul>
    <li><a href="" class="primary-btn">Learn more</a></li>
    <li className="button"><a href="" className="secondary-btn">Buy</a></li>
  </ul>
</div>
					</div>
				</div>					
			</div>
		</div> 
	</section>
  )
}

export default Section6
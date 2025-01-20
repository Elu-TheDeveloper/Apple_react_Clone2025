import watch from "@/assets/images/home/watch.png";
function Section5() {
  return (
    <section className="fifth-highlight-wrapper">
		<div className="container-fluid">
			<div className="row">
				<div className="left-side-wrapper col-sm-12 col-md-6">
					<div className="left-side-container right">
					<div className="descrption-wrapper">
							MacBook Pro
							</div>
							<div className="title-wrapper1">
							A work of Smart
							</div>
						<div className="links-wrapper right">
  <ul>
    <li><a href="" className="primary-btn">Learn more</a></li>
    <li><a href="" className="secondary-btn">Buy</a></li>
  </ul>
</div>
					</div>
				</div>
				<div className="right-side-wrapper col-sm-12 col-md-6">
					<div className="right-side-container">
						<div className="top-logo-wrapper">
							<div className="logo-wrapper">
								<img src={watch}/>
							</div>
						</div>
						<div classNameName="description-wrapper">
							New Finish. Never quit.
						</div>
						<div className="links-wrapper">
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
  )
}

export default Section5;

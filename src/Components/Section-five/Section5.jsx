import watch from "../../assets/images/home/watch.png"
function Section5() {
  return (
    <section classNameName="fifth-highlight-wrapper">
		<div classNameName="container-fluid">
			<div classNameName="row">
				<div classNameName="left-side-wrapper col-sm-12 col-md-6">
					<div classNameName="left-side-container right">
					<div classNameName="descrption-wrapper">
							MacBook Pro
							</div>
							<div classNameName="title-wrapper1">
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
				<div classNameName="right-side-wrapper col-sm-12 col-md-6">
					<div classNameName="right-side-container">
						<div classNameName="top-logo-wrapper">
							<div classNameName="logo-wrapper">
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

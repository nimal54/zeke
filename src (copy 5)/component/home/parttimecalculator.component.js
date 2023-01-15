import React, { useState } from "react";

import "../../style/home/parttimecalculator.style.css";
import earn_illustration from "../../assets/home/earn.jpg";
import * as contents from "../../utils/content.collections";

const PartTimeCalculator = () => {
	var coun_list = contents.COUNTRY_AND_CURRENCY;
	const [countryDetails, setCountryDetails] = useState({});
	const [partTimeHour, setPartTimeHour] = useState("20")
	const [paymentForSelectedJob, setPaymentForSelectedJob] = useState(0)
	const [jobListing, setJobListing] = useState([])

	const updateCountryDetails = (country) => {
		var filteredItems = coun_list.filter((item) => item.country === country);
		console.log(filteredItems);
		filteredItems = filteredItems[0];
		setJobListing(filteredItems.joblist)
		setCountryDetails(filteredItems);
	};
	return (
		<React.Fragment>
			<center className="parttimeCalcu">
				<h2 className="h2">Part time calculator !</h2>
				<div className="calculator">
					<div className="calcu_input_block">
						<h3 class="font-small">Choose country</h3>
						<select onChange={(e) => updateCountryDetails(e.target.value)}>
							{coun_list.map((data) => (
								<option value={data.country}>{data.country}</option>
							))}
						</select>
						{/* <h3 class="font-small">Currency</h3>
						<input type="text" value={countryDetails.currency} disabled></input> */}

						{jobListing.length > 0 ? (
							<div>
								<h3 class="font-small">Choose job</h3>
								<select onChange={(e) => setPaymentForSelectedJob(e.target.value)}>
									{jobListing.map((data) => (
										<option value={data.pay}>{data.name}</option>
									))}
								</select>
							</div>
						) : ''}



						<h3 class="font-small">Number of hours</h3>
						<div class="slidecontainer">
							<input
								type="range"
								min="0"
								max="24"
								class="slider"
								id="myRange"
								value={partTimeHour}
								onChange={(e) => setPartTimeHour(e.target.value)}
							/>
							<h3 class="font-small" style={{ color: 'grey' }}>Hours : {partTimeHour}</h3>
						</div>
					</div>
					<div className="calcu_summary_block">
						<div className="result">
							<img
								
								src={earn_illustration}
							></img>
							<h2>
								Total Amount you get <br />{" "}
								<span style={{ color: "green" }}>{paymentForSelectedJob*partTimeHour} ₹/ hr</span>
							</h2>
						</div>
					</div>
				</div>
			</center>
		</React.Fragment>
	);
};

export default PartTimeCalculator;

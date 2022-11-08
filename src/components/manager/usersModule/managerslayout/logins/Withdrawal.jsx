import React from "react";

const Withdrawal = ({ dashboardModal, setDashboardModal }) => {
	return (
		<>
			<div className={modstyles.modalCont}>
				<section className= "popup__container">
					<div onClick={() => setDashboardModal("in-active")}>
						<img
							src="./assets/images/times.svg"
							alt=""
							className={modstyles.hamburger}
						/>
					</div>
					<h1>Withdrawal</h1>
					<div className={modstyles.withdraw__funds}>
						<h2>Withdraw Funds</h2>
						<div className={modstyles.withdraw__intro}>
							<h3>Available Balance &#8358;50,000</h3>
							<p>Withdraw anytime without penalty</p>
						</div>
						{/* <button
							className={modstyles.button}
							id="request-withdrawal"
							onClick={() => setDashboardModal("withdrawalfund-active")}
						>
							Withdrawal
						</button> */}
					</div>
				</section>
				{dashboardModal === "withdrawalfund-active" && (
					<section>
						<h1>Withdraw</h1>
						<div className={modstyles.avatar}>
							<img
								src="./assets/images/avatar2 2.jpg"
								alt="Group Icon"
								id="avatar__img"
							/>
						</div>
						<h2>
							Wallet Balance <br />
							&#8358;115,400
						</h2>
						<div className={modstyles.withdraw__form}>
							<input
								type="text"
								className={modstyles.input}
								placeHolder="Amount to withdraw"
							/>
							<input
								type="text"
								className={modstyles.input}
								placeHolder="Enter phone number to generate OTP"
							/>
							<input
								type="password"
								placeholder="Enter password"
								className={modstyles.input}
							/>
							<button type="submit" className={modstyles.button}>
								Withdraw Fund
							</button>
						</div>
					</section>
				)}
			</div>
		</>
	);
};

export default Withdrawal;

import React from "react";

const OPEN_URL = "http://localhost:3000";
const PAY_URL = "http://localhost:3000/pay";

export const openChannel = async () => {
	console.log("opening channel");
	await fetch(OPEN_URL)
		.then(response => console.log("Success:", JSON.stringify(response)))
		.catch(error => console.error("Error:", error));
};

export const transferFunds = async () => {
	console.log("sending ETH", PAY_URL);
	await fetch(PAY_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			address: "yourValue"
		})
	})
		.then(response => console.log("Success:", JSON.stringify(response)))
		.catch(error => console.error("Error:", error));
	return null;
};

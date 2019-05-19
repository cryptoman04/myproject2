import React from "react";

const OPEN_URL = 'http://192.168.42.52:3000';
const PAY_URL = 'http://192.168.42.52:3000/pay';

const transferFunds = async () => {
    // console.log("opening channel");
    // await fetch(OPEN_URL)
    // .then(response => console.log('Success:', JSON.stringify(response)))
    // .catch(error => console.error('Error:', error));
    console.log("sending ETH", PAY_URL);
    await fetch(PAY_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          address: 'yourValue'
        })
      })
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
    return null;  
}

export default transferFunds;
import React from "react";
import { WebView } from "react-native";

class Onboarding extends React.Component {
	render() {
		return (
			<WebView
				domStorageEnabled
				javaScriptEnabled
				thirdPartyCookiesEnabled
				useWebKit
				userAgent="Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1"
				source={{
					uri:
						"https://verify.testwyre.com/widget/v1?env=test&operation=debitcard&accountId=AC_1234&authType=secretKey&destCurrency=ETH&sourceCurrency=USD&sourceAmount=0.01&dest=ethereum:0x4f5d52710C8C3E23e4c44f678868d23Aa2a49B37&redirectUrl=https://sendwyre.com"
				}}
				contentInset={
					{
						// top:-250,
						// left: -250,
						// right: -250,
						// bottom: -250
					}
				}
				style={{ flex: 1 }}
			/>
		);
	}
}

export default Onboarding;

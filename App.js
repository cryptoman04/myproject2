/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Dimensions } from "react-native";
import Keypad from "./components/Keypad";
import provider from "./ethereum";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { transferFunds, openChannel } from "./components/CeleryPay";

import Appstore from "./Appstore";
import NavigationService from "./NavigationService";
import Game from "./Game";
import Onboarding from "./Onboarding";

const { width, height } = Dimensions.get("window");

const SendButton = () => (
	<Button
		title="Send"
		buttonStyle={
			{
				// width: width / 3 - 20,
				// height: 80,
				// backgroundColor: "#6b52ad"
			}
		}
		titleStyle={{
			color: "white"
		}}
	/>
);
const AppButton = () => (
	<Button
		title="App Store"
		buttonStyle={{
			width: width / 3 - 20,
			height: 80,
			backgroundColor: "#6b52ad"
		}}
		titleStyle={{
			color: "white"
		}}
		onPress={() => NavigationService.navigate("Appstore")}
	/>
);

class SendView extends Component<Props> {
	static navigationOptions = {
		title: "myproj2"
	};
	state = {
		amount: 0
	};

	componentWillMount() {
		openChannel();
	}

	render() {
		const buttons = [{ element: SendButton }, { element: AppButton }];
		const { amount } = this.state;

		// const { navigation } = this.props;

		console.log("this.props", this.props);

		return (
			<View style={styles.container}>
				<View
					style={{
						flex: 1,
						alignItems: "center",
						justifyContent: "center",
						backgroundColor: "#6b52ad"
					}}
				>
					<Text style={{ fontSize: 80, color: "white" }}>${amount}</Text>
				</View>
				<View
					style={{
						bottom: 0,
						left: 0,
						right: 0,
						flex: 1,
						backgroundColor: "#6B52AD"
					}}
				>
					<Keypad
						color="#6B52AD"
						onPress={amount =>
							this.setState({
								amount:
									String(this.state.amount === 0 ? "" : this.state.amount) +
									String(amount)
							})
						}
					/>

					<View style={{ flexDirection: "row", left: 0, right: 0, bottom: 0, justifyContent: 'space-around' }}>
						<Button
							title="App Store"
							buttonStyle={{
								width: width / 3 - 20,
								height: 80,
                backgroundColor: "#6b52ad",
                color: 'white'
							}}
							titleStyle={{
								color: "white"
							}}
							onPress={() => this.props.navigation.navigate("Appstore")}
						/>
						<Button
							title="Send"
							buttonStyle={
								{
									// width: width / 3 - 20,
									// height: 80,
                  // backgroundColor: "#6b52ad"
                  color:'white'
								}
							}
							titleStyle={{
								color: "white"
              }}
              onPress={transferFunds}
						/>
					</View>
				</View>
			</View>
		);
	}
}

const AppNavigator = createStackNavigator(
	{
		SendView: {
			screen: SendView
		},
		Appstore: {
			screen: Appstore
		},
		Game: {
			screen: Game
		},
		Onboarding: {
			screen: Onboarding
		}
	},
	{
		defaultNavigationOptions: {
			headerTintColor: "#fff",
			headerStyle: {
				backgroundColor: "#6b52ad",
				shadowColor: "transparent",
				borderBottomWidth: 0
			}
		},
		initialRouteName: "SendView"
	}
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#6B52AD",
		paddingBottom: 30
	},
	welcome: {
		fontSize: 20,
		textAlign: "center",
		margin: 10
	},
	instructions: {
		textAlign: "center",
		color: "#333333",
		marginBottom: 5
	}
});

export default createAppContainer(AppNavigator);

import React from "react";
import {
	View,
	Text,
	FlatList,
	Dimensions,
	ImageBackground,
	TouchableWithoutFeedback
} from "react-native";

const { width, height } = Dimensions.get("window");

import puzzleImage from "./assets/2048_Screenshot.png";
import crappyBird from "./assets/flappybird.jpg";
// const AppstoreItem = item => {
// 	console.log("item", item);

// 	);
// };

const data = [
	{
		title: "2048",
		image: require("./assets/2048_Screenshot.png"),
		gameURL: "https://play2048.co/"
	},
	{
		title: "Crappy Bird",
		image: require("./assets/flappybird.jpg"),
		gameURL: "http://www.varunpant.com/static/resources/CrappyBird/index.html"
	},
	{
		title: "Crappy Bird",
		image: require("./assets/flappybird.jpg"),
		gameURL: "http://www.varunpant.com/static/resources/CrappyBird/index.html"
	}
];

const Header = () => (
	<View
		style={{ width, paddingHorizontal: 30, paddingVertical: 20, marginTop: 40, marginBottom: -10 }}
	>
		<Text
			style={{
				fontSize: 30,
				fontWeight: "bold"
			}}
		>
			Marketplace
		</Text>
		<Text>Sunday, May 19</Text>
	</View>
);

class Appstore extends React.Component {
	static navigationOptions = {
		header: null
	};
	render() {
		return (
			<View style={{ flex: 1 }}>
				<FlatList
					ListHeaderComponent={Header}
					data={data}
					renderItem={item => {
						console.log('item', item);
						return (
							<TouchableWithoutFeedback
								onPress={() =>
									this.props.navigation.navigate("Game", {
										gameURL: item.item.gameURL
									})
								}
							>
								<View
									style={{
										overflow: "hidden",
										alignItems: "center",
										justifyContent: "center",
										borderColor: "black",
										width: width - 40,
										borderRadius: 8,
										shadowOffset: { width: 10, height: 10 },
										shadowColor: "black",
										shadowOpacity: 1.0,
										backgroundColor: "transparent",
										marginTop: 20,
										marginBottom: 20
									}}
								>
									<ImageBackground
										source={item.item.image}
										style={{
											width: width - 40,
											height: height * (3 / 5),
											borderRadius: 8,
											justifyContent: "flex-end"
										}}
									>
										<View style={{ bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.4)' }}>
											<Text
												style={{
													fontSize: 50,
													color: "white",
													fontWeight: "bold",
													padding: 10
													// alignSelf: 'flex-end',
												}}
											>
												{item.item.title}
											</Text>
										</View>
									</ImageBackground>
								</View>
							</TouchableWithoutFeedback>
						);
					}}
					contentContainerStyle={{ alignItems: "center" }}
				/>
			</View>
		);
	}
}

export default Appstore;

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

// const AppstoreItem = item => {
// 	console.log("item", item);

// 	);
// };

const data = [
	{
		title: "Some app",
		image: ""
	}
];

const Header = () => (
	<View
		style={{ width, paddingHorizontal: 30, paddingVertical: 40, marginTop: 30 }}
	>
		<Text
			style={{
				fontSize: 30,
				fontWeight: "bold"
			}}
		>
			APP STORE
		</Text>
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
					renderItem={() => (
						<TouchableWithoutFeedback
							onPress={() => this.props.navigation.navigate("Game")}
						>
							<View
								style={{
									overflow: "hidden",
									alignItems: "center",
									justifyContent: "center",
									borderColor: "black",
									width: width - 30,
									borderRadius: 8,
									shadowOffset: { width: 10, height: 10 },
									shadowColor: "black",
									shadowOpacity: 1.0,
									backgroundColor: "transparent"
								}}
							>
								<ImageBackground
									source={require("./assets/zelda.jpg")}
									style={{
										width: width - 30,
										height: height * (3 / 5),
										borderRadius: 8
									}}
								>
									<Text>Hello</Text>
								</ImageBackground>
							</View>
						</TouchableWithoutFeedback>
					)}
					contentContainerStyle={{ alignItems: "center" }}
				/>
			</View>
		);
	}
}

export default Appstore;

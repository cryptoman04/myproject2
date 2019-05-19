import React from "react";
import { View, Text, Dimensions } from "react-native";
import { Button } from "react-native-elements";

const { width, height } = Dimensions.get("window");

const Keypad = props => {
	const { color, onPress } = props;
	const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "<"];

	return (
		<View
			style={{
				backgroundColor: color,
				width,
				padding: 20,
				height: height / 3,
				flexDirection: "row",
				flexWrap: "wrap",
				justifyContent: "center",
				alignItems: "center",
				marginBottom: 20
			}}
		>
			{items.map((item, i) => {
				return (
					<Button
						title={item || "0"}
						key={i}
						buttonStyle={{
							width: width / 3 - 20,
							height: 60,
							backgroundColor: "#6b52ad"
						}}
						titleStyle={{
							fontWeight: 600,
							fontSize: 22
						}}
						onPress={() => onPress(item)}
					/>
				);
			})}
		</View>
	);
};

export default Keypad;

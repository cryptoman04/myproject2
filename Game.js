import React from "react";
import { WebView } from "react-native";

class Game extends React.Component {
	render() {
		console.log("uri", this.props.navigation.state);
		return (
			<WebView
				source={{
					uri: this.props.navigation.state.params.gameURL
				}}
			/>
		);
	}
}

export default Game;

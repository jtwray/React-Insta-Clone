import React from "react";
import logo from "./logo.svg";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./Components/PostContainer/PostContainer";
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dummyData
		};
	}
	render() {
		return (
			<div className='App'>
			{this.state.dummyData.map(postObj => (
				<div>
				
				<PostContainer key={postObj.id} dummyData={this.state.dummyData} commentObj={postObj} />
	
				</div>
			))}
		</div>
		);
	}
}

export default App;

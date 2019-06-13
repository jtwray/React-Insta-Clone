import React from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from "./Components/PostContainer/PostContainer";
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: dummyData
    };
  }
  render(){
    return (
    <div className="App">
    {this.state.data.map(postdata => {
      return (
        <PostContainer postdata={this.state.data}/>
      );
    })}
   
    </div>
  );
}
}

export default App;

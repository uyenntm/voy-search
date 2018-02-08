import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {resultData:''};
    this.handleData = this.handleData.bind(this);
  }

  handleData(data){
    this.setState({resultData:data});
    //console.log("Data:",this.state.resultData);
  }
  
  render() {
    
    return (
     
      <div className="App">
       <SearchBar handleData={this.handleData}/>
       <SearchResult resultData={this.state.resultData} />
       <div id="output"></div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Router from './router';
import 'antd/dist/antd.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      titleName: 'titleName'
    };
  }

  componentWillMount(){
    
  }
  componentDidMount(){
    
  }


  render() {
    return (
      <div className="App">
     
   
          <p>
            {this.state.titleName}
          </p>
         <Router />

      </div>
    );
  }
}

export default App;

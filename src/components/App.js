import React, {Component} from 'react';
import Footer from './footer.component';
import Home from './homePage.component';

import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  } 
  render(){
    return(
        <div className = "home">
          <Home/>
          <Footer/>
      </div>


   
      
    )
  }
}

export default App;

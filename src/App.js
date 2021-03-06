//import React from 'react';
import React, { Component } from 'react';
import secondpage from './secondpage';
import './App.css';
import web3 from './web3';
import tokencontract from './tokencontract';
import TESTToken from './TESTToken';
import TEST from './TEST';
import {BrowserRouter as Router , Route , Link , Switch , NavLink} from "react-router-dom";
import home from './home';

class App extends Component {
  state = {
    balance: '',
    totalSupply:'',
    circulatingsupply:'',
    name:'',
    symbol:'',
    decimal:'' 


  };

    
  async componentDidMount() {
    
   
    const balance = await web3.eth.getBalance(tokencontract.options.address);
    const totalsupply = await tokencontract.methods.totalSupply().call();
    const decimal = await TESTToken.methods.name().call();
  
    const name = await TESTToken.methods.name().call();
    const symbol = await TESTToken.methods.symbol().call();

    //const price=await testtoken.methods.getDollarPrice().call();
  
    this.setState({totalsupply,balance,name,symbol,decimal});

    
  }
  
  
  render()
   {
    console.log(web3.version);
    const button= async () =>{
      window.Location="secondpage.js";
    }
    

    web3.givenProvider.enable().then(console.log);
    return (
      <div>
        <div>
        <Router>
    <navbar>
    
      <Link to="/h">
      <button>home
        </button>
      </Link>
      <Link exact to="/s">
      <button>join pool
        </button>
      </Link>
</navbar>
    <Switch>
    <Route exact path='/h' component={home}/>
      <Route  exact path='/s' component={secondpage}/>
    </Switch>
    
  </Router>
        
</div>
</div>
    );
  }
}


export default App;

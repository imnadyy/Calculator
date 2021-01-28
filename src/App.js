import React, { Component } from 'react';
import './App.css';
import Input from './Components/input';
import Result from './Components/result';


class App extends Component {
  state={
    input1: '',
    input2: '',
    result: '',
    response: null
  }

  firstInput = (event) => {
    this.setState({input1: event.target.value});
    
  }

  secondInput = (event) => {
    this.setState({input2: event.target.value});
  }

  calculate = (operator) => {
    const num1 = parseFloat(this.state.input1);
    const num2 = parseFloat(this.state.input2);
    let rest = 0;

    switch(operator) {
      case '+':
        rest = num1 + num2;
        this.setState({result: rest});
        break;

      case '-':
        rest = num1 - num2;
        this.setState({result: rest});
        break;

      case '*':
        rest = num1*num2;
        this.setState({result: rest});
        break;

      case '/':
        rest= num1/num2;
        this.setState({result: rest});
        break;

      default:
        this.setState({result: 'Got an error!'});
    }

    if((this.state.input1.length === 0) || (this.state.input2.length === 0)){
      this.setState({response: 2});
    } else {
      this.setState({response: 3});
    }
  }

  reset = () => {
    this.setState({
      input1: '',
      input2: '',
      result: '',
      response: null
    })
  }

  render(){
    let fixed = null;

    if(this.state.response === 2) {
      fixed = 'Please enter the numbers !'
    } else if (this.state.response === 3) {
      fixed = < Result gives={this.state.result}  reset={this.reset} />
    }

  return(
      <div className='main-container'>
        <h1 className='heading'>Calculator</h1>
        <Input changing1={this.firstInput}
          changing2={this.secondInput}
          val1 = {this.state.input1}
          val2 = {this.state.input2}
          add={() => this.calculate('+')}
          subtract={() => this.calculate('-')}
          multiply={() => this.calculate('*')}
          divide={() => this.calculate('/')}
          />

          {fixed}
      </div>
    );
  }
}

export default App;
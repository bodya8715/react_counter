import './App.css';
import Counter from './components/Counter';
import { Component } from "react";
import Step from './components/Step';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    };
  }

  stepIncrease = (e) => {
    this.setState( {step: +e.target.value});
  }

  render() {
    const {step} = this.state;
    return (
      <>
        <Step step = {step} stepIncrease={this.stepIncrease}/>
        <Counter step = {step}/>
      </>
    );
  }
}

export default App;

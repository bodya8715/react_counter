import { Component } from "react";
import CurrentNumber from "../CurrentNumber";
import Step from "../Step";
import AutoClick from "../AutoClick";


class Counter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        step: 1,
        currentNumber: 0,
        autoClickTimeId: null,
        autoClickTime: 1000,
        autoClickWorkTime: null,
        clickMode: 1
      };
    }
  
    changeStep = (e) => {
      this.setState( {step: +e.target.value});
    }

    changeCurrenNumber= () => {
      this.setState( (prevState) => ({currentNumber: prevState.currentNumber + this.state.step*this.state.clickMode}));
    }

    changeClickMode = () => {
      this.setState((prevState)=> (
        {
          clickMode: prevState.clickMode === 1 ? -1 : 1
        })
      );
    }

    changeAutoClickTime = (e) => {
      this.setState({autoClickTime: (+e.target.value)*1000});
    }

    autoClick = (e, number = this.state.autoClickTime) => {
      let start = Date.now();
      this.setState({
        autoClickTimeId: setInterval(()=>{
          this.changeCurrenNumber();
          this.setState({autoClickWorkTime: (Date.now() - start)/1000})
        }, number),
      });
    }

    componentDidMount() {
      this.autoClick(null, 0);
      setTimeout(() => {
        clearInterval(this.state.autoClickTimeId);
      }, 30000)
    }
  
    render() {
      const {currentNumber, clickMode, autoClickWorkTime} = this.state;
      return (
        <>
          <CurrentNumber currentNumber = {currentNumber}/>

          <Step 
            changeStep = {this.changeStep}
            clickMode = {clickMode}
            changeClickMode = {this.changeClickMode}
            changeCurrenNumber = {this.changeCurrenNumber}
          />

          <AutoClick 
            changeAutoClickTime = {this.changeAutoClickTime}
            autoClick = {this.autoClick}
            autoClickWorkTime = {autoClickWorkTime}
          />
        </>
      );
    }
  }
  
  export default Counter;
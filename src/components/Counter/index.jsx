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
        clickMode: true
      };
    }
  
    changeStep = (e) => {
      this.setState( {step: +e.target.value});
    }

    changeCurrenNumber= () => {
      this.setState( (prevState) => ({currentNumber: prevState.currentNumber + this.state.step}));
    }

    changeClickMode = () => {
      const {clickMode} = this.state;
      this.setState((prevState)=> (
        {
          step: prevState.step*(-1),
          clickMode: !clickMode
        })
      );
    }

    changeAutoClickTime = (e) => {
      this.setState({autoClickTime: (+e.target.value)*1000});
    }

    autoClick = () => {
      setInterval(
          () => this.changeCurrenNumber(),
          this.state.autoClickTime
      );
    }

    componentDidMount() {
      const start = Date.now();
      this.setState({
        autoClickTimeId: setInterval(()=>{
          if( ( Date.now()- start ) > this.state.autoClickTime) {
            clearInterval(this.state.autoClickTimeId);
          } else {
            this.changeCurrenNumber();
            this.setState({autoClickWorkTime: (Date.now()- start)/1000 });
          }
        },0)
      })
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
            clickHandler = {this.autoClick}
            autoClickWorkTime = {autoClickWorkTime}
          />
        </>
      );
    }
  }
  
  export default Counter;
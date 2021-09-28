import { Component } from "react";
import AutoClick from "../AutoClick";


class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNumber: 0
        }
    }

    clickHandler = () => {
        this.setState( (prevState) => ({currentNumber: prevState.currentNumber + this.props.step}));
    }

    autoClick = (number) => {
        setInterval(
            () => this.clickHandler(),
            number
        );
    }


    render() {
        const {currentNumber} = this.state;
        return (
            <>
               <p>Текущее число: {currentNumber}</p>
               <div><button onClick = {this.clickHandler}>Click</button></div>
               <AutoClick autoClick={this.autoClick}/>
            </>
        );
    }
}

export default Counter;
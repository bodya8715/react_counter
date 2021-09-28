import { Component } from "react";

class Step extends Component {
    render() {
        const {step, stepIncrease} = this.props;
        return (
            <div>Шаг: <input onChange = {stepIncrease} type="text" placeholder={step}/></div>
        );
    }
}

export default Step;
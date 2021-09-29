import { Component } from "react";

class CurrentNumber extends Component {
    render() {
        const {currentNumber} = this.props;
        return (
            <p>Текущее число: {currentNumber}</p>
        );
    }
}

export default CurrentNumber;
import { Component } from "react";

class Step extends Component {
    render() {
        const {changeStep, clickMode, changeClickMode, changeCurrenNumber} = this.props;
        return (
            <>
                <div>Шаг: <input onChange = {changeStep} type="text"/></div>
                <div>
                    <button onClick = {changeClickMode}>Click Mode:{clickMode ? "Добавить": "Отнять"}</button>
                </div>
                <div><button onClick = {changeCurrenNumber}>Click</button></div>
            </>
        );
    }
}

export default Step;
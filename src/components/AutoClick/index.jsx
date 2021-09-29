import { Component } from "react";

class AutoClick extends Component {
    render() {
        const {changeAutoClickTime, clickHandler, autoClickWorkTime} = this.props;
        return (
            <>
                <div>Частота автоклика, с: <input onChange={changeAutoClickTime} type="text" /></div>
                <div>Автоклик работает, с: {autoClickWorkTime}</div>
                <div><button onClick={clickHandler}>AutoClick</button></div>
            </>
        );
    }
}

export default AutoClick;
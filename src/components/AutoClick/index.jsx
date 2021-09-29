import { Component } from "react";

class AutoClick extends Component {
    render() {
        const {changeAutoClickTime, autoClick, autoClickWorkTime} = this.props;
        return (
            <>
                <div>Частота автоклика, с: <input onChange={changeAutoClickTime} type="text" /></div>
                <div>Автоклик работает, с: {autoClickWorkTime}</div>
                <div><button onClick={autoClick}>AutoClick</button></div>
            </>
        );
    }
}

export default AutoClick;
import { Component } from "react";

class AutoClick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            autoClickTime: 30
        };
    }

    changeAutoClickTime = (e) => {
        this.setState({autoClickTime: (+e.target.value)*1000});
    }

    clickHandler = () => {
        const {autoClickTime} = this.state;
        const {autoClick} = this.props;

        if(autoClickTime) {
            autoClick(autoClickTime);
        }
    }


    render() {
        return (
            <>
                <div>Частота автоклика: <input onChange={this.changeAutoClickTime} type="text" /></div>
                <div><button onClick={this.clickHandler}>AutoClick</button></div>
            </>
        );
    }
}

export default AutoClick;
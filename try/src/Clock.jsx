import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString(),
            swear: ''
        };
        this.clockHandler = this.clockHandler.bind(this);
        this.swearingHandler = this.swearingHandler.bind(this);
    }

    componentDidMount() {
        setInterval(this.clockHandler, 1000);
        setTimeout(this.swearingHandler, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.clockHandler);
        clearTimeout(this.swearingHandler);
    }

    clockHandler() {
        this.setState({
            time: new Date().toLocaleTimeString()
        });
    }

    swearingHandler() {
        this.setState({
            swear: 'HAHA'
        });
    }

    render() {
        return (
            <div>
                {this.state.time}
                <h1>{this.state.swear}</h1>
            </div>
        );
    }
}

export default Clock;

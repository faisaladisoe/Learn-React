import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }

    handleIncrement() {
        this.setState({
            counter: this.state.counter === 10 ? 10 : this.state.counter + 1
        });
    }

    handleDecrement() {
        this.setState({
            counter: this.state.counter === 0 ? 0 : this.state.counter - 1
        });
    }

    render() {
        return (
            <div>
                <p>Counter : {this.state.counter}</p>
                <button onClick={this.handleIncrement}>
                    +
                </button>
                <button onClick={this.handleDecrement}>
                    -
                </button>
            </div>
        );
    }
}

export default Button;

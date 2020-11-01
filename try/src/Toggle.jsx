import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false
        };
        this.statusHandler = this.statusHandler.bind(this);
    }

    statusHandler() {
        this.setState(status => ({
            status: !status.status
        }));
    }

    render() {
        return (
            <div>
                <h1>Status right now : {this.state.status ? 'OFF' : 'ON'}</h1>
                {this.state.status ? 
                    <button onClick={this.statusHandler}>TURN IT ON</button>
                    :
                    <button onClick={this.statusHandler}>TURN IT OFF</button>
                }
            </div>
        );
    }
}

export default Toggle

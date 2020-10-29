import React from 'react';

let counter = 0;
class PracticeState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: counter
        }
    }

    componentDidMount() {
        this.count = setInterval(
            () => this.generator(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.count);
    }

    generator() {
        this.setState({
            counter: counter > 20 ? counter = 0 : counter++
        });
    }
    
    render() {
        return (
            <div>
                { this.state.counter }
            </div>
        );
    }
}

export default PracticeState;

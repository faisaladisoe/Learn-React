import React from 'react';
import Greeting from './Greeting';
import Comment from './Comment';
import PracticeState from './PracticeState';

const App = () => {
    return (
        <div>
            <Greeting name = 'Faisal' />
            <Comment comment = "This is so damn good" />
            <PracticeState />
        </div>
    );
}

export default App;

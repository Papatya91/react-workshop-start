// Import the React and React DOM Libraries
import React from 'react';
import ReactDOM from 'react-dom';


function getButtonText() {
    return 'Click on me!';
}


// Create the React components

const App = () => {
    const buttonText = { text: 'Click me!'};
    return (
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type="text"/>
            <button style={{BackgroundColor: 'blue', color: 'gray'}}>
            {buttonText.text}</button>
        </div>
    );
};


// Take the REact component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
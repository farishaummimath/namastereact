import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement(
    'div',
    { id: 'parent' },
    React.createElement(
        'h1',
        null,
        'This is nested - React Element 🚀'
    ),
    React.createElement(
        'div',
        { id: 'child' },
        React.createElement(
            'h2',
            null,
            'This is child-sibling'
        )
    ),
    React.createElement(
        'div',
        { id: 'sibling' },
        React.createElement(
            'h2',
            null,
            'Sibling'
        )
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
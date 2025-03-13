const parent = React.createElement(
    'div',
    { id: 'parent' },
    React.createElement(
        'h1',
        null,
        'Parent'
    ),
    React.createElement(
        'div',
        { id: 'child' },
        React.createElement(
            'h2',
            null,
            'Child'
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
const heading1 = React.createElement('h1',
    {
        id: 'title',
    },
    'welcome to react world');

const heading2 = React.createElement('h2',
    {
        id: 'title',
    },
    'welcome to react world again');

const container = React.createElement('div',
    {
        id: 'container'
    }, [heading1, heading2]);


console.log(heading1);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(container);
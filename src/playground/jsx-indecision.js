console.log('App.js running!');

const app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    //options: ['one','two']
    options: []
};
const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value='';
        renderOptions();
    }
};
const clear = (e) => {
    e.preventDefault();
    
    app.options = [];        
    renderOptions();
    
};

const onSelectOption = () => {
    const option = Math.floor(Math.random() * app.options.length);
    alert(app.options[option]);
};

const appRoot = document.getElementById('app');
const itemOptions = [];
const renderOptions = () => {
    //JSX - JavaScript XML
    var template = (<div>
        <h1>{app.title}</h1>
        {app.subTitle && <p>{app.subTitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options:' : 'No Options'}</p>
    {app.options.length}
    {itemOptions.map((number) => {
        return <p key={number}>{number}</p>
    })}
    <ol>
    {app.options.map((option) => {
        return <li key={option}>{option}</li>
    })}
    </ol>
    <form onSubmit={onFormSubmit}>
        <input type='text' name='option'/>
        <button>Add Option</button>
        <button onClick={clear}>Clear all</button>
        <button disabled={app.options.length === 0} onClick={onSelectOption}>What should I do?</button>
    </form>
    </div>);

    ReactDOM.render(template, appRoot);
};


renderOptions();





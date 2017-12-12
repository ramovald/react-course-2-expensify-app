import React from 'react';
import ReactDOM from 'react-dom';

const obj = {
    name: 'Vic',
    getName() {
        return this.name;
    }
};
const getName = obj.getName.bind({name: 'Andy'});
console.log(getName());

const func = function() {
    console.log(this);
}
//func();

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options : []
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.pickOption = this.pickOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            
            if (options) {
                this.setState(() => ({ options }));
            }
            console.log('fetching data!');
        } catch (e) {

        }
        
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('saving data');
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    handleDeleteOptions() {
        this.setState(() => ({options : []}));
    }
    handleRemove(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }
    pickOption() {
        const pickedOption = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[pickedOption]);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';            
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        } 

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }
    render() {
        const title = 'Indecision';
        const subTitle = 'Put your life in the hands of a computer';        
        return (
            <div>            
                <Header title={title} subTitle={subTitle}/>
                <Action hasOptions={this.state.options.length>0} pickOption={this.pickOption}/>
                <Options options={this.state.options} handleRemove={this.handleRemove}/>
                <AddOption options={this.state.options} handleAddOption={this.handleAddOption}/>
                <RemoveAll handleDeleteOptions={this.handleDeleteOptions} />
            </div>
        );
    }
}

/* IndecisionApp.defaultProps = {
    options: []
} */
const Header = (props) => {    
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    );    
}

Header.defaultProps = {
    title: 'default val'
};

const Action = (props) =>  {        
    return (
        <div>
            <button onClick={props.pickOption} disabled={!props.hasOptions}>What should I do?</button>
        </div>
    );    
};

const Options = (props) => {        
    return (
        <div>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            <ol>
                {
                    props.options.map((opt) => 
                        <Option key={opt} option={opt} handleRemove={props.handleRemove}/>
                    )
                }
            </ol>
        </div>
    );    
};
const Option = (props) => {    
    return (       
        <div>                             
        <li>{props.option}
            <button 
                onClick={(e) => {
                    props.handleRemove(props.option);
                }}
            >
            Remove
            </button>
        </li>  
        </div>
    );    
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleNewOption = this.handleNewOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleNewOption(e) {
        e.preventDefault();
        console.log(this.props.options);
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() => (
            {error}
        ));

        if (!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleNewOption}>
                <input type="text" name="option"></input>
                <button type="submit">Add Option</button>
            </form>
            </div>
        );
    }
}

class RemoveAll extends React.Component {    
    render() {
        return (
            <div>                
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp options={[]}/>, document.getElementById('app'));
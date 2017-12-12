class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0,
      name: 'Julie'
    }
  }

  componentDidMount() {
    const countStorage = localStorage.getItem('count');
    const count = parseInt(countStorage, 10);
    if (!isNaN(countStorage)) {      
      this.setState(() => ({count}));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }

  handleAddOne() {
    //this.state.count = this.state.count + 1;
    //console.log(this.state)
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    });
    /* this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    }); */
    /* this.setState({count: 0})
    this.setState({
      count: this.state.count + 1
    }) */
  }
  render() {
    return (
      <div>
        {this.state.name}
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

/* Counter.defaultProps = {
  count : 0
} */
ReactDOM.render(<Counter />, document.getElementById('app'));
/*console.log('App.js running!');

//JSX - JavaScript XML
var template = (<div><h1>Indecision App!</h1>
<p>This is some info</p>
<ol>
  <li>one</li>
  <li>two</li>
</ol></div>);

let count=0;
const plusId = "plus";
const minusId = "minus";

const addOne = () => {
  count++;
  console.log("Add one: " + count);
  renderScreen();
};
const minusOne = () => {
  count--;
  console.log("Minus one: " + count);
  renderScreen();
};
const resetCount = () => {
  count = 0;
  console.log("Reset: " + count);
  renderScreen();
};
var appRoot = document.getElementById('app');
const renderScreen = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button id={plusId} className="button" onClick={addOne}>+1</button>
      <button id={minusId} className="button" onClick={minusOne}>-1</button>
      <button id="resetId" className="button" onClick={resetCount}>0</button>
    </div>  
    
  );
  ReactDOM.render(templateTwo, appRoot);
}
renderScreen();*/



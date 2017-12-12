class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: true
        }
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                //visibility: !this.state.visibility
                visibility: !prevState.visibility
            }
        });
    }
    render() {
        return (
            <div id="content">
                <h1>Visibility Toogle</h1>
                {/*<button onClick={handleToggleVisibility}>{this.state.visibility ? 'Hide detail' : 'Show detail'}</button>*/}
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide detail' : 'Show detail'}</button>
                {this.state.visibility && (
                    <div>Some detail here</div>
                )}    
            </div>
        )
    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

/* const appRoot = document.getElementById('app');
const toogleVisibility = () => {
    visibility = !visibility;
    render();
};
let visibility = false;

const render = () => {
    
    const template = (<div id="content">
    <h1>Visibility Toogle</h1>
    <button onClick={toogleVisibility}>{visibility ? 'Hide detail' : 'Show detail'}</button>
    {visibility && (
        <div>Some detail here</div>
    )}    
    </div>
    );

    ReactDOM.render(template, document.getElementById('app'));
}
render(); */
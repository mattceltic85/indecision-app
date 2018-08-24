class BuildVisible extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      visibility : false
    }
    this.toggleVisibility = this.toggleVisibility.bind(this);
//bind anything here
  }

toggleVisibility() {
  this.setState((prevState) => {
    return{
    visibility : !prevState.visibility
  }
});
}

  render(){
    return (
      <div>
          <h1>Visibility Toggle</h1>
            <button onClick={this.toggleVisibility}>
              {this.state.visibility ? 'Hide details' : 'Show details'}
            </button>
            {this.state.visibility && (
              <div>
                <p>Hey. These are some details you can now see!</p>
              </div>
            )}
          </div>
    )
  }
}

ReactDOM.render(<BuildVisible />, document.getElementById('app'))
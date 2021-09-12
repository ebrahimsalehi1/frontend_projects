import React,{PureComponent} from 'react';
import './App.css';
import Form from "./Form";
import ErrorBoundary from "./ErrorBoundary";

class App extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      person: {
        year : ''
      },
       error:''
    }
  }
  render() {
    //console.log('App',this.state);
    return (
        <div className="App">
          <header className="App-header">
          <ErrorBoundary state={this.state} reloadBtnOnClick={e=>this.setState({person:{year : ''},error:''})}>
             <Form person={this.state.person} handleChange={(e)=>{
               this.setState({person:{year : e.target.value}});
             }}/>
          
          </ErrorBoundary>
          </header>
        </div>
    );
  }
}

export default App;

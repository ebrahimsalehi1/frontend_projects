import React, {Component} from 'react'
import Error from "./Error";

const ErrorM = ()=>{
     console.log('ErrorM is rendering');
     return <div><button onClick={()=>{alert(0)}}>Click ME</button></div>
}
export default class ErrorBoundary extends Component {

     state={
          hasError:false
     }
     // constructor(props){
     //      super();
     //      this.state={
     //           hasError:false
     //      }
     // }

     componentDidCatch(error,info){
          this.setState({hasError:true})

          //this.props.onError(error,info);

     }

     // static getDerivedStateFromError(error) {
     //      return { hasError: true };
     //  }


     render (){

          if(this.state.hasError)
               return (<div><button onClick={()=>{alert(1)}}>mmm,</button></div>);
          
          return(this.props.children);
     }
}

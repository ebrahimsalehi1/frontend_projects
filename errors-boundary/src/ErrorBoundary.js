import React, {Component} from 'react'
import Error from "./Error";
export default class ErrorBoundary extends Component {


     constructor(props){
          super(props);

          this.state = {reload:false};
     }

     componentDidCatch(error,info){
          this.props.state.error = "err";
          this.props.state.person =  {
               year : ''
             };

             this.setState({reload:!this.state.reload});
     }     
     
     render (){
          // console.log("render ErrorBoundary",this.props.state)
           if(this.props.state.error==='err')
               return(<Error reloadBtnOnClick={e=>{
                    //this.setState({person:{year:''},error:''}); 
                    // this.props.state.error = "";
                    // this.props.state.person =  {
                    //      year : ''
                    // };
                         //this.setState({reload:!this.state.reload});   
                         this.props.reloadBtnOnClick();       
                         //console.log("click",this.props.state.error)           
               }}/>)
          
          return(<div>
                    {this.props.children}
               </div>)
     }
}

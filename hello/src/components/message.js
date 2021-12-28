import React, { Component } from 'react'
import '../Ap.css'
import {Button} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class Message extends Component {
    constructor(){
        super()
        this.state={
             Message:'PLEASE SUBSCRIBE',
             but:'SUBSCRIBE'
        }
    }
     changeMessage() {
        this.setState({
            Message:'THANK YOU FOR SUBSCRIBING',
            but:'SUBSCRIBED'
        })
    }    
    
 render(){
     return(<div><h2>{this.state.Message}</h2>
     <Button className="btn btn-warning" onClick={()=>{
         this.changeMessage()
     }}>{this.state.but}</Button></div>)
 }
}
export default Message

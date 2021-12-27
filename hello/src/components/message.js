import React, { Component } from 'react'
import '../Ap.css'

class Message extends Component {
    constructor(){
        super()
        this.state={
             Message:'PLEASE SUBSCRIBE'
        }
    }
     changeMessage() {
        this.setState({
            Message:'THANK YOU FOR SUBSCRIBING'

        })

    }    
    
 render(){
     return(<div><h1>{this.state.Message}</h1>
     <button className='he' onClick={()=>{
         this.changeMessage()
     }}>SUBSCRIBE</button></div>)
 }
}
export default Message

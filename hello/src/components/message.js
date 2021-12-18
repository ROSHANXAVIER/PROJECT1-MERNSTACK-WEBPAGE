import React, { Component } from 'react'

class Message extends Component {
    constructor(){
        super()
        this.state={
             Message:'welcome boy'
        }
    }
     changeMessage() {
        this.setState({
            Message:'THANK YOU FOR SUBSCRIBING'

        })

    }    
    
 render(){
     return(<div><h1>{this.state.Message}</h1>
     <button onClick={()=>{
         this.changeMessage()
     }}>SUBSCRIBE</button></div>)
 }
}
export default Message

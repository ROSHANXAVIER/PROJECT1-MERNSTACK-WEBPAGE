import React, { Component } from 'react'
import axios from 'axios'
import Home from './database'
class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId:'',
             title:'',
        }
        this.state={
            response:[]

        }
        this.state={
            posts:[]
        }
        
    }

    changeHandler=(e)=>{
       this.setState({[e.target.name]:e.target.value}) 
    }
    submitHandler=(e)=>{
        e.preventDefault()
        console.log(this.state) 
        axios.post('http://localhost:8080/add',this.state)
        .then(res=>{
            this.setState({response:res.data})
        })
        .catch(error=>{
            console.log(error)
        })
    }
    
    render(){
        const{userId,title}=this.state
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name='userId' value={userId} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="number" name='title' value={title} onChange={this.changeHandler}/>
                    </div>
                    <button type='submit'>SUBMIT</button>
                <div>{this.state.response}</div>
                <div><Home/></div>
                </form>
            </div>
        )
    }
}

export default PostForm
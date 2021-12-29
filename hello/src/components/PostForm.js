import React, { Component } from 'react'
import axios from 'axios'
import '../Ap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Home from './database'
// import Button from 'react-bootstrap/Button'
import {Button} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
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
                    <div className='ali'>
                        ENTER THE NAME OF THE PERSON TO FIND AGE:
                        <input type="text" name='userId' value={userId} onChange={this.changeHandler}/>
                    </div>
                    <p></p>
                    <div>
                        ENTER THE AGE IF ITS A NEW ENTRY:
                        <input type="text" name='title' value={title} onChange={this.changeHandler}/>
                    </div>
                    <p></p>
                    <Button className='btn btn-outline-danger' type='submit'>SUBMIT</Button>
                <div className='agen'>THE AGE OF THE PERSON :<h2 className='numb'>{this.state.response}</h2></div>
                {/* <div><Home/></div> */}
                </form>
            </div>
        )
    }
}

export default PostForm
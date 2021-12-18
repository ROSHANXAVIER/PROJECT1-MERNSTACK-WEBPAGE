
import './Ap.css'
import React,{Component} from 'react'
import Greet from './components/greet'
import Message from './components/message'
import PostForm from './components/PostForm'
class App extends Component{
  render(){
    return(
      <div className="App">
        <Greet/>
        <Message/>
        <PostForm/>

      </div>
    );
  }
}




export default App;

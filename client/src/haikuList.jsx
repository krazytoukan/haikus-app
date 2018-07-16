import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'
import Navbar from './components/navbar.js'

const apiClient = axios.create()

class HaikuList extends React.Component {
    state ={
        haikus: []
    }
    componentDidMount(){
        apiClient({method: "get", url: '/api/haikus'})
        .then((response) => {this.setState({haikus: response.data.payload})} )
      }
    
      handleHaikuClick(id){
        console.log(id)
        apiClient({method: "get", url: `/api/haikus/${id}`})
        .then((response)=>{
          alert(response.data.payload.body)
        })
      }    
    
    render(){
        const haiku = this.state.haikus
        return (
            <div>
            {haiku.map((h)=>{
                return (
                  <div key={h._id}>
                    <h1> <Link to={`/haikus/${h._id}`}> {h.title} </Link> </h1>
                  </div>
                )
              }) }
              </div>
        )
    }
}

export default HaikuList
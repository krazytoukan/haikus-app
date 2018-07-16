import React from 'react';
import axios from 'axios';
import HaikuForm from './components/HaikuForm';

const apiClient = axios.create()

class Create extends React.Component{
    state = {
        title: "",
        body: ""
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name] : e.target.value})    
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let {title, body} = this.state
        apiClient({method: "post", url: "/api/haikus", data :{title, body}})
            .then(response => {
                let id = response.data.payload._id
                this.props.history.push(`/haikus/${id}`)
            })
    }

    
    render(){
        let {title, body} = this.state
        return(
         <div>
            <h1>Create a Haiku </h1>
            <HaikuForm 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                title= {title}
                body = {body}
            />
        </div>
        )
    }
}

export default Create
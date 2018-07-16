import React from 'react';
import axios from "axios";
import HaikuForm from "./components/HaikuForm"

const apiClient = axios.create()

class Edit extends React.Component{
    state ={
        haiku: null,
        title: "",
        body: ""
    }

    componentDidMount(){
        let id = this.props.match.params.id
        apiClient({method: "get", url: `/api/haikus/${id}`})
            .then((response) => 
            this.setState({haiku: response.data.payload, title: response.data.payload.title, body: response.data.payload.body}))
    }
    
    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name] : e.target.value})    
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let {title, body} = this.state
        let id = this.props.match.params.id
        apiClient({method: "patch", url: `/api/haikus/${id}`, data :{title, body}})
            .then(response => {
                this.props.history.push(`/haikus/${id}`)
            })
    }

    render(){
        let {haiku, title, body} = this.state
        if(!this.state.haiku) {return <h1> Loading... </h1>}
        return (
            <div>
                <h1> {haiku.title} </h1>
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

export default Edit
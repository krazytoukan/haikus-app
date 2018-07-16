import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const apiClient = axios.create()


class SingleHaiku extends React.Component{
    state = {
        haiku : null
    }

    componentDidMount(){
        apiClient({method: "get", url: `/api/haikus/${this.props.match.params.id}`})
        .then((response)=> { 
            console.log(response)
            this.setState({haiku: response.data.payload})})
    }

    deleteHaiku = (event) => {
        event.preventDefault;
        apiClient({method: 'delete', url: `/api/haikus/${this.props.match.params.id}`})
        .then(response => {
            this.props.history.push('/')
        })
    }

    render(){
        if(!this.state.haiku){return <h1> Loading </h1>}
        return(
        <div>
            <h1> {this.state.haiku.title} </h1>
            <h2> {this.state.haiku.body} </h2>
        <Link to={`/haikus/${this.state.haiku._id}/edit`}> Edit this Haiku </Link>
         <a href="#" onClick={this.deleteHaiku}> Delete Haiku </a>
        </div>
        )
    }
}

export default SingleHaiku
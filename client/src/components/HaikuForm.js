import React from "react"

const HaikuForm = (props) => {
    let { handleChange, handleSubmit, title, body } = props
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="title" placeholder="Your Title Here" value={title} />
            <input onChange={handleChange} type="text" name="body" placeholder="Your Poem Here" value={body} />
            <button> Submit Haiku </button>
        </form>
    )
}

export default HaikuForm
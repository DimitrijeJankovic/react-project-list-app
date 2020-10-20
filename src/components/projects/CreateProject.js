import React, { Component } from 'react'

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }

    heandleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    heandleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.heandleSubmit} className="white">
                    <h5 className="gray-text text-darken-3">Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.heandleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea className="materialize-textarea" id="content" onChange={this.heandleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateProject
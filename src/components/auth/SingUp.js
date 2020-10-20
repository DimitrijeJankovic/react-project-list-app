import React, { Component } from 'react'

class SingUp extends Component {
    state = {
        email: '',
        password: '',
        firsname: '',
        lastname: ''
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
                    <h5 className="gray-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.heandleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.heandleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firsname">Firsname</label>
                        <input type="text" id="firsname" onChange={this.heandleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastname">Lastname</label>
                        <input type="text" id="lastname" onChange={this.heandleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sing Up</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SingUp
import React, { Component } from 'react'
import Notifications from './Notifications'
import PojectList from '../projects/ProjectList'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        const { projects } = this.props
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <PojectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapeStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(mapeStateToProps)(Dashboard)
import React, { Component } from 'react'


export default class Default extends Component {
  
    render() {
        return (
            <div className="container default">
                <div className="row py-10">
                    <div className="col-10 col-md-10 text-center">
                        <h1 className="display-3">404</h1>
                        <h1>error not found</h1>
                        <h2>the requseted url{" "}<span className="text-danger">
                            {this.props.location.pathname}
                        </span>{" "}not found</h2>
                    </div>
                </div>
            </div>
        )
    }
}

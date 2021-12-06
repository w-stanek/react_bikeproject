import React, { Component } from 'react'

export default class TotalCount extends Component {
    render() {
        return (
            <div className="form-group">
                <button className="btn btn-lg btn-warning my-3" onClick={this.props.onClick}>spocitej</button><br />
                <h2>{`konecna cena ${this.props.total} kc`}</h2>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class TotalCount extends Component {
    render() {
        return (
            <>
            <button onClick={this.props.onClick}>spocitej</button><br/>
            <span>{`konecna cena ${this.props.total}`}</span><br/>
            </>
        )
    }
}

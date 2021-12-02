import React, { Component } from 'react'

export default class ComparePrice extends Component {
    render() {
        return (
            <>
                <label>Zadej max utratu</label>
                <input type="text" value={this.props.value} onChange={this.props.onChange}/><br/>
                <span>{(this.props.value >= this.props.total)? '':'cena je vyssi nez zadany rozpocet'}</span>
            </>
        )
    }
}

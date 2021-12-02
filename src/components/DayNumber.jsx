import React, { Component } from 'react'

export default class DayNumber extends Component {


    render() {
        return (
            <>
                <label>Pocet dnu</label>
                <select value={this.props.value} onChange={this.props.onChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <br/>
            </>
        )
    }
}

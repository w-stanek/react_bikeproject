import React, { Component } from 'react'

export default class DayNumber extends Component {


    render() {
        return (
            <div className={this.props.className}>
                <div className="input-group input-group-sm">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <span>Pocet dnu</span>
                        </div>
                    </div>
                    <select className="form-control" value={this.props.value} onChange={this.props.onChange}>
                        <option value="1">1 den</option>
                        <option value="2">2 dny</option>
                        <option value="3">3 dny</option>
                        <option value="4">4 dny</option>
                    </select>
                </div>
            </div>
        )
    }
}

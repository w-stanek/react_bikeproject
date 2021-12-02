import React, { Component } from 'react'

export default class AddExtras extends Component {
    render() {
        return (
            <div onChange={this.props.onChange}>
                <label>
                <input type="radio" value="1.05" name="extra"/>
                Stresni nosic + 5%
                </label><br/>
                <label>
                <input type="radio" value="1.1" name="extra"/>
                Nosic na tazne + 10%
                </label><br/>
                <label>
                <input type="radio" value="1" name="extra"/>
                Bez nosice
                </label><br/>
            </div>
        )
    }
}

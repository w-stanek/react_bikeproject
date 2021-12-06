import React, { Component } from 'react'

export default class AddExtras extends Component {
    render() {
        return (
         
                <div className="form gorup my-3" onChange={this.props.onChange}>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="1.05" name="extra" id="extra1" />
                        <label className="form-check-label" htmlFor="extra1">
                            Stresni nosic + 5%
                        </label>

                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="1.1" name="extra" id="extra2" />
                        <label className="form-check-label" htmlFor="extra2">
                            Nosic na tazne + 10%
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="1" name="extra" id="extra3" defaultChecked />
                        <label className="form-check-label" htmlFor="extra3">
                            Bez nosice
                        </label>
                    </div>
                </div>
        )
    }
}
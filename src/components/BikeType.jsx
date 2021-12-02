import React, { Component } from 'react'

export default class BikeType extends Component {

   
    render() {
        return (
            <>
                <label>{this.props.label}</label>
                <input data-pos={this.props.id}  name='value' type="number" value={this.props.value} onChange={this.props.onChange} />

                <input data-pos={this.props.id} name='checked' checked={this.props.checked} onChange={this.props.onChange} type="checkbox" />
                <br/>
            </>
        )
    }
}

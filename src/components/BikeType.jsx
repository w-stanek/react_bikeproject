import React, { Component } from 'react'
import { Img } from 'react-image'
import Preparing from '../Preparing.jpg'

export default class BikeType extends Component {
    handleError = (event) =>{

    }

    render() {
        return (
            <div className={this.props.className}>
                <div className="card my-2" style={{ width: '' }}>
                    <Img className="card-img-top" src={[process.env.PUBLIC_URL + this.props.img, Preparing]} alt="bike pic" />
                    <div className="card-body">
                        <h4>{this.props.label}</h4>
                        <p className="card-text">{(this.props.description === '') ? 'text se pripravuje' : this.props.description}</p>
                        <div className="m-3">cena: {this.props.price}</div>
                        <div name="group" className="input-group mb-1 px-5">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <input className="" data-pos={this.props.id} name='checkbox' checked={this.props.checked} onChange={this.props.onChange} type="checkbox" />
                                </div>

                            </div>
                            <input className="form-control form-control-sm" data-pos={this.props.id} name='value' type="number" value={this.props.value} onChange={this.props.onChange} />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

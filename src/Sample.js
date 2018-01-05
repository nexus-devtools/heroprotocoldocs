import React, {Component} from 'react'
import JsonView from 'react-json-view'
import parser from './parser'


export default class Sample extends Component {
    constructor() {
        super()
        this.state = { 
            forceLoad: false
        }
    }
    render() {

        let sample = parser.get(this.props.part),
            truncated = false
           
        if (!sample) return null

        let length = sample.length

        if (this.props.truncateAt && length > this.props.truncateAt) {
            sample = sample.slice(0, this.props.truncateAt)
            truncated = true
        }

        return (
            <div>
                <JsonView src={sample} 
                        {...this.props} />
                {truncated ? <code>(This sample has been truncated from it's original size of {length} items)</code> : null}
            </div>
        )
    }
}
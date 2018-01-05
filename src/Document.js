import React, {Component} from 'react'
import docs from './docs'

export default class extends Component {
    render() {
        let doc = this.props.match.params.doc

        let section = docs
        if (this.props.match.params.section) {
            section = section[this.props.match.params.section]
        }

        const Markdown = section[doc]

        return (
            <Markdown replay={this.props.replay} />
        )
    }
}

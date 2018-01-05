import React, {Component} from 'react'
import {Button} from './Styles'

export class UploadReplay extends Component {
    clickUpload() {
        this
            .file
            .click()
    }
    render() {
        return (
            <span>
                <input
                    type="file"
                    style={{
                    display: 'none'
                }}
                    ref={(file) => {
                    this.file = file
                }}
                    onChange={this.props.onChange}/>
                <Button
                    onClick={this
                    .clickUpload
                    .bind(this)}>Select Replay</Button>
            </span>
        )
    }
}

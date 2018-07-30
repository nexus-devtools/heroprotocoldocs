import React, {Component} from 'react'
import JsonView from 'react-json-view'
import Repl from './Repl'
import parser from './parser'
import objectDepth from 'object-depth'
import objectSize from 'object-sizeof'
import {Button} from './Styles'
import {UploadReplay} from './UploadReplay'
import {Link} from 'react-router-dom'

export default class extends Component {
    constructor() {
        super()

        this.state = {
            result: null,
            replay: null,
            collapsed: true,
            warningLoaded: false,
            code: this.getDefaultCode(),
        }
    }

    getDefaultCode() {
        return (
`module.exports = function(replay) {
  // Example usage (shows player names):
  // 
  // return replay.details.m_playerList.map((player) => player.m_name)

  return replay  
}
`
        )
    }

    runCode() {
        if (!this.state.replay) {
            this.setState({
                replay: parser.get()
            }, this.execute)
        } else {
            this.execute();
        }
    }

    execute() {

        let code = `
module = { exports: () => {} }        

${this.state.code}

return module.exports
        `

        let result = this.state.result
        try {
            result = new Function('replay', code)()(this.state.replay)
        } catch (ex) {
            result = {
                error: ex.message
            }
        }

        let shouldCollapse = false

        if (objectSize(result) > 80000 || objectDepth(result) > 4) {
            shouldCollapse = true
        }

        this.setState({result: result, collapsed: shouldCollapse})

    }

    shouldCollapse(part) {
        if (part.namespace.length == 1) {
            return false
        }
        return true
    }

    saveSnippet() {
        let code = encodeURIComponent(this.state.code)

        window.open('https://github.com/nexus-devtools/heroprotocoldocs/new/master/src/examples?value=' + code)
    }

    openExamples() {
        window.open('https://github.com/nexus-devtools/heroprotocoldocs/tree/master/src/examples')
    }

    runKey() {
        return navigator
            .platform
            .match(/(Mac|iPhone|iPod|iPad)/i)
            ? 'CMD'
            : 'CTRL';
    }

    renderInstructions() {
        return (
            <div>
                <h3>How it works</h3>
                <p>
                    Enter in javascript code into the function below. The <code>replay</code> parameter is an object containing all parts of the replay (with the same property names as you see on the sidebar on the left).
                    <br /><br />
                    Your function should simply return the value that you want to see results for. That value that will be displayed in the REPL below. 
                    <br /><br />
                    <a target="_blank" href="https://github.com/nexus-devtools/heroprotocoldocs/tree/master/src/examples">See other code examples</a> to see how the playground can be used.
                </p>
                <h3>Selecting a replay</h3>
                <p>
                    You can load your own replays by clicking select replay. 
                    Navigate to your Heroes of the Storm replay directory and select a replay to load it into the playground.
                    <Link to="/replayFolder">Where can I find replay files on my computer?</Link> 
                </p>
                <h3>Saving code</h3>
                <p>
                    Clicking the Save Code button will prompt you to submit a pull request against this repo with a new file added to the <code>src/examples</code> directory.
                    This is a great way to share useful information about the replay structure with other people in a simple way. Please do not hesitate to send in a PR!
                </p>
            </div>
        )
    }

    render() {

        return (
            <div>
                <h1>Playground</h1>
                <p>
                    <a onClick={() => this.setState({ instructions: !this.state.instructions })}>
                    How to use the playground
                    </a>
                </p>
                
                {this.state.instructions ? this.renderInstructions() : null}
                
                <Button
                    onClick={this
                    .runCode
                    .bind(this)}>▶ Run ({this.runKey()}+S)</Button>
                <UploadReplay
                    onChange={this.props.upload}/>
                <Button
                    onClick={this
                    .saveSnippet
                    .bind(this)}>Save Code</Button>
                <Button
                    className="link"
                    onClick={this
                    .openExamples
                    .bind(this)}>Code Examples...</Button>
                <Repl
                    code={this.state.code}
                    onChange={(code) => {
                    this.setState({code: code})
                }}
                    run={this
                    .runCode
                    .bind(this)}/> {this.state.result
                    ? <JsonView
                            src={this.state.result}
                            name={false}
                            groupArraysAfterLength={2500}
                            displayDataTypes={false}
                            theme="hopscotch"
                            shouldCollapse={this.shouldCollapse.bind(this)}/>
                    : null}
            </div>
        )
    }
}
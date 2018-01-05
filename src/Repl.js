import React, {Component} from 'react'
import CodeMirror from 'react-codemirror'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/hopscotch.css'
import 'codemirror/mode/javascript/javascript'
import './Repl.css'

export default class Repl extends Component {
    componentDidMount() {
    }
    render() {
        const options = {
            mode: 'javascript',
            theme: 'hopscotch',
            extraKeys: {
                Tab: function(cm) {
                  var spaces = Array(cm.getOption("indentUnit") + 1).join(" ");
                  cm.replaceSelection(spaces);
                },
                'Ctrl-S': this.props.run,
                'Cmd-S': this.props.run
              }
        }

        return <CodeMirror
            value={this.props.code}
            ref={(cm) => { this.codeMirror = cm}}
            options={options}
            onChange={this.props.onChange}
            autoFocus={true}/>
    }
}
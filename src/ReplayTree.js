import React, { Component } from 'react'
import './ReplayTree.css'

class ExpandableNode extends Component {
    constructor() {
        super()
        this.state = { expanded: false }
    }

    componentDidMount() {
        this.setState({ expanded: this.props.expanded })
    }

    toggleExpand() {
        this.setState({ expanded: !this.state.expanded })
    }

    render() {
        let css = ['node']

        css.push(this.state.expanded ? 'expanded' : 'closed')

        return (
            <div className={css.join(' ')} onClick={this.toggleExpand.bind(this)}>
                {this.state.expanded ? this.props.children : '⋯'}
            </div>
        )
    }
}

class NodeArray extends Component {
    constructor() {
        super()
        this.state = { expanded: false }
    }
    render() {
        const attrs = { expanded: this.props.node.length > 1 }

        return (
            <span>
                {' ['}
                    <ExpandableNode {...attrs}>
                        {this.props.node.map((item, i) => 
                            <TreeNode node={item} key={i} />
                        )}
                    </ExpandableNode>
                ]
            </span>
        )
    }
}

class NodeObject extends Component {
    render() {
        return (
            <span>
                {' {'}
                <div className="node">
                    {Object.keys(this.props.node).map((key) => 
                        <TreeNode name={key} node={this.props.node[key]} key={key} />
                    )}
                </div>
                {'}'}
            </span>
        )
    }
}

class NodeBoolean extends Component {
    render() {
        return <span className="value">{this.props.node ? "true" : "false"}</span>
    }
}

class NodeNull extends Component {
    render() {
        return <span className="value">null</span>
    }
}

class NodeNumber extends Component {
    render() {
        return <span className="value">{this.props.node}</span>
    }
}

class NodeUndefined extends Component {
    render() {
        return "undefined"
    }
}

class NodeString extends Component {
    render() {
        return <span className="value">"{this.props.node}"</span>
    }
}

class TreeNode extends Component {
    render() {
        let type = typeof(this.props.node)

        const typeMap = {
            object: NodeObject,
            array: NodeArray,
            number: NodeNumber,
            boolean: NodeBoolean,
            null: NodeNull,
            undefined: NodeUndefined,
            string: NodeString
        }
        if (type === 'object' && this.props.node instanceof Array) {
            type = 'array'
        }

        if (type === 'object' && this.props.node === null) {
            type = 'null'
        }

        const css = [type]
        if (type === 'undefined') {
            css.push('node')
        }
        const NodeComponent = typeMap[type]
        return (
            <div className={css.join(' ')}>
                {this.props.hideName || !this.props.name ? null : <span className="prop">{this.props.name}:</span>}
                <NodeComponent name={this.props.name} node={this.props.node} />
            </div>
        )
    }
}

export default class ReplayTree extends Component {
    constructor() {
        super()
        this.state = { expanded: [] }
    }
    togglePart(part) {
        let expanded = this.state.expanded.slice()

        if (expanded.indexOf(part) > -1) {
            expanded.splice(expanded.indexOf(part),1)
        } else {
            expanded.push(part)
        }

        this.setState({
            expanded: expanded
        })
    }
    css(part) {
        let classes = ['branch']
        
        if (this.state.expanded.indexOf(part) > -1) {
            classes.push('expanded')
        }        

        return classes.join(' ')
    }
    render() {
        return (
            <ul className="ReplayTree">
                {this.props.parts.map((part) => 
                    <li key={part} className={this.css(part)}>
                        <span onClick={() => this.togglePart(part)}>{part}</span>
                        {this.state.expanded.indexOf(part) > -1 ? <TreeNode name={part} hideName={true} node={this.props.replay[part]} /> : null}
                    </li>
                )}
            </ul>
        )
    }
}
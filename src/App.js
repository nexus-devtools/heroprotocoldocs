import React, { Component } from 'react'
import {Layout,Sidebar,Content,SideTitle} from './Styles'
import Playground from './Playground'
import logo from './logo.svg'
import parser from './parser'
import Document from './Document'
import {
  HashRouter as Router,
  Route,
  DefaultRoute,
  NavLink,
  Switch,
  Link
} from 'react-router-dom'
import Home from './Home'
import TableOfContents from './TableOfContents'
import {MPQArchive} from 'heroprotocol'
import axios from 'axios'

export default class extends Component {
  constructor() {
    super()
    this.state = { replay: null }
  }

  componentDidMount() {
    parser.onChange = (mpq) => {
      this.setState({ replay: mpq })
    }
    axios
        .get('Garden of Terror (122).StormReplay', {responseType: 'arraybuffer'})
        .then((resp) => {
            this.loadReplay(resp.data)
        }, (err) => {})
  }

  loadReplay(rawData) {
    const buffer = Buffer.from(rawData)
    const archive = new MPQArchive(buffer)
    parser.archive = archive
  }

  handleUpload(evt) {
    const files = evt.target.files

    if (files.length === 0) {
        return
    }

    const reader = new FileReader();

    const loadReplay = this
        .loadReplay
        .bind(this)

    reader.onload = function (e) {
        const file = reader.result
        loadReplay(file)
    }

    reader.readAsArrayBuffer(files[0])
}

  render() {
    return (
      <Router>
        <Layout>
        <Sidebar>
          <SideTitle>
            Heroes of the Storm
            <Link to="/"><img src={logo} /></Link>
            <div>Protocol Documentation</div>
          </SideTitle>
          <ul>
            <li><NavLink exact to="/">Introduction</NavLink></li>
            <TableOfContents LinkElement={NavLink} />
            <li><NavLink to="/playground">Playground</NavLink></li>
          </ul>
        </Sidebar>
        <Content>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/docs/:section/:doc" component={(props) => <Document match={props.match} />} />
            <Route path="/docs/:doc" component={(props) => <Document match={props.match} />} />
            <Route path="/playground" component={() => <Playground upload={this.handleUpload.bind(this)} />}/>
          </Switch>
        </Content>
        </Layout>
      </Router>
    )
  }
}
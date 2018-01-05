import React, {Component} from 'react'
import {Toc} from './Styles'
import { Route,  Link } from 'react-router-dom'
import docs from './docs'

function label(str) {
    if (str.indexOf('/') !== 0) {
        const paths = str.split('/')

        str = paths.pop()
    }
    if (str.indexOf('.') > -1 || ['header','details','initdata'].indexOf(str) > -1) {
        return str
    }

    return str.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1").replace(/\b\w/g, l => l.toUpperCase())
}

function item(doc, content, LinkElement) {
    if ((typeof content === "object") && (content !== null)) {
        const first = Object.keys(content)[0]
        return (
            <li key={doc}>
                <LinkElement to={{ pathname: `/docs/${doc}/${first}` }}>{label(doc)}</LinkElement>
                <ul>
                    {Object.keys(content).map((d) => item(doc + '/' + d, content[d], LinkElement))}
                </ul>
            </li>
        )
    }
    return (
        <li key={doc}>
            <LinkElement to={{ pathname: `/docs/${doc}` }}>{label(doc)}</LinkElement>
        </li>
    )
}

export default function toc(props) {

    const LinkElement = props.LinkElement || Link

    return (
        Object.keys(docs).map( (doc) => item(doc, docs[doc], LinkElement) )
    )
}
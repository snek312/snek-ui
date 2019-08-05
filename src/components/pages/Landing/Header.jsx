import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className='doc-header_background doc-flexbox doc-flexbox--column'>
                <a href="https://github.com/snek312/snek312.github.io/tree/master/snek-ui" className='doc-version'>{this.props.version}</a>
                <h2>SnekUI</h2>
                <h4>Fast and lightweight library for modern website building</h4>
                <div className='doc-header_div'>
                    <a href="/docs/start" className='ui-button button-border border--fill'>get started</a>
                    <a href="/docs/news" className='ui-button button-border'>what's new</a>
                </div>
            </div>
        )
    }
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <div className='doc-flexbox doc-footer'>
            <ul>
                <h4>community</h4>
                <a
                    href="https://github.com/snek312/snek312.github.io/tree/master/snek-ui"
                    target="_blank"
                    rel='noopener noreferrer'
                >GitHub repo</a>
                <a
                    href="https://github.com/snek312/snek312.github.io/tree/master/snek-ui"
                    target="_blank"
                    rel='noopener noreferrer'
                >0.1.0 docs</a>
            </ul>
            <ul>
                <h4>site</h4>
                <Link to="/terms">terms</Link>
                <Link to="/privacy">privacy</Link>
                <Link to="/contact">contact</Link>
                <Link to="/about">about</Link>
            </ul>
        </div>
    )
}

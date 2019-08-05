import React from 'react'

export default function Social() {
    return (
        <div className='doc-flexbox doc-footer--left'>
            <h4>follow us</h4>
            <div className='doc-flexbox doc-footer--left'>
                <a href="https://twitter.com">
                    <div className='doc-footer_social'><i className='fab fa-twitter'></i></div>
                </a>
                <a href="https://github.com/snek312/snek312.github.io">
                    <div className='doc-footer_social'><i className='fab fa-github-square'></i></div>
                </a>
                <a href="https://facebook.com">
                    <div className='doc-footer_social'><i className='fab fa-facebook'></i></div>
                </a>
            </div>
        </div>
    )
}

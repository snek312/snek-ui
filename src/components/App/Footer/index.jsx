import React from 'react'
import Social from './Social'
import Navigation from './Navigation'
import BottomPart from './BottomPart'

export default function index() {
    return (
        <footer>
            <div>
                <div className="doc-flexbox doc-footer">
                    <Social />
                    <Navigation />
                </div>
                <BottomPart />
            </div>
        </footer>
    )
}

import React, { Component } from 'react'
import ComputerHeader from './ComputerHeader'
import ThemeSelector from './ThemeSelector'

export default class index extends Component {
    render() {
        return (
            <main className='flex-box'>
                <ComputerHeader />
                <ThemeSelector />
            </main>
        )
    }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class index extends Component {


    navigationScroll = () => {
        const
            navbarElement = document.getElementById('id-navbar'),
            listElements = document.getElementsByClassName('ui-list_item'),
            listStyle = 'ui-list_item--navbar',
            navbarStyle = 'doc-scroll';

        Array.from(listElements).forEach(element => {
            window.scrollY > 300 ? element.classList.add(listStyle) : element.classList.remove(listStyle);
        });

        window.scrollY > 300 ? navbarElement.classList.add(navbarStyle) : navbarElement.classList.remove(navbarStyle);
    }

    scrollTop = () => {
        console.log('logo clicked')
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.navigationScroll)
    }

    render() {
        return (
            <nav id="id-navbar" className='doc-flexbox doc-navbar doc-fixed'>
                <div className='doc-flexbox'>
                    <div>
                        <Link to='/'>
                            <div onClick={this.scrollTop} className='doc-logo'></div>
                        </Link>
                    </div>
                    <ul>
                        <Link to="/docs" className='ui-list_item item--button'>docs</Link>
                        <Link to="/themes" className='ui-list_item item--button'>themes</Link>
                        <Link to="/contact" className='ui-list_item item--button'>contact</Link>
                    </ul>
                </div>
            </nav>
        )
    }
}

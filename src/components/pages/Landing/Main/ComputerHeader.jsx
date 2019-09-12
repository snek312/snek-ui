import React from 'react'
import img from '../../../../img/mobile-devices-2017980_640.png'

export default function ComputerHeader() {
    return (
        <section className='section-first flex-box'>
            <div>
                <img src={img} alt="laptop" />
                <h2>design beautiful websites quickly</h2>
                <p>Develop your UI once, then deploy with the same code everywhere.</p>
            </div>
        </section>
    )
}

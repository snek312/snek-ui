import React, { Component } from 'react'
import Header from './Header'
import Main from './Main'
import LastSection from './LastSection'

import * as CONST from '../../../constants/static'

export default class index extends Component {
    render() {
        return (
            <div>
                <Header version={CONST.VERSION} />
                <Main />
                <LastSection />
            </div>
        )
    }
}


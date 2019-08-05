import React, { Component } from 'react'
import Header from './Header'

import * as CONST from '../../../constants/static'

export default class index extends Component {
    render() {
        return (
            <div>
                <Header version={CONST.VERSION} />
            </div>
        )
    }
}


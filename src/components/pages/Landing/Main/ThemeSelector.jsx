import React, { Component } from 'react'

const INITIAL_STATE = {
    dropdownActive: false,
    stylePath: './themes/ui-default.css'
}

const DropdownMenu = () => (
    <>
        <div id="id-dropdown_list" class="dropdown--content dropdown--active">
            <a id="id-theme1" href="#void">theme 1</a>
            <a id="id-theme2" href="#void">theme 2</a>
            <a id="id-theme3" href="#void">theme 3</a>
        </div>
    </>
)

export default class ThemeSelector extends Component {
    constructor(props) {
        super(props)

        this.state = { ...INITIAL_STATE }
    }


    render() {
        return (
            <section className='section-theme flex-box'>
                <div class="theme-container flex-box">
                    <i class="fas fa-paint-roller"></i>
                    <h2>theme selector</h2>
                    <p>Chose your favorite theme from our many beautiful pre-created presets!</p>
                </div>
                <div class="ui-separator"></div>
                <div class="theme-container flex-box">
                    <div class="container-box flex-box">
                        <div class="container-box--top">
                            <div id="id-dropdown" class="ui-dropdown ui-button button-color " onClick={() => {
                                this.setState({
                                    dropdownActive: !this.state.dropdownActive,
                                })
                            }}>
                                <span>select theme <span id="id-drop_icon" class="dropdown--icon">▾</span>
                                </span>
                                {this.state.dropdownActive
                                    ? (
                                        <DropdownMenu />
                                    )
                                    : null}
                            </div>
                        </div>
                        <div class="container-box--bot">
                            <a href="#void">
                                <div class="ui-button button-color">click me!</div>
                            </a>
                            <a href="#void">
                                <div class="ui-button button-color">click me!</div>
                            </a>
                            <a href="#void">
                                <div class="ui-button button-color--alt"> <i class="fas fa-cart-plus"></i> add to cart</div>
                            </a>
                            <a href="#void">
                                <div class="ui-button button-color--dark"> <i class="fas fa-save"></i> save for later</div>
                            </a>
                            <a href="#void">
                                <div class="ui-button button-color">
                                    <div class="button-addon">
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <span>star</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

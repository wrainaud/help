import React, { Component } from 'react';

import styles from './styles.module.css';

class Modal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            modalOpened: true
        }

        this.modalToggle = this.modalToggle.bind(this)
    }

    modalToggle() {
        this.setState({ modalOpened: !this.state.modalOpened })
    }

    render() {
        const coverClass = this.state.modalOpened ? 'modal-cover modal-cover-active' : 'modal-cover'
        const containerClass = this.state.modalOpened ? 'modal-container modal-container-active' : 'modal-container'
        return (
            <div>
                <button className='btn btn-primary' onClick={this.modalToggle}>Modal</button>

                <div className={containerClass}>
                    <div className='modal-header'></div>
                    <div className='modal-body'></div>
                    <div className='modal-footer'></div>
                </div>

                <div className={coverClass} onClick={this.modalToggle}></div>
            </div>
        )
    }
}

export default Modal
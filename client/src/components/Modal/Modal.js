import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../Login/LoginForm'
import SignupForm from '../Signup/SignupForm'
import logo from '../../media/happy-trash-fire.png';
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
                <div className={containerClass}>
                    <div className='modal-header'>
                        <img className="newLogo" src={logo} alt="Logo" height="60px" width="60px" />
                            <h1 className='modal-title'> HELP! </h1></div>
                    <div className='modal-body'></div>
                    <div className='modal-footer'></div>
                </div>

                <div className={coverClass}></div>
            </div>
        )
    }
}

export default Modal
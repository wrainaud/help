import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import googleButton from './btn_google_signin_dark_normal_web.png';
import styles from './styles.module.css';

class LoginForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			redirectTo: null
		}
		// this.googleSignin = this.googleSignin.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		console.log('handleSubmit')
		this.props._login(this.state.username, this.state.password)
		this.setState({
			redirectTo: '/'
		})
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<div className="LoginForm row justify-content-md-center">
					<div className="col-md-6">
						<h1 className="text-center"><i className="fa fa-sign-in" aria-hidden="true"></i> Login</h1>
						<form>
							<label htmlFor="username">Username </label>
							<input
								className="form-control"
								type="text"
								name="username"
								value={this.state.username}
								onChange={this.handleChange}
							/>
							<label htmlFor="password" className="search-bar">Password </label>
							<input
								className="form-control"
								type="password"
								name="password"
								value={this.state.password}
								onChange={this.handleChange}
							/>
							<button className="btn btn-block" onClick={this.handleSubmit}><i className="fa fa-sign-in" aria-hidden="true"></i> Login</button>
						</form>
						<div className="text-center search-bar">
							<a href="/auth/google">
							{/* <GoogleButton /> */}
								<img src={googleButton} alt="sign into Google Button" />
							</a>
						</div>
					</div>
				</div>
			)
		}
	}
}

export default LoginForm

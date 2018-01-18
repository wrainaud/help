import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import styles from './styles.module.css';

class SignupForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			redirectTo: null
		}
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
		// TODO - validate!
		axios
			.post('/auth/signup', {
				username: this.state.username,
				password: this.state.password
			})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('youre good')
					this.setState({
						redirectTo: '/login'
					})
				} else {
					console.log('duplicate')
				}
			})
	}
	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
			<div className="SignupForm row justify-content-md-center">
				<div className="col-md-6">
				<h1 className="text-center"><i className="fa fa-user-plus" aria-hidden="true"></i> Signup</h1>
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
				<label htmlFor="confirmPassword" className="search-bar">Confirm Password </label>
				<input
					className="form-control"
					type="password"
					name="confirmPassword"
					value={this.state.confirmPassword}
					onChange={this.handleChange}
				/>
				<button onClick={this.handleSubmit} className="btn btn-block search-bar"> <i className="fa fa-user-plus" aria-hidden="true"></i> Sign up</button>
				</div>
			</div>
		)
	}
}

export default SignupForm

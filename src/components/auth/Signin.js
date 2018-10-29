import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions'

import './Signin.css'

class Signin extends Component {
	onSubmit = formProps => {
		this.props.signin(formProps, ()=>{
			this.props.history.push('/dashboard');
		});
	}

	render() {
		const { handleSubmit } = this.props;
		return (
			<form className="singinForm" onSubmit={handleSubmit(this.onSubmit)}> 
				<fieldset className="signinFieldset">
					<label>Username</label>
					<Field 
						name="username"
						type="text"
						component="input"
						className="signinField"
						autoComplete="none"
					/>
				</fieldset>
				<fieldset className="signinFieldset" >
					<label>Password</label>
					<Field 
						name="password"
						type="password"
						component="input"
						className="signinField"
						autoComplete="none"
					/>
				</fieldset>
				<div>
					{ this.props.errorMessage }
				</div>
				<button>Sign In!</button>
			</form>
		);
	}
}
function mapStateToProps(state) {
	return { errorMessage: state.auth.errorMessage };
}

export default compose ( connect(mapStateToProps, actions), reduxForm({ form: 'signin' }))(Signin);
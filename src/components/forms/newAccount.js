import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions'

import './newAccount.css'

class NewAccount extends Component {
	onSubmit = formProps => {
		this.props.addNewAccount(this.props.token, formProps, ()=>{
			this.props.history.push('/dashboard');
		});
	}

	render() {
		const { handleSubmit } = this.props;
		return (
			<form className="singinForm" onSubmit={handleSubmit(this.onSubmit)}> 
				<fieldset className="signinFieldset">
					<label>BattleNet:</label>
					<Field 
						name="bnet"
						type="text"
						component="input"
						className="signinField"
						autoComplete="none"
					/>
				</fieldset>
				<div>
					{ this.props.errorMessage }
				</div>
				<button>Add Account</button>
			</form>
		);
	}
}
function mapStateToProps(state) {
	return { 
    errorMessage: state.account.errorMessage,
    token: state.auth.authenticated
  };
}

export default compose ( connect(mapStateToProps, actions), reduxForm({ form: 'newAccount' }))(NewAccount);
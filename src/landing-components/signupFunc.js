import React, { useEffect, useState } from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useHistory
  } from "react-router-dom"
import validate from './validate'
import useForm from './useForm'
import SignIn from './signin'
import APIurl from '../../config'

import axios from 'axios'
import { atom, useRecoilState } from "recoil"

export const userState = atom({
	key: 'userState',
	default: false,
})

const SignupFunc = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm({
        submitForm,
        validate
	})

	const history = useHistory()
	const [user, setUser] = useRecoilState(userState)
	const [formData, setFormData] = useState({
		email: null,
		password: null
	})
	const [passwordConfirmState, setPasswordConfirmState] = useState()
	const [inputValue, setInputValue] = useState({})

	const doesItmMatch = () => {
		if(passwordConfirmState.passconfirm === formData.password){
			alert("Success! Password is a Match")} else alert("Passwords Do Not Match!")

		axios.post(`${APIurl}/users/signup`, formData)
			.then(() => {
				history.push('/')
			})
			.then(() => {
				setUser(true)
			})
			.catch(console.error)
		}

	const handleNew = (event) => {
		setInputValue({
			inputValue: event.target.value
		})
	}
	
	const handleEmail = (event) => {
		setFormData({
			email: event.target.value,
			password: formData.password
		})
	}

	const handlePassword = (event) => {
		setFormData({
			email: formData.email,
			password: event.target.value,
		})
	}

	const handlePasswordConfirm = (event) => {
		setPasswordConfirmState({
			passwordConfirm: event.target.value
		})
	}

	const handleNewSubmit = (event) => {
		event.preventDefault();
		console.log(event.target)
	}

    return (
        <>
			<div className='Nav'>
				<h1>BOAT</h1>
			</div>
		<div className='signup'>
			<form onSubmit={handleSubmit, handleNew} className='form' noValidate>
                <h3>Sign Up</h3>
				<h5>Continue With GOOGLE</h5>
				<h6>or continue with email</h6>

                <div className="signup-group">
                    <label>Email</label>
                    <input type="email" name='email' value={values.email, setInputValue} required onChange={handleChange, handleEmail} onSubmit={handleNewSubmit} className="signup-control" placeholder="Email" />
					{errors.email && <p>{errors.email}</p>}
				</div>

                <div className="signup-group">
                    <label>Password</label>
                    <input type="password" name='password' value={values.password, setInputValue} required onChange={handlePassword} onSubmit={handleNewSubmit} className="signup-control" placeholder="Password" />
					{errors.password && <p>{errors.password}</p>}
				</div>

				<div className="signup-group">
                    <label>Confirm Password</label>
                    <input type="password" name='passconfirm' onChange={handleChange, handlePasswordConfirm} required value={values.passconfirm, setInputValue} onSubmit={handleNewSubmit} className="signup-control" placeholder="Confirm Password" />
					{errors.passconfirm && <p>{errors.passconfirm}</p>}
				</div>

				<div className="signup-group">
                    <div className="checkbox">
                        <input type="checkbox" className="control-input" id="customCheck" />
                        <label className="control-label" htmlFor="customCheck">I accept our Terms of Service and Privacy Policy</label>
					</div>
                </div>

                <button type="submit" className="btn" onClick={comparePasswords}>Sign Up</button>

                <div className="new-member">
                     <Router>
						Already have an account <Link to='/singIn'>Sign In</Link>
						<Switch>
							<Route path="/signIn">
								<SignIn />
							</Route>
						</Switch>
					 </Router>
                </div>
            </form>
		</div>
		</>
    )
}

export default SignupFunc
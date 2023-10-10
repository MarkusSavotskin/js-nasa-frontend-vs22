import React, {useState} from "react";
import {callAPI} from "../../utils";
import Button from "../UI/Button";
import './Form.css'

const Form = () => {

  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredPassword, setEnteredPassword] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [showSignUp, setShowSignUp] = useState(false)

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value)
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value)
  };

  const showSignUpHandler = () => {
    setShowSignUp(!showSignUp)
  };

  const loginSubmit = () => {
    callAPI('POST', '/login', {
      username: enteredUsername,
      password: enteredPassword
    }).then(response => {
      console.log(response)
    })
  }

  const signUpSubmit = () => {
    callAPI('POST', '/register', {
      username: enteredUsername,
      password: enteredPassword,
      email: enteredEmail
    }).then(response => {
      console.log(response)
    })
  }

  if (!showSignUp) {

    return (
      <div className="login-form">
        <div className="form-box solid">
          <form>
            <div className="login-form__field">
              <label>Username</label>
              <input
                type="text"
                name="username"
                onChange={usernameChangeHandler}/>
            </div>

            <div className="login-form__field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={passwordChangeHandler}/>
            </div>

            <Button style='Form' title='LOG IN' onClick={loginSubmit}/>
          </form>
        </div>

        <div className="login-form__footer">
          <p>or</p>
          <Button style='Footer' title='SIGN UP' onClick={showSignUpHandler}/>
        </div>
      </div>
    )
  } else {
    return (
      <div className="login-form">
        <div className="form-box solid">
          <form>
            <div className="login-form__field">
              <label>Username</label>
              <input
                type="text"
                name="username"
                onChange={usernameChangeHandler}/>
            </div>

            <div className="login-form__field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={passwordChangeHandler}/>
            </div>

            <div className="login-form__field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={emailChangeHandler}/>
            </div>

            <Button style='Form' title='SIGN UP' onClick={signUpSubmit}/>
          </form>
        </div>

        <div className="login-form__footer">
          <p>or</p>
          <Button style='Footer' title='LOG IN' onClick={showSignUpHandler}/>
        </div>
      </div>
    )
  }
}
export default Form
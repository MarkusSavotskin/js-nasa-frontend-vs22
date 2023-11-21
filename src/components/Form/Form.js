import React, {useState} from "react";
import {callAPI} from "../../utils";
import Button from "../UI/Button";
import './Form.css'

const Form = () => {

  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredPassword, setEnteredPassword] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [showSignUp, setShowSignUp] = useState(false)
  const [error, setError] = useState('');

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

  const loginSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    callAPI('POST', '/login', {
      username: enteredUsername,
      password: enteredPassword
    }).then(response => {
      if (response.status === "OK") {
        // Handle successful login, e.g., redirect to a dashboard
        console.log("Login successful");
      } else {
        // Handle login failure
        setError("Login failed. Please check your credentials.");
      }
    }).catch(error => {
      // Handle API call error
      setError("An error occurred while logging in.");
    });
  }

  const signUpSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    callAPI('POST', '/register', {
      username: enteredUsername,
      password: enteredPassword,
      email: enteredEmail
    }).then(response => {
      if (response.status === "OK") {
        // Handle successful registration, e.g., redirect to a dashboard
        console.log("Registration successful");
      } else {
        // Handle registration failure
        setError("Registration failed. Please try again.");
      }
    }).catch(error => {
      // Handle API call error
      setError("An error occurred while registering.");
    });
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
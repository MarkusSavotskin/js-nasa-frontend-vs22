import React, {useState} from "react";
import {callAPI} from "../../utils";
import Button from "../UI/Button";
import './Form.css'
import '../../fonts/Typography.css'

const Form = () => {

  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredPassword, setEnteredPassword] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [showSignUp, setShowSignUp] = useState(false)
  const [error, setError] = useState('');

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)

    if (error && event.target.value.trim() !== '') {
      setError('');
    }
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value)

    if (error && event.target.value.trim() !== '') {
      setError('');
    }
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value)

    if (error && event.target.value.trim() !== '') {
      setError('');
    }
  };

  const showSignUpHandler = () => {
    setShowSignUp(!showSignUp)
  };

  const loginSubmit = (event) => {
    event.preventDefault();

    if (!enteredUsername || !enteredPassword) {
      setError("Please fill in all required fields.");
      return;
    }

    callAPI('POST', '/login', {
      username: enteredUsername,
      password: enteredPassword
    }).then(response => {
      console.log("API Response:", response);

      if (response.message === 'User logged in successfully') {
        console.log("Login successful");
        setError('');
      } else {
        setError("Login failed. Please check your credentials.");
      }
    }).catch(error => {
      console.error("Error during login API call:", error);
      setError("An error occurred while logging in.");
    });
  }

  const signUpSubmit = (event) => {
    event.preventDefault();

    if (!enteredUsername || !enteredPassword || (!showSignUp && !enteredEmail)) {
      setError("Please fill in all required fields.");
      return;
    }

    callAPI('POST', '/register', {
      username: enteredUsername,
      password: enteredPassword,
      email: enteredEmail
    }).then(res => {
      if (res.status === 200) {
        console.log("Registration successful");
      } else if (res.status === 409) {
        setError("Username or email is already in use. Please choose a different one.");
      } else {
        setError("Registration failed. Please try again.");
      }
    }).catch(error => {
      setError("An error occurred while registering.");
    });
  }

  return (
      <div className="login-form">
        <div className="form-box solid">
          <form>
            <div className={`login-form__field`}>
              <label>Username</label>
              <input
                  className={`${(!enteredUsername && error) && 'error'}`}
                  type="text"
                  name="username"
                  onChange={usernameChangeHandler} />
            </div>

            <div className={`login-form__field`}>
              <label>Password</label>
              <input
                  className={`${(!enteredPassword && error) && 'error'}`}
                  type="password"
                  name="password"
                  onChange={passwordChangeHandler} />
            </div>

            {showSignUp && (
                <div className={`login-form__field`}>
                  <label  >Email</label>
                  <input className={`${(!enteredEmail && error) && 'error'}`}
                      type="email"
                      name="email"
                      onChange={emailChangeHandler} />
                </div>
            )}

            {error && <p className="error-message">{error}</p>}

            <Button style='Form' title={showSignUp ? 'SIGN UP' : 'LOG IN'} onClick={showSignUp ? signUpSubmit : loginSubmit} />
          </form>
        </div>

        <div className="login-form__footer">
          <p>or</p>
          <Button style='Footer' title={showSignUp ? 'LOG IN' : 'SIGN UP'} onClick={showSignUpHandler} />
        </div>
      </div>
  );
}

export default Form;
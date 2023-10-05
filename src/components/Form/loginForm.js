import React, {useState} from "react";
import {callAPI} from "../../utils";
import Button from "../UI/Button";
import Container from "../UI/Container";
import './loginForm.css'

const LoginForm = ({showTooltip}) => {

    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value)
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    };

    const submit = () => {
        callAPI('POST', '/login', {
            username: enteredUsername,
            password: enteredPassword
        }).then(response => {
            console.log(response)
        })
    }

    return (
        <div>
            <div className="login-form">
                <div className="form-box solid">
                    <form>
                        <label>Username</label>
                        <br></br>
                        <input
                            type="text"
                            name="username"
                            onChange={usernameChangeHandler}/>
                        <br></br>
                        <label>Password</label>
                        <br></br>

                        <input
                            type="password"
                            name="password"
                            onChange={passwordChangeHandler}/>
                        <br></br>
                        <Button style='Blue' title='LOG IN' onClick={submit}/>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default LoginForm
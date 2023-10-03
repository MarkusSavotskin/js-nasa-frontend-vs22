import React from 'react';
import Button from "../UI/Button";
import Container from "../UI/Container";
import {callAPI} from "../../utils";

const Form = (title) => {

    const submit = () => {
        callAPI('POST', '/login', {
            username: '...',
            password: '...'
        }).then(response => {
            console.log(response)
        })
    }

    return (
        <Container className='Form'>
            <form method='post'>

                <Button title={title} onClick={submit()}/>
            </form>
        </Container>
    )
}
import React from 'react';
import Button from "../UI/Button";
import Container from "../UI/Container";

const Form = (title, method) => {

    const submit = (method) => {

    }

    return (
        <Container className='Form'>
            <form method='post'>

                <Button title={title} onClick={submit(method)}/>
            </form>
        </Container>
    )
}
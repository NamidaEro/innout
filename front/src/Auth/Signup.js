import React, { useState, useEffect } from 'react';
import { Container, Button, FloatingLabel, Form } from 'react-bootstrap';
import { SendAuth, SendSignup } from './SendServer';

function Signup(props) {
    useEffect(() => {
        SendAuth()
		.then((param) => {
			if(param) {

			} else {
				console.log('Auth Failed');
				// props.history.push('/Login');
			}
		})
		.catch((param) => {
			console.log('Auth Failed');
			// props.history.push('/Login')
		});
    });

    const handleSubmit = (event) => {
        let userinfo = {
            email: event.target.email.value,
            pwd: event.target.password.value
        };

        SendSignup(userinfo)
        .then()
        .catch();
    };

    return (
        <Container>
			<Form onSubmit={handleSubmit}>
				<FloatingLabel controlId="floatingInput" label="Email">
					<Form.Control name="email" type="email" placeholder="Enter email" />
				</FloatingLabel>

				<FloatingLabel controlId="floatingPassword" label="password">
					<Form.Control name="password" type="password" placeholder="Enter password" />
				</FloatingLabel>

				<div className="d-grid gap-2"><Button variant="primary" type="submit">Sign in</Button></div>
			</Form>
		</Container>
    );
}

export default Signup;
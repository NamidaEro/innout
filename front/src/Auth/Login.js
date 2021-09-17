import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, FloatingLabel, Carousel, Form } from 'react-bootstrap';
import { SendAuth } from './SendServer';

function Login(props) {
	useEffect(()=>{
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
		event.preventDefault();
		console.log(event.target.email.value);
		console.log(event.target.password.value);
	}

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

export default Login;
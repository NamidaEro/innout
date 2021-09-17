import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { SendAuth } from './SendServer';

function Auth(props) {
	useEffect(()=>{
		SendAuth()
		.then((param) => {
			if(param) {

			} else {
				props.history.push('/Login');
			}
		})
		.catch((param) => {
			props.history.push('/Login')
		});
	});

	return (
		<h1>Auth</h1>
	);
}

export default Auth;
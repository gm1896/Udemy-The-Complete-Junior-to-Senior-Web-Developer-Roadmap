import React from 'react';
import logo from '../logo.svg';

const Page3 = ({ onRouteChange }) => 
	<div className="App">
		<header className="App-header">
	        <img src={logo} className="App-logo" alt="logo" />
	        <p>
	          Edit <code>src/App.js</code> and save to reload.
	        </p>
	          Learn React

	    </header>
	    <button onClick={() => onRouteChange('page1')}>Page1</button>
	    <button onClick={() => onRouteChange('page2')}>Page2</button>
	    <button className="disabled">Page3</button>
	</div>
	
export default Page3;    
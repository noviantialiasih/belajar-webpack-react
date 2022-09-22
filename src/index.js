import React from 'react';
import ReactDOM from 'react-dom';
import '/app.css'

const linkStyle = {
    fontFamily: 'Roboto',
    color: '#42a1f5'
};

const element = (
    <>
    <div>
        <img src="https://imgix3.ruangguru.com/assets/user_uploads/pp/pp_iqo2rc_8285.png" width="150"/>
        <h1>Hello React's World</h1>
        <a href="https://reactjs.org/" target="_blank" style={linkStyle}>Learn React</a>
    </div>
    </>
);

const root = document.getElementById('app');
ReactDOM.render(element, root);
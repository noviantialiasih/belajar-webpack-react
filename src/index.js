import React from 'react';
import ReactDOM from 'react-dom';
import createRoot from 'react-dom/client';
import WebFont from 'webfontloader';

WebFont.load({
   google: {
     families: ['Titillium Web:300,400,700', 'sans-serif']
   }
});

const divStyle = {
    backgroundColor: '#282c34',
    fontFamily: 'Titillium',
    color: '#fff',
    textAlign: 'center',
    paddingBottom: 50,
    paddingTop: 20
};

const linkStyle = {
    fontFamily: 'Titillium',
    color: '#fff'
};

const element = (
    <>
    <div style={divStyle}>
        <img src="https://imgix3.ruangguru.com/assets/user_uploads/pp/pp_iqo2rc_8285.png" width="150"/>
        <h1>Hello React's World</h1>
        <a href="https://reactjs.org/" target="_blank" style={linkStyle}>Learn React</a>
    </div>
    </>
);

const root = document.getElementById('app');
ReactDOM.render(element, root);
import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import '/app.css'

const linkStyle = {
    fontFamily: 'Roboto',
    color: '#42a1f5'
};

class Title extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: 'React'
      };
    };
  
    handleChange(event) {
      this.setState({
        text: event.target.value
      });
    };
  
    render() {
      return (
        <div>
          <img src="https://imgix3.ruangguru.com/assets/user_uploads/pp/pp_iqo2rc_8285.png" width="150" height="106"/>
          <input type="text" onKeyUp={this.handleChange.bind(this)} />
          <h1>Hello {this.state.text}'s World</h1>
          <a href="https://reactjs.org/" target="_blank" style={linkStyle}>Learn React</a>
        </div>
      );
    }
}

const root = ReactDOMClient.createRoot(document.getElementById('app'));
root.render(<Title />);
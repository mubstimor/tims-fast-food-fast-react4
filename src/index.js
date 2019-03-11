import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style/main.less';

class Welcome extends Component {
    render () {
        return <h1>Hello from boiler template</h1>;
    }
}
ReactDOM.render(<Welcome />, document.getElementById('app'));

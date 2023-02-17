import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Dashboard from './pages/Dashboard';
import './figma-plugin-ds.css';
import './ui.css';
class App extends React.Component {
    render() {
        return React.createElement(Dashboard, null);
    }
}
ReactDOM.render(React.createElement(App, null), document.getElementById('react-page'));

/**
 * Created by lara on 6/5/2021.
 */
import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import SMSForm from './SMSForm';

class CustomRouteLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            greeting: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ name: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
            .then(response => response.json())
            .then(state => this.setState(state));
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">


                    <SMSForm />
                </header>

            </div>


        );
    }
}

export default CustomRouteLayout;
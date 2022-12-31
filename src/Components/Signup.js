import React, { Component } from 'react'
import Confirmation from './Confirmation';
import PersonalDetails from './PersonalDetails';
import UserDetails from './UserDetails';

export default class Signup extends Component {

    state = {
        step: 1,
        email: '',
        username: '',
        lastname: '',
        firstname: '',
        country: ''
    }

    prevStep = () => {
        const {step} = this.state;
        this.setState({ step: step-1 });
    }

    nextStep = () => {
        const {step} = this.state;
        this.setState({step: step + 1});
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value })
    }

  render() {
        const {step} = this.state;
        const { email, username, lastname, firstname, country } = this.state;
        const values = {email, username, lastname, firstname, country};

        switch (step) {
            case 1:
                return (
                    <UserDetails
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                );
            case 2:
                return (
                    <PersonalDetails
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 3:
                return (
                    <Confirmation
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        values = {values}
                    
                    />
                )
            default:
                break;
        }
        <h1>Hello Signup</h1>
  }
}

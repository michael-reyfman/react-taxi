/**
 * Created by michael on 17.07.17.
 */

import PassRegistrationForm from './passregistration';
import DriverRegistrationForm from './driverregistration';
import React, { Component } from 'react';
import '../App.css';

class RegForm extends Component {
    render() {
        const left = <a href="#" className={"active-" + (this.props.activereg === "left")} onClick={this.props.changeForm}>passengers</a>;
        const right = <a href="#" className={"active-" + (this.props.activereg === "right")} onClick={this.props.changeForm}>drivers</a>;
        let regform;
        if(this.props.activereg === "left")
            regform = <PassRegistrationForm users={this.props.userlist} addUser={this.props.addUser}/>;
        else
            regform = <DriverRegistrationForm users={this.props.userlist} addUser={this.props.addUser}/>;
        return (
            <div>
                <h2> Registration for {left} | {right}</h2>
                {regform}
            </div>
        );
    }
}

export default RegForm;
import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation';
import Passenger from './models/passenger';
import Driver from './models/driver';
import Main from './routers/main';


let Users = [
    new Passenger("anal123", "Michael", "h27a123", "+38(093)911-91-19"),
    new Passenger("pashapidor", "Alexander", "asasa", "+38(050)184-14-88"),
    new Driver("dayapidor", "Pavel", "qwerty78", "+38(095)232-23-32", "Nissan Qashqai", "classic", "AA2728PI")
];

let TerminalOrders = [];


class App extends Component {
    constructor() {
        super();
        this.state = {
            login: false,
            activeuser: {},
            usertype: undefined,
            userlist: Users,
            activereg: "left",
        };
        this.changeForm = this.changeForm.bind(this);
    }
    returnInfo(_user) {
        const _type = _user instanceof Passenger ? "Passenger" : "Driver";
        this.setState({login: true, activeuser: _user, usertype: _type});
    }
    resetUser() {
        this.setState({
            login: false,
            activeuser: {},
            usertype: undefined
        })
    }
    addUser(user) {
        let users = this.state.userlist;
        users.push(user);
        this.setState({userlist: users});
    }
    changeForm() {
        const newstate = this.state.activereg === "left" ? "right" : "left";
        this.setState({activereg: newstate});
    }
    render() {
        console.log(this.state.login, this.state.activeuser, this.state.usertype);
        console.log(this.state.userlist);
        return (
            <div className="App">
                <Navigation users={this.state.userlist} returnInfo={this.returnInfo.bind(this)} resetUser={this.resetUser.bind(this)}/>
                <Main
                    activereg={this.state.activereg}
                    userlist={this.state.userlist}
                    addUser={this.addUser.bind(this)}
                    changeForm={this.changeForm.bind(this)}
                    user={this.state.activeuser}
                    usertype={this.state.usertype}
                />
            </div>
        );
    }
}

App.propTypes = {
    resetUser: React.PropTypes.func,
};

export default App;

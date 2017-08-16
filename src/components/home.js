/**
 * Created by michael on 17.07.17.
 */
import React, { Component } from 'react';
import '../App.css';
import OrderFormOverlay from './orderform';
import {Row, Well, Grid, Col, Button} from 'react-bootstrap';
import img1 from '../images/whyusplain.png';
import Money from 'react-icons/lib/fa/money';
import ThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import Dollar from 'react-icons/lib/fa/dollar';
import Diamond from 'react-icons/lib/fa/diamond';
import Superscript from 'react-icons/lib/fa/superscript';
import Beer from 'react-icons/lib/fa/beer';
import Wrench from 'react-icons/lib/fa/wrench';
import Bulb from 'react-icons/lib/fa/lightbulb-o';
import Child from 'react-icons/lib/fa/child';
import Paw from 'react-icons/lib/md/pets';


const WhyUs = () => (
    <div className="why-us">
        <h2>Why millions of people are choosing us every day?</h2>
        <Grid>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <img src={img1} alt="why-us"/>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <Well className="well-item">Our taxi is the best in Kiev and probably in the world!</Well>
                    <Well className="well-item">Using our service is a great contribution for making world peace!</Well>
                    <Well className="well-item">Our drivers are intelligent enough not to listening to Mikhail Krug</Well>
                    <Well className="well-item">We are always willing to help you anytime! (if you have enough money for that)</Well>
                    <Well className="well-item">Are you not gay yet? Our taxi will change this in one push! (or 53 spins)</Well>
                    <Well className="well-item">And again, our drivers are intelligent enough not to listening to Mikhail Krug.</Well>
                </Col>
            </Row>
        </Grid>
    </div>
);


const Prices = () => (
    <div className="prices">
        <h2>Prices</h2>
        <Grid>
            <Row>
                <Col xs={6} sm={6} md={3} lg={3}>
                    <div className="iconbox">
                        <div className="iconbox-icon">
                            <Money />
                        </div>
                        <h3>Economy class</h3>
                        <p>Best for people who search for decent and costworthy service. <br/>No Daewoo Lanos even here!</p>
                        <p>Starting from <span className="price-highlighter">35.00 UAH</span></p>
                    </div>
                </Col>
                <Col xs={6} sm={6} md={3} lg={3}>
                    <div className="iconbox">
                        <div className="iconbox-icon">
                            <ThumbsOUp/>
                        </div>
                        <h3>Comfort class</h3>
                        <p>If economy class is not comfortable enough, there you go!</p>
                        <p>Starting from <span className="price-highlighter">60.00 UAH</span></p>
                    </div>
                </Col>
                <Col xs={6} sm={6} md={3} lg={3}>
                    <div className="iconbox">
                        <div className="iconbox-icon">
                            <Dollar />
                        </div>
                        <h3>Business class</h3>
                        <p>The best way to impress your business partners is to order our S-Class cars!</p>
                        <p>Starting from <span className="price-highlighter">125.00 UAH</span></p>
                    </div>
                </Col>
                <Col xs={6} sm={6} md={3} lg={3}>
                    <div className="iconbox">
                        <div className="iconbox-icon">
                            <Diamond />
                        </div>
                        <h3>VIP class</h3>
                        <p>Oh boy... it's only for chosen ones! Really. <br/> Free whisky included!</p>
                        <p>Starting from <span className="price-highlighter">300.00 UAH</span></p>
                    </div>
                </Col>
            </Row>
        </Grid>
    </div>
);


const Services = () => (
    <div className="services">
        <h2>Services</h2>
        <Grid>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <div className="iconbox">
                        <div className="iconbox-icon">
                            <Bulb />
                        </div>
                        <h3 className="services-header">Smart Drivers</h3>
                        <p>
                            Our drivers are system analysists with high level of IQ.
                            They can discuss any problems existing in our (and not only our) Universe -
                            from dildos and Ukrainian politics to quantum mechanics and string theory!
                        </p>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <div className="iconbox">
                        <div className="iconbox-icon">
                            <Superscript/>
                        </div>
                        <h3 className="services-header">Solving complex math tasks</h3>
                        <p>
                            As we have mentioned earlier, we are uncomparably smart. If you have some problems
                            at school or university, we are ready to solve and explain everything you need.
                            (This feature is not free, obviously. The price is discussed privately with the driver, hehe.)
                        </p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <div className="iconbox">
                        <div className="iconbox-icon">
                            <Paw />
                        </div>
                        <h3 className="services-header">Animal transfer</h3>
                        <p>
                            If you want to take your dear pet (or your friend who is fond of JavaScript) anywhere,
                            we can offer you our service.
                            We accept animals on-board if they are not dangerous for the entire world and if they
                            wouldn't be able to damage our precious cars (and drivers!).
                        </p>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <div className="iconbox">
                        <div className="iconbox-icon">
                            <Beer />
                        </div>
                        <h3 className="services-header">Sober driver</h3>
                        <p>
                            If you are drunk as fuck, you definitely mustn't drive your car. This can be unfair
                            to you as next day you spend a lot of time bringing the car back. But with our service
                            "Sober driver" you can call one of our experienced drivers and they will drive you safely at home.
                        </p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <div className="iconbox">
                        <div className="iconbox-icon">
                            <Child />
                        </div>
                        <h3 className="services-header">Childcare</h3>
                        <p>
                            Probably all parents had the situation when they didn't have any free time to take
                            their child to school or kindergarten. Our taxi can solve this problem easily!
                            React drivers will drive your kid safely wherever you desire. Also, we may
                            include a child-seat for really young ones.
                        </p>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <div className="iconbox">
                        <div className="iconbox-icon">
                            <Wrench />
                        </div>
                        <h3 className="services-header">First car aid</h3>
                        <p>
                            Having your car suddenly broken is a big problem. Our specialists can quickly change
                            a wheel, charge a car's battery and even evacuate it to the nearest car repairing center!
                            Try this shit unless you want to die in your damaged vehicle, kek.
                        </p>
                    </div>
                </Col>
            </Row>
        </Grid>
    </div>
);


class Home extends Component {
    render() {
        return (
            <div className="main-page">
                <h1>Welcome to our taxi service!</h1>
                <WhyUs/>
                <Prices/>
                <Services/>
                <OrderFormOverlay />
            </div>
        );
    }
}

export default Home;
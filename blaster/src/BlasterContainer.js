import React, { Component } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Blaster from './Blaster';

const defaultBlaster = new Blaster('', 0, 0);

export class BlasterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.blast = this.blast.bind(this);
        this.bullet = React.createRef();
        this.power = React.createRef();
        this.clip = React.createRef();
        this.state = {
            currentBlaster: defaultBlaster,
            stream: ''
        }
    }
    blast() {
        console.log("Blasting!")
        this.setState({
            stream: this.state.currentBlaster.shoot()
        });
    }
    update(bullet, power, clip) {
        this.setState({
            currentBlaster: new Blaster(bullet, power, clip)
        })
    }
    onFormSubmit(e) {
        let newBullet = (isNaN(this.bullet.current.value) ? this.bullet.current.value : +this.bullet.current.value);
        console.log('newBullet', newBullet);
        let newPower = this.power.current.value;
        console.log('newPower', newPower);
        let newClip = this.clip.current.value;
        console.log('newClip', newClip);
        this.update(newBullet, newPower, newClip);
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.onFormSubmit} inline>
                    <Form.Control id="bullet-in" ref={this.bullet} placeholder="Your bullet" />
                    <Form.Control id="power-in" ref={this.power} placeholder="Power" />
                    <Form.Control id="clip-in" ref={this.clip} placeholder="Clip size" />
                    <Button type="submit">Let's go!</Button>
                </Form>
                <p className="blasterContainer">
                    {this.state.stream}🔫
                </p>
                <Button onClick={this.blast}>Shoot!</Button>
            </div>
        );
    }
}
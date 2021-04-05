import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { register } from '../services/auth';
import NavigationBar from '../components/NavigationBar'
const axios = require('axios')

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
          authority: '',
          email: '',
          password: ''
        };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    

    handleSubmit(event) {
        event.preventDefault();
        register(this.state.email, this.state.password, this.state.authority)
    }
    render() {
        return (
            <div>
                <NavigationBar title="Regiter New authority" marginLeft="89%"></NavigationBar>
                <Container style={{ marginTop: '100px' }}>
                    <Form>
                        <Form.Group controlId="formBasicEmail" style={{ width: '300px' }}>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" name="email" value={this.state.email} onChange={this.onChange}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword" style={{ width: '300px' }}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" style={{ width: '300px' }}>
                            <Form.Label>Authority</Form.Label>
                            <Form.Control type="text" placeholder="Enter your Role" name="authority" value={this.state.authority} onChange={this.onChange}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                            Register
                        </Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { Redirect } from 'react-router-dom';
import { login } from '../services/auth';
import NavigationBar from '../components/NavigationBar'

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          loginSuccessful:false
        };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    

    async handleSubmit(event) {
        event.preventDefault()
        let successful = await login(this.state.email, this.state.password)
        console.log(successful)
        if (successful){
            this.setState({loginSuccessful: true})
        }
    }

    handleForgetPassword() {
        return <Redirect to='forgetPassword'></Redirect>
    }

    render() {
        return (
            !this.state.loginSuccessful?
            <div>
                <NavigationBar title="Enter Credentials to Enter the Home" marginLeft="88%"></NavigationBar>
                <Container style={{ marginTop: '100px' }}>
                    <Form>
                        <Form.Group controlId="loginForm" style={{ width: '300px' }}>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" placeholder="Enter email" name="email" value={this.state.email} onChange={this.onChange}/>
                            <Form.Text className="text-muted" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" style={{ width: '300px' }}>
                            <Form.Label>Fingerprint</Form.Label>
                            <Form.Control type="password" placeholder="Fingerprint" name="password" value={this.state.password} onChange={this.onChange}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                            Open Door
                        </Button>
                        
                    </Form>
                </Container>
            </div> : <Redirect to="/otpGenerate" />
        )
    }
}

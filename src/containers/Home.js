import React, { Component } from 'react'
import { Button, Jumbotron } from 'react-bootstrap'
import { fetchHome } from '../api/api';



export default class Home extends Component {
    
    constructor(props){
        super(props)
        const jwttoken = localStorage.getItem('token');
        console.log(jwttoken)
        this.state = {
            isLoggedIn: false
        }
        
        fetchHome(jwttoken, this.state.isLoggedIn)
    }

    renderHome =() => {
        return (
            <div>
                <Jumbotron >
                    <h1 style={{marginLeft:'33%'}}>Hello, Welcome to Home!</h1>
                    <br />
                    <p>
                        <Button style={{marginLeft:'42%'}} variant="primary">Lock the Door again!</Button>
                    </p>
                </Jumbotron>
            </div>
        )
    }
    
    renderUnauthorize = () => {
        return (
            <div>
                <Jumbotron>
                    <h1 style={{marginLeft:'35%'}}>Unathorized Access!</h1>
                    <p style={{marginLeft:'33.5%'}}>
                        You are Unauthorized to open the door! Please login again.
                    </p>
                    <p>
                        <Button style={{marginLeft:'43%'}} variant="primary">Login Again</Button>
                    </p>
                </Jumbotron>
            </div>
        )
    }
    render() {
        let isLoggedIn = this.state.isLoggedIn
        console.log(isLoggedIn)
        if(!isLoggedIn){
            return this.renderUnauthorize()
        }else{
            console.log(this.state)
            return this.renderHome()
        }
    }

    
}

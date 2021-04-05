import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Redirect, Link } from 'react-router-dom'
const axios = require('axios')


export default class Welcome extends Component {
    
    render() {        
        return (
            <div>
                <h1 style={{marginTop:'5%' ,marginLeft:"35%"}}>Hello, Welcome to Home</h1>
                
                <Button style={{marginTop:'2%' ,marginLeft:"42.5%"}}><Link to='/login' style={{color:'white'}}>Tap here to open the Door!</Link></Button>
            </div>
        )
    }
}
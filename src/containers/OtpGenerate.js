import React from 'react'
import NavigationBar from '../components/NavigationBar'
import { Form, Button } from 'react-bootstrap'

const handleConfirm = () => {
    console.log("Hellooo")

} 

export default function OtpGenerate() {
    return (
        <div>
            <NavigationBar title="Enter generated OTP" marginLeft="88%"></NavigationBar>
            <h3 style={{margin:'5%', textAlign: 'center'}}>OTP is generated to your email. Please enter it!</h3>
            <Form.Group controlId="formBasicPassword" style={{ width: '300px', marginLeft:'39%', textAlign: 'center'}}>
                <Form.Label>OTP</Form.Label>
                <Form.Control type="text" placeholder="OTP code here!" name="otp"/>
                <br></br>
                <Button variant="primary" type="submit" onClick={() => handleConfirm()}>
                            Confirm
                        </Button>
            </Form.Group> 

        </div>
    )
}

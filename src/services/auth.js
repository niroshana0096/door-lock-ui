// import history from '../containers/History'
// import React from 'react'
// import otpGenerate from '../containers/OtpGenerate'

const axios = require('axios')

export async function login(email, password) {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:8040/authenticate',{
            username: email,
            password: password,
            }).then(function (res){
                console.log(res.status)
                localStorage.removeItem('user','token')
                localStorage.setItem('token',res.data.token)
                otpGenerate()
                resolve(true)

            }).catch(function (err){
                alert("Please enter correct credentials!")
                console.log(err)
                reject(false)
            })
        }
    )}



  export async function register(email, password, authority) {
    console.log(email)
    console.log(password)
    console.log(authority)
    axios.post('http://localhost:8040/register',{
        username: email,
        password: password,
        authority: authority
    }).then(function (res){
        console.log(res)
        return res
    
    }).catch(function (err){
        console.log(err)
    })
}

  export async function checkTokenValidity(token) {
      
  }

  export async function otpGenerate() {
      console.log(`Bearer ${localStorage.getItem('token')}`)
    axios.get('http://localhost:8040/authenticate/generateOtp',{
        'headers': {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          
        }
      }).then(function (res){
            console.log(res)
           

        }).catch(function (err){
            console.log(err)
      
        })
  }


const axios = require('axios')

export async function fetchHome(token) {
    axios.get('http://localhost:8040/home', {
            headers : {
                'Content-Type': 'application/json',
                'Authorization': token,
                'Access-Control-Allow-Origin': '*'
            }  
        }).then((res) =>{
            console.log(JSON.stringify(res))
            console.log("17......"+res)
            console.log(res.status)
            
            
        }).catch((err)=>{
            console.log("20......"+err)
        
        })
    
}
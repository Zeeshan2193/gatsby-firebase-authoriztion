import React, { useContext, useState} from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import firebase from 'gatsby-plugin-firebase';
import {AuthContext} from '../contexts/AuthContext';
import {navigate} from 'gatsby';


const Signup = () => {
   const [data, setData] =  useState({
    email : "",
    password : "",
    error : null,
   })

    
    const {setUser} =useContext(AuthContext);

   const handleTextBox= (e) =>{
       setData({...data, [e.target.name]: e.target.value})
   }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            const result = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
            setUser(result);
            navigate('wellcome');
        }catch(err){
            console.log("Error Message", err);
            setData({...data, error: err.message})
        }
        
    }
    return (
        <>
           <Card>
               <Card.Body>
                   <h2 className="text-center mt-2">Sign Up</h2>
                   <Form>
                       <Form.Group id="email">
                           <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" value={data.email} onChange={handleTextBox} required/>
                       </Form.Group>
                       <Form.Group id="password">
                           <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={data.password} onChange={handleTextBox} required/>
                       </Form.Group>
                       <Form.Group id="password-confirm">
                           <Form.Label>Password Confirm</Form.Label>
                            <Form.Control type="password"  required/>
                       </Form.Group>
                       {data.error ?<p style={{color:"red"}}>{data.error}</p> : null}
                       <Button type="submit" className="w-100" onClick={handleSubmit}>Sign Up</Button>
                   </Form>
               </Card.Body>
           </Card>
           <div className="w-100 text-center mt-2">
               Already have an account? Log In
               </div> 
        </>
    )
}

export default Signup;
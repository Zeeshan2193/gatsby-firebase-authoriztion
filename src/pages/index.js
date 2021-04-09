import React from "react"
import Signup from "../components/Signup"
import {Container} from 'react-bootstrap';

export default function Home() {
  return <div>

    <Container className="d-flex align-items-center justify-content-center" 
    style={{minHeight:"100v"}}>
      <div className="w-100" style={{maxWidth:"400px"}}>
    <Signup />
      </div>
    </Container>
     
  </div>
  
}

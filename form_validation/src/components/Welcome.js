import React from 'react'
import { Container } from 'react-bootstrap'
import canvas from '../static/canvas.gif'

const backgroundImg = {
height:'100vh',
backgroundImage:`url(${canvas})`,
backgroundRepeat:'no-repeat',
backgroundSize:'cover'
}

const header = {
fontSize:'70px',
display:'flex',
margin:'5px',

}

const text = {
fontSize:'30px',
display:'flex',
position:'center',
}

const modal = {
backgroundColor:'#00000020',
width:'50%',
height:'50%',
position: 'center',
margin: '200px',
padding:'200px',
align:'center',
color:'green'
}

const Welcome = (props) => {
const {state} = props

return (
    <Container className={"d-flex flex-column justify-content-center align-items-center p-6 shadow rounded"}style={backgroundImg}>
        <Container className={" p-4 shadow rounded "} style={modal}>
          <h2 style={header} className ="d-flex text-success">Welcome {state.firstName.value} {state.lastName.value}</h2>
          <p style={text} className ="text-success">Thank you !! </p>
          <p style={text} className ="text-success">Email: {state.email.value} </p>
          <p style={text} className ="text-success">Password:{state.password.value}</p>
        </Container>
    </Container>
)
}

export default Welcome;

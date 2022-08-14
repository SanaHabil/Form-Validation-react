import styles from '../static/UserForm.module.css';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserForm = (props) => {
    const {state,setState,error,setError}=props;

    const handleChange=(e)=>{
        
        if(e.target.name === 'firstName'){
            if((e.target.value).trim().length <2){
                setState({...state,firstName:{value:e.target.value,error:"Name must be 2 Characters atleast"}})
                setError(true)
            }  else{
                setState({ ...state,firstName:{value:e.target.value,error:null}})
                setError(false)
                }        
        }
        if(e.target.name === 'lastName'){
            if((e.target.value).trim().length <2){
                setState({...state,lastName:{value:e.target.value,error:"Name must be 2 Characters atleast"}})
                setError(true)
            }  else{
                setState({ ...state,lastName:{value:e.target.value,error:null}})
                setError(false)
                } 
        }
        if(e.target.name === 'email'){
            if( (!/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value))){
                setState({...state,email:{value:e.target.value,error:"Must be a valid Email Address"}})
                setError(true)
            }  else{
                setState({ ...state,email:{value:e.target.value,error:null}})
                setError(false)
                }        
        }
        if(e.target.name === 'password'){
            if((e.target.value).trim().length <8){
                setState({...state,password:{value:e.target.value,error:"Password must be 8 characters long"}})
                setError(true)
            }  else{
                setState({ ...state,password:{value:e.target.value,error:null}})
                setError(false)
            }
        }
        if(e.target.name ==='confirmPassword'){
            if((e.target.value).trim().length <2){
                setState({...state,confirmPassword:{value:e.target.value,error:"Passwords must match"}})
                setError(true)
            }  else{
                setState({ ...state,confirmPassword:{value:e.target.value,error:null}})
                setError(false)
                }        
        }
        }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("submitting")
        if(state.firstName.value === "" || state.lastName.value === "" || state.email.value === "" || state.password.value === "" || state.confirmPassword.value === "")
        {
        console.log("not a valid attempt")
        return
        }
    if(error){
        console.log("not a valid attempt")
        return
    }else{
        setState({...state,submitted:true})
        console.log("valid attempt")
    }
    }
    return (
        <div className={styles.container}>
                <Typography variant="h4"> Sign Up </Typography>
                    <br/>            
                <Form onSubmit={ handleSubmit }>
                    <Form.Group>
                        <TextField label="First Name" required id="firstname" margin="normal" variant="filled" name = "firstName" value={state.firstName.value} onChange ={handleChange}  className={state.firstName.error?"border-danger":''} />
                        {
                        state.firstName.error?
                        <Form.Text id="passwordHelpBlock" muted>{state.firstName.error}</Form.Text>
                        :null
                        }
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <TextField label="Last Name" required id="lastname" margin="normal" variant="filled" name = "lastName" value={state.lastName.value} onChange ={handleChange} className={state.lastName.error?"border-danger":''} />
                        {
                        state.lastName.error?
                        <Form.Text id="passwordHelpBlock" muted>{state.lastName.error}</Form.Text>
                        :null
                        }
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <TextField label="Email" required id="email" margin="normal" variant="filled" name = "email" value={state.email.value} onChange ={handleChange} className={state.email.error?"border-danger":''} />
                        {
                        state.email.error?
                        <Form.Text id="passwordHelpBlock" muted>{state.email.error}</Form.Text>
                        :null
                        }
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <TextField label="Password" required id="password" margin="normal" variant="filled" name= 'password' value={state.password.value} onChange ={handleChange} className={state.password.error?"border-danger":''}/>
                        {
                        state.password.error?
                        <Form.Text id="passwordHelpBlock" muted>{state.password.error}</Form.Text>
                        :null
                        }
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <TextField label="Confirm Password" required id="confirmpassword" margin="normal" variant="filled" name="confirmPassword" value={state.confirmPassword.value} onChange ={handleChange} className={state.confirmPassword.error?"border-danger":''}/>
                        {
                        state.confirmPassword.error?
                        <Form.Text id="passwordHelpBlock" muted>{state.confirmPassword.error}</Form.Text>
                        :null
                        }
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Link href="#">forget password?</Link>
                    </Form.Group>    
                    <br/>
                    {error?
                        <Button type="submit" variant="primary" className="btn-primary" size="lg">Register</Button>
                        :
                        <Button type="submit" variant="secondary" >Register</Button>
                    }
                </Form>
                <br/><br/>
        </div>   
    );
}
export default UserForm;
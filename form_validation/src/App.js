
import {useState} from 'react';
//Importing Comonents
import UserForm from './components/UserForm';
import Welcome from './components/Welcome';

const initialState = {
  firstName:{
    value:'',
    error:null
  },
  lastName:{
    value:'',
    error:null
  },
  email:{
    value:'',
    error:null
  },
  password:{
    value:'',
    error:null
  },
  confirmPassword:{
    value:'',
    error:null
  },
  submitted:false

}

function App() {
  const [state,setState] = useState(initialState);
  const [error,setError] = useState(false);

  return (
      <div className="d-flex flex-column align-items-center">
        {!state.submitted ?
          <UserForm state ={state} setState = {setState} error = {error} setError={setError} />
          :
          <Welcome state={state}/>
        }
        </div>  
      );
    }

export default App;


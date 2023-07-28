import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//import '../src/Registration.css'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage, 
  MDBInput,
  MDBIcon,  
  MDBCheckbox,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
} from 'mdb-react-ui-kit';

function Reg() {
  const navigate = useNavigate();
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const[user,setUser]=useState({
    name: "",
    email:"",
    password:"",
  })

const {name,email,password}=user;

  const onInputChange=(e)=>{
    setUser({...user,[e.target.name]: e.target.value})
  }
  
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = async(e) => {

    // Perform validation checks here
    if (!name || !email || !password  || !agreeTerms) {
      alert('Please fill in all the required fields');
      return;
    }

    e.preventDefault();
    await axios.post("http://localhost:2023/savedata",user)
    navigate("/");
  };

  return (
    <div>
      <MDBContainer fluid>
        <MDBCard
          className='text-blackm-5'
          style={{
            borderRadius: '105px',
            minHeight: '150vh',
            width: '100%',
            backgroundImage: 'url(/images/abcde.jpg)',
          }}
        >
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md='20'
                lg='15'
                className='order-2 order-lg-1 d-flex flex-column align-items-center'
              >
                <h3
                  className='text-center h1 fw-bold mb-6  mx-1 mx-md-7 mt-4'
                  style={{ color: 'white' }}
                >
                  !!Fill to Sign UP !!
                </h3>

                <div className='d-flex flex-row align-items-center mb-4 '>
                  <MDBIcon fas icon='user me-3' size='lg' />
                  <MDBInput
                    label='Your Name'
                    id='form1'
                    type='text'
                    style={{ color: 'white' }}
                    name='name'
                    value={name}
                    onChange={onInputChange}
                  />
                </div>

                <div className='d-flex flex-row align-items-center mb-4'>
                  <MDBIcon fas icon='envelope me-3' size='lg' />
                  <MDBInput
                    label='Your Email'
                    id='form2'
                    type='email'
                    style={{ color: 'white' }}
                    name='email'
                    value={email}
                    onChange={onInputChange}
                  />
                </div>

                <div className='d-flex flex-row align-items-center mb-4'>
                  <MDBIcon fas icon='lock me-3' size='lg' />
                  <MDBInput
                    label='Password'
                    id='form3'
                    type='password'
                    style={{ color: 'white' }}
                    name='password'
                    value={password}
                    onChange={onInputChange}
                  />
                </div>

            

                <div className='mb-4'>
                  <MDBCheckbox
                    name='flexCheck'
                    value=''
                    id='flexCheckDefault'
                    label='I agree to the terms and policies'
                    style={{ color: 'white' }}
                    checked={agreeTerms}
                    onChange={() => setAgreeTerms(!agreeTerms)}
                  />
                </div>

                <MDBBtn className='mb-4' id='btn' size='lg' onClick={handleSubmit}>
                  Sign Up
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default Reg;

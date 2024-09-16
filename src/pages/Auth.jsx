//import React from 'react'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './auth.css'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginApi } from '../services/allApi'


function Auth() {
  const navigate = useNavigate()
  const [userdetails, setuserdetails] = useState({
email:"",
password:""
  })
  console.log(userdetails);


  /*
const handleRegister = async()=>{
  const {username,email,password} = userdetails
  if(!username || !email || !password){
    toast.info('please fill the form completely')
  }
  else{
    const result =await registerApi(userdetails)
    console.log(result);
    if(result.status==200){
      toast.success('Registration successfull')
      navigate('/login')
    }
  }
}*/


const handleLogin = async()=>{
  const {email , password} = userdetails
  if(!email || !password){
    toast.info('please fill the fields completely')
  }
  else{
    const result = await loginApi({email,password})
    console.log(result);

    //200 serires we know that result can be seen in 200 and error can be in 406 as we set,
    // in json we dont know 200 to 300 series is answer.
    if(result.status==200){
      toast.success('login successfull')
      //navigate('/')-if settime out not used we cannot see toast message 
      setTimeout(()=>{
        navigate('/admindashboard')
      },2000)

    }else{
      toast.error(result.response.data)
    }

  }
}
  return (
    <>
    <div className='container-fluid div1 d-flex justifycontent-center align-items-center flex-column'
    style={{ height: '100vh'}}>
    <div className="container div2 w-75 p-5" style={{textDecoration:'none'}}>
      <Link to={'/'} className='text-light ' style={{textDecoration:'none'}}>
        <FontAwesomeIcon icon={faArrowLeft} beat className='me-3 text-info' size='2x' /><span className='fs-4 text-info'>Back Home</span></Link>

      <div className="div3 p-3 mt-4 rounded-5 shadow">
        <Row>
          <Col sm={12} md={6} className='p-5 d-flex justify-content-center align-items-center'>
            <img src="https://cdn.dribbble.com/users/4099827/screenshots/10283878/media/52344c3180d5b42fc81a536a0033a1ee.gif" alt="no image" className='px-3 loginimg' width={'380px'} height={'350px'} style={{borderRadius:'50%'}}/>
          </Col>
          <Col sm={12} md={6} className='d-flex justify-content-center align-items-center text-light flex-column'>
            
          
          <h4 className='fw-bolder fs-3 px-3 ms-2'>Sign In Only for Admin</h4>

          <form  className='mt-4 w-75'>
            
            <div className='mb-3'>
            <input type="text" placeholder='E-mail' className='form-control rounded-5'
            onChange={(e)=>setuserdetails({...userdetails,email:e.target.value})}/>
            </div>
            <div className='mb-3'>
            <input type="text" placeholder='Password' className='form-control rounded-5'
            onChange={(e)=>setuserdetails({...userdetails,password:e.target.value})}/>
            </div>
            <div className='mb-3'>
          
            <div>
            <button type='button' className='btn btn-warning w-100 mt-3 rounded-5' onClick={handleLogin} >Login</button>
            </div>
            </div>
          </form>
          </Col>
        </Row>
      </div>
    </div>
  </div> 
  <ToastContainer theme='colored' position='top-center' autoClose={2000}/>
  </>
  )
}

export default Auth
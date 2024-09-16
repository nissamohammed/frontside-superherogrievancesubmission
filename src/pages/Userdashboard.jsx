import React, { useState } from 'react'
import Header from '../components/Header'
import './userdashboard.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons/faCircleChevronLeft';
import { addComplaitApi } from '../services/allApi';
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';

function Userdashboard() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    character: '',
    complaint: '',
    urgency: '',
    response: '',
  });

  //const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 /* const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };*/

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.complaint) {
      toast.info('Please fill out all required fields.');
      return;
    }else{
      const result = await addComplaitApi(formData)
      console.log(result);
      if (result.status == 200) {
        emailjs.sendForm('service_3zs4wzu','template_ssysx2j',e.target,'DB_YhZWFOv-Wm3H4U')
        toast.success('Complaint submission successfull')
        setSubmitted(true);
      }

    }
    console.log('Form data:', formData);
   // console.log('Attached file:', file);  
  };

//email notification
/*const sendEmail = (e) =>{
  e.preventDefault()
  emailjs.sendForm('service_3zs4wzu','template_fnknx2n',e.target,'DB_YhZWFOv-Wm3H4U')
  alert('Message send successfuly')
  setcontactdetails({
    emailid: "",
    message: ""
  })
}*/

  return (
    <>
    {/*Header*/}
    <Navbar className="bg-info">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <span className='fw-bolder'>Welcome user</span>
          </Navbar.Brand>
        </Container>
        <Link to={'/'}><button className='btn btn-outline-light rounded' style={{marginLeft:"-180px"}}><FontAwesomeIcon icon={faCircleChevronLeft} className='me-2' />Back</button></Link>
      </Navbar>

{/*content */}
<div className='divb1'>
{/**complaint form */}
<div className="complaint-form">
      <h2>Submit Your Grievance</h2>
      {submitted ? (
        <p>Thank you! Your grievance has been submitted.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Email Address:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Character/Issue Related To:</label>
            <select
              name="character"
              value={formData.character}
              onChange={handleChange}
            >
              <option value="">-- Select Character/Issue --</option>
              <option value="Naruto Uzumaki">Naruto Uzumaki</option>
              <option value="Sasuke Uchiha">Sasuke Uchiha</option>
              <option value="Sakura Haruno">Sakura Haruno</option>
              <option value="Kakashi Hatake">Kakashi Hatake</option>
              <option value="Hidden Leaf Village">Hidden Leaf Village</option>
              <option value="Akatsuki">Akatsuki</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label>Nature of Complaint:</label>
            <textarea
              name="complaint"
              id="complaint"
              value={formData.complaint}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Urgency Level:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="urgency"
                  value="Low"
                  onChange={handleChange}
                />
                Low
              </label>
              <label>
                <input
                  type="radio"
                  name="urgency"
                  value="Medium"
                  onChange={handleChange}
                />
                Medium
              </label>
              <label>
                <input
                  type="radio"
                  name="urgency"
                  value="High"
                  onChange={handleChange}
                />
                High
              </label>
            </div>
          </div>

          {/*<div>
            <label>Supporting Documents or Screenshots (Optional):</label>
            <input type="file" onChange={handleFileChange} />
          </div>*/}

          <div>
            <label>Would You Like a Response?</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="response"
                  value="Yes"
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="response"
                  value="No"
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
    </div>
    <ToastContainer theme='colored' position='top-center' autoClose={2000} /> 
    </>
  )
}

export default Userdashboard
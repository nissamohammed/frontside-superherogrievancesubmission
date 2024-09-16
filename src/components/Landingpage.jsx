import React, { useState } from 'react'
import '../components/landingpage.css'
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import Typed from 'typed.js';
import { Link } from 'react-router-dom'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane'
import emailjs from '@emailjs/browser'
import Chatbot from '../pages/Chatbot'
import { ToastContainer, toast } from 'react-toastify';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons/faPenToSquare'

function Landingpage() {
// Create reference to store the DOM element containing the animation
const el = React.useRef(null);

React.useEffect(() => {
  const typed = new Typed(el.current, {
    strings: ['welcome', 'to the world of','Demon Slayer','welcome'],
    typeSpeed: 50,
    backSpeed:50,
    
  });

  return () => {
    // Destroy Typed instance during cleanup to stop animation
    typed.destroy();
  };
},[]);

const [contactdetails, setcontactdetails] = useState({
  emailid:"",
  message:""
})

const sendEmail = (e) =>{
  const {emailid,message} = contactdetails
  if(emailid || message){
  e.preventDefault()
  emailjs.sendForm('service_3zs4wzu','template_fnknx2n',e.target,'DB_YhZWFOv-Wm3H4U')
  toast.success('Message send successfuly')
  setcontactdetails({
    emailid: "",
    message: ""
  })
}else{
toast.info('Please fill the Fields completely')}
}

  
  return (
   <>
      <div className='outer_div '>
      <section id='home'>
          <div className='inner_div'>
            <nav>
              <img src={logo} alt="no image" width={'100px'} height={'100px'}  className='imagelogo'/>
              <ul>
                <li className='listhead fw-bolder'><a href="#home">HOME</a></li>
                <li className='listhead fw-bolder'><a href="#about">ABOUT</a></li>
                <li className='listhead fw-bolder'><a href="#contact">CONTACT</a></li>
                <li > <Link to={'/userdashboard'}><FontAwesomeIcon icon={faPenToSquare} className='listlogin' /></Link> </li>
              </ul>
            </nav>

          </div>
          </section>
      </div>
      <div className='content'>
          <h1 ref={el} className='content-heading'></h1>
         <Link to={'/about'}>Know More</Link>
      </div>
      <Chatbot/>
      
      <section id='about'>
      <div className='about_div text-center'>
      <h1>ABOUT</h1>
      <h3>About Demon Slayer – The Epic Battle Between Good and Evil</h3>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5 p-5">
           
        <p style={{textAlign:'justify'}}>In a world where demons lurk in the shadows, feeding on innocent humans, the Demon Slayer Corps stands as the last line of defense. At the heart of this battle is Tanjiro Kamado, a kind-hearted boy whose life is turned upside down when his family is slaughtered by demons, and his sister Nezuko is turned into one herself.</p>
        <p style={{textAlign:'justify'}}>Despite the tragedy, Tanjiro vows to save his sister and avenge his family by becoming a demon slayer. With his unwavering determination, Tanjiro embarks on a perilous journey, training under expert swordsmen and honing his skills with a special breathing technique known as "Water Breathing."</p>
        <p style={{textAlign:'justify'}}>Throughout his quest, Tanjiro faces formidable demons, each more powerful and terrifying than the last. Along the way, he is joined by allies, including the cowardly but brave Zenitsu, the fierce Inosuke, and other members of the Demon Slayer Corps, all united by a single purpose: to rid the world of demons.</p>
        <p style={{textAlign:'justify'}}>But Tanjiro’s journey is not just about fighting demons. It is about compassion, sacrifice, and the struggle to maintain his humanity while navigating a dark, unforgiving world. His bond with Nezuko, who defies her demonic nature to protect humans, is the emotional core of the story.</p>
        <p style={{textAlign:'justify'}}>As Tanjiro seeks to find the demon responsible for his family’s demise, Muzan Kibutsuji, the first and most powerful demon, he confronts both external threats and internal conflicts. His story is one of perseverance, loyalty, and hope in the face of overwhelming odds.</p>
        <p style={{textAlign:'justify'}}>Demon Slayer is a thrilling tale of good versus evil, where even in the darkest moments, the light of hope and love shines through. For those with grievances related to this epic tale, whether it's the complex characters or the heartbreaking losses, this is the place to voice them.</p>
         <Link to={'/about'}><button className='btn btn-info'>Learn more about us</button> </Link>
          </div>
          <div className="col-md-5 p-5">
            <img src="https://www.icegif.com/wp-content/uploads/2023/02/icegif-1378.gif" alt="no image" width={'100%'} height={'100%'} className='rounded-5'/>
          </div>
          <div className="col-md-1 p-5"></div>
        </div>
      </div>
      </section>
<hr />
      <section id='contact'>
        <div className='text-center mt-5 contactheaddiv'>
          <h1>Contact</h1>
          <p>Feel Free to contact us</p>
        </div>
        <div className="row">
          <div className="col-md-2">
             <img src="https://media.tenor.com/7M_DlOYUVv4AAAAi/demon-kamado-nezuko.gif" alt="no image" className='contactgifimage'/></div>
          <div className="col-md-8 ms-5">      
            <div className='d-flex text-center mt-2 '>
              <div className='d-flex p-3 ms-5 '>
                <div className='bg-light' style={{ width: '50px', height: '50px', borderRadius: '50%' }}><FontAwesomeIcon icon={faPhone} className='mt-3' /></div>
                <div className='px-3 contactinfo'>
                  <h3>Phone</h3>
                  <p>+61 383 767 284</p>
                </div>
              </div>
              <div className='d-flex p-3 ms-5'>
                <div className='bg-light' style={{ width: '50px', height: '50px', borderRadius: '50%' }}><FontAwesomeIcon icon={faLocationDot} className='mt-3' /></div>
                <div className='px-3 contactinfo'>
                  <h3>Address</h3>
                  <p>245 Quigley Blvd, Ste K</p>
                </div>
              </div>
              <div className='d-flex p-3 ms-5'>
                <div className='bg-light' style={{ width: '50px', height: '50px', borderRadius: '50%' }}><FontAwesomeIcon icon={faEnvelope} className='mt-3' /></div>
                <div className='px-3 contactinfo'>
                  <h3>Email</h3>
                  <p>demonslayernazuko@gmail.com</p>
                </div>
              </div>
            </div>
            <form className='py-4 border-0 contactform' onSubmit={sendEmail}>
              <label htmlFor="emailFrom" className='labelee fs-5'>E-mail : </label>
              <div className='ms-5 mt-3 mb-3 d-flex  justify-content-center align-items-center'>
                <input type="email" id='emailFrom' name='email_from' placeholder='  Enter your E-mail Id' className=' form-control rounded-5 w-50' value={contactdetails.emailid} onChange={(e)=> setcontactdetails({...contactdetails,emailid:e.target.value})}/>
              </div>
              <label htmlFor="message" className='labelee fs-5'>Message : </label>
              <div className='ms-5 mt-3 mb-3 d-flex justify-content-center align-items-center'>
                <textarea name="message" id="message" placeholder='    enter the message' className='form-control rounded-5 w-50' value={contactdetails.message} onChange={(e)=> setcontactdetails({...contactdetails,message:e.target.value})}></textarea>
              </div>
              <div className='d-flex justify-content-center align-items-center mb-3'>
                <button type='submit' className='btn btn-primary rounded-5 ms-5'>Send Messsage <FontAwesomeIcon icon={faPaperPlane} /></button>
              </div>
            </form>
          </div>
          <div className="col-md-2"></div>
          
        </div>
        <hr />
        <div className='py-5 d-flex justify-content-center align-items-center mb-3'>
          <p className='ms-5'>Copy Right @ All Right Reserved By Nissa Mohammed</p>
        </div>

         
       

      </section>
      
      <ToastContainer theme='colored' position='top-center' autoClose={2000} /> 
   </>
  )
}

export default Landingpage
           Superhero Grievance Web Application
      
This web application is built to allow users to submit grievances related to the epic battle between superheroes and demons (fictional theme inspired by Demon Slayer). 
The app includes an admin dashboard where grievances can be managed. Users can submit grievances, which will trigger an automatic email notification to the admin.

Frontend: React Backend: MongoDB

Table of Contents :

1)Installation 2)Project Structure 3)Usage 4)Functionality 5)Grievance Submission and Email Notification 6)Admin Login 7)Acknowledgements

Installation : Follow these steps to set up the project on your local machine:

Prerequisites:

Node.js installed on your machine. MongoDB installed or a connection to a MongoDB database. EmailJS account for email notification service (used for sending emails upon grievance submission).

Install dependencies: Set up EmailJS: Create an account at EmailJS. Create a service and email template for sending notifications. Get your service ID, template ID, and user ID from EmailJS and update the configuration in the Landingpage.jsx file.

Overall Project Structure . ├── public │ └── index.html ├── src │ ├── assets │ │ └── logo.png │ ├── components │ │ └── Landingpage.jsx │ ├── pages │ │ ├── About.jsx │ │ ├── Auth.jsx │ │ ├── Userdashboard.jsx │ │ ├── Admindashboard.jsx │ │ └── Pagenotfound.jsx │ ├── App.jsx │ ├── index.js │ ├── App.css │ └── chatbot.jsx ├── README.md └── package.json App.jsx: Main routing file that controls navigation between pages. Landingpage.jsx: Home page with an interactive animation and contact form. Auth.jsx: Admin login page. Userdashboard.jsx: Dashboard where users submit grievances. Admindashboard.jsx: Admin dashboard to view and manage grievances. Chatbot.jsx: Includes a simple chatbot for user queries. Usage The homepage provides basic information about the fictional world of Demon Slayer and an interactive chatbot. Users can navigate to the grievance form, where they can submit their issues. Admins can log in through the /login route and access the admin dashboard to review and manage the grievances.

Functionality: Main Features User Grievance Submission:

Users can submit grievances through the User Dashboard (/userdashboard). Each grievance will send an email notification to the admin. Admin Dashboard:

Admins can view all the submitted grievances in a dashboard accessible after logging in through the /login route. Admin credentials are pre-configured.

Chatbot:

A simple chatbot interacts with users and helps guide them through the app. Email Notification:

Upon submitting a grievance, the admin (default email: nissamohammed8@gmail.com) receives an email notification via EmailJS.
Grievance Submission and Email Notification The grievance submission form is available on the User Dashboard. When a user submits a grievance, an automatic email notification is sent to the admin using the EmailJS service.

Implementation Details: The form collects the user's email and message and uses EmailJS to send the content to the admin's email. 
Grievance form code is found in the Userdashboard.jsx file. EmailJS API keys and configuration are used to trigger the email notification. To change the default admin email:

Modify the EmailJS template in your EmailJS dashboard. Update the admin's email address in the template's configuration.
EmailJS Configuration Example: In Landingpage.jsx, the sendEmail function sends the email:

import emailjs from 'emailjs-com';

const sendEmail = (e) => { e.preventDefault(); emailjs.sendForm('your_service_id', 'your_template_id', e.target, 'your_user_id') .then((result) => { console.log(result.text); toast.success('Message sent successfully!'); }, (error) => { console.log(error.text); toast.error('Message failed to send.'); }); };

Admin Login: Has seperate front-end The admin can log in to the dashboard through the /login route. The login page is secured with basic authentication.

Acknowledgements 
React: Frontend framework.
MongoDB: Backend database. 
EmailJS: Email notification service.
FontAwesome: For icons used throughout the app. 
chatbot: AI Model Integration in landingpage.jsx








   

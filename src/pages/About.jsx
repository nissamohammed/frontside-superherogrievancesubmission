import React from 'react'
import './about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons/faCircleChevronLeft'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
    <div className="about-us-container">
    <Link to={'/'}><FontAwesomeIcon icon={faCircleChevronLeft} size='2x'/> </Link>
      <div className="about-us-content py-5">
        <h1>About Nezuko Kamado</h1>
        <img 
          src="https://wallpapers-clan.com/wp-content/uploads/2024/03/nezuko-glowing-eyes-demon-slayer-gif-desktop-wallpaper-preview.gif" 
          alt="Nezuko Kamado" 
          className="nezuko-image" 
        />
        <div className="story-content">
          <p>
            Deep in the mountains of Japan lived a kind-hearted girl named <strong>Nezuko Kamado</strong>. 
            She was the eldest daughter of a simple family, known for her warmth and affection. 
            But her life took a dark turn when her family was attacked by demons, 
            and she herself was transformed into a demon. Yet, despite the curse that now flows through her veins, 
            Nezuko remains different from other demons.
          </p>

          <p>
            <strong>Nezuko</strong> retains her humanity — her love for her brother, <strong>Tanjiro Kamado</strong>, 
            and her desire to protect the innocent shines through the darkness. 
            With her ability to shrink in size, she often hides in a small box during the day and only emerges at night. 
            Her strength, resilience, and the burning flame of her compassion make her a hero unlike any other.
          </p>

          <p>
            In her journey as a demon, <strong>Nezuko</strong> develops unique abilities, 
            such as the power to control her demonic hunger and her fierce protective instincts. 
            She fights not out of bloodlust, but to shield those she loves. Her inner battle to maintain her humanity 
            in the face of overwhelming demonic urges is a testament to her iron will and courage.
          </p>

          <p>
            Nezuko’s story is one of transformation, hope, and the power of love. 
            She symbolizes the ability to rise above our inner demons and fight for what is right, no matter how 
            difficult the path may be. Through her journey, she teaches us that even in the darkest moments, 
            the light of compassion can shine through.
          </p>

          <p>
            Today, Nezuko Kamado stands as a beacon of hope — a protector, a sister, and a warrior who never gave up 
            on the goodness within herself. Her story inspires us all to believe in the strength of love and the will to survive.
          </p>
          <Link to={'/userdashboard'}><button className='btn btn-success'>Submit a Grievance if you wish</button></Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
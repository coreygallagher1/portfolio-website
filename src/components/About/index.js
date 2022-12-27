import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitAlt, faJava, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { faC } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 3000)
      }, [] )

    return(
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        strArray={['A','b','o','u','t', ' ', 'M','e']}
                        idx = {15}
                    />
                </h1>
                <p> 
                    I'm a very ambitious back-end developer looking for a role in the
                    established IT company with the opportunity to work with the latest 
                    technolgies on challenging and diverse projects.
                </p>
                <p>
                I love software engineering because it allows me to use my problem-solving skills
                 to come up with creative solutions to complex challenges. It's like a puzzle that
                 I get to solve using my technical knowledge and expertise. Additionally, I am passionate 
                 about technology and innovation, and software engineering allows me to stay up-to-date with 
                 the latest developments in the field and contribute to the advancement of technology. Overall,
                 software engineering is a fulfilling and rewarding career that allows me to use my skills and 
                 interests to make a positive impact on the world.
                </p>
                <p>
                    If I need to define myself in one sentence that would be a family person,
                    Father of a beautiful daughter, a sports fanatic, photography enthusiast,
                    and a tech-obsessed!!!
                </p>

            </div>
            
            <div className="stage-cube-cont">
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faJava} color="#1aa8e5"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faPython} color="#1aa8e5"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faC} color="#1aa8e5"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color="#1aa8e5"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faReact} color="#1aa8e5"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#1aa8e5"/>
                    </div>
                </div>
            </div>
            
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default About



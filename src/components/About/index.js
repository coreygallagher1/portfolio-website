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
                    I'm a very ambitious backend software engineer looking for a role in the
                    established tech company with the opportunity to work with the latest 
                    technolgies on challenging and diverse projects.
                </p>
                <p>
                I love software engineering because it allows me to constantly learn and challenge myself.
                 I enjoy being able to use my creativity and problem-solving skills to build innovative solutions
                  that can make a positive impact on people's lives. The field is constantly evolving and there
                   is always something new to learn, which keeps things interesting and exciting. Additionally, 
                   I find it rewarding to see the results of my hard work come to life in the form of a functional 
                   and useful piece of software.
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



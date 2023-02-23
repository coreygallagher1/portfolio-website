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
                    I am senior at Marquette University studying computer science and computational mathematics.
                    I am too build my career around developing new technologies and solving problems, wether that
                    be through software engineering at an established company or creating new technologies at a startup.
                    I have had the opportunity to intern at serveral technolgy companies as well as do undergraduate 
                    reserach at Marquette University.
                </p>
                <p>
                    Additionally, I am passionate about working on personal projects by applying what I have learned in school
                    as well as learning new technologies. I love to create something from nothing and see it come to life especially
                    when it can profoundly impact people's lives in a positive way.
                </p>
                <p>
                    Outside of software development, I enjoy playing chess, reading, hiking, and working out. When I am not doing 
                    any of those things, I am probably watching playing basketball with my frinds or watching movies.
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



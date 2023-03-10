import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['o', 'r', 'e', 'y', ',']
  const jobArray = [
    's',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'e',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
  ]


  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [] )


  return (
    <>
    <div className="container home-page">
        <div className="text-zone">
            <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _12`}>,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'</span>
            <span className={`${letterClass} _15`}>m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters letterClass={letterClass}
            strArray={nameArray}
            idx={15} />
            <br />
            <AnimatedLetters letterClass={letterClass}
            strArray={jobArray}
            idx={15} />
            </h1>
            <h2> Marquette University | Milwaukee, Wisconsin </h2>
            <Link to="/contact" className="flat-button"> CONTACT ME </Link>
        </div>
        <Logo />
    </div>
    <Loader type="pacman"/>
    </>
  )
}

export default Home
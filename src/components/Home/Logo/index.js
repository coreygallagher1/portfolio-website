import './index.scss'
import LogoS from '../../../assets/images/cover_photo.jpeg'
import { useRef, useEffect } from 'react'
import gsap from 'gsap-trial'
//import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'

const Logo = () => {

    const bgRef = useRef()
    const solidLogoRef = useRef()

    return(
        <div className='logo-container'>
            <img src={LogoS} alt="cover photo" width={600}/>

    </div>
    )
}

export default Logo
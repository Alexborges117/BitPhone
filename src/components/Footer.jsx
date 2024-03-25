import React from 'react'
import './Footer.css'
import Whatsapp from '../assets/whatsapp.png'
import Facebook from '../assets/facebook.png'
import Tiktok from '../assets/tiktok.png'
import Instagram from '../assets/instagram.png'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="Redes">
        <a href="https://wa.me/5511965714136"><img src={Whatsapp} alt="Whatsapp" /></a>
        <a href="https://wa.me/5511965714136"><img src={Facebook} alt="Facebook" /></a>
        <a href="https://wa.me/5511965714136"><img src={Tiktok} alt="tiktok" /></a>
        <a href="https://wa.me/5511965714136"><img src={Instagram} alt="Instagram" /></a>
      </div>
        <ul className='links'>
            <ol><a href="#">HOME</a></ol>
            <ol><a href="#">CONTATO</a></ol>
            <ol><a href="#">PRODUTOS</a></ol>
        </ul>
      <div className="Direitos">
        <span>Copyright @ 2024 Bit-Phone | Todos os direitos reservados | Desnevolvidor por </span>
      </div>
    </div>
  )
}

export default Footer

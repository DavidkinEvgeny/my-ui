import React from 'react'
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'
import { FaVk } from 'react-icons/fa'
import './index.scss'

export default function IconGlowingEffect() {
  return (
    <div className='IconGlowingEffect'>
      <ul>
        <li><a href="/" target='_blank'><AiOutlineInstagram /></a></li>
        <li><a href="/" target='_blank'><AiOutlineWhatsApp /></a></li>
        <li><a href="/" target='_blank'><FaVk /></a></li>
      </ul>
    </div>
  )
}

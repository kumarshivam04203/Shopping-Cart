import React from 'react'
import './Nav.css';
import { FaHeart } from "react-icons/fa";
import {AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai'

export default function Nav({handleInputChange, query}) {
  return (
    // <div>nav</div>
    <nav>
      <div className='nav-container'>
        <input onChange={handleInputChange} value={query} type='text' className='search-input' placeholder='Enter your search shoes.'/>
      </div>

      <div className='profile-container'>
        <a href="/">
          <FaHeart className='nav-icons'/>
        </a>

        <a href='/'>
          <AiOutlineShoppingCart className='nav-icons' />
        </a>

        <a href='/'>
          <AiOutlineUserAdd className='nav-icons' />
        </a>
      </div>

    </nav>
  )
}

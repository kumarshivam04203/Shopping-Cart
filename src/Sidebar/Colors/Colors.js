import React from 'react'
import './Colors.css';
import Input from '../../components/Input';

export default function Colors({handleChange}) {
  return (
    <>
    <div >
      <h2 className='sidebar-title color-title'>Colors</h2>

        <label className='sidebar-label-container'>
          <input onChange={handleChange} type='radio' value="" name='test3'/>
          <span className='checkmark all'></span>All
        </label>

        <label className='sidebar-label-container'>
          <input onChange={handleChange} type='radio' value="black" name='test3'/>
          <span className='checkmark'></span>Black
        </label>

        <label className='sidebar-label-container'>
          <input onChange={handleChange} type='radio' value="blue" name='test3'/>
          <span className='checkmark '></span>Blue
        </label>

        <label className='sidebar-label-container'>
          <input onChange={handleChange} type='radio' value="red" name='test3'/>
          <span className='checkmark '></span>Red
        </label>

        <label className='sidebar-label-container'>
          <input onChange={handleChange} type='radio' value="green" name='test3'/>
          <span className='checkmark '></span>Green
        </label>

        {/* <input handleChange={handleChange} value="black" title='Black' name='test3' color='black'/> */}
        {/* <input handleChange={handleChange} value="blue" title='Blue' name='test3' color='black'/>  */}
        {/* <input handleChange={handleChange} value="red" title='Red' name='test3' color='black'/>  */}
        {/* <input handleChange={handleChange} value="green" title='Green' name='test3' color='black'/>  */}
        
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="white" name="test3"/>
            <span className="checkmark"
            style={{ background: "white", border: "2px solid black" }}></span>White
        </label>
    </div>
    </>
  )
}

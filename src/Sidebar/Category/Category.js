import React from 'react'
import './Category.css';
import Input from '../../components/Input';

export default function Category({handleChange}) {
  return (
    <>
    <div >
      <h2 className='sidebar-title'>Category</h2>

      <div>
        <label className='sidebar-label-container'>
          <input onChange={handleChange} type='radio' value="" name='test'/>
          <span className='checkmark'></span>All        
        </label>

        <label className='sidebar-label-container'>
          <input onChange={handleChange} type='radio' value="sneakers" name='test'/>
          <span className='checkmark'></span>Sneakers        
        </label>

        <label className='sidebar-label-container'>
          <input onChange={handleChange} type='radio' value="flats" name='test'/>
          <span className='checkmark'></span>Flats        
        </label>

        <label className='sidebar-label-container'>
          <input onChange={handleChange} type='radio' value="sandals" name='test'/>
          <span className='checkmark'></span>Sandals        
        </label>

        <label className='sidebar-label-container'>
          <input onChange={handleChange} type='radio' value="heels" name='test'/>
          <span className='checkmark'></span>Heels        
        </label>
       
        {/* <input handleChange={handleChange}  value="sneakers" title='Sneakers' name='test' /> */}
        {/* <input handleChange={handleChange}  value="flats" title='Flats' name='test' /> */}
        {/* <input handleChange={handleChange} value="sandals" title='Sandals' name='test' /> */}
        {/* <input handleChange={handleChange} value="heels" title='Heels' name='test' /> */}

        
      </div>
    </div>
    </>
  )
}

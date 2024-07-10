import React from 'react';
import './Header.css';
import LangDropDownComp from './LangDropDownComp';

const HeaderComp = () => {
  return (
    <div className='Header'>
        <LangDropDownComp /> 
    </div>
  )
}

export default HeaderComp;
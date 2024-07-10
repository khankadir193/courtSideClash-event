import React from 'react';
import './Header.css';
import LangDropDownComp from './LangDropDownComp';
import infoLangMark from '../assests/infoQuestionMark.gif';

const HeaderComp = () => {
  return (
    <div className='Header'>
        <LangDropDownComp />
        <img src={infoLangMark} alt='infoLangMark'  />
    </div>
  )
}

export default HeaderComp;
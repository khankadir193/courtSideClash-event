import React from 'react';
import './Header.css';
import LangDropDownComp from './LangDropDownComp';
import infoLangMark from '../assests/infoQuestionMark.gif';

const HeaderComp = () => {

  return (
    <div className='Header'>
        <LangDropDownComp />
        <img src={infoLangMark} alt='infoLangMark'  />
        <div className='chance-container'>
          <div className='throws-left'>
            Throws Left:{}
          </div>
          <div className='throws-sent'>

          </div>
        </div>
    </div>
  )
}

export default HeaderComp;
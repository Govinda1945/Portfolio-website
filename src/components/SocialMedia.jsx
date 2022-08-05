import React from 'react';
import {BsTwitter, BsInstagram} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import { DiGithubBadge } from "react-icons/di";
import { IoLogoLinkedin } from "react-icons/io";




const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href="https://twitter.com/ChastweGovinda"><BsTwitter /></a>
        </div>
        <div>
            <a href="https://www.facebook.com/govinda.chastwe.3"><FaFacebookF/></a>
        </div>
        <div>
            <a href="https://www.instagram.com/mr_govindachastwe_official/"><BsInstagram/></a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/govinda-chastwe-56a7701b4/"><IoLogoLinkedin/></a>
        </div>
        <div>
            <a href="https://github.com/Govinda1945"><DiGithubBadge/></a>
        </div>
    </div>
  )
}

export default SocialMedia;
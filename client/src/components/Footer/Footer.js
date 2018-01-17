import React from 'react'
import {Link} from 'react-router-dom'

import styles from './styles.module.css';
import logo from '../../media/happy-trash-fire.png'

export class Footer extends React.Component {
  
  render() {
    return (
      <div className="bottombar">
        <Link to="/">
          <p className="footer">
            <img src={logo} alt="Logo" height="20px" width="20px" /> HELP! <i className="fa fa-copyright" aria-hidden="true"></i> 2018 
          </p>
        </Link>
      </div>
    )
  }
}

export default Footer;
import React from 'react'
import { Link } from 'react-router-dom'

import { ROUTES } from '../../utils/routes'

import styles from '../../styles/Footer.module.css'

import logo from '../../images/logo.svg'

export const Footer = () => {
  return (
    <section className={ styles.footer }>
      <div className={ styles.logo }>
        <Link to={ ROUTES.HOME }>
          <img src={ logo } alt="stuff" />
        </Link>
      </div>

      <div className={ styles.rights }>
        Developed by

      </div>

      <div className={styles.socials}>
      
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
        </svg>
  
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
        </svg>
   
    </div>
    </section>
  )
}

import React from 'react'

import styles from '../../styles/Sidebar.module.css'

import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Sidebar = () => {

  const { list } = useSelector(({ categories }) => categories )


  return (
    <section className={ styles.sidebar }>
      <div className={ styles.title }>CATEGIRIES</div>
      <nav>
        <ul className={ styles.menu }>
            { list.map(({ id, name }) => (
              <li key={ id }>
                <NavLink 
                  className={ ({ isActive }) => 
                  `${ styles.link }  ${ isActive ? styles.active : "" }` }
                  to={ `/categories/${ id }` }> {/* //? NavLink - изолятор роутер дом компонента */}
                  { name }
                </NavLink>
              </li>
            )) }

        </ul>
      </nav>

      <div className={ styles.footer }>
        <a href='/help' target='_blank' className={ styles.link } >
          HELP
        </a>

        <a href='/help' target='_blank' className={ styles.link } >
          Term & Conditions 
        </a>
      </div>
    </section>
  )
}

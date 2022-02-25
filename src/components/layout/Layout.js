import React from 'react'
import MainNavigation from './MainNavigation'
import classes from './Layout.module.css'

function Layout(props) {
  return (
    <div>
        <MainNavigation/>
        <main className={classes.main}>
            {props.children}{/* get all the children */}

        </main>
    </div>
  )
}

export default Layout
import React from 'react'
import styles from "./menu.module.css"
import Link from 'next/link'
import Image from 'next/image'
import MenuPosts from '../menuPosts/MenuPosts'
import MenuCategories from '../menuCategories/MenuCategories'

const Menu = () => {
  return (
    <div className={styles.container}>

      {/* popular post */}
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />

      {/* categories */}
      <h2 className={styles.subtitle}>DIscover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />

      {/* editors pick */}
      <h2 className={styles.subtitle}>Choosen by the editors</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts withImage={true} />

    </div>
  )
}

export default Menu
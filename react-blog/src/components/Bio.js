import React from 'react'
import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'

function Bio(props) {
  let photoURL = "https://pbs.twimg.com/profile_images/1052271297827401728/HTouzY_x_200x200.jpg";

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={photoURL} alt="Me" />
      <p>
        Me trying to blog in English and Dutch. Related to code, tech and more, by{' '}
        <a href="https://sems.dev">Sem Spanhaak</a>.
      </p>
    </div>
  )
}

export default Bio

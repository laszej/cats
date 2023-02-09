import React from 'react'
import styles from './Card.module.css'
import {useRouter} from 'next/router'

export default function Card({name, phone, image, email, id}) {
  const router = useRouter()
  return (
    <div className={styles.card}onClick={()=>router.push(`/cats/${id}`)} >
        <div className={styles.cardHeader}> 
        <img className={styles.cardImage} src={image.url} alt={image.alt}></img></div>
        <div className={styles.cardContent}>
            <h3>{name}</h3>
            <p>{phone}</p>
            <p>{email}</p>
        </div>
    </div>
  )
}


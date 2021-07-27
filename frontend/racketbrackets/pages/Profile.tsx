import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import profilePic from './images/default.png'
import styles from '../styles/profile.module.css'
 
const name = 'Temp'
const rating = '1400'
 
const Profile = () => {
    return (
      <div className={styles.container}>
      <main className={styles.main}>     
 
        <div className = {styles.imgWithText}>
            <Image
              priority
              src={profilePic}
              className={styles.borderCircle}
              height={288}
              width={288}
              alt={name}
            />
            <p>Username: {name}</p>
            <p>Rating: {rating}</p>
        </div>
 
        <h2>Match History</h2>
        <ul>
          <li>Profile 1 vs Profile 2 <u>WIN</u></li>
          <li>Profile 1 vs Profile 3 <u>WIN</u></li>
          <li>Profile 1 vs Profile 4 <u>LOSS</u></li>
        </ul>
        <h2>Active Communities</h2>
        <ul>
          <li><u>RPI Tennis Club</u></li>
          <li><u>Troy Tennis Club</u></li>
        </ul>
      </main>
 
    </div>
 
    );
}
 
export default Profile;

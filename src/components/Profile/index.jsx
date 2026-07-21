import styles from './Profile.module.css'

const Profile = ({ githubUrl, linkedinUrl, fullName, techStack }) => {

    return (
        <header className={styles.header}>
            <div>
                <img className={styles.avatar} src={`${githubUrl}.png`}></img>
                <h2 className={styles.title}>{fullName}</h2>
                <h2 className={styles.title}>{techStack}</h2>
                <h2 className={styles.title}><a href={githubUrl}>Github</a></h2>
                <h2 className={styles.title}><a href={linkedinUrl}>Linkedin</a></h2>
            </div>
        </header>
    )
}

export default Profile;

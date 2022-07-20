import styles from './ContactsSection.module.scss';

interface IProps {
    email: string;
    emailLink: string
    telegram: string;
    telegramLink: string;
    // linkedin: string;
}

export const ContactsSection: React.FC<IProps> = ({ email, emailLink, telegram, telegramLink }) => {
    return (
        <div className={styles.container}>
            <h3>Contacts:</h3>
            <div className={styles.container__content}>
                <a className={styles.container__content_email} href={emailLink} target="_blank">{email}</a>
                <a className={styles.container__content_telegram} href={telegramLink} target="_blank">{telegram}</a>
            </div>
        </div>
    )
}
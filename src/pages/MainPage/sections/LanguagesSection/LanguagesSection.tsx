import styles from './LanguagesSection.module.scss'

type LanguageLevels = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' | 'Native'

interface IProps {
    english: LanguageLevels,
    russian: LanguageLevels
}

export const LanguagesSection: React.FC<IProps> = ({ english, russian }) => {
    return (
        <div className={styles.container}>
            <h3>Languages:</h3>
            <div className={styles.container__content}>
                <p className={styles.britain}>English: {english}</p>
                <p className={styles.russia}>Russian: {russian}</p>
            </div>
        </div>
    )
}
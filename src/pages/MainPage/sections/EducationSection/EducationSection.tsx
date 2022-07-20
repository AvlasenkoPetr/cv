import { EducationRow } from './EducationRow/EducationRow'
import styles from './EducationSection.module.scss'

export const EducationSection: React.FC = () => {
    return (
        <div className={styles.container}>
            <h3>Education:</h3>
            <div className={styles.container__content}>
                <EducationRow date="2017-2021" place="BSUIR, Programmable mobile systems" result="Not ended" />
                <EducationRow date="2021-2022" place="RS School JavaScript/Front-end 2021Q3" result="Certificate" link="https://app.rs.school/certificate/8sp1ziwj"/>
                <EducationRow date="2022" place="RS School React 2022Q1" result="Certificate" link="https://app.rs.school/certificate/wc2jmnky"/>
            </div>
        </div>
    )
}
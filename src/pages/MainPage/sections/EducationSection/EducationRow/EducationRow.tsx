import styles from './EducationRow.module.scss';

interface IProps {
    date: string;
    place: string;
    result: string;
    link?: string;
}

export const EducationRow: React.FC<IProps> = ({ date, place, result, link }) => {
    return (
        <div className={styles.container}>
            <div className={styles.container__date}>{date}</div>
            <div className={styles.container__place}>{place}</div>
            <div className={styles.container__result}>
                <a href={link} target="_blank">{result}</a>
            </div>
        </div>
    )
}
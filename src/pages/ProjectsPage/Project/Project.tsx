import { Skills } from '../../MainPage/sections/SkillsSection/SkillsSection';
import styles from './Project.module.scss';

type Technologies = Skills | 'Team'

export interface IProjectProps {
    title: string;
    imageLink: string;
    deployLink: string;
    technologies: Technologies[];
    date: Date;
    githubRepo: string;
}

export const Project: React.FC<IProjectProps> = ({ title, imageLink, deployLink, technologies, date, githubRepo }) => {
    return (
        <div className={styles.container}>
            <a href={deployLink} target="_blank">
                <img className={styles.container__img} src={imageLink} alt={title}/>
            </a>
            <h2 className={styles.container__title}>{title}</h2>
            <div className={styles.container__technologies}>
                {technologies.map((technology) => {
                    return <div className={styles[technology]} key={technology}></div>
                })}
            </div>
            <div className={styles.container__footer}>
                <p>{`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`}</p>
                <a href={githubRepo} target="_blank"></a>
            </div>
        </div>
    )
}
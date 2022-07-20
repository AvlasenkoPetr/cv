import styles from './SkillsSection.module.scss'

export type Skills = 'HTML5' 
            | 'CSS3' 
            | 'JavaScript' 
            | 'React' 
            | 'Redux' 
            | 'TypeScript' 
            | 'SASS'
            | 'Webpack'
            | 'Git'
            | 'Github'

interface IProps {
    skills: Skills[]
}

export const SkillsSection: React.FC<IProps> = ({ skills }) => {
    return (
        <div className={styles.container}>
            <h3>Skills:</h3>
            <div className={styles.container__skillslist}>
            {   
                skills.map((skill) => {
                    return (
                        <div className={`${styles.container__skillslist_cell} ${styles[skill]}`} key={skill}>
                            {skill}
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
import { Header } from "../../components/Header/Header";
import { projectsData } from "../../data/projectsData";
import { IProjectProps, Project } from "./Project/Project";
import styles from './ProjectsPage.module.scss';
import pageStyle from '../Page.module.scss';

export const ProjectPage: React.FC = () => {
    const projects: IProjectProps[] = projectsData;

    return (
        <div>
            <Header />
            <div className={`${styles.container} ${pageStyle.container}`}>
                {
                    projects.map(( {title, imageLink, deployLink, technologies, date, githubRepo} ) => {
                        return (
                            <Project
                                title={title}
                                imageLink={imageLink}
                                deployLink={deployLink}
                                technologies={technologies}
                                date={date}
                                githubRepo={githubRepo}
                                key={title}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}
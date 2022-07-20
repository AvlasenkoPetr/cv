import { Header } from "../../components/Header/Header";
import { Project } from "./Project/Project";
import styles from './ProjectsPage.module.scss';

export const ProjectPage: React.FC = () => {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <Project
                    title="Project Managemant App"
                    imageLink={require('../../assets/images/projects/project-management-app.png')}
                    deployLink="https://project-management-4exkmpnoh-avlasenkopetr.vercel.app/"
                    technologies={['HTML5', 'SASS', 'React', 'Redux', 'TypeScript']}
                    date={new Date(2022, 4, 29)}
                    githubRepo="https://github.com/AvlasenkoPetr/project-management-app"
                />
                <Project
                    title="RSLang"
                    imageLink={require('../../assets/images/projects/rslang.png')}
                    deployLink="https://avlasenkopetr.github.io/rslang/rslang/"
                    technologies={['HTML5', 'SASS', 'JavaScript', 'TypeScript', 'Webpack']}
                    date={new Date(2022, 1, 22)}
                    githubRepo="https://github.com/AvlasenkoPetr/rslang"
                />
                <Project
                    title="Async Race"
                    imageLink={require('../../assets/images/projects/async-race.jpg')}
                    deployLink="https://avlasenkopetr.github.io/async-race/async-race/"
                    technologies={['HTML5', 'CSS3', 'JavaScript', 'Webpack']}
                    date={new Date(2022, 0, 27)}
                    githubRepo="https://github.com/AvlasenkoPetr/async-race"
                />
                <Project
                    title="Christmas Tree"
                    imageLink={require('../../assets/images/projects/christmas-tree.png')}
                    deployLink="https://avlasenkopetr.github.io/christmas-tree/christmas-tree/index.html"
                    technologies={['HTML5', 'CSS3', 'JavaScript', 'Webpack']}
                    date={new Date(2021, 11, 30)}
                    githubRepo="https://github.com/AvlasenkoPetr/christmas-tree"
                />
                <Project
                    title="Art Quiz"
                    imageLink={require('../../assets/images/projects/art-quiz.png')}
                    deployLink="https://avlasenkopetr.github.io/art-quiz/art-quiz/index.html"
                    technologies={['HTML5', 'CSS3', 'JavaScript']}
                    date={new Date(2021, 10, 25)}
                    githubRepo="https://github.com/AvlasenkoPetr/art-quiz"
                />
                <Project
                    title="Momentum"
                    imageLink={require('../../assets/images/projects/momentum.jpg')}
                    deployLink="https://avlasenkopetr.github.io/momentum/momentum/"
                    technologies={['HTML5', 'CSS3', 'JavaScript']}
                    date={new Date(2021, 9, 27)}
                    githubRepo="https://github.com/AvlasenkoPetr/momentum"
                />
                <Project
                    title="Museum"
                    imageLink={require('../../assets/images/projects/museum.png')}
                    deployLink="https://avlasenkopetr.github.io/museum-dom/museum-dom/index.html"
                    technologies={['HTML5', 'CSS3', 'JavaScript']}
                    date={new Date(2021, 9, 14)}
                    githubRepo="https://github.com/AvlasenkoPetr/museum-dom"
                />
            </div>
        </div>
    )
}
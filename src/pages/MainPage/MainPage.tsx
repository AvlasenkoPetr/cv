import { Header } from "../../components/Header/Header";
import styles from './MainPage.module.scss';
import { AboutSection } from "./sections/AboutSection/AboutSection";
import { ContactsSection } from "./sections/ContactsSection/ContactsSection";
import { EducationSection } from "./sections/EducationSection/EducationSection";
import { LanguagesSection } from "./sections/LanguagesSection/LanguagesSection";
import { NameSection } from "./sections/NameSection/NameSection";
import { SkillsSection } from "./sections/SkillsSection/SkillsSection";

export const MainPage: React.FC = () => {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <NameSection name="Avlasenko Petr" description="Junior front-end developer" />
                <AboutSection />
                <ContactsSection 
                    email="phone.petr@gmail.com" emailLink="mailto:phone.petr@gmail.com"
                    telegram="@avla_sen_ko" telegramLink="https://t.me/avla_sen_ko"
                />
                <SkillsSection skills={['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Redux', 'SASS', 'Webpack',  'Git', 'Github']} />
                <EducationSection />
                <LanguagesSection english="B1" russian="Native" />
            </div>
        </>
    );
}
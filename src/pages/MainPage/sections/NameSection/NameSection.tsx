import styles from './NameSection.module.scss';

interface IProps {
    name: string;
    description: string;
}

export const NameSection: React.FC<IProps> = ({ name, description }) => {
    return (
        <div className={styles.container}>
            <div className={styles.container__title}>
                <h1 className={styles.container__title_name}>{name}</h1>
                <h2 className={styles.container__title_description}>{description}</h2>
            </div>
            <img className={styles.container__img} src={require('../../../../assets/images/myphoto.jpg')} />
        </div>
    )
}
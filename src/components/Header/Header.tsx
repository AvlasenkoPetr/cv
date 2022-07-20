import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Header.module.scss';

export const Header = () => {
    const activeClassname = ({ isActive }: { isActive: boolean }) => {
        return isActive ? styles.active : ''
    }

    return (
        <header className={styles.container}>
            <NavLink to="/" className={activeClassname}>About</NavLink>
            <NavLink to="/projects" className={activeClassname}>Projects</NavLink>
        </header>
    )
}
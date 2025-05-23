import { TabLink } from "../TabLink";
import styles from "./SideBar.module.scss";
import { ReactNode } from 'react';

interface pageContent {
    children: ReactNode;
}

export function SideBar({ children }: pageContent) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.sideBar}>
                <TabLink to="/main">Главная</TabLink>
                <TabLink to="/favorities">Мои треки</TabLink>
                <TabLink to="/playlists">Плейлисты</TabLink>
                <TabLink to="/trendes">Тренды</TabLink>
                <TabLink to="/history">История</TabLink>
                <TabLink to="/auth">Регистрация</TabLink>
            </div>
            {children}
        </div>
    );
}

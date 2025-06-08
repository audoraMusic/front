import { TabLink } from "../TabLink";
import styles from "./SideBar.module.scss";
import { ReactNode } from "react";

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
                <div className="mt-auto d-flex flex-column gap-2">
                    <TabLink to="/auth" variant="outline-info">Войти</TabLink>
                    <TabLink to="/registration" variant="outline-info">Зарегистрироваться</TabLink>
                </div>
            </div>
            {children}
        </div>
    );
}

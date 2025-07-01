import { TabLink } from "../TabLink";
import styles from "./SideBar.module.scss";
import { ReactNode } from "react";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

interface pageContent {
    children: ReactNode;
}

export function SideBar({ children }: pageContent) {
    const login = useSelector((state: RootState) => state.auth.login);
    const isAuth = useSelector((state: RootState) => state.auth.value);
    console.log(login, isAuth);
    return (
        <div className={styles.wrapper}>
            <div className={styles.sideBar}>
                <TabLink to="/main">Главная</TabLink>
                <TabLink to="/favorities">Мои треки</TabLink>
                <TabLink to="/playlists">Плейлисты</TabLink>
                <TabLink to="/trendes">Тренды</TabLink>
                <TabLink to="/history">История</TabLink>
                <div className="mt-auto d-flex flex-column gap-2">
                    {!isAuth ? (
                        <>
                            <TabLink to="/auth" variant="outline-info">
                                Войти
                            </TabLink>
                            <TabLink to="/registration" variant="outline-info">
                                Зарегистрироваться
                            </TabLink>
                        </>
                    ) : (
                        <>
                            {login}
                        </>
                    )}
                </div>
            </div>
            {children}
        </div>
    );
}

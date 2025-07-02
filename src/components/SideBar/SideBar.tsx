import { TabLink } from "../TabLink";
import styles from "./SideBar.module.scss";
import { ReactNode } from "react";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Login } from "./Login";
import { RegMenu } from "./RegMenu";

export function SideBar({ children }: { children?: ReactNode }) {
    const login = useSelector((state: RootState) => state.auth.login);
    const isAuth = useSelector((state: RootState) => state.auth.value);

    return (
        <div className={styles.wrapper}>
            <div className={styles.sideBar}>
                <TabLink to="/main" externalClassnames={styles.link}>
                    Главная
                </TabLink>
                <TabLink to="/favorities" externalClassnames={styles.link}>
                    Мои треки
                </TabLink>
                <TabLink to="/playlists" externalClassnames={styles.link}>
                    Плейлисты
                </TabLink>
                <TabLink to="/trendes" externalClassnames={styles.link}>
                    Тренды
                </TabLink>
                <TabLink to="/history" externalClassnames={styles.link}>
                    История
                </TabLink>
                <div className="mt-auto d-flex flex-column gap-2">
                    {!isAuth ? <RegMenu /> : <Login login={login} />}
                </div>
            </div>
            {children}
        </div>
    );
}

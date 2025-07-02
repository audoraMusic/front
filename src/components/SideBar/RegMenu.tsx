import { TabLink } from "../TabLink";
import styles from "./SideBar.module.scss";

export function RegMenu() {
    return (
        <>
            <TabLink to="/auth" variant="outline-info" externalClassnames={styles.link}>
                Войти
            </TabLink>
            <TabLink to="/registration" variant="outline-info" externalClassnames={styles.link}>
                Зарегистрироваться
            </TabLink>
        </>
    );
}

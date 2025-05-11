import { SideBar } from "../components/SideBar/SideBar";
import styles from "./Auth.module.scss";

export default function Auth() {
    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            <SideBar />
            <div className={styles.wrapper}>
                <form className={styles.formProps}>
                    <label>Логин</label>
                    <input placeholder="McPotato24" className={styles.inputProps} />
                    <label>Почта</label>
                    <input placeholder="user@gmail.com" className={styles.inputProps} />
                    <label>Пароль</label>
                    <input placeholder="не менее 8 символов" type="password" className={styles.inputProps} />
                </form>
            </div>
        </div>
    );
}

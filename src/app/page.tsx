import styles from "./page.module.css";
import { SideBar } from "./components/SideBar/SideBar";

export default function Home() {
    return (
        <div className={styles.wrapper}>
            <SideBar />
            <h1>Главная страница</h1>
        </div>
    );
}

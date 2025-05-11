import { TabLink } from "../TabLink";
import styles from "./SideBar.module.scss";

export function SideBar() {
  return (
    <div
      className={styles.sideBar}
    >
      <TabLink to="/">Главная</TabLink>
      <TabLink to="/favorities">Мои треки</TabLink>
      <TabLink to="/playlists">Плейлисты</TabLink>
      <TabLink to="/trandes">Тренды</TabLink>
      <TabLink to="/history">История</TabLink>
      <TabLink to="/auth">Регистрация</TabLink>
    </div>
  );
}
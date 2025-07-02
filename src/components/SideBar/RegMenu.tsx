import { TabLink } from "../TabLink";

export function RegMenu() {
    return (
        <>
            <TabLink to="/auth" variant="outline-info">
                Войти
            </TabLink>
            <TabLink to="/registration" variant="outline-info">
                Зарегистрироваться
            </TabLink>
        </>
    );
}

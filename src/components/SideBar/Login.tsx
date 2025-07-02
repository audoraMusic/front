import { useDispatch } from "react-redux";
import styles from "./SideBar.module.scss";
import { signOut } from "@/redux/slices/authSlice";


export function Login({ login }: { login?: string }) {
    const dispatch = useDispatch();

    return (
        <div className="m-auto d-flex gap-4 align-items-center">
            <div>{login}</div>
            <button className={styles.iconButton} onClick={() => dispatch(signOut())}> 
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                >
                    <rect x="3" y="3" width="12" height="18" rx="2" />
                    <path d="M12 12h9" />
                    <path d="M17 8l4 4-4 4" />
                    <path d="M7 7v7" />
                    <circle cx="7" cy="15" r="1.5" fill="currentColor" />
                    <path d="M7 7c1.5 0 3-.7 3-1.2" />
                </svg>
            </button>
        </div>
    );
}

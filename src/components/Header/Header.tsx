import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import type { HeaderProps } from "../../types/header"

function Header({ userName, onLogin, onLogout, onRegister }: HeaderProps) {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>COSMOSHOP</h1>

            <nav className={styles.nav}>
                <Link to="/" className={styles.link}>Products</Link>
                <Link to="/cart" className={styles.link}>Cart</Link>
            </nav>

            <div>
                {userName === null ? (
                    <div>
                        <button onClick={onRegister}>Register</button>
                        <button onClick={onLogin}>Login</button>
                    </div>
                ) : (
                    <div>
                        <span>{userName}</span>
                        <button onClick={onLogout}>Logout</button>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
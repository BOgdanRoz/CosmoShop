import { Link } from "react-router-dom"
import { FaBoxOpen, FaSignInAlt, FaSignOutAlt, FaShoppingCart, FaUser, FaUserPlus } from "react-icons/fa"
import styles from "./Header.module.css"
import type { HeaderProps } from "../../types/auth"

function Header({ userName, onLogin, onLogout, onRegister }: HeaderProps) {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>COSMOSHOP</h1>

            <nav className={styles.nav}>
                <Link to="/" className={styles.link}><FaBoxOpen aria-hidden="true" /><span>Products</span></Link>
                <Link to="/cart" className={styles.link}><FaShoppingCart aria-hidden="true" /><span>Cart</span></Link>
            </nav>

            <div className={styles.authSection}>
                {userName === null ? (
                    <div className={styles.authActions}>
                        <button className={styles.authButton} onClick={onRegister}><FaUserPlus aria-hidden="true" /><span>Register</span></button>
                        <button className={`${styles.authButton} ${styles.loginButton}`} onClick={onLogin}><FaSignInAlt aria-hidden="true" /><span>Login</span></button>
                    </div>
                ) : (
                    <div className={styles.authActions}>
                        <span className={styles.userName}><FaUser aria-hidden="true" /><span>{userName}</span></span>
                        <button className={styles.authButton} onClick={onLogout}><FaSignOutAlt aria-hidden="true" /><span>Logout</span></button>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
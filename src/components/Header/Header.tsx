import { Link } from "react-router-dom"
import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>COSMOSHOP</h1>

            <nav className={styles.nav}>
                <Link to="/" className={styles.link}>Products</Link>
                <Link to="/cart" className={styles.link}>Cart</Link>
            </nav>
        </header>
    )
}

export default Header
import type { AuthModalProps } from "../../types/auth";
import styles from "./AuthModal.module.css";


function AuthModal({ modalType, onClose, onSubmit }: AuthModalProps) {
    const title = modalType === "register" ? "Register" : "Login";

    return (
        <div className={styles.overlay}>
            <section
                className={styles.modal}
            >
                <button
                    className={styles.closeButton}
                    type="button"
                    onClick={onClose}
                    aria-label="Close"
                >
                    ×
                </button>

                <h2 className={styles.title} id="auth-modal-title">{title}</h2>

                <form
                    className={styles.form}
                    onSubmit={(event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget)

                        const userName = formData.get("username")
                        const password = formData.get("password")
                        if (typeof userName !== "string" || typeof password !== "string") {
                            return
                        }
                        onSubmit(userName, password);
                    }}
                >
                    <label className={styles.field}>
                        <span>Username</span>
                        <input
                            className={styles.input}
                            type="text"
                            name="username"
                        />
                    </label>

                    <label className={styles.field}>
                        <span>Password</span>
                        <input
                            className={styles.input}
                            type="password"
                            name="password"
                        />
                    </label>

                    <button className={styles.submitButton} type="submit">
                        {title}
                    </button>
                </form>
            </section>
        </div>
    )
}

export default AuthModal;
import { useState } from "react";
import type { AuthModalProps } from "../../types/auth";
import styles from "./AuthModal.module.css";


function AuthModal({ modalType, onClose, onSwitchMode, onSubmit }: AuthModalProps) {
    const [invalidFields, setInvalidFields] = useState({ username: false, password: false });
    const [shakeFields, setShakeFields] = useState(false);
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
                        const formData = new FormData(event.currentTarget);

                        const userName = formData.get("username");
                        const password = formData.get("password");
                        if (typeof userName !== "string" || typeof password !== "string") {
                            return;
                        }

                        const missingUsername = userName.trim() === "";
                        const missingPassword = password.trim() === "";
                        setInvalidFields({ username: missingUsername, password: missingPassword });

                        if (missingUsername || missingPassword) {
                            setShakeFields(false);
                            requestAnimationFrame(() => setShakeFields(true));
                            return;
                        }

                        onSubmit(userName, password);
                    }}
                >
                    <label className={styles.field}>
                        <span>Username</span>
                        <input
                            className={`${styles.input} ${invalidFields.username ? styles.invalid : ""} ${invalidFields.username && shakeFields ? styles.shake : ""}`}
                            type="text"
                            name="username"
                            onChange={(event) => {
                                if (event.target.value.trim()) {
                                    setInvalidFields((fields) => ({ ...fields, username: false }));
                                }
                            }}
                        />
                    </label>

                    <label className={styles.field}>
                        <span>Password</span>
                        <input
                            className={`${styles.input} ${invalidFields.password ? styles.invalid : ""} ${invalidFields.password && shakeFields ? styles.shake : ""}`}
                            type="password"
                            name="password"
                            onChange={(event) => {
                                if (event.target.value.trim()) {
                                    setInvalidFields((fields) => ({ ...fields, password: false }));
                                }
                            }}
                        />
                    </label>

                    <button className={styles.submitButton} type="submit">
                        {title}
                    </button>
                </form>

                <p className={styles.switchText}>
                    {modalType === "register" ? "Already have an account?" : "Don't have an account?"}{" "}
                    <button className={styles.switchButton} type="button" onClick={onSwitchMode}>
                        {modalType === "register" ? "Login" : "Register"}
                    </button>
                </p>
            </section>
        </div>
    )
}

export default AuthModal;
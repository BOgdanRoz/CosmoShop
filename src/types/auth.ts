export interface HeaderProps {
    userName: string | null
    onRegister: () => void
    onLogin: () => void
    onLogout: () => void
}

export interface AuthModalProps {
    modalType: "register" | "login"
    onClose: () => void
    onSwitchMode: () => void
    onSubmit: (userName: string, password: string) => void
}

export interface User {
    userName: string
    password: string
}

export interface HeaderProps {
    userName: string | null
    onRegister: () => void
    onLogin: () => void
    onLogout: () => void
}
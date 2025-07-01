export interface FormState {
    login: string;
    mail?: string;
    password: string;
    error?: string | null;
    response?: ResponseState;
}

export interface ResponseState {
    data?: object,
    success: boolean
}

export interface AuthFormStyles {
    formProps: string;
    inputProps: string;
    error?: string;
}

export interface AuthFormProps {
    styles: AuthFormStyles;
    state: FormState;
    action: (formData: FormData) => void;
    isPending: boolean;
    csrfToken: string | null;
}

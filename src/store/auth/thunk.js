import { loginUser, logoutFirebase, registerUser, singInGoogle } from "../../firebase/providers"
import { chekingCredentials, login, logout } from "./authSlice"

export const checkAuth = (email, pass) => {
    return async (dispatch) => {
        dispatch(chekingCredentials())
    }
}
export const startGoogle = (email, pass) => {
    return async (dispatch) => {
        dispatch(chekingCredentials())

        const result = await singInGoogle()
        if(!result.ok) {
            dispatch(logout(result))
            return;

        }
        delete result.ok
        dispatch(login(result))
        console.log({result});
        
    }
}
export const starRegisterUser = (email, password, name) => {
    return async (dispatch) => {
        dispatch(chekingCredentials());

        const result = await registerUser({ email, password, name });

        if (!result.ok) {
            dispatch(logout(result));  // Manejo de errores adecuado
            return;
        }

        dispatch(login(result));
    };
};
export const starLogin = (email, password) => {
    return async (dispatch) => {
        dispatch(chekingCredentials());

        const result = await loginUser({ email, password });

        if (!result.ok) {
            dispatch(logout(result));  // Manejo de errores adecuado
            return;
        }

        dispatch(login(result));
    };
};

export const starLogout = () => {
    return async (dispatch) => {
        await logoutFirebase()

        dispatch(logout({ errorMessage: null}))
    }
}




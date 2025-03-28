import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const provider = new GoogleAuthProvider();

export const singInGoogle = async() => {
    try {
        const result = await signInWithPopup(FirebaseAuth, provider)
        // const credentials = GoogleAuthProvider.credentialFromResult(result)
        const {displayName, email, photoURL, uid} = result.user;
        return {
            ok: true,
            displayName,
            email, 
            photoURL, 
            uid
        }
        
        

    } catch( error) {
        console.log(error);
        return {
            ok: false
        }
        

    }
}

export const registerUser = async ({ email, password, name }) => {
    try {
        const response = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { user } = response;

        // Actualizar nombre en Firebase
        await updateProfile(user, { displayName: name });

        return {
            ok: true,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            uid: user.uid
        };

    } catch (error) {
        console.log("Error en registro:", error.message);

        return {
            ok: false,
            errorMessage: error.message
        };
    }
};

export const loginUser = async( {email, password}) => {
    try {
        const response = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { user } = response;

        return {
            ok: true,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            uid: user.uid
        };

    } catch (error) {
        console.log("Error en registro:", error.message);

        return {
            ok: false,
            errorMessage: error.message,
            error: 'Usuario o contraseña no válidos'
        };
    }
}

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
}
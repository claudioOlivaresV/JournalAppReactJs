import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"
import { useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { starRegisterUser } from "../../store/auth/thunk"

export const RegisterPage = () => {
    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { status, errorMessage} = useSelector(state => state.auth);

    const isAutenticating = useMemo(() => status === 'checking', [status])

    const formValidations = {
        email: [(value) => value.includes('@'), 'El correo debe tener un @'],
        password: [(value) => value.length > 6, 'El password debe tener más de 6 letras'],
        name: [(value) => value.length >= 1, 'El nombre es obligatorio'],
    };

    const {
        email, password, name, onInputChange, formState, isFormValid,
        emailValid, passwordValid, nameValid
    } = useForm({ email: '', password: '', name: '' }, formValidations);

    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);

        if (!isFormValid) return;

        // Enviar datos al thunk correctamente
        dispatch(starRegisterUser(email, password, name));
    };

    return (
        <AuthLayout title="Crear Cuenta">
            <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
                <Grid container>
                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                        <TextField
                            label="Nombre"
                            type="text"
                            placeholder="Claudio Olivares"
                            fullWidth
                            name="name"
                            value={name}
                            onChange={onInputChange}
                            error={!!nameValid && formSubmitted}
                            helperText={nameValid}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            error={!!emailValid && formSubmitted}
                            helperText={emailValid}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                            error={!!passwordValid && formSubmitted}
                            helperText={passwordValid}
                        />
                    </Grid>
                    <Grid item xs={12} display={ errorMessage ? '' : 'none'} sx={{ mt: 2 }}>
                        <Alert severity="error" >{ errorMessage}</Alert>
                    </Grid>
                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12}>
                            <Button  disabled={!isFormValid | isAutenticating} variant="contained" type="submit" fullWidth>
                                Crear Cuenta
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction='row' justifyContent='end'>
                    <Link component={RouterLink} color="inherit" to='/auth/login'>
                        Ir al Login
                    </Link>
                </Grid>
            </form>
        </AuthLayout>
    );
};

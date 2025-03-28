import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {
  
    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setFormValidation] = useState({});

    useEffect(() => {    
        createValidators();
    }, [formState]); 
    
    useEffect(() => {
        setIsFormValid(Object.values(formValidation).every(value => value === null));
    }, [formValidation]); 

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    const createValidators = () => {
        const formCheckedValues = {};
        for (const formField of Object.keys(formValidations)) {
            const [fn, errorMessage = 'Este campo es requerido'] = formValidations[formField];
            formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
        }
        setFormValidation(formCheckedValues);
    };

    const [isFormValid, setIsFormValid] = useState(true);

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    };
};

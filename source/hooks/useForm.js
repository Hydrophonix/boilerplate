import { useState, useEffect } from 'react';
import v4 from 'uuid/v4';

export const useForm = (initialValues = {}) => {
    const [ form, setForm ] = useState(initialValues);

    const handleChange = (event) => {
        event.persist();
        setForm((prevValues) => ({
            ...prevValues,
            [ event.target.name ]: event.target.value,
        }));
    };

    const setNewInnitialValues = (newInnitialValues) => {
        setForm(newInnitialValues);
    };

    return [ form, handleChange, setNewInnitialValues ];
};

export const useImagesForm = (initialValues = []) => {
    const [ form, setForm ] = useState(initialValues);

    const formHandle = (event) => {
        event.persist();

        setForm((prevState) => prevState.map((imgUrl, index) => {
            // eslint-disable-next-line eqeqeq
            if (event.target.name == index) {
                return event.target.value;
            }

            return imgUrl;
        }));
    };

    const setKeyValue = () => {
        setForm((prevState) => [ ...prevState, '' ]);
    };

    const deleteFormImage = (deletedIndex) => {
        // eslint-disable-next-line no-alert
        const result = window.confirm('Подтвердите удаление.');

        if (result) {
            setForm((prevState) => prevState.filter((imgUrl, index) => deletedIndex !== index));
        }
    };

    const setNewInnitialValues = (newInnitialValues) => {
        setForm(newInnitialValues);
    };

    return [ form, formHandle, setKeyValue, deleteFormImage, setNewInnitialValues ];
};

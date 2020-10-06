import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import store from 'store';

export const useLocalStorage = (key, innitialValue = '') => {
    const [ storedValue, setStoredValue ] = useState(() => {
        try {
            const value = store.get(key);

            return value ? value : innitialValue;
        } catch (error) {
            console.log(`local storage error by key: ${key}. Npm package store error.`);

            return innitialValue;
        }
    });

    const setValue = (value) => {
        try {
            store.set(key, value);
            setStoredValue(value);
        } catch (error) {
            console.log(`local storage error by key: ${key}. Dont forget about KEY and VALUE arguments.`);
        }
    };

    return [
        storedValue,
        setValue,
    ];
};

export const useLocalStorageI18n = (innitialValue = 'ru') => {
    const { i18n } = useTranslation();

    useEffect(() => {
        const storedValue = store.get('locale');

        if (innitialValue !== storedValue) {
            i18n.changeLanguage(storedValue);
        }
    }, []);

    const setLocale = (value) => {
        store.set('locale', value);
        i18n.changeLanguage(value);
    };

    return {
        locale: i18n.language,
        setLocale,
    };
};

import axios from 'axios';
import { version } from 'react';
import { LANGUAGE_VERSIONS } from './constants';

const API = axios.create({
    baseURL: 'https://emkc.org/api/v2/piston'
});

export const executeCode = async (language, sourceCode) => {
    const response = await API.post('/execute', {
        language: language === 'cppˀˀ' ? 'c++' : language,
        version: LANGUAGE_VERSIONS[language],
        files: [
            {
                content: sourceCode
            }
        ]
    });

    return response.data;
}

export default executeCode;
import {Box, HStack} from '@chakra-ui/react';
import Editor from '@monaco-editor/react';
import { useState, useRef } from 'react';
import LangSelector from './LangSelector.jsx';
import { CODE_SNIPPET } from '../constants.js';
import Output from './Output.jsx';

const CodeEditor = () => {
    const [value, setValue] = useState(CODE_SNIPPET['javascript']);
    const editorRef = useRef();
    const [language, setLanguage] = useState('javascript');

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    }

    const onSelectLanguage = (lang) => {
        setLanguage(lang);
        console.log(`Language selected: ${lang}`);
        setValue(CODE_SNIPPET[lang] || '// Write your code here');
    }

    return (
        <Box>
            <HStack mb={4} spacing={4}>
                <Box w="50%">
                    <LangSelector language={language} onSelect={onSelectLanguage}/>
                    <Editor
                        height="75vh"
                        theme='vs-dark'
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                        onMount={onMount}
                    />
                </Box>
                <Output editorRef={editorRef} language={language}/>
            </HStack>
        </Box>
    );
}

export default CodeEditor;
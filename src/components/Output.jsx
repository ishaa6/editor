import { Box, Text, Button, useToast } from '@chakra-ui/react';
import executeCode from '../api';
import { useState } from 'react';
import { i } from 'framer-motion/client';

const Output = ({editorRef, language}) => {
    const [output, setOutput] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const toast = useToast();

    const runCode = async () => {
        const code = editorRef.current.getValue();
        if(!code) return;

        try{
            setIsLoading(true);
            const {run:result} = await executeCode(language, code);
            setOutput(result.output.split('\n'));
            result.stderr && setIsError(true);
        } catch (error) {
            toast({
                title: "Error",
                description: error.message || "An error occurred while executing the code.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Box w="50%">
            <Text mb={2} fontSize="lg">Output Panel</Text>
            <Button variant="outline" colorScheme='green' mb={4}
                onClick={runCode}
                isLoading={isLoading}
            >
                Run Code
            </Button>
            <Box
                height="75vh"
                bg="gray.900"
                borderRadius="md"
                p={4}
                color={isError ? 'red.400' : ''}
                overflowY="auto"
                border="1px solid #333"
                borderColor={isError ? 'red.500' : 'gray.700'}
            >
                {output !== null ? (  
                    <>
                        {output.map((line, index) => (
                        <Text key={index} whiteSpace="pre-wrap">
                            {line}
                        </Text>
                        ))}
                    </>

                ) : (
                    <Text color="gray.500">Click 'Run Code' to see the output</Text>
                )}
            </Box>
        </Box>
    );
}

export default Output;
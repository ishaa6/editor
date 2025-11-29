import { Menu, Box, MenuButton, MenuList, MenuItem, Text, Button } from "@chakra-ui/react";
import { LANGUAGE_VERSIONS } from "../constants";

const languages = Object.entries(LANGUAGE_VERSIONS);

const LangSelector = ({language, onSelect}) => {
    return (
        <Box>
            <Text>Select Language</Text>
            <Menu>
                <MenuButton as={Button}>
                    {language.toUpperCase()}
                </MenuButton>
                <MenuList>
                    {languages.map(([lang, version]) => (
                        <MenuItem key={lang} 
                            onClick={() => onSelect(lang)}
                            color={lang === language ? 'blue.400' : ''}
                            bg={lang === language ? 'gray.800' : 'transparent'}
                            _hover={{color:'blue.400', bg:'gray.800'}}
                        >
                            {lang.toUpperCase()} &nbsp; 
                            <Text as="span" fontSize="sm" color="gray.500">({version})</Text>
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </Box>
    );
}

export default LangSelector;
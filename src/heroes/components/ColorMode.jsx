import React from 'react';
import { useColorMode } from '@chakra-ui/color-mode';
import { Button, IconButton } from '@chakra-ui/react';
import { UilMoon, UilSun } from '@iconscout/react-unicons';

export  const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Button
        aria-label="toggleColorModeButton"
        mr="-3"
        w="5%"
        onClick={toggleColorMode}
        
      >
        <div
          aria-label="toggleColorModeButton_"
          bg="transparent"


        >
          {colorMode === 'light' ? (
            <UilSun color="#000" />
          ) : (
            <UilMoon color="#fff" />
          )}
        </div>
      </Button>
    </>
  );
};


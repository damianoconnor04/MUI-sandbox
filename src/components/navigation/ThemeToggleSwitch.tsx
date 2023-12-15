import React from 'react'
import IconButton from '@mui/material/IconButton';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { Theme } from '@mui/material';

interface ThemeToggleSwitchProps {
  colorMode: { toggleColorMode: () => void };
  theme: Theme;
}

const ThemeToggleSwitch: React.FC<ThemeToggleSwitchProps> = ({ colorMode, theme }) => {
  return (
    <IconButton size="large" onClick={colorMode.toggleColorMode} color='inherit'>
      {theme.palette.mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
    </IconButton>
  )
}

export default ThemeToggleSwitch
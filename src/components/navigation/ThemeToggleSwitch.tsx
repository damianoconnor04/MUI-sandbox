import React from 'react'
import IconButton from '@mui/material/IconButton';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { Theme } from '@mui/material';

// colorMode: object to toggle light/dark mode
// theme: current MUI theme based on light/dark preference
interface ThemeToggleSwitchProps {
  theme: Theme;
  onClick?: () => void;
}

// render light/dark toggle button
const ThemeToggleSwitch: React.FC<ThemeToggleSwitchProps> = ({ theme, onClick }) => {
  return (
    <IconButton size="large" aria-label='Toggle light or dark mode' onClick={onClick} color='inherit'>
      {theme.palette.mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
    </IconButton>
  )
}

export default ThemeToggleSwitch
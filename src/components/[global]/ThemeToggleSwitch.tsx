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
  size?: 'small' | 'medium' | 'large' | null
}

// render light/dark toggle button
const ThemeToggleSwitch: React.FC<ThemeToggleSwitchProps> = ({ theme, onClick, size }) => {
  return (
    <IconButton size={size !== null ? size : 'medium'} aria-label='Toggle light or dark mode' onClick={onClick} sx={{ color: theme.palette.text.primary }}>
      {theme.palette.mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
    </IconButton>
  )
}

export default ThemeToggleSwitch
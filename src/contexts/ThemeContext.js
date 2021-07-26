import { createTheme } from '@material-ui/core';
import React from 'react'

const theme = createTheme({
  overrides: {
    MuiButton: {
      sizeLarge: {
        backgroundColor: 'red'
      }
    }
  },
  props: {
    MuiButton: {
      size: 'large',
      color: 'primary',
    },
  },
});

const ThemeContext = () => {
  return (
    <div>

    </div>
  )
}

export default ThemeContext

import DangKyLanDau from './pages/DangKyLanDau';
import TrangChu from './pages/TrangChu'
import Layout from "./Layout/AppLayout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@material-ui/core';
import DataContextProvider from './contexts/DataContext';

const theme = createTheme({
  overrides: {
    MuiInputLabel: {
      shrink: {
        transform: 'translate(0,0) scale(1)',
      },
      root: {
        paddingBottom: '4px',
        fontSize: '0.75rem',
        fontWeight: '400',
        lineHeight: '1',
        letterSpacing: '0.00938em',
      },
      outlined: {
        transform: 'none',
        '&$shrink': {
          transform: 'none',
        },
      },
      formControl: {
        transform: 'none'
      },
      animated: {
        transition: 'none'
      }
    },
    MuiFormLabel: {
      root: {
        paddingBottom: '4px',
        fontSize: '1rem',
        fontWeight: '400',
        lineHeight: '1',
        letterSpacing: '0.00938em',
      }
    },
    MuiFormControl: {
      root: {
        width: '100%'
      }
    },
    MuiInput: {
      underline: {
        '&:before': {
          content: 'none'
        },
        '&:after': {
          content: 'none'
        }
      },
    },
    MuiTextField: {
      root: {
        width: "100%",
        borderRadius: '4px',
      }
    },
    MuiInputBase: {
      root: {
        'label + &': {
          marginTop: '17px',
        },
        backgroundColor: "rgba(31, 98, 176, 0.12)",
        width: "100%",
        borderRadius: '4px',
      },
      input: {
        // font: '-webkit-control',
        padding: '6px 6px 7px 6px',
        lineHeight: 2
      }
    },
    MuiOutlinedInput: {
      input: {
        padding: "6px 7px",
        borderRadius: '4px',
      },
      notchedOutline: {
        border: 'none',
      },
      adornedEnd: {
        paddingRight: '0'
      }
    },
    MuiGrid: {
      item: {
        padding: '12px',
      },
      'grid-xs-1': {
        flexBasis: '60px',
        maxWidth: '60px',
      }
    },
    MuiFormHelperText: {
      root: {
        margin: '0',
        bottom: '-1.5em',
        fontSize: '0.75rem',
        position: 'absolute',
        fontStyle: 'italic',
        marginTop: '0',
        textAlign: 'left',
        fontWeight: '400',
        lineHeight: '1.66',
        letterSpacing: '0.03333em',
      },
      contained: {
        marginLeft: '0',
        marginRight: '0',
      }
    },
    MuiAutocomplete: {
      root: {
        'label + &': {
          marginTop: '17px',
        },
      },
      inputRoot: {
        '&&[class*="MuiOutlinedInput-root"]': {
          paddingLeft: '0',
          padding: '6px',
          MuiAutocomplete: {
            input: {
              '&:first-child': {
                paddingLeft: '0'
              }
            }
          }
        },
        '&&[class*="MuiOutlinedInput-root"] $input': {
          padding: '0',
        }
      }
    },
    MuiButton: {
      root: {
        height: '32px',
        textTransform: 'none',
        fontWeight: '500',
        fontSize: '0.875rem',
        lineHeight: '1.75',
        letterSpacing: '0.02857em'
      },
      outlined: {
        border: '1px solid rgba(31, 98, 176, 0.5)',
        color: '#1F62B0'
      },
      containedPrimary: {
        backgroundColor: '#3f51b5',
        '&:hover': {
          backgroundColor: '#303f9f',
        }
      }
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DataContextProvider>
        <Router>
          <Layout />
          <Switch>
            <Route exact path='/trangchu'>
              <TrangChu />
            </Route>
            <Route exact path='/dangkylandau'>
              <DangKyLanDau />
            </Route>
          </Switch>
        </Router>
      </DataContextProvider>
    </ThemeProvider>
  );
}

export default App;

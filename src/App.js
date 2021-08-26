import DangKyLanDau from "./container/DKLD";
import TrangChu from "./pages/TrangChu";
import Layout from "./Layout/AppLayout";
import DateFnsUtils from "@date-io/date-fns";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import DataContextProvider from "./contexts/DataContext";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import React from "react";

const theme = createTheme({
    overrides: {
        MuiInputLabel: {
            shrink: {
                transform: "translate(0,0) scale(1)",
            },
            root: {
                paddingBottom: "4px",
                fontSize: "0.75rem",
                fontWeight: "400",
                lineHeight: "1",
                letterSpacing: "0.00938em",
            },
            outlined: {
                transform: "none",
                "&$shrink": {
                    transform: "none",
                },
            },
            formControl: {
                transform: "none",
            },
            animated: {
                transition: "none",
            },
        },
        MuiTypography: {
            body1: {
                fontSize: "0.875rem",
                fontWeight: "400",
            },
            h6: {
                fontWeight: 700,
                lineHeight: "1.6",
                letterSpacing: "0.0075rem",
            },
        },
        MuiFormLabel: {
            root: {
                paddingBottom: "4px",
                fontSize: "1rem",
                fontWeight: "400",
                lineHeight: "1",
                letterSpacing: "0.00938em",
            },
        },
        MuiFormControl: {
            root: {
                width: "100%",
            },
        },
        MuiInput: {
            underline: {
                "&:before": {
                    content: "none",
                },
                "&:after": {
                    content: "none",
                },
            },
        },
        MuiTextField: {
            root: {
                width: "100%",
                borderRadius: "4px",
            },
        },
        MuiInputBase: {
            root: {
                "label + &": {
                    marginTop: "17px",
                },
                backgroundColor: "rgba(31, 98, 176, 0.12)",
                borderRadius: "4px",
            },
            input: {
                // font: '-webkit-control',
                padding: "6px 6px 7px 6px",
                lineHeight: 2,
            },
        },
        MuiOutlinedInput: {
            input: {
                padding: "6px 7px",
                borderRadius: "4px",
            },
            notchedOutline: {
                border: "none",
            },
            adornedEnd: {
                paddingRight: "0",
            },
        },
        MuiGrid: {
            item: {
                padding: "12px",
            },
            "grid-xs-1": {
                flexBasis: "60px",
                maxWidth: "60px",
            },
        },
        MuiFormHelperText: {
            root: {
                margin: "0",
                bottom: "-1.5em",
                fontSize: "0.75rem",
                position: "absolute",
                fontStyle: "italic",
                marginTop: "0",
                textAlign: "left",
                fontWeight: "400",
                lineHeight: "1.66",
                letterSpacing: "0.03333em",
            },
            contained: {
                marginLeft: "0",
                marginRight: "0",
            },
        },
        MuiAutocomplete: {
            inputRoot: {
                padding: "0px 7px",
                width: "100%",
                '&&[class*="MuiOutlinedInput-root"]': {
                    paddingLeft: "0",
                    padding: "6px",
                    MuiAutocomplete: {
                        input: {
                            "&:first-child": {
                                paddingLeft: "0",
                            },
                        },
                    },
                },
                '&&[class*="MuiOutlinedInput-root"] $input': {
                    padding: "0",
                },
            },
            input: {
                width: "100%",
            },
            root: {
                "label + &": {
                    marginTop: "17px",
                },
            },
        },
        MuiButton: {
            root: {
                height: "32px",
                textTransform: "none",
                fontWeight: "500",
                fontSize: "0.875rem",
                lineHeight: "1.75",
                letterSpacing: "0.02857em",
            },
            outlined: {
                border: "1px solid rgba(31, 98, 176, 0.5)",
                color: "#1F62B0",
            },
            containedPrimary: {
                backgroundColor: "#1F62B0",
                "&:hover": {
                    backgroundColor: "#174A85",
                },
            },
        },
        MuiSelect: { select: { padding: "0 24px 0 6px" } },
        MuiCssBaseline: {
            "@global": {
                body: {
                    color: "rgba(0, 0, 0, 0.87)",
                    margin: 0,
                    fontSize: "0.875rem",
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    fontWeight: 400,
                    lineHeight: 1.43,
                    letterSpacing: "0.01071em",
                    backgroundColor: "rgba(31, 98, 176, 0.12)",
                },
            },
        },
        MuiDataGrid: {
            toolbarContainer: {
                padding: "4px 4px 0",
                alignItems: "center",
            },
        },
        MuiTablePagination: {
            input: {
                backgroundColor: "inherit",
            },
        },
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: "#184a85",
            },
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DataContextProvider>
                    <Router>
                        <Layout />
                        <Switch>
                            <Route exact path="/trangchu">
                                <TrangChu />
                            </Route>
                            <Route exact path="/dangkylandau">
                                <DangKyLanDau />
                            </Route>
                        </Switch>
                    </Router>
                </DataContextProvider>
            </MuiPickersUtilsProvider>
        </ThemeProvider>
    );
}

export default App;

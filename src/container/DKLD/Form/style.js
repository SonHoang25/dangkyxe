import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2, 0),
    },
    button: {
        transition:
            "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        color: "#1F62B0",
        textTransform: "none",
        letterSpacing: "0.02857em",
        fontWeight: "500",
        "&:hover": {
            textDecoration: "none",
            backgroundColor: "rgba(31, 98, 176, 0.04)",
        },
    },
}));

export default useStyles;

import React from "react";
import {
    Grid,
    Divider as MuiDivider,
    makeStyles,
    withStyles,
    Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    span: {
        textAlign: "center",
        fontSize: "0.825rem",
        fontWeight: "bold",
        lineHeight: "1.6",
        letterSpacing: "0.01em",
    },
}));
const MuiDivider2 = withStyles({
    root: {
        backgroundColor: "rgba(31, 98, 176, 0.12)",
    },
})(MuiDivider);

const Divider = ({ children }) => {
    const classes = useStyles();

    return (
        <Grid
            container
            alignItems="center"
            spacing={1}
            style={{ padding: "6px 0px 0px 0px" }}
        >
            <Grid item xs={1}>
                <MuiDivider2 />
            </Grid>
            <Typography style={{ padding: "0 6px" }} className={classes.span}>
                {children}
            </Typography>
            <Grid item xs>
                <MuiDivider2 />
            </Grid>
        </Grid>
    );
};

export default Divider;

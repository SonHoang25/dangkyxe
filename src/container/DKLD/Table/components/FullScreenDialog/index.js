import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { Grid, Toolbar as MuiToolbar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { Container } from "@material-ui/core";
import { useForm } from "react-hook-form";
import ThongTinBanDau from "./components/ThongTinBanDau";
import { Paper } from "@material-ui/core";
import ThongTinBoSung from "./components/ThongTinBoSung";

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: "relative",
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    container: {
        fontWeight: "400",
        background: "white",
        borderRadius: "3px",
        padding: theme.spacing(2),
    },
    root: {
        padding: theme.spacing(2, 2, 2, 2),
        maxWidth: "100%",
        backgroundColor: "rgba(31, 98, 176, 0.12)",
    },
}));

const Toolbar = withStyles({
    regular: {
        minHeight: "48px",
    },
})(MuiToolbar);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenDialog = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const { control } = useForm();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
            >
                Open full-screen dialog
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            HIỆU CHỈNH BỔ SUNG
                        </Typography>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Container className={classes.root}>
                    <Paper className={classes.container}>
                        <Grid container spacing={3}>
                            <ThongTinBanDau control={control} />
                            <ThongTinBoSung control={control} />
                        </Grid>
                    </Paper>
                </Container>
            </Dialog>
        </>
    );
};

export default FullScreenDialog;

import { IconButton, Typography, withStyles } from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";

// const styles = (theme) => ({
//     root: {
//         margin: 0,
//         padding: "16px",
//     },
// });

const IconButton2 = withStyles({
    root: {
        position: "absolute",
        right: "16px",
        top: "8px",
        color: "#7d7d7d",
    },
})(IconButton);

const DialogTitle = withStyles()(({ onClose, children }) => {
    // const classes = styles();
    return (
        <MuiDialogTitle disableTypography>
            <Typography
                variant="h6"
                align="center"
                style={{
                    textTransform: "uppercase",
                }}
            >
                {children}
            </Typography>
            {onClose ? (
                <IconButton2 aria-label="close" onClick={onClose}>
                    <CloseIcon />
                </IconButton2>
            ) : undefined}
        </MuiDialogTitle>
    );
});

export default DialogTitle;

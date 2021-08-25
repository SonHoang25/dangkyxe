import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Grid,
    makeStyles,
    Typography,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import DialogTitle from "../../../../../components/DialogTitle";
import { DataContext } from "../../../../../contexts/DataContext";

const useStyles = makeStyles((theme) => ({
    bienso: {
        color: "rgb(31, 98, 176)",
        fontWeight: "bold",
    },
}));

const ThongBaoBien = ({
    openPlate,
    onClose,
    openPaper,
    onOpenPaper,
    onClosePaper,
    onCloseConfirm,
}) => {
    const classes = useStyles();
    const [pdfSrc, setPdfSrc] = useState("");
    const { licensePlate, printPaperApi, paper } = useContext(DataContext);

    const printPaper = () => {
        if (licensePlate) {
            printPaperApi({
                otoDangKy: {
                    id: licensePlate.result.otoDangKyId,
                },
            });
            onOpenPaper();
            onCloseConfirm();
            onClose();
        }
    };

    useEffect(() => {
        if (paper) {
            setPdfSrc(paper.result?.base64pdf);
        }
    }, [paper]);

    return (
        <>
            <Dialog
                open={openPlate}
                onClose={(reason) => onClose}
                maxWidth="sm"
                fullWidth={true}
            >
                {licensePlate?.errorCode === 0 ? (
                    <>
                        <DialogTitle onClose={onClose}>
                            Biển số xe của ông/bà là:
                        </DialogTitle>
                        <DialogContent>
                            <Typography
                                variant="h2"
                                align="center"
                                className={classes.bienso}
                            >
                                {licensePlate?.result.data.bienDayDu}
                            </Typography>
                        </DialogContent>
                    </>
                ) : (
                    <>
                        <DialogTitle onClose={onClose}>
                            {licensePlate?.errors.Error}
                        </DialogTitle>
                        <DialogContent>
                            <Typography align="center">
                                {/* {licensePlate?.errors.Error} */}
                            </Typography>
                        </DialogContent>
                    </>
                )}
                <DialogActions>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={6}>
                            {licensePlate?.errorCode === 0 ? (
                                <Button
                                    fullWidth={true}
                                    variant="text"
                                    color="primary"
                                    onClick={printPaper}
                                >
                                    In giấy hẹn
                                </Button>
                            ) : (
                                ""
                            )}
                        </Grid>
                    </Grid>
                </DialogActions>
            </Dialog>
            <Dialog open={openPaper} fullWidth={true} maxWidth="lg">
                <iframe
                    title="giay hen"
                    src={`data:application/pdf;base64,${pdfSrc}`}
                    width="100%"
                    height="800"
                    style={{ border: "none" }}
                ></iframe>
                <Button variant="contained" onClick={onClosePaper}>
                    Đóng
                </Button>
            </Dialog>
        </>
    );
};

export default ThongBaoBien;

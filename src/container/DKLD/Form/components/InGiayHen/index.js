import { Button, Dialog } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../../contexts/DataContext";

const InGiayHen = ({ openPaper, onClosePaper }) => {
    const { paper } = useContext(DataContext);
    const [pdfSrc, setPdfSrc] = useState("");

    useEffect(() => {
        if (paper) {
            setPdfSrc(paper.result?.base64pdf);
        }
    }, [paper]);

    return (
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
    );
};

export default InGiayHen;

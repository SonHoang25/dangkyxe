import { Button, Grid } from "@material-ui/core";
import React from "react";

const CustomToolbar = ({ rowSelect, hanldeOnClick }) => {
    return (
        <Grid
            container
            // spacing={3}
            justifyContent="flex-end"
            alignItems="flex-end"
        >
            <Grid item>
                <Button
                    variant="contained"
                    color="primary"
                    disabled={rowSelect}
                    onClick={hanldeOnClick}
                >
                    Hiệu chỉnh bổ sung
                </Button>
            </Grid>
        </Grid>
    );
};

export default CustomToolbar;

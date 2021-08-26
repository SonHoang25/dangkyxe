import { Grid } from "@material-ui/core";
import React from "react";
import DataTable from "./components/DataTable";
import SearchForm from "./components/SearchForm";
import useStyles from "./style";
import FullScreenDialog from "./components/FullScreenDialog";

const DaDangKy = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <SearchForm />
                </Grid>
                <Grid item xs={12}>
                    <DataTable />
                </Grid>
            </Grid>
            <FullScreenDialog />
        </div>
    );
};

export default DaDangKy;

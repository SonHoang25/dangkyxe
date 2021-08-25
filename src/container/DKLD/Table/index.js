import { Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { DataContext } from "../../../contexts/DataContext";
import DataTable from "./components/DataTable";
import SearchForm from "./components/SearchForm";
import useStyles from "./style";

const DaDangKy = () => {
    const classes = useStyles();
    const { tableData, tableList } = useContext(DataContext);

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <SearchForm tableList={tableList} />
                </Grid>
                <Grid item xs={12}>
                    <DataTable pageSize="5" tableData={tableData} />
                </Grid>
            </Grid>
        </div>
    );
};

export default DaDangKy;

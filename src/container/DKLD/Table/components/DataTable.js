import React, { useContext, useState } from "react";
import { DataGrid as MuiDataGrid } from "@material-ui/data-grid";
import { DataContext } from "../../../../contexts/DataContext";
import { Button, Grid, makeStyles, withStyles } from "@material-ui/core";

const columns = [
    {
        field: "idOtoDangKy",
        headerName: "STT",
        width: 120,
    },
    {
        field: "biensoDaydu",
        headerName: "Biển số",
        width: 150,
    },
    {
        field: "tenChuSoHuu",
        headerName: "Chủ sở hữu",
        width: 240,
    },
    {
        field: "soKhung",
        headerName: "Số khung",
        width: 180,
    },
    {
        field: "soMay1",
        headerName: "Số máy 1",
        width: 200,
    },
    {
        field: "soMay2",
        headerName: "Số máy 2",
        width: 200,
    },
    {
        field: "ngayDangKy",
        headerName: "Ngày đăng ký",
        width: 180,
    },
    {
        field: "dienGiaiTrangthaiDangky",
        headerName: "Trạng thái đăng ký",
        width: 200,
    },
    {
        field: "dienGiaiTrangthaiHoso",
        headerName: "Trạng thái hồ sơ",
        width: 200,
    },
];

const DataGrid = withStyles({
    columnHeader: {
        fontWeight: "bold",
    },
})(MuiDataGrid);

const CustomToolbar = ({ rowSelect }) => {
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
                >
                    Hiệu chỉnh bổ sung
                </Button>
            </Grid>
        </Grid>
    );
};

const useStyles = makeStyles({
    root: {
        "& .theme--01": {
            color: "#F20519",
            "&:hover": { backgroundColor: "rgba(63, 81, 181, 0.12)" },
        },
        "& .theme--02": {
            color: "#79179A",
            "&:hover": { backgroundColor: "rgba(63, 81, 181, 0.12)" },
        },
        "& .theme--06": {
            color: "blue",
            "&:hover": { backgroundColor: "rgba(63, 81, 181, 0.12)" },
        },
    },
});

const DataTable = () => {
    const classes = useStyles();
    const [pageSize, setPageSize] = useState(15);
    const [rowSelect, setRowSelect] = useState(true);

    //contexts
    const { tableAllData } = useContext(DataContext);

    return (
        <DataGrid
            className={classes.root}
            getRowId={(row) => row?.idOtoDangKy}
            rows={tableAllData.data ? tableAllData.data : []}
            rowCount={tableAllData.data ? tableAllData.data.length : 0}
            columns={columns}
            pageSize={pageSize}
            onPageSizeChange={(num) => {
                setPageSize(num);
            }}
            rowsPerPageOptions={[15, 25, 50]}
            rowHeight={40}
            headerHeight={39}
            columnBuffer={8}
            autoHeight
            autoPageSize
            getRowClassName={(params) => `theme--${params.row.trangthaiHoso}`}
            onRowClick={(onRowClick, e) => {
                setRowSelect(false);
                // console.log("onRowClick", onRowClick);
                // console.log("e", e);
            }}
            pagination
            components={{ Toolbar: CustomToolbar }}
            componentsProps={{ toolbar: { rowSelect } }}

            // paginationMode="server"
            // rowCount={tableAllData.currentTotalRecord}
            // pageSize={data.pageSize}
            // onPageChange={(data) => {
            //     updateData("page", data.page + 1);
            // }}
        />
    );
};

export default DataTable;

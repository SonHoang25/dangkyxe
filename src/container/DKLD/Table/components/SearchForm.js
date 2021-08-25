import { Button, Collapse, Grid } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../../../../components/InputField";
import { DataContext } from "../../../../contexts/DataContext";
import useStyles from "../style";
import InputAutocompleteChip from "./InputAutocompleteChip";

const SearchForm = ({ tableList }) => {
    const [showSearch, setShowSearch] = useState(false);
    const { getDataTable } = useContext(DataContext);

    const classes = useStyles();

    const defaultValue = {
        soKhung: "",
        soMay1: "",
        soMay2: "",
        trangThaiHoSo: null,
    };

    const resetValue = {
        soKhung: "",
        soMay1: "",
        soMay2: "",
        trangThaiHoSo: null,
    };
    const { handleSubmit, control, reset } = useForm({ defaultValue });

    useEffect(() => {
        if (!showSearch) {
            reset(resetValue);
        }
    }, [showSearch]);

    const onSubmit = (data) => {
        getDataTable(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3} direction="column">
                <Grid container item spacing={3}>
                    <Grid item xs={3}>
                        <InputField
                            name="bienSo"
                            control={control}
                            label="Biển số"
                            fullWidth={true}
                        />
                    </Grid>
                    <Grid container item alignItems="flex-end" spacing={3} xs>
                        <Grid item>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                            >
                                Tìm kiếm
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={() => setShowSearch(!showSearch)}
                                fullWidth
                            >
                                Tìm kiếm nâng cao
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item spacing={3} direction="column">
                <Collapse
                    timeout={222}
                    in={showSearch}
                    className={classes.collapse}
                >
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <InputField
                                name="soKhung"
                                control={control}
                                label="Số khung"
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <InputField
                                name="soMay1"
                                control={control}
                                label="Số máy 1"
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <InputField
                                name="soMay2"
                                control={control}
                                label="Số máy 2"
                                fullWidth={true}
                            />
                        </Grid>

                        <Grid item xs={3}>
                            <InputAutocompleteChip
                                name="trangThaiHoSo"
                                control={control}
                                label="Trạng thái hồ sơ"
                                tableList={tableList}
                            />
                        </Grid>
                        <Grid container item></Grid>
                    </Grid>
                </Collapse>
            </Grid>
        </form>
    );
};

export default SearchForm;

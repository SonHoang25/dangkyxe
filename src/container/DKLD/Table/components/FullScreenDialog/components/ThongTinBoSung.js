import { Grid } from "@material-ui/core";
import React from "react";
import Divider from "../../../../../../components/Divider";
import InputField from "../../../../../../components/InputField";

const ThongTinBoSung = ({ control }) => {
    return (
        <Grid item xs={9}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Divider>Thông tin bổ sung</Divider>
                </Grid>
                <Grid item xs={4}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <InputField
                                control={control}
                                name="canBoDangKy"
                                label="Cán bộ đăng ký"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <InputField
                                control={control}
                                name="canBoDangKy"
                                label="Cán bộ đăng ký"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <InputField
                                control={control}
                                name="canBoDangKy"
                                label="Cán bộ đăng ký"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
export default ThongTinBoSung;

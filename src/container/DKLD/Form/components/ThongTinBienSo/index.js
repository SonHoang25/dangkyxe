import { Grid } from "@material-ui/core";
import Divider from "../../../../../components/Divider";
import React, { useContext } from "react";
import InputAutocomplete from "../../../../../components/InputAutocomplete";
import InputCheckbox from "../../../../../components/InputCheckBox";
import { DataContext } from "../../../../../contexts/DataContext";

const ThongTinBienSo = ({
    control,
    quocGiaWatcher,
    laKhuKtdbWatcher,
    allInputDisabled,
}) => {
    const {
        khuKinhTeList,
        bienTheoTinhList,
        bienQuocGiaList,
        seriChuList,
        mauBienList,
    } = useContext(DataContext);

    return (
        <Grid item xs={3}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Divider>Thông tin biển số</Divider>
                </Grid>
                <Grid item xs={12}>
                    <InputCheckbox
                        control={control}
                        label="Khu kinh tế thương mại đặc biệt"
                        name="otoDangKy.laKhuKtdb"
                        color="primary"
                        disabled={
                            quocGiaWatcher?.label !== "Việt Nam" ||
                            allInputDisabled
                        }
                    />
                </Grid>
                {laKhuKtdbWatcher ? (
                    <Grid item xs={12}>
                        <InputAutocomplete
                            optionsData={khuKinhTeList}
                            name="otoDangKy.khuKtdbId"
                            label="Tên khu kinh tế"
                            control={control}
                            shouldUnregister={!laKhuKtdbWatcher}
                            disabled={
                                !(quocGiaWatcher?.label === "Việt Nam") ||
                                allInputDisabled
                            }
                            required
                        />
                    </Grid>
                ) : (
                    ""
                )}
                <Grid item xs={12}>
                    <InputAutocomplete
                        optionsData={bienTheoTinhList}
                        name="otoDangKy.dauBienTheoTinh"
                        label="Đầu biển theo tỉnh"
                        control={control}
                        required
                        disabled={allInputDisabled}
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputAutocomplete
                        optionsData={bienQuocGiaList}
                        name="otoDangKy.dauBienQuocGia"
                        label="Đầu biển quốc gia"
                        control={control}
                        required
                        disabled={allInputDisabled}
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputAutocomplete
                        optionsData={seriChuList}
                        name="otoDangKy.seriChu"
                        label="Seri chữ"
                        control={control}
                        required
                        disabled={allInputDisabled}
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputAutocomplete
                        optionsData={mauBienList}
                        name="otoDangKy.mauBien"
                        label="Màu biển"
                        control={control}
                        required
                        disabled={allInputDisabled}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ThongTinBienSo;

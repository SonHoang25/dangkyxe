import { Grid } from "@material-ui/core";
import Divider from "../../../../../components/Divider";
import React, { useContext } from "react";
import InputAutocomplete from "../../../../../components/InputAutocomplete";
import InputDate from "../../../../../components/InputDate";
import InputField from "../../../../../components/InputField";
import { DataContext } from "../../../../../contexts/DataContext";

const ThongTinChuSoHuu = ({
    control,
    quocGiaWatcher,
    thanhPhoWatcher,
    quanHuyenWatcher,
    allInputDisabled,
}) => {
    const {
        quocGiaList,
        tinhThanhList,
        noiCapList,
        quanHuyenList,
        phuongXaList,
    } = useContext(DataContext);

    return (
        <Grid container item spacing={3} name="otoChuSoHuu">
            <Grid item xs={12}>
                <Divider>Thông tin chủ sở hữu</Divider>
            </Grid>
            <Grid item xs={9}>
                <InputField
                    name="otoChuSoHuu.ten"
                    control={control}
                    inputProps={{
                        textTransform: "uppercase",
                        maxLength: "50",
                        style: {
                            textTransform: "uppercase",
                        },
                    }}
                    label="Chủ sở hữu"
                    updateString={(e, onChange) =>
                        onChange(e.target.value.toUpperCase())
                    }
                    required
                    disabled={allInputDisabled}
                />
            </Grid>
            <Grid item xs={3}>
                <InputDate
                    name="otoChuSoHuu.namSinh"
                    control={control}
                    label="Năm sinh"
                    format="yyyy"
                    views={["year"]}
                    maxDate={new Date()}
                    required
                    disabled={allInputDisabled}
                />
            </Grid>
            <Grid item xs={3}>
                <InputAutocomplete
                    name="otoChuSoHuu.quocgiaId"
                    optionsData={quocGiaList}
                    label="Quốc gia"
                    control={control}
                    required
                    disabled={allInputDisabled}
                />
            </Grid>
            <Grid item xs={3}>
                <InputAutocomplete
                    name="thanhPho"
                    optionsData={tinhThanhList}
                    label="Tỉnh/Thành phố"
                    control={control}
                    disabled={Boolean(!quocGiaWatcher) || allInputDisabled}
                    required={Boolean(quocGiaWatcher)}
                />
            </Grid>
            <Grid item xs={3}>
                <InputAutocomplete
                    name="quanHuyen"
                    label="Quận/Huyện"
                    optionsData={quanHuyenList}
                    control={control}
                    disabled={Boolean(!thanhPhoWatcher) || allInputDisabled}
                    required={Boolean(thanhPhoWatcher)}
                />
            </Grid>
            <Grid item xs={3}>
                <InputAutocomplete
                    name="phuongXa"
                    label="Phường/Xã"
                    optionsData={phuongXaList}
                    control={control}
                    disabled={Boolean(!quanHuyenWatcher) || allInputDisabled}
                    required={Boolean(quanHuyenWatcher)}
                />
            </Grid>

            <Grid item xs={12}>
                <InputField
                    name="otoChuSoHuu.diaChi"
                    control={control}
                    inputProps={{ maxLength: "200" }}
                    label="Địa chỉ"
                    required
                    disabled={allInputDisabled}
                />
            </Grid>

            <Grid item xs={3}>
                <InputField
                    name="otoChuSoHuu.idSo"
                    control={control}
                    inputProps={{
                        maxLength: "15",
                        style: {
                            textTransform: "uppercase",
                        },
                    }}
                    label="Số CCCD/CMND/Hộ chiếu của chủ xe"
                    updateString={(e, onChange) =>
                        onChange(e.target.value.replace(/[^A-Za-z0-9]+/g, ""))
                    }
                    required
                    disabled={allInputDisabled}
                />
            </Grid>
            <Grid item xs={3}>
                <InputDate
                    name="otoChuSoHuu.idNgayCap"
                    control={control}
                    label="Cấp ngày"
                    format="dd/MM/yyyy"
                    maxDate={new Date()}
                    required
                    disabled={allInputDisabled}
                />
            </Grid>
            <Grid item xs={3}>
                <InputAutocomplete
                    optionsData={noiCapList}
                    name="otoChuSoHuu.idNoiCap"
                    label="Nơi cấp"
                    control={control}
                    required
                    disabled={allInputDisabled}
                />
            </Grid>
            <Grid item xs={3}>
                <InputField
                    name="otoChuSoHuu.soDienThoai"
                    control={control}
                    inputProps={{ maxLength: "13" }}
                    label="Số điện thoại của chủ xe"
                    updateString={(e, onChange) =>
                        onChange(e.target.value.replace(/[^\d]/, ""))
                    }
                    required
                    disabled={allInputDisabled}
                />
            </Grid>

            <Grid item xs={3}>
                <InputField
                    name="nguoiLamThuTuc.idSo"
                    control={control}
                    inputProps={{
                        maxLength: "15",
                        style: {
                            textTransform: "uppercase",
                        },
                    }}
                    label="Số CCCD/CMND/Hộ chiếu của NLTT"
                    updateString={(e, onChange) =>
                        onChange(e.target.value.replace(/[^A-Za-z0-9]+/g, ""))
                    }
                    required
                    disabled={allInputDisabled}
                />
            </Grid>
            <Grid item xs={3}>
                <InputDate
                    name="nguoiLamThuTuc.idNgayCap"
                    control={control}
                    label="Cấp ngày"
                    format="dd/MM/yyyy"
                    disableFuture="true"
                    maxDate={new Date()}
                    required
                    disabled={allInputDisabled}
                />
            </Grid>
            <Grid item xs={3}>
                <InputAutocomplete
                    optionsData={noiCapList}
                    name="nguoiLamThuTuc.idNoiCap"
                    label="Nơi cấp"
                    control={control}
                    disabled={allInputDisabled}
                />
            </Grid>
            <Grid item xs={3}>
                <InputField
                    name="nguoiLamThuTuc.soDienThoai"
                    control={control}
                    inputProps={{ maxLength: "13" }}
                    label="Số điện thoại của NLTT"
                    updateString={(e, onChange) =>
                        onChange(e.target.value.replace(/[^\d]/, ""))
                    }
                    required
                    disabled={allInputDisabled}
                />
            </Grid>
        </Grid>
    );
};

export default ThongTinChuSoHuu;

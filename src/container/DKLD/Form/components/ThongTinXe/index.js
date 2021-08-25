import { Grid } from "@material-ui/core";
import Divider from "../../../../../components/Divider";
import React, { useContext } from "react";
import InputAutocomplete from "../../../../../components/InputAutocomplete";
import InputDate from "../../../../../components/InputDate";
import InputField from "../../../../../components/InputField";
import { DataContext } from "../../../../../contexts/DataContext";

const ThongTinXe = ({
    control,
    disableInput,
    loaiXeWatcher,
    allInputDisabled,
}) => {
    const { loaiXeList, nhanHieuList, coQuanCapLptbList, coQuanCapKtclxxList } =
        useContext(DataContext);

    return (
        <Grid item xs={9}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Divider>Thông tin xe</Divider>
                </Grid>
                <Grid item xs={4}>
                    <InputField
                        name="giayToLienQuan.maHoSoKhaiLptb"
                        control={control}
                        inputProps={{ maxLength: "20" }}
                        label="Mã hồ sơ khai LPTB"
                        required
                        disabled={allInputDisabled}
                    />
                </Grid>
                <Grid item xs={8}>
                    <InputAutocomplete
                        optionsData={coQuanCapLptbList}
                        name="giayToLienQuan.coQuanCapLptb"
                        label="Cơ quan cấp"
                        control={control}
                        required
                        disabled={allInputDisabled}
                    />
                </Grid>

                <Grid item xs={4}>
                    <InputField
                        name="giayToLienQuan.soSeriPhieuKtclxx"
                        control={control}
                        inputProps={{ maxLength: "20" }}
                        label="Số Seri phiếu KTCLXX"
                        required
                        disabled={allInputDisabled}
                    />
                </Grid>
                <Grid item xs={8}>
                    <InputAutocomplete
                        optionsData={coQuanCapKtclxxList}
                        name="giayToLienQuan.coQuanCapKtclxx"
                        label="Cơ quan cấp"
                        control={control}
                        required
                        disabled={allInputDisabled}
                    />
                </Grid>

                <Grid item xs={4}>
                    <InputAutocomplete
                        optionsData={loaiXeList}
                        name="oto.maLoaiXeId"
                        label="Loại xe"
                        control={control}
                        required
                        disabled={allInputDisabled}
                    />
                </Grid>
                <Grid item xs={4}>
                    <InputAutocomplete
                        optionsData={nhanHieuList}
                        name="oto.nhanhieuLoaixeId"
                        label="Nhãn hiệu"
                        control={control}
                        required
                        disabled={allInputDisabled}
                    />
                </Grid>
                <Grid item xs={4}>
                    <InputField
                        name="oto.soKhung"
                        control={control}
                        inputProps={{
                            maxLength: "25",
                            style: {
                                textTransform: "uppercase",
                            },
                        }}
                        label="Số khung"
                        updateString={(e, onChange) =>
                            onChange(
                                e.target.value.replace(/[^A-Za-z0-9]+/g, "")
                            )
                        }
                        required
                        disabled={allInputDisabled}
                    />
                </Grid>

                <Grid item xs={4}>
                    <InputField
                        name="oto.soMay"
                        control={control}
                        inputProps={{
                            maxLength: "25",
                            style: {
                                textTransform: "uppercase",
                            },
                        }}
                        label="Số máy 1"
                        disabled={disableInput || allInputDisabled}
                        required={
                            !loaiXeWatcher?.label
                                .toLowerCase()
                                .includes("rơ moóc")
                        }
                    />
                </Grid>
                <Grid item xs={4}>
                    <InputField
                        name="oto.soLoai"
                        control={control}
                        inputProps={{
                            maxLength: "18",
                            style: {
                                textTransform: "uppercase",
                            },
                        }}
                        label="Số loại"
                        updateString={(e, onChange) =>
                            onChange(
                                e.target.value.replace(/[^A-Za-z0-9]+/g, "")
                            )
                        }
                        required
                        disabled={allInputDisabled}
                    />
                </Grid>
                <Grid item xs={4}>
                    <InputDate
                        name="otoDangKy.ngayDangky"
                        control={control}
                        label="Ngày đăng ký"
                        format="dd/MM/yyyy"
                        disableFuture="true"
                        maxDate={new Date()}
                        readOnly={true}
                        required
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ThongTinXe;

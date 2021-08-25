import React, { useContext, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Grid, TextField } from "@material-ui/core";
import DialogTitle from "../../../../../components/DialogTitle";
import { DataContext } from "../../../../../contexts/DataContext";
import { Controller, useForm } from "react-hook-form";
import { Autocomplete } from "@material-ui/lab";
import { merge } from "lodash";

const nhanDangKy = [
    { value: 1, label: "Nhận tại điểm đăng ký" },
    { value: 2, label: "Second" },
    { value: 3, label: "Third" },
];

const XacNhanDkld = ({
    openConfirm,
    dataConfirm,
    onClose,
    dataSend,
    onOpenPlate,
}) => {
    const { control, handleSubmit } = useForm();
    const { rpConfirm, submitLicensePlate } = useContext(DataContext);

    useEffect(() => {
        if (rpConfirm?.errorCode === 1) {
            alert(rpConfirm?.errors.Error);
        }
    }, [rpConfirm]);

    const licensePlate = () => {
        if (dataSend) {
            merge(dataSend, {
                otoDangKy: { phuongThucNhanDangKy: "01" },
            });
            submitLicensePlate(dataSend);
        }
        onOpenPlate();
    };

    return (
        <>
            <Dialog
                fullWidth={true}
                open={openConfirm}
                onClose={(reason) => onClose}
                maxWidth="md"
            >
                <form onSubmit={handleSubmit(licensePlate)}>
                    <DialogTitle onClose={onClose}>
                        Đề nghị chủ xe kiểm tra lại thông tin nếu đúng thì bấm
                        cấp biển
                    </DialogTitle>
                    {dataConfirm && (
                        <DialogContent>
                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={4}>
                                            Chủ sở hữu:
                                        </Grid>
                                        <Grid item xs={8}>
                                            <span
                                                style={{
                                                    textTransform: "uppercase",
                                                }}
                                            >
                                                <b>
                                                    {dataSend.otoChuSoHuu?.ten}
                                                </b>
                                            </span>
                                        </Grid>
                                        <Grid item xs={4}>
                                            Quốc gia:
                                        </Grid>
                                        <Grid item xs={8}>
                                            <span
                                                style={{
                                                    textTransform: "uppercase",
                                                }}
                                            >
                                                <b>{dataConfirm?.quocgiaId}</b>
                                            </span>
                                        </Grid>
                                        <Grid item xs={4}>
                                            Số điện thoại:
                                        </Grid>
                                        <Grid item xs={8}>
                                            <span
                                                style={{
                                                    textTransform: "uppercase",
                                                }}
                                            >
                                                <b>
                                                    {
                                                        dataSend.otoChuSoHuu
                                                            ?.soDienThoai
                                                    }
                                                </b>
                                            </span>
                                        </Grid>
                                        <Grid item xs={4}>
                                            Địa chỉ:
                                        </Grid>
                                        <Grid item xs={8}>
                                            <span>
                                                <b>
                                                    {
                                                        dataSend.otoChuSoHuu
                                                            ?.diaChi
                                                    }
                                                </b>
                                            </span>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={4}>
                                            Loại xe:
                                        </Grid>
                                        <Grid item xs={8}>
                                            <span
                                                style={{
                                                    textTransform: "uppercase",
                                                }}
                                            >
                                                <b>{dataConfirm?.maLoaiXeId}</b>
                                            </span>
                                        </Grid>
                                        <Grid item xs={4}>
                                            Nhãn hiệu:
                                        </Grid>
                                        <Grid item xs={8}>
                                            <span
                                                style={{
                                                    textTransform: "uppercase",
                                                }}
                                            >
                                                <b>
                                                    {
                                                        dataConfirm?.nhanhieuLoaixeId
                                                    }
                                                </b>
                                            </span>
                                        </Grid>
                                        <Grid item xs={4}>
                                            Số loại:
                                        </Grid>
                                        <Grid item xs={8}>
                                            <span
                                                style={{
                                                    textTransform: "uppercase",
                                                }}
                                            >
                                                <b>{dataSend.oto?.soLoai}</b>
                                            </span>
                                        </Grid>
                                        <Grid item xs={4}>
                                            Số máy:
                                        </Grid>
                                        <Grid item xs={8}>
                                            <span
                                                style={{
                                                    textTransform: "uppercase",
                                                }}
                                            >
                                                <b>{dataSend.oto?.soMay}</b>
                                            </span>
                                        </Grid>
                                        <Grid item xs={4}>
                                            Số khung:
                                        </Grid>
                                        <Grid item xs={8}>
                                            <span
                                                style={{
                                                    textTransform: "uppercase",
                                                }}
                                            >
                                                <b>{dataSend.oto?.soKhung}</b>
                                            </span>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                spacing={3}
                                alignContent="center"
                                alignItems="center"
                            >
                                <Grid
                                    container
                                    item
                                    xs={6}
                                    justifyContent="flex-end"
                                >
                                    <Grid item>Chọn phương thức nhận ĐK:</Grid>
                                </Grid>
                                <Grid container item xs={4}>
                                    <Controller
                                        render={({ field }) => (
                                            <Autocomplete
                                                {...field}
                                                fullWidth={true}
                                                options={nhanDangKy}
                                                defaultValue={nhanDangKy[0]}
                                                getOptionLabel={(option) =>
                                                    option.label
                                                        ? option.label
                                                        : ""
                                                }
                                                getOptionSelected={(
                                                    selectedOption,
                                                    currentOption
                                                ) =>
                                                    selectedOption?.value ===
                                                    currentOption?.value
                                                }
                                                renderInput={(params) => (
                                                    <TextField {...params} />
                                                )}
                                            />
                                        )}
                                        name="phuongThucNhanDangKy"
                                        control={control}
                                    />
                                </Grid>
                            </Grid>
                            <br />
                            <Grid style={{ color: "red" }}>
                                Nếu có sai sót vui lòng báo lại cán bộ đăng ký
                            </Grid>
                            <Grid style={{ color: "red" }}>
                                Thông tin số máy số khung là không thể thay đổi
                            </Grid>
                        </DialogContent>
                    )}
                    <DialogActions>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item xs={3}>
                                <Button
                                    fullWidth={true}
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    onClick={onClose}
                                >
                                    Cấp biển
                                </Button>
                            </Grid>
                        </Grid>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
};
export default XacNhanDkld;

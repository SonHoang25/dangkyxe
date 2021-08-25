import { Button, Grid, makeStyles } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import Divider from "../component/Divider";
import InputDate from "../component/InputDate";
import InputField from "../component/InputField";
import { useForm, FormProvider } from "react-hook-form";
import InputCheckbox from "../component/InputCheckBox";
import { DataContext } from "../contexts/DataContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { yupValidate } from "../Yup";
import InputAutocomplete from "../component/InputAutocomplete";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2, 0),
    },
    button: {
        transition:
            "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        color: "#1F62B0",
        textTransform: "none",
        letterSpacing: "0.02857em",
        fontWeight: "500",
        "&:hover": {
            textDecoration: "none",
            backgroundColor: "rgba(31, 98, 176, 0.04)",
        },
    },
}));

const FormDangKyLanDau = () => {
    const [disableInput, setdDisableInput] = useState(true);

    //loadContext
    const {
        quocGiaList,
        tinhThanhList,
        noiCapList,
        quanHuyenList,
        phuongXaList,
        getTinhThanh,
        getQuanHuyen,
        getPhuongXa,
        getBienQuocGia,
        getBienTheoTinh,
        getSeriChu,
        getMauBien,
        loaiXeList,
        nhanHieuList,
        khuKinhTeList,
        bienTheoTinhList,
        bienQuocGiaList,
        seriChuList,
        mauBienList,
        coQuanCapLPTB,
        coQuanCapKTCLXX,
    } = useContext(DataContext);

    const defaultValues = {
        quocgiaId: null,
        thanhPho: null,
        quanHuyen: null,
        phuongXa: null,
        namSinh: null,
        diaChi: "",
        cccdChuXeCapNgay: null,
        cccdChuXeNoiCap: null,
        sdtChuXe: "",
        cccdNltt: "",
        cccdNlttCapNgay: null,
        cccdNlttNoiCap: null,
        sdtNltt: "",
        khaiLPTB: "",
        coQuanCapLPTB: null,
        seriKTCLXX: "",
        coQuanCapKTCLXX: null,
        loaiXe: null,
        nhanHieu: null,
        soKhung: "",
        soMay1: "",
        soLoai: "",
        ngayDangKy: new Date(),
        khuKinhTe: "",
        bienTheoTinh: null,
        bienQuocGia: null,
        seriChu: null,
        mauBien: null,
        kttCheck: false,
    };
    const resetValue = {
        quocgiaId: quocGiaList[0],
        thanhPho: null,
        quanHuyen: null,
        phuongXa: null,
        namSinh: null,
        diaChi: "",
        cccdChuXeCapNgay: null,
        cccdChuXeNoiCap: null,
        sdtChuXe: "",
        cccdNltt: "",
        cccdNlttCapNgay: null,
        cccdNlttNoiCap: null,
        sdtNltt: "",
        khaiLPTB: "",
        coQuanCapLPTB: coQuanCapLPTB[0],
        seriKTCLXX: "",
        coQuanCapKTCLXX: coQuanCapKTCLXX[0],
        loaiXe: null,
        nhanHieu: null,
        soKhung: "",
        soMay1: "",
        soLoai: "",
        ngayDangKy: new Date(),
        khuKinhTe: "",
        bienTheoTinh: null,
        bienQuocGia: bienQuocGiaList[0],
        seriChu: null,
        mauBien: null,
        kttCheck: false,
    };

    const {
        handleSubmit,
        control,
        watch,
        setValue,
        unregister,
        clearErrors,
        reset,
        methods,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
        reValidateMode: "onChange",
        shouldFocusError: true,
        resolver: yupResolver(yupValidate),
        defaultValues,
    });

    const classes = useStyles();

    console.log(watch());

    const quocGiaWatcher = watch("quocGia");
    const thanhPhoWatcher = watch("thanhPho");
    const quanHuyenWatcher = watch("quanHuyen");
    const phuongXaWatcher = watch("phuongXa");

    const loaiXeWatcher = watch("loaiXe");
    const khuKinhTeWatcher = watch("khuKinhTe");
    const seriChuWatcher = watch("seriChu");
    const kttCheckWatcher = watch("kttCheck");

    useEffect(() => {
        !kttCheckWatcher && unregister("khuKinhTe");
    }, [kttCheckWatcher]);

    console.log(kttCheckWatcher);
    useEffect(() => {
        if (quocGiaWatcher) {
            let quocGiaId;
            if (quocGiaWatcher.label === "Việt Nam") {
                quocGiaId = 1;
                if (khuKinhTeWatcher?.label === "Lao Bảo") {
                    getSeriChu(
                        quocGiaId,
                        `khuKtDbId=${khuKinhTeWatcher.value}`
                    );
                } else if (loaiXeWatcher) {
                    getSeriChu(quocGiaId, `maLoai=${loaiXeWatcher.value}`);
                }
            } else {
                quocGiaId = 2;
                getSeriChu(quocGiaId, `maLoai=${loaiXeWatcher?.value}`);
            }
        }
    }, [quocGiaWatcher, loaiXeWatcher, khuKinhTeWatcher]);

    useEffect(() => {
        if (quocGiaList.length) {
            setValue("quocGia", quocGiaList[0]);
        }
    }, [quocGiaList]);

    useEffect(() => {
        if (quocGiaWatcher) {
            bienQuocGiaList?.length > 0 &&
                setValue("bienQuocGia", bienQuocGiaList[0]);
        }
    }, [quocGiaWatcher, bienQuocGiaList]);

    useEffect(() => {
        if (bienQuocGiaList.length) {
            setValue("bienQuocGia", bienQuocGiaList[0]);
        }
    }, [bienQuocGiaList]);

    useEffect(() => {
        if (bienTheoTinhList.length) {
            setValue("bienTheoTinh", bienTheoTinhList[0]);
        }
    }, [bienTheoTinhList]);

    useEffect(() => {
        if (coQuanCapLPTB.length) {
            setValue("coQuanCapLPTB", coQuanCapLPTB[0]);
        }
    }, [coQuanCapLPTB]);

    useEffect(() => {
        if (coQuanCapKTCLXX.length) {
            setValue("coQuanCapKTCLXX", coQuanCapKTCLXX[0]);
        }
    }, [coQuanCapKTCLXX]);

    useEffect(() => {
        if (khuKinhTeWatcher?.label === "Lao Bảo") {
            setValue("seriChu", seriChuList[0]);
        } else {
            setValue("mauBien", null);
            setValue("seriChu", null);
        }
    }, [khuKinhTeWatcher, seriChuList]);

    useEffect(() => {
        if (kttCheckWatcher) {
            setValue("khuKinhTe", khuKinhTeList[0]);
        } else {
            setValue("seriChu", null);
            setValue("khuKinhTe", null);
            clearErrors("khuKinhTe");
        }
    }, [kttCheckWatcher]);

    useEffect(() => {
        if (quocGiaWatcher) {
            getTinhThanh(quocGiaWatcher.value);
            getBienQuocGia(quocGiaWatcher.value);
        }
        setValue("khuKinhTe", null);
        setValue("thanhPho", null);
        setValue("bienQuocGia", null);
    }, [quocGiaWatcher]);

    useEffect(() => {
        if (thanhPhoWatcher) {
            getQuanHuyen(thanhPhoWatcher.value);
            getBienTheoTinh(thanhPhoWatcher.code);
        }
        setValue("quanHuyen", null);
        setValue("bienTheoTinh", null);
    }, [thanhPhoWatcher]);

    useEffect(() => {
        if (quanHuyenWatcher) {
            getPhuongXa(quanHuyenWatcher.value);
        }
        setValue("phuongXa", null);
    }, [quanHuyenWatcher]);

    useEffect(() => {
        if (phuongXaWatcher) {
            setValue(
                "diaChi",
                phuongXaWatcher.label +
                    ", " +
                    quanHuyenWatcher.label +
                    ", " +
                    thanhPhoWatcher.label +
                    ", " +
                    quocGiaWatcher.label
            );
        } else {
            setValue("diaChi", "");
        }
    }, [phuongXaWatcher]);

    useEffect(() => {
        if (loaiXeWatcher?.type.toLowerCase().includes("rơ moóc")) {
            setdDisableInput(true);
            clearErrors("soMay1");
            console.log("objectobjectobjectobjectobject");
        } else {
            setdDisableInput(false);
        }
    }, [loaiXeWatcher]);

    useEffect(() => {
        if (loaiXeWatcher && seriChuWatcher) {
            getMauBien(loaiXeWatcher.value, seriChuWatcher.value);
        }
    }, [loaiXeWatcher, seriChuWatcher]);

    useEffect(() => {
        if (mauBienList.length) {
            setValue("mauBien", mauBienList[0]);
        }
    }, [mauBienList]);

    const onSubmit = (data) => {
        console.log(data);
    };

    console.log(errors);

    return (
        <div className={classes.root}>
            <Grid container spacing={1} justifyContent="flex-end">
                <Grid item>
                    <Button className={classes.button}>Tra cứu dữ liệu</Button>
                </Grid>
            </Grid>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={3}>
                        <Grid container item spacing={3}>
                            <Grid item xs={12}>
                                <Divider>Thông tin chủ sở hữu</Divider>
                            </Grid>
                            <Grid item xs={9}>
                                <InputField
                                    name="chuSoHuu"
                                    control={control}
                                    materialUiProps={{
                                        inputProps: {
                                            textTransform: "uppercase",
                                            maxLength: "50",
                                            style: {
                                                textTransform: "uppercase",
                                            },
                                        },
                                        label: "Chủ sở hữu",
                                    }}
                                    updateString={(e, onChange) =>
                                        onChange(e.target.value.toUpperCase())
                                    }
                                    required
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <InputDate
                                    name="namSinh"
                                    control={control}
                                    materialUiProps={{
                                        label: "Năm sinh",
                                        views: ["year"],
                                        format: "yyyy",
                                        maxDate: new Date(),
                                    }}
                                    required
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <InputAutocomplete
                                    name="quocgiaId"
                                    optionsData={quocGiaList}
                                    label="Quốc gia"
                                    control={control}
                                    required
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <InputAutocomplete
                                    name="thanhPho"
                                    optionsData={tinhThanhList}
                                    label="Tỉnh/Thành phố"
                                    control={control}
                                    disabled={Boolean(!quocGiaWatcher)}
                                    required={Boolean(quocGiaWatcher)}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <InputAutocomplete
                                    name="quanHuyen"
                                    label="Quận/Huyện"
                                    optionsData={quanHuyenList}
                                    control={control}
                                    disabled={Boolean(!thanhPhoWatcher)}
                                    required={Boolean(thanhPhoWatcher)}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <InputAutocomplete
                                    name="phuongXa"
                                    label="Phường/Xã"
                                    optionsData={phuongXaList}
                                    control={control}
                                    disabled={Boolean(!quanHuyenWatcher)}
                                    required={Boolean(quanHuyenWatcher)}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <InputField
                                    name="diaChi"
                                    control={control}
                                    materialUiProps={{
                                        inputProps: { maxLength: "200" },
                                        label: "Địa chỉ",
                                    }}
                                    required
                                />
                            </Grid>

                            <Grid item xs={3}>
                                <InputField
                                    name="cccdChuXe"
                                    control={control}
                                    materialUiProps={{
                                        inputProps: {
                                            maxLength: "15",
                                            style: {
                                                textTransform: "uppercase",
                                            },
                                        },
                                        label: "Số CCCD/CMND/Hộ chiếu của chủ xe",
                                    }}
                                    updateString={(e, onChange) =>
                                        onChange(
                                            e.target.value.replace(
                                                /[^A-Za-z0-9]+/g,
                                                ""
                                            )
                                        )
                                    }
                                    required
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <InputDate
                                    name="cccdChuXeCapNgay"
                                    control={control}
                                    materialUiProps={{
                                        label: "Cấp ngày",
                                        format: "dd/MM/yyyy",
                                        disableFuture: "true",
                                        maxDate: new Date(),
                                    }}
                                    required
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <InputAutocomplete
                                    optionsData={noiCapList}
                                    name="cccdChuXeNoiCap"
                                    label="Nơi cấp"
                                    control={control}
                                    required
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <InputField
                                    name="sdtChuXe"
                                    control={control}
                                    materialUiProps={{
                                        inputProps: { maxLength: "13" },
                                        label: "Số điện thoại của chủ xe",
                                    }}
                                    updateString={(e, onChange) =>
                                        onChange(
                                            e.target.value.replace(/[^\d]/, "")
                                        )
                                    }
                                    required
                                />
                            </Grid>

                            <Grid item xs={3}>
                                <InputField
                                    name="cccdNltt"
                                    control={control}
                                    materialUiProps={{
                                        inputProps: {
                                            maxLength: "15",
                                            style: {
                                                textTransform: "uppercase",
                                            },
                                        },
                                        label: "Số CCCD/CMND/Hộ chiếu của NLTT",
                                    }}
                                    updateString={(e, onChange) =>
                                        onChange(
                                            e.target.value.replace(
                                                /[^A-Za-z0-9]+/g,
                                                ""
                                            )
                                        )
                                    }
                                    required
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <InputDate
                                    name="cccdNlttCapNgay"
                                    control={control}
                                    materialUiProps={{
                                        label: "Cấp ngày",
                                        format: "dd/MM/yyyy",
                                        disableFuture: "true",
                                        maxDate: new Date(),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <InputAutocomplete
                                    optionsData={noiCapList}
                                    name="cccdNlttNoiCap"
                                    label="Nơi cấp"
                                    control={control}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <InputField
                                    name="sdtNltt"
                                    control={control}
                                    materialUiProps={{
                                        inputProps: { maxLength: "13" },
                                        label: "Số điện thoại của NLTT",
                                    }}
                                    updateString={(e, onChange) =>
                                        onChange(
                                            e.target.value.replace(/[^\d]/, "")
                                        )
                                    }
                                    required
                                />
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item xs={9}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <Divider>Thông tin xe</Divider>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <InputField
                                            name="khaiLPTB"
                                            control={control}
                                            materialUiProps={{
                                                inputProps: { maxLength: "20" },
                                                label: "Mã hồ sơ khai LPTB",
                                            }}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <InputAutocomplete
                                            optionsData={coQuanCapLPTB}
                                            name="coQuanCapLPTB"
                                            label="Cơ quan cấp"
                                            control={control}
                                            required
                                        />
                                    </Grid>

                                    <Grid item xs={4}>
                                        <InputField
                                            name="seriKTCLXX"
                                            control={control}
                                            materialUiProps={{
                                                inputProps: { maxLength: "20" },
                                                label: "Số Seri phiếu KTCLXX",
                                            }}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <InputAutocomplete
                                            optionsData={coQuanCapKTCLXX}
                                            name="coQuanCapKTCLXX"
                                            label="Cơ quan cấp"
                                            control={control}
                                            required
                                        />
                                    </Grid>

                                    <Grid item xs={4}>
                                        <InputAutocomplete
                                            optionsData={loaiXeList}
                                            name="loaiXe"
                                            label="Loại xe"
                                            control={control}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <InputAutocomplete
                                            optionsData={nhanHieuList}
                                            name="nhanHieu"
                                            label="Nhãn hiệu"
                                            control={control}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <InputField
                                            name="soKhung"
                                            control={control}
                                            materialUiProps={{
                                                inputProps: {
                                                    maxLength: "25",
                                                    style: {
                                                        textTransform:
                                                            "uppercase",
                                                    },
                                                },
                                                label: "Số khung",
                                            }}
                                            updateString={(e, onChange) =>
                                                onChange(
                                                    e.target.value.replace(
                                                        /[^A-Za-z0-9]+/g,
                                                        ""
                                                    )
                                                )
                                            }
                                            required
                                        />
                                    </Grid>

                                    <Grid item xs={4}>
                                        <InputField
                                            name="soMay1"
                                            control={control}
                                            materialUiProps={{
                                                inputProps: {
                                                    maxLength: "25",
                                                    style: {
                                                        textTransform:
                                                            "uppercase",
                                                    },
                                                },
                                                label: "Số máy 1",
                                            }}
                                            disabled={disableInput}
                                            updateString={(e, onChange) =>
                                                onChange(
                                                    e.target.value.replace(
                                                        /[^A-Za-z0-9]+/g,
                                                        ""
                                                    )
                                                )
                                            }
                                            required={
                                                !loaiXeWatcher?.label
                                                    .toLowerCase()
                                                    .includes("rơ moóc")
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <InputField
                                            name="soLoai"
                                            control={control}
                                            materialUiProps={{
                                                inputProps: {
                                                    maxLength: "18",
                                                    style: {
                                                        textTransform:
                                                            "uppercase",
                                                    },
                                                },
                                                label: "Số loại",
                                            }}
                                            updateString={(e, onChange) =>
                                                onChange(
                                                    e.target.value.replace(
                                                        /[^A-Za-z0-9]+/g,
                                                        ""
                                                    )
                                                )
                                            }
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <InputDate
                                            name="ngayDangKy"
                                            control={control}
                                            materialUiProps={{
                                                label: "Cấp ngày",
                                                format: "dd/MM/yyyy",
                                                disableFuture: "true",
                                                maxDate: new Date(),
                                            }}
                                            required
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={3}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <Divider>Thông tin biển số</Divider>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <InputCheckbox
                                            control={control}
                                            label="Khu kinh tế thương mại đặc biệt"
                                            name="kttCheck"
                                            color="primary"
                                            disabled={
                                                quocGiaWatcher?.label !==
                                                "Việt Nam"
                                            }
                                        />
                                    </Grid>
                                    {kttCheckWatcher ? (
                                        <Grid item xs={12}>
                                            <InputAutocomplete
                                                optionsData={khuKinhTeList}
                                                name="khuKinhTe"
                                                label="Tên khu kinh tế"
                                                control={control}
                                                shouldUnregister={
                                                    !kttCheckWatcher
                                                }
                                                disabled={
                                                    !(
                                                        quocGiaWatcher?.label ===
                                                        "Việt Nam"
                                                    )
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
                                            name="bienTheoTinh"
                                            label="Đầu biển theo tỉnh"
                                            control={control}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <InputAutocomplete
                                            optionsData={bienQuocGiaList}
                                            name="bienQuocGia"
                                            label="Đầu biển quốc gia"
                                            control={control}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <InputAutocomplete
                                            optionsData={seriChuList}
                                            name="seriChu"
                                            label="Seri chữ"
                                            control={control}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <InputAutocomplete
                                            optionsData={mauBienList}
                                            name="mauBien"
                                            label="Màu biển"
                                            control={control}
                                            required
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid
                                container
                                item
                                justifyContent="center"
                                spacing={3}
                            >
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                    >
                                        Cấp biển
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        type="reset"
                                        variant="outlined"
                                        onClick={() => {
                                            reset(resetValue);
                                        }}
                                    >
                                        Làm mới
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </FormProvider>
        </div>
    );
};

export default FormDangKyLanDau;

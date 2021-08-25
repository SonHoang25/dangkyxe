import { Button, Grid } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { DataContext } from "../../../contexts/DataContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { yupValidate } from "../../../Yup";
import ThongTinChuSoHuu from "./components/ThongTinChuSoHuu";
import ThongTinXe from "./components/ThongTinXe";
import ThongTinBienSo from "./components/ThongTinBienSo";
import XacNhanDkld from "./components/XacNhanDkld";
import { format } from "date-fns";
import ThongBaoBien from "./components/ThongBaoBien";
import _ from "lodash";
import useStyles from "./style";

export const transformValues = (values) => {
    for (const property in values) {
        for (const propertyNested in values[property]) {
            if (_.isPlainObject(values[property][propertyNested])) {
                values[property][propertyNested] = [
                    "dauBienTheoTinh",
                    "dauBienQuocGia",
                    "seriChu",
                ].find((key) => key === propertyNested)
                    ? values[property][propertyNested].label
                    : values[property][propertyNested].value;
            } else if (_.isDate(values[property][propertyNested])) {
                values[property][propertyNested] = ["namSinh"].find(
                    (key) => key === propertyNested
                )
                    ? format(values[property][propertyNested], "yyyy")
                    : format(values[property][propertyNested], "yyyy-MM-dd");
            } else if (_.isBoolean(values[property][propertyNested])) {
                values[property][propertyNested]
                    ? (values[property][propertyNested] = 1)
                    : (values[property][propertyNested] = 0);
            }
        }
    }
    return;
};

const FormDangKyLanDau = () => {
    const [disableInput, setdDisableInput] = useState(true);

    const [dataConfirm, setDataConfirm] = useState({});
    const [openPlate, setOpenPlate] = useState(false);
    const [openConfirm, setOpenConfirm] = useState(false);
    const [openPaper, setOpenPaper] = useState(false);

    const [dataSend, setDataSend] = useState({});

    const [allInputDisabled, setAllInputDisabled] = useState(false);

    //loadContext
    const {
        quocGiaList,
        getTinhThanh,
        getQuanHuyen,
        getPhuongXa,
        getBienQuocGia,
        getBienTheoTinh,
        getSeriChu,
        getMauBien,
        khuKinhTeList,
        bienTheoTinhList,
        bienQuocGiaList,
        seriChuList,
        mauBienList,
        coQuanCapLptbList,
        coQuanCapKtclxxList,
        submitConfirm,
        licensePlate,
    } = useContext(DataContext);
    //loadContext

    useEffect(() => {
        if (licensePlate?.errorCode === 0) {
            setAllInputDisabled(true);
        }
    }, [licensePlate]);

    const defaultValues = {
        otoChuSoHuu: {
            ten: "",
            namSinh: null,
            quocgiaId: null,
            diaChi: "",
            idSo: "",
            idNgayCap: null,
            idNoiCap: null,
            soDienThoai: "",
        },
        thanhPho: null,
        quanHuyen: null,
        phuongXa: null,
        nguoiLamThuTuc: {
            idSo: "",
            idNgayCap: null,
            idNoiCap: null,
            soDienThoai: "",
        },
        giayToLienQuan: {
            maHoSoKhaiLptb: "",
            coQuanCapLptb: null,
            soSeriPhieuKtclxx: "",
            coQuanCapKtclxx: null,
        },
        oto: {
            soMay: "",
            soKhung: "",
            maLoaiXeId: null,
            nhanhieuLoaixeId: null,
            soLoai: "",
        },
        otoDangKy: {
            ngayDangky: new Date(),
            // khuKtdbId: null,
            dauBienTheoTinh: null,
            dauBienQuocGia: null,
            seriChu: null,
            mauBien: null,
            laKhuKtdb: false,
        },
    };
    const resetValue = {
        otoChuSoHuu: {
            ten: "",
            namSinh: null,
            quocgiaId: quocGiaList[0],
            diaChi: "",
            idSo: "",
            idNgayCap: null,
            idNoiCap: null,
            soDienThoai: "",
        },
        thanhPho: null,
        quanHuyen: null,
        phuongXa: null,
        nguoiLamThuTuc: {
            idSo: "",
            idNgayCap: null,
            idNoiCap: null,
            soDienThoai: "",
        },
        giayToLienQuan: {
            maHoSoKhaiLptb: "",
            coQuanCapLptb: coQuanCapLptbList[0],
            soSeriPhieuKtclxx: "",
            coQuanCapKtclxx: coQuanCapKtclxxList[0],
        },
        oto: {
            soMay: "",
            soKhung: "",
            maLoaiXeId: null,
            nhanhieuLoaixeId: null,
            soLoai: "",
        },
        otoDangKy: {
            ngayDangky: new Date(),
            // khuKtdbId: null,
            dauBienTheoTinh: null,
            dauBienQuocGia: bienQuocGiaList[0],
            seriChu: null,
            mauBien: null,
            laKhuKtdb: false,
        },
    };

    const {
        handleSubmit,
        control,
        watch,
        setValue,
        unregister,
        clearErrors,
        reset,
        setError,
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

    const quocGiaWatcher = watch("otoChuSoHuu.quocgiaId");
    const thanhPhoWatcher = watch("thanhPho");
    const quanHuyenWatcher = watch("quanHuyen");
    const phuongXaWatcher = watch("phuongXa");

    const loaiXeWatcher = watch("oto.maLoaiXeId");
    const nhanHieuWatcher = watch("oto.nhanhieuLoaixeId");
    const khuKinhTeWatcher = watch("otoDangKy.khuKtdbId");
    const seriChuWatcher = watch("otoDangKy.seriChu");
    const laKhuKtdbWatcher = watch("otoDangKy.laKhuKtdb");

    useEffect(() => {
        if (laKhuKtdbWatcher === false) {
            unregister("otoDangKy.khuKtdbId");
        }
    }, [laKhuKtdbWatcher]);

    useEffect(() => {
        if (quocGiaWatcher) {
            let id;
            if (quocGiaWatcher.label === "Việt Nam") {
                id = 1;
                if (khuKinhTeWatcher) {
                    getSeriChu(id, `khuKtDbId=${khuKinhTeWatcher.value}`);
                } else if (loaiXeWatcher) {
                    getSeriChu(id, `maLoai=${loaiXeWatcher.value}`);
                }
            } else {
                id = 2;
                getSeriChu(id, `maLoai=${loaiXeWatcher?.value}`);
            }
        }
    }, [quocGiaWatcher, loaiXeWatcher, khuKinhTeWatcher]);

    useEffect(() => {
        if (quocGiaList.length) {
            setValue("otoChuSoHuu.quocgiaId", quocGiaList[0]);
        }
    }, [quocGiaList]);

    useEffect(() => {
        if (bienQuocGiaList.length) {
            setValue("otoDangKy.dauBienQuocGia", bienQuocGiaList[0]);
        }
    }, [bienQuocGiaList]);

    useEffect(() => {
        if (bienTheoTinhList.length) {
            setValue("otoDangKy.dauBienTheoTinh", bienTheoTinhList[0]);
            clearErrors("otoDangKy.dauBienTheoTinh");
        }
    }, [bienTheoTinhList]);

    useEffect(() => {
        if (coQuanCapLptbList.length) {
            setValue("giayToLienQuan.coQuanCapLptb", coQuanCapLptbList[0]);
        }
    }, [coQuanCapLptbList]);

    useEffect(() => {
        if (coQuanCapKtclxxList.length) {
            setValue("giayToLienQuan.coQuanCapKtclxx", coQuanCapKtclxxList[0]);
        }
    }, [coQuanCapKtclxxList]);

    useEffect(() => {
        if (khuKinhTeWatcher?.label === "Lao Bảo") {
            setValue("otoDangKy.seriChu", seriChuList[0]);
            clearErrors("otoDangKy.seriChu");
        } else {
            setValue("otoDangKy.mauBien", null);
            setValue("otoDangKy.seriChu", null);
        }
    }, [khuKinhTeWatcher, seriChuList]);

    useEffect(() => {
        if (laKhuKtdbWatcher) {
            setValue("otoDangKy.khuKtdbId", khuKinhTeList[0]);
        } else {
            setValue("otoDangKy.seriChu", null);
            // setValue("otoDangKy.khuKtdbId", null);
            unregister("otoDangKy.khuKtdbId");
            clearErrors("otoDangKy.khuKtdbId");
        }
    }, [laKhuKtdbWatcher]);

    useEffect(() => {
        if (quocGiaWatcher) {
            getTinhThanh(quocGiaWatcher.value);
            getBienQuocGia(quocGiaWatcher.value);
        }
        // setValue("otoDangKy.khuKtdbId", null);
        unregister("otoDangKy.khuKtdbId");
        setValue("thanhPho", null);
        setValue("otoDangKy.dauBienQuocGia", null);
    }, [quocGiaWatcher]);

    useEffect(() => {
        if (thanhPhoWatcher) {
            getQuanHuyen(thanhPhoWatcher.value);
            getBienTheoTinh(thanhPhoWatcher.code);
        }
        setValue("quanHuyen", null);
        setValue("otoDangKy.dauBienTheoTinh", null);
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
                "otoChuSoHuu.diaChi",
                phuongXaWatcher.label +
                    ", " +
                    quanHuyenWatcher.label +
                    ", " +
                    thanhPhoWatcher.label +
                    ", " +
                    quocGiaWatcher.label
            );
        } else {
            setValue("otoChuSoHuu.diaChi", "");
        }
    }, [phuongXaWatcher]);

    useEffect(() => {
        if (loaiXeWatcher?.type.toLowerCase().includes("rơ moóc")) {
            setdDisableInput(true);
            clearErrors("oto.soMay");
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
            setValue("otoDangKy.mauBien", mauBienList[0]);
            clearErrors("otoDangKy.mauBien");
        } else {
            if (loaiXeWatcher && seriChuWatcher) {
                setError("otoDangKy.mauBien", {
                    type: "manual",
                    message: "Seri, màu biển không phù hợp với loại xe",
                });
            }
        }
    }, [mauBienList, loaiXeWatcher, seriChuWatcher]);

    const handleResetValue = () => {
        reset(resetValue);
        setAllInputDisabled(false);
        setValue("laKhuKtdb", false);
    };

    useEffect(() => {
        setDataConfirm({
            quocgiaId: quocGiaWatcher?.label,
            maLoaiXeId: loaiXeWatcher?.label,
            nhanhieuLoaixeId: nhanHieuWatcher?.label,
        });
    }, [quocGiaWatcher, loaiXeWatcher, nhanHieuWatcher]);

    // const mergeData = (data) => {
    //     merge(data, {
    //         canBo: {
    //             id: 7571,
    //         },
    //         otoChuSoHuu: {
    //             loaiNoiCap: data.otoChuSoHuu.idNoiCap.loaiNoiCap,
    //             diadanhHanhchinhId: data.phuongXa.value,
    //         },
    //         nguoiLamThuTuc: {
    //             loaiNoiCap: data.nguoiLamThuTuc.idNoiCap.loaiNoiCap,
    //         },
    //     });
    // };

    const onSubmitConfirm = (data) => {
        _.merge(data, {
            canBo: {
                id: 7571,
            },
            otoChuSoHuu: {
                loaiNoiCap: data.otoChuSoHuu.idNoiCap.loaiNoiCap,
                diadanhHanhchinhId: data.phuongXa.value,
            },
            nguoiLamThuTuc: {
                loaiNoiCap: data.nguoiLamThuTuc.idNoiCap.loaiNoiCap,
            },
        });
        transformValues(data);
        const { thanhPho, quanHuyen, phuongXa, ...submitData } = data;
        if (_.isEmpty(errors)) {
            handleConfirmOpen();
        }
        submitConfirm(submitData);
        setDataSend(submitData);
    };

    const handleConfirmOpen = () => {
        setOpenConfirm(true);
    };
    const handleConfirmClose = () => {
        setOpenConfirm(false);
    };

    const handleClosePlate = () => {
        setOpenPlate(false);
    };

    const handleOpenPlate = () => {
        setOpenPlate(true);
    };

    const handleOpenPaper = () => {
        setOpenPaper(true);
    };

    const handleClosePaper = () => {
        setOpenPaper(false);
    };

    // console.log('errors', errors);

    return (
        <div className={classes.root}>
            <Grid container spacing={1} justifyContent="flex-end">
                <Grid item>
                    <Button className={classes.button}>Tra cứu dữ liệu</Button>
                </Grid>
            </Grid>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmitConfirm)}>
                    <Grid container spacing={3}>
                        <ThongTinChuSoHuu
                            control={control}
                            quocGiaWatcher={quocGiaWatcher}
                            thanhPhoWatcher={thanhPhoWatcher}
                            quanHuyenWatcher={quanHuyenWatcher}
                            allInputDisabled={allInputDisabled}
                        />

                        <Grid container>
                            <ThongTinXe
                                control={control}
                                disableInput={disableInput}
                                loaiXeWatcher={loaiXeWatcher}
                                allInputDisabled={allInputDisabled}
                            />
                            <ThongTinBienSo
                                control={control}
                                quocGiaWatcher={quocGiaWatcher}
                                laKhuKtdbWatcher={laKhuKtdbWatcher}
                                allInputDisabled={allInputDisabled}
                            />
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
                                        disabled={allInputDisabled}
                                    >
                                        Cấp biển
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        type="reset"
                                        variant="outlined"
                                        onClick={handleResetValue}
                                    >
                                        Làm mới
                                    </Button>
                                </Grid>
                                <XacNhanDkld
                                    openConfirm={openConfirm}
                                    dataConfirm={dataConfirm}
                                    dataSend={dataSend}
                                    onClose={handleConfirmClose}
                                    onOpenPlate={handleOpenPlate}
                                />
                                <ThongBaoBien
                                    openPlate={openPlate}
                                    onClose={handleClosePlate}
                                    onOpenPaper={handleOpenPaper}
                                    openPaper={openPaper}
                                    onCloseConfirm={handleConfirmClose}
                                    onClosePaper={handleClosePaper}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </FormProvider>
        </div>
    );
};

export default FormDangKyLanDau;

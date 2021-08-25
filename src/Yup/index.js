import * as yup from "yup";
const phoneNumber = /^[0-9]*$/;

export const yupValidate = yup.object({
    otoChuSoHuu: yup.object({
        ten: yup.string().required("Trường bắt buộc"),
        namSinh: yup
            .date()
            .nullable()
            .required("Trường bắt buộc")
            .typeError("Không đúng định dạng")
            .max(new Date(Date.now() + 20000), "Không hợp lệ"),
        quocgiaId: yup.object().nullable().required("Trường bắt buộc"),
        diaChi: yup.string().required("Trường bắt buộc"),
        idSo: yup.string().required("Trường bắt buộc"),
        idNgayCap: yup
            .date()
            .nullable()
            .required("Trường bắt buộc")
            .typeError("Không đúng định dạng")
            .max(new Date(Date.now() + 20000), "Không hợp lệ"),
        idNoiCap: yup.object().nullable().required("Trường bắt buộc"),
        soDienThoai: yup
            .string()
            .matches(phoneNumber, "only number")
            .required("Trường bắt buộc"),
    }),

    thanhPho: yup
        .object()
        .nullable()
        .when("quocgiaId", {
            is: (value) => Boolean(value),
            then: yup.object().nullable().required("Trường bắt buộc"),
        }),
    quanHuyen: yup
        .object()
        .nullable()
        .when("thanhPho", {
            is: (value) => Boolean(value),
            then: yup.object().nullable().required("Trường bắt buộc"),
        }),
    phuongXa: yup
        .object()
        .nullable()
        .when("quanHuyen", {
            is: (value) => Boolean(value),
            then: yup.object().nullable().required("Trường bắt buộc"),
        }),

    nguoiLamThuTuc: yup.object({
        idSo: yup.string().required("Trường bắt buộc"),
        idNgayCap: yup
            .date()
            .nullable()
            .required("Trường bắt buộc")
            .typeError("Không đúng định dạng")
            .max(new Date(Date.now() + 20000), "Không hợp lệ"),
        idNoiCap: yup.object().nullable(),
        soDienThoai: yup.string().required("Trường bắt buộc"),
    }),

    giayToLienQuan: yup.object({
        maHoSoKhaiLptb: yup.string().required("Trường bắt buộc"),
        coQuanCapLptb: yup.object().nullable().required("Trường bắt buộc"),
        soSeriPhieuKtclxx: yup.string().required("Trường bắt buộc"),
        coQuanCapKtclxx: yup.object().nullable().required("Trường bắt buộc"),
    }),

    oto: yup.object({
        soMay: yup.string().when("maLoaiXeId", {
            is: (value) =>
                Boolean(!value?.type.toLowerCase().includes("rơ moóc")),
            then: yup.string().required("Trường bắt buộc"),
        }),
        soKhung: yup.string().required("Trường bắt buộc"),
        maLoaiXeId: yup.object().nullable().required("Trường bắt buộc"),
        nhanhieuLoaixeId: yup.object().nullable().required("Trường bắt buộc"),
        soLoai: yup.string().nullable().required("Trường bắt buộc"),
    }),

    otoDangKy: yup.object({
        // ngayDangky: yup
        //     .date()
        //     .nullable()
        //     .max(new Date(Date.now() + 2000), "Không hợp lệ")
        //     .typeError("Không đúng định dạng")
        //     .required("Trường bắt buộc"),
        dauBienTheoTinh: yup.object().typeError("Trường bắt buộc"),
        dauBienQuocGia: yup.object().typeError("Trường bắt buộc"),
        seriChu: yup.object().nullable().required("Trường bắt buộc"),
        mauBien: yup.object().nullable().required("Trường bắt buộc"),
        khuKtdbId: yup
            .object()
            .nullable()
            .when("laKhuKtdb", {
                is: (value) => Boolean(value),
                then: yup.object().nullable().required("Trường bắt buộc"),
            }),
    }),
});

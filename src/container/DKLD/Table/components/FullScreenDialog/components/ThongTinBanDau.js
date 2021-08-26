import { Grid } from "@material-ui/core";
import React from "react";
import Divider from "../../../../../../components/Divider";
import InputField from "../../../../../../components/InputField";

const ThongTinBanDau = ({ control }) => {
    return (
        <Grid item xs={3}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Divider>Thông tin ban đầu</Divider>
                </Grid>

                <Grid item xs={12}>
                    <InputField
                        control={control}
                        name="otoDangKy.dienGiaiTenCanBoDangKy"
                        label="Cán bộ đăng ký"
                        InputProps={{ readOnly: true }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        control={control}
                        name="otoDangKy.biensoDaydu"
                        label="Biển số"
                        InputProps={{ readOnly: true }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        control={control}
                        name="otoDangKy.biensoCu"
                        label="Biển số cũ"
                        InputProps={{ readOnly: true }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        control={control}
                        name="otoDangKy.dienGiaiMauBien"
                        label="Màu biển"
                        InputProps={{ readOnly: true }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        control={control}
                        name="otoChuSoHuu.ten"
                        label="Chủ sở hữu"
                        inputProps={{ maxLength: 50 }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        control={control}
                        name="otoChuSoHuu.dienGiaiQuocGia"
                        label="Quốc gia"
                        InputProps={{ readOnly: true }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        control={control}
                        name="otoChuSoHuu.diaChi"
                        label="Địa chỉ"
                        inputProps={{ maxLength: 203 }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        control={control}
                        name="otoChuSoHuu.diaDanh"
                        label="Địa danh"
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        control={control}
                        name="otoChuSoHuu.soDienThoai"
                        label="Điện thoại chủ xe"
                        inputProps={{ maxLength: 13 }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        control={control}
                        name="nguoiLamThuTuc.soDienThoai"
                        label="Điện thoại NLTT"
                        InputProps={{ readOnly: true }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        control={control}
                        name="oto.dienGiaiLoaiXe"
                        label="Loại xe"
                        InputProps={{ readOnly: true }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputField /////////////////////////////////////
                        control={control}
                        name="oto.nhanhieuLoaixeId"
                        label="Nhãn hiệu"
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        control={control}
                        name="oto.soLoai"
                        inputProps={{ maxLength: 18 }}
                        label="Số loại"
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        control={control}
                        name="oto.soMay"
                        label="Số máy 1"
                        InputProps={{ readOnly: true }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        control={control}
                        name="oto.soKhung"
                        label="Số khung"
                        InputProps={{ readOnly: true }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        control={control}
                        name="giayToLienQuan.maHoSoKhaiLptb"
                        label="Mã hồ sơ LPTB"
                        InputProps={{ readOnly: true }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        control={control}
                        name="giayToLienQuan.dienGiaiCoQuanCapLPTB"
                        label="Cơ quan cấp"
                        InputProps={{ readOnly: true }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        control={control}
                        name="giayToLienQuan.soSeriPhieuKtclxx"
                        label="Số Seri PKTCLXX"
                        InputProps={{ readOnly: true }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        control={control}
                        name="giayToLienQuan.dienGiaiCoQuanCapPKTCLXX"
                        label="Cơ quan cấp"
                        InputProps={{ readOnly: true }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        control={control}
                        name="otoDangKy.ngayDkLandau"
                        label="Ngày đăng ký lần đầu"
                        InputProps={{ readOnly: true }}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ThongTinBanDau;

import { Button, Grid, makeStyles } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import Divider from '../../component/Divider';
import InputDate from '../../component/InputDate';
import InputField from '../../component/InputField';
import InputAutocomplete from '../../component/InputAutocomplete';
import { useForm } from 'react-hook-form';
import InputCheckbox from '../../component/InputCheckbox';
import { DataContext } from '../../contexts/DataContext';
// import { yupValidate } from '../../Yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { yupValidate } from '../../Yup';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: '10px',
  },
  input: {
    width: '100%'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  button: {
    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    color: '#1F62B0',
    textTransform: 'none',
    letterSpacing: '0.02857em',
    fontWeight: '500',
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: 'rgba(31, 98, 176, 0.04)'
    }
  },
  checkbox: {
    height: '48px'
  }
}))

const FormDangKyLanDau = () => {
  // const [valueDiaChi, setValueDiaChi] = useState({ quocGia: '', tinhThanh: '', quanHuyen: '', phuongXa: '' })

  //loadContext
  const { quocGiaData, tinhThanhData, noiCapData, quanHuyenData, phuongXaData, getTinhThanh, getQuanHuyen, getPhuongXa, loaiXeData, nhanHieuData, khuKinhTeData, bienTheoTinhData, bienQuocGiaData, seriChuData, mauBienData } = useContext(DataContext)

  const { register, handleSubmit, control, formState: { errors } } = useForm({
    mode: 'onBlur', reValidateMode: 'onChange', resolver: yupResolver(yupValidate),
    defaultValues: {
      quocGia: { value: 0, ten: 'Việt Nam' }
    }
  })

  const classes = useStyles();

  const [checkbox, setCheckbox] = useState(false)

  const checkboxChange = () => {
    setCheckbox(!checkbox)
  }

  // const handleQuocGiaChange = (e, value) => {
  //   getTinhThanh(value?.id);
  //   setValueDiaChi({ ...valueDiaChi, 'quocGia': value?.ten })
  // }

  // const handleTinhThanhChange = (e, value) => {
  //   getQuanHuyen(value?.id);
  //   setValueDiaChi({ ...valueDiaChi, 'tinhThanh': value?.ten })
  // }

  // const handleQuanHuyenChange = (e, value) => {
  //   getPhuongXa(value?.id);
  //   setValueDiaChi({ ...valueDiaChi, 'quanHuyen': value?.ten })
  // }

  // const handlePhuongXaChange = (e, value) => {
  //   setValueDiaChi({ ...valueDiaChi, 'phuongXa': value?.ten })
  // }

  const onSubmit = (data) => {
    console.log(data);
  }

  console.log(errors)

  return (
    <div className={classes.root}>
      <Grid container spacing={1} justifyContent='flex-end'>
        <Grid item>
          <Button className={classes.button}>Tra cứu dữ liệu</Button>
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid container item spacing={3}>
            <Grid item xs={12}>
              <Divider>Thông tin chủ sở hữu</Divider>
            </Grid>
            <Grid item xs={9}>
              <InputField
                name='chuSoHuu'
                control={control}
                errors={errors}
                materialUiProps={{
                  inputProps: ({ maxLength: '50' }),
                  label: "Chủ Sở Hữu"
                }}
                onChange={(e, field) => field.onChange(e.target.value.toUpperCase())}
              />
            </Grid>
            <Grid item xs={3}>
              <InputDate
                name='namSinh'
                control={control}
                errors={errors}
                materialUiProps={{
                  label: 'Năm sinh',
                  views: ["year"],
                  disableFuture: "true",
                  format: 'yyyy'
                }}
                rules={{
                  required: "Trường bắt buộc",
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <InputAutocomplete
                name='quocGia'
                options={quocGiaData}
                label='Quốc gia'
                optionLabel={option => option.ten}
                control={control}
              />
            </Grid>
            <Grid item xs={3}>
              <InputAutocomplete
                name='thanhPho'
                options={tinhThanhData}
                label='Tỉnh/Thành phố'
                optionLabel={option => option.ten}
                control={control}
              />
            </Grid>
            <Grid item xs={3}>
              <InputAutocomplete
                name='quanHuyen'
                label='Quận/Huyện'
                options={quanHuyenData}
                optionLabel={option => option.ten}
                control={control}
              />
            </Grid>
            <Grid item xs={3}>
              <InputAutocomplete
                name='phuongXa'
                label='Phường/Xã'
                options={phuongXaData}
                optionLabel={option => option.ten}
                register={register}
                control={control}
              />
            </Grid>

            <Grid item xs={12}>
              <InputField
                name='diaChi'
                control={control}
                errors={errors}
                materialUiProps={{
                  label: "Địa Chỉ"
                }}
              />
            </Grid>

            <Grid item xs={3}>
              <InputField
                name='cccdChuXe'
                control={control}
                errors={errors}
                materialUiProps={{
                  label: 'Số CCCD/CMND/Hộ chiếu của chủ xe'
                }}
                onChange={(e, field) => field.onChange(e.target.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D'))}
              />
            </Grid>
            <Grid item xs={3}>
              <InputDate
                name='cccdChuXeCapNgay'
                control={control}
                errors={errors}
                materialUiProps={{
                  label: 'Cấp ngày',
                  format: 'dd/MM/yyyy',
                  disableFuture: "true",
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <InputAutocomplete
                options={noiCapData}
                optionLabel={option => option.ten}
                name='cccdChuXeNoiCap'
                label='Nơi cấp'
                register={register}
                control={control}
              />
            </Grid>
            <Grid item xs={3}>
              <InputField
                name='sdtChuXe'
                control={control}
                errors={errors}
                materialUiProps={{
                  label: 'Số điện thoại của chủ xe'
                }}
              />
            </Grid>

            <Grid item xs={3}>
              <InputField
                name='cccdNltt'
                control={control}
                errors={errors}
                materialUiProps={{
                  label: 'Số CCCD/CMND/Hộ chiếu của NLTT'
                }}
                onChange={(e, field) => field.onChange(e.target.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D'))}
              />
            </Grid>
            <Grid item xs={3}>
              <InputDate
                name='cccdNlttCapNgay'
                control={control}
                errors={errors}
                materialUiProps={{
                  label: 'Cấp ngày',
                  format: 'dd/MM/yyyy',
                  disableFuture: "true",
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <InputAutocomplete
                options={noiCapData}
                optionLabel={option => option.ten}
                name='cccdNlttNoiCap'
                label='Nơi cấp'
                register={register}
                required
                errors={errors}
                control={control}
              />
            </Grid>
            <Grid item xs={3}>
              <InputField
                name='sdtNltt'
                control={control}
                errors={errors}
                materialUiProps={{
                  label: 'Số điện thoại của NLTT'
                }}
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
                    name='khaiLPTB'
                    control={control}
                    errors={errors}
                    materialUiProps={{
                      label: 'Mã hồ sơ khai LPTB'
                    }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <InputAutocomplete
                    options={noiCapData}
                    optionLabel={option => option.ten}
                    name='coQuanCapLPTB'
                    label='Cơ quan cấp'
                    register={register}
                    control={control}
                  />
                </Grid>

                <Grid item xs={4}>
                  <InputField
                    name='seriKTCLXX'
                    control={control}
                    errors={errors}
                    materialUiProps={{
                      label: 'Số Seri phiếu KTCLXX'
                    }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <InputAutocomplete
                    options={noiCapData}
                    optionLabel={option => option.ten}
                    name='coQuanCapKTCLXX'
                    label='Cơ quan cấp'
                    register={register}
                    control={control}
                  />
                </Grid>

                <Grid item xs={4}>
                  <InputAutocomplete
                    options={loaiXeData}
                    optionLabel={option => option.tenLoai}
                    name='loaiXe'
                    label='Loại xe'
                    register={register}
                    control={control}
                  />
                </Grid>
                <Grid item xs={4}>
                  <InputAutocomplete
                    options={nhanHieuData}
                    optionLabel={option => option.ten}
                    name='nhanHieu'
                    label='Nhãn hiệu'
                    register={register}
                    control={control}
                  />
                </Grid>
                <Grid item xs={4}>
                  <InputField
                    name='soKhung'
                    control={control}
                    errors={errors}
                    materialUiProps={{
                      label: 'Số khung'
                    }}
                    onChange={(e, field) => field.onChange(e.target.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D'))}
                  />
                </Grid>

                <Grid item xs={4}>
                  <InputField
                    name='soMay1'
                    control={control}
                    errors={errors}
                    materialUiProps={{
                      label: 'Số máy 1'
                    }}
                    onChange={(e, field) => field.onChange(e.target.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D'))}
                  />
                </Grid>
                <Grid item xs={4}>
                  <InputField
                    name='soLoai'
                    control={control}
                    errors={errors}
                    materialUiProps={{
                      label: 'Số loại'
                    }}
                    onChange={(e, field) => field.onChange(e.target.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D'))}
                  />
                </Grid>
                <Grid item xs={4}>
                  <InputDate
                    name='ngayDangKy'
                    control={control}
                    errors={errors}
                    materialUiProps={{
                      label: 'Ngày đăng ký',
                      format: 'dd/MM/yyyy',
                      disableFuture: "true",
                    }}
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
                    name="kttmDacBiet"
                    label="Khu kinh tế thương mại đặc biệt"
                    color="primary"
                    handleCheckbox={checkboxChange}
                  />
                </Grid>
                {checkbox ? <Grid item xs={12}>
                  <InputAutocomplete
                    options={khuKinhTeData}
                    optionLabel={option => option.ten}
                    name='khuKinhTe'
                    label='Tên khu kinh tế'
                    register={register}
                    control={control}
                  />
                </Grid> : ''}
                <Grid item xs={12}>
                  <InputAutocomplete
                    options={bienTheoTinhData}
                    optionLabel={option => option.dauBienTheoTinh}
                    name='bienTheoTinh'
                    label='Đầu biển theo tỉnh'
                    register={register}
                    control={control}
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputAutocomplete
                    options={bienQuocGiaData}
                    optionLabel={option => option.dauBienQuocGia}
                    name='bienQuocGia'
                    label='Đầu biển quốc gia'
                    register={register}
                    control={control}
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputAutocomplete
                    options={seriChuData}
                    optionLabel={option => option.seriChu}
                    name='seriChu'
                    label='Seri chữ'
                    register={register}
                    control={control}
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputAutocomplete
                    options={mauBienData}
                    optionLabel={option => option.dienGiai}
                    name='mauBien'
                    label='Màu biển'
                    register={register}
                    control={control}
                  />
                </Grid>
              </Grid>
            </Grid>

          </Grid>

          <Grid container >
            <Grid container item justifyContent='center' spacing={3}>
              <Grid item>
                <Button variant="contained" color="primary" type='submit' >Cấp biển</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" >Làm mới</Button>
              </Grid>
            </Grid>
          </Grid>


        </Grid>
      </form>
    </div>
  )
}

export default FormDangKyLanDau
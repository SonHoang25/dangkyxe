import { Button, Grid, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import Divider from '../../component/Divider';
import InputDate from '../../component/InputDate';
import InputFiled from '../../component/InputField';
import { useForm } from 'react-hook-form';
import InputAutocomplete from '../../component/InputAutocomplete';
import InputCheckbox from '../../component/InputCheckbox';

let rendercount = 0

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
  const { register, handleSubmit, trigger, control } = useForm({
    criteriaMode: "all" // you will need to enable validate all criteria mode
  })
  const classes = useStyles();

  const [checkbox, setCheckbox] = useState(false)

  const checkboxChange = () => {
    setCheckbox(!checkbox)
  }
  const onSubmit = (data) => {
    console.log(data);
  }

  rendercount++

  console.log(rendercount)

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
              <InputFiled name='chuSoHuu' helper='' label='Chủ Sở Hữu' register={register} required />
            </Grid>
            <Grid item xs={3}>
              <InputDate name='namSinh' helper='' label='Năm sinh' views={["year"]} register={register} required control={control} />
            </Grid>

            <Grid item xs={3}>
              <InputAutocomplete name='quocGia' helper='' label='Quốc gia' register={register} required />
            </Grid>
            <Grid item xs={3}>
              <InputAutocomplete name='thanhPho' helper='' label='Tỉnh/Thành phố' register={register} required />
            </Grid>
            <Grid item xs={3}>
              <InputAutocomplete name='quanHuyen' helper='' label='Quận/Huyện' register={register} required />
            </Grid>
            <Grid item xs={3}>
              <InputAutocomplete name='phuongXa' helper='' label='Phường/Xã' register={register} required />
            </Grid>

            <Grid item xs={12}>
              <InputFiled name='diaChi' helper='' label='Địa Chỉ' register={register} required />
            </Grid>

            <Grid item xs={3}>
              <InputFiled name='cccdChuXe' helper='' label='Số CCCD/CMND/Hộ chiếu của chủ xe' register={register} required />
            </Grid>
            <Grid item xs={3}>
              <InputDate name='cccdChuXeCapNgay' helper='' label='Cấp ngày' format='dd/MM/yyyy' register={register} required control={control} />
            </Grid>
            <Grid item xs={3}>
              <InputAutocomplete name='cccdChuXeNoiCap' helper='' label='Nơi cấp' register={register} required />
            </Grid>
            <Grid item xs={3}>
              <InputFiled name='sdtChuXe' helper='' label='Số điện thoại của chủ xe' register={register} required />
            </Grid>

            <Grid item xs={3}>
              <InputFiled name='cccdNltt' helper='' label='Số CCCD/CMND/Hộ chiếu của NLTT' register={register} required />
            </Grid>
            <Grid item xs={3}>
              <InputDate name='cccdNlttCapNgay' helper='' label='Cấp ngày' format='dd/MM/yyyy' register={register} required control={control} />
            </Grid>
            <Grid item xs={3}>
              <InputAutocomplete name='cccdNlttNoiCap' helper='' label='Nơi cấp' register={register} />
            </Grid>
            <Grid item xs={3}>
              <InputFiled name='sdtNltt' helper='' label='Số điện thoại của NLTT' register={register} required />
            </Grid>
          </Grid>

          <Grid container>
            {/* Thong tin xe */}
            <Grid item xs={9}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Divider>Thông tin xe</Divider>
                </Grid>
                <Grid item xs={4}>
                  <InputFiled name='khaiLPTB' helper='' label="Mã hồ sơ khai LPTB" register={register} required />
                </Grid>
                <Grid item xs={8}>
                  <InputFiled name='coQuanCapLPTB' helper='' label="Cơ quan cấp" register={register} required />
                </Grid>

                <Grid item xs={4}>
                  <InputFiled name='seriKTCLXX' helper='' label="Số Seri phiếu KTCLXX" register={register} required />
                </Grid>
                <Grid item xs={8}>
                  <InputFiled name='coQuanCapKTCLXX' helper='' label="Cơ quan cấp" register={register} required />
                </Grid>

                <Grid item xs={4}>
                  <InputAutocomplete name='loaiXe' helper='' label='Loại xe' register={register} />
                </Grid>
                <Grid item xs={4}>
                  <InputAutocomplete name='nhanHieu' helper='' label='Nhãn hiệu' register={register} />
                </Grid>
                <Grid item xs={4}>
                  <InputFiled name='soKhung' helper='' label="Số khung" register={register} required />
                </Grid>

                <Grid item xs={4}>
                  <InputFiled name='soMay1' helper='' label="Số máy 1" register={register} required />
                </Grid>
                <Grid item xs={4}>
                  <InputFiled name='soLoai' helper='' label="Số loại" register={register} required />
                </Grid>
                <Grid item xs={4}>
                  <InputDate name='ngayDangKy' helper='' label='Ngày đăng ký' format='dd/MM/yyyy' register={register} required control={control} />
                </Grid>
              </Grid>
            </Grid>

            {/* Thong tin bien so */}
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
                  <InputAutocomplete name='khuKinhTe' helper='' label='Tên khu kinh tế ' register={register} required />
                </Grid> : ''}
                {/* {!checkbox && unregister("khuKinhTe")} */}
                <Grid item xs={12}>
                  <InputAutocomplete name='bienTheoTinh' helper='' label='Đầu biển theo tỉnh' register={register} required />
                </Grid>
                <Grid item xs={12}>
                  <InputAutocomplete name='bienQuocGia' helper='' label='Đầu biển quốc gia' register={register} required />
                </Grid>
                <Grid item xs={12}>
                  <InputAutocomplete name='seriChu' helper='' label='Seri chữ' register={register} required />
                </Grid>
                <Grid item xs={12}>
                  <InputAutocomplete name='mauBien' helper='' label='Màu biển' register={register} required />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container>

            <Grid container item justifyContent='center' spacing={3}>
              <Grid item>
                <Button variant="contained" color="primary" type='submit' onClick={() => trigger()} >Cấp biển</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined"  >Làm mới</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default FormDangKyLanDau